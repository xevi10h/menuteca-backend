import { supabase } from './client';

async function cleanDatabase() {
	try {
		console.log('🧹 Starting database cleanup...');

		// Clear existing data in reverse order (respecting foreign keys)
		const tables = [
			'reviews',
			'dishes',
			'menus',
			'restaurants',
			'users',
			'addresses',
			'cuisines',
		];

		for (const table of tables) {
			console.log(`🗑️ Cleaning ${table}...`);
			const { error } = await supabase
				.from(table)
				.delete()
				.neq('id', '00000000-0000-0000-0000-000000000000');

			if (error) {
				console.error(`Error cleaning ${table}:`, error);
				throw error;
			}
		}

		console.log('✅ Database cleanup completed successfully!');
	} catch (error) {
		console.error('❌ Error cleaning database:', error);
		process.exit(1);
	}
}

// Run cleanup if this file is executed directly
if (require.main === module) {
	cleanDatabase()
		.then(() => process.exit(0))
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
}

export default cleanDatabase;
