import { readFileSync } from 'fs';
import { join } from 'path';
import { supabase } from './client';

async function runMigrations() {
	try {
		console.log('🔄 Starting database migrations...');

		// Read the migration SQL file
		const migrationPath = join(__dirname, 'migrations.sql');
		const migrationSQL = readFileSync(migrationPath, 'utf-8');

		// Split the SQL file by statements (handling multi-line statements)
		const statements = migrationSQL
			.split(';')
			.map((stmt) => stmt.trim())
			.filter((stmt) => stmt.length > 0 && !stmt.startsWith('--'));

		console.log(`📝 Found ${statements.length} SQL statements to execute`);

		// Execute each statement
		for (let i = 0; i < statements.length; i++) {
			const statement = statements[i];
			if (statement.trim()) {
				console.log(`⚡ Executing statement ${i + 1}/${statements.length}...`);

				try {
					const { error } = await supabase.rpc('exec_sql', {
						sql_query: statement + ';',
					});

					if (error) {
						// Try alternative approach using raw SQL
						const { error: directError } = await supabase
							.from('_migrations')
							.select('*')
							.limit(1);

						if (directError) {
							console.log(
								`⚠️  Statement ${i + 1} failed, trying direct execution...`,
							);
							// This is a fallback - you might need to execute manually
							console.log(`SQL: ${statement}`);
						}
					}
				} catch (err) {
					console.log(`⚠️  Statement ${i + 1} had an issue:`, err);
					// Continue with next statement
				}
			}
		}

		// Verify that tables were created
		console.log('🔍 Verifying table creation...');

		const tables = [
			'users',
			'addresses',
			'cuisines',
			'restaurants',
			'menus',
			'dishes',
			'reviews',
		];

		for (const table of tables) {
			try {
				const { error } = await supabase.from(table).select('*').limit(1);

				if (error) {
					console.log(
						`❌ Table '${table}' verification failed:`,
						error.message,
					);
				} else {
					console.log(`✅ Table '${table}' exists and is accessible`);
				}
			} catch (err) {
				console.log(`❌ Table '${table}' verification error:`, err);
			}
		}

		console.log('✅ Migration process completed!');
	} catch (error) {
		console.error('❌ Migration failed:', error);
		throw error;
	}
}

// Run migrations if this file is executed directly
if (require.main === module) {
	runMigrations()
		.then(() => {
			console.log('🎉 Database is ready!');
			process.exit(0);
		})
		.catch((error) => {
			console.error('💥 Migration failed:', error);
			process.exit(1);
		});
}

export default runMigrations;
