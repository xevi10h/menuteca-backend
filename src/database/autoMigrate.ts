import { supabase } from './client';
import { readFileSync } from 'fs';
import { join } from 'path';

interface MigrationResult {
	success: boolean;
	message: string;
	error?: string;
}

class DatabaseMigrator {
	private async executeSQL(sql: string): Promise<MigrationResult> {
		try {
			const { data, error } = await supabase.rpc('exec', { sql });

			if (error) {
				return {
					success: false,
					message: 'RPC execution failed',
					error: error.message,
				};
			}

			return {
				success: true,
				message: 'SQL executed successfully',
			};
		} catch (err) {
			return {
				success: false,
				message: 'Execution failed',
				error: err instanceof Error ? err.message : String(err),
			};
		}
	}

	private async tableExists(tableName: string): Promise<boolean> {
		try {
			const { data, error } = await supabase
				.from(tableName)
				.select('*')
				.limit(1);

			return !error;
		} catch {
			return false;
		}
	}

	private async executeSingleTable(
		tableName: string,
		sql: string,
	): Promise<MigrationResult> {
		const exists = await this.tableExists(tableName);

		if (exists) {
			return {
				success: true,
				message: `Table ${tableName} already exists`,
			};
		}

		return await this.executeSQL(sql);
	}

	async migrate(): Promise<void> {
		console.log('🚀 Starting database migration...');

		const migrations = [
			{
				name: 'users',
				sql: `
          CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email VARCHAR(255) UNIQUE NOT NULL,
            username VARCHAR(100) UNIQUE NOT NULL,
            name VARCHAR(255) NOT NULL,
            photo TEXT,
            google_id VARCHAR(255) UNIQUE,
            password_hash TEXT,
            language VARCHAR(10) NOT NULL DEFAULT 'es_ES',
            has_password BOOLEAN NOT NULL DEFAULT false,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `,
			},
			{
				name: 'addresses',
				sql: `
          CREATE TABLE addresses (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            street JSONB NOT NULL,
            number VARCHAR(20) NOT NULL,
            additional_information TEXT,
            postal_code VARCHAR(20) NOT NULL,
            city JSONB NOT NULL,
            country JSONB NOT NULL,
            coordinates JSONB NOT NULL,
            formatted_address TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `,
			},
			{
				name: 'cuisines',
				sql: `
          CREATE TABLE cuisines (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name JSONB NOT NULL,
            image TEXT NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `,
			},
			{
				name: 'restaurants',
				sql: `
          CREATE TABLE restaurants (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR(255) NOT NULL,
            minimum_price DECIMAL(10,2) NOT NULL,
            cuisine_id UUID NOT NULL,
            rating DECIMAL(3,2),
            main_image TEXT NOT NULL,
            profile_image TEXT,
            images TEXT[] DEFAULT '{}',
            address_id UUID NOT NULL,
            tags TEXT[] DEFAULT '{}',
            phone VARCHAR(50),
            reservation_link TEXT,
            owner_id UUID NOT NULL,
            is_active BOOLEAN NOT NULL DEFAULT true,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `,
			},
			{
				name: 'menus',
				sql: `
          CREATE TABLE menus (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            restaurant_id UUID NOT NULL,
            name JSONB NOT NULL,
            days TEXT[] NOT NULL DEFAULT '{}',
            start_time TIME NOT NULL,
            end_time TIME NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            first_courses_to_share BOOLEAN NOT NULL DEFAULT false,
            second_courses_to_share BOOLEAN NOT NULL DEFAULT false,
            desserts_to_share BOOLEAN NOT NULL DEFAULT false,
            includes_bread BOOLEAN NOT NULL DEFAULT false,
            drinks JSONB NOT NULL DEFAULT '{"water": false, "wine": false, "soft_drinks": false, "beer": false}',
            includes_coffee_and_dessert VARCHAR(20) NOT NULL DEFAULT 'none',
            minimum_people INTEGER NOT NULL DEFAULT 1,
            has_minimum_people BOOLEAN NOT NULL DEFAULT false,
            is_active BOOLEAN NOT NULL DEFAULT true,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `,
			},
			{
				name: 'dishes',
				sql: `
          CREATE TABLE dishes (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            menu_id UUID NOT NULL,
            name JSONB NOT NULL,
            description JSONB NOT NULL,
            extra_price DECIMAL(10,2) NOT NULL DEFAULT 0,
            category VARCHAR(50) NOT NULL,
            is_vegetarian BOOLEAN NOT NULL DEFAULT false,
            is_lactose_free BOOLEAN NOT NULL DEFAULT false,
            is_spicy BOOLEAN NOT NULL DEFAULT false,
            is_gluten_free BOOLEAN NOT NULL DEFAULT false,
            is_vegan BOOLEAN NOT NULL DEFAULT false,
            is_active BOOLEAN NOT NULL DEFAULT true,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `,
			},
			{
				name: 'reviews',
				sql: `
          CREATE TABLE reviews (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL,
            restaurant_id UUID NOT NULL,
            rating DECIMAL(3,2) NOT NULL,
            comment JSONB NOT NULL,
            photos TEXT[] DEFAULT '{}',
            restaurant_response_message JSONB,
            restaurant_response_date TIMESTAMP WITH TIME ZONE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            UNIQUE(user_id, restaurant_id)
          );
        `,
			},
		];

		// Execute table creations
		for (const migration of migrations) {
			console.log(`📋 Creating table: ${migration.name}`);
			const result = await this.executeSingleTable(
				migration.name,
				migration.sql,
			);

			if (result.success) {
				console.log(`✅ ${migration.name}: ${result.message}`);
			} else {
				console.log(`❌ ${migration.name}: ${result.error}`);
			}
		}

		// Add foreign key constraints after all tables are created
		await this.addConstraints();

		// Verify setup
		await this.verifySetup();
	}

	private async addConstraints(): Promise<void> {
		console.log('\n🔗 Adding foreign key constraints...');

		const constraints = [
			'ALTER TABLE restaurants ADD CONSTRAINT fk_restaurants_cuisine FOREIGN KEY (cuisine_id) REFERENCES cuisines(id);',
			'ALTER TABLE restaurants ADD CONSTRAINT fk_restaurants_address FOREIGN KEY (address_id) REFERENCES addresses(id);',
			'ALTER TABLE restaurants ADD CONSTRAINT fk_restaurants_owner FOREIGN KEY (owner_id) REFERENCES users(id);',
			'ALTER TABLE menus ADD CONSTRAINT fk_menus_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);',
			'ALTER TABLE dishes ADD CONSTRAINT fk_dishes_menu FOREIGN KEY (menu_id) REFERENCES menus(id);',
			'ALTER TABLE reviews ADD CONSTRAINT fk_reviews_user FOREIGN KEY (user_id) REFERENCES users(id);',
			'ALTER TABLE reviews ADD CONSTRAINT fk_reviews_restaurant FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);',
		];

		for (const constraint of constraints) {
			const result = await this.executeSQL(constraint);
			if (!result.success) {
				console.log(`⚠️  Constraint might already exist: ${result.error}`);
			}
		}
	}

	private async verifySetup(): Promise<void> {
		console.log('\n🔍 Verifying database setup...');

		const tables = [
			'users',
			'addresses',
			'cuisines',
			'restaurants',
			'menus',
			'dishes',
			'reviews',
		];
		let allGood = true;

		for (const table of tables) {
			const exists = await this.tableExists(table);
			if (exists) {
				console.log(`✅ ${table}: OK`);
			} else {
				console.log(`❌ ${table}: Missing`);
				allGood = false;
			}
		}

		if (allGood) {
			console.log('\n🎉 Database setup completed successfully!');
			console.log('🌱 You can now run: npm run db:seed');
		} else {
			console.log('\n❌ Some tables are missing. Please check the logs above.');
		}
	}
}

async function main() {
	const migrator = new DatabaseMigrator();
	await migrator.migrate();
}

if (require.main === module) {
	main().catch(console.error);
}

export default main;
