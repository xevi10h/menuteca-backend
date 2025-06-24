import { supabase } from './client';
import { hashPassword } from '@/utils/auth';

const seedData = {
	cuisines: [
		{
			id: '550e8400-e29b-41d4-a716-446655440001',
			name: {
				en_US: 'Mediterranean',
				es_ES: 'Mediterráneo',
				ca_ES: 'Mediterrani',
				fr_FR: 'Méditerranéen',
			},
			image:
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440002',
			name: {
				en_US: 'Japanese',
				es_ES: 'Japonés',
				ca_ES: 'Japonès',
				fr_FR: 'Japonais',
			},
			image:
				'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440003',
			name: {
				en_US: 'Italian',
				es_ES: 'Italiano',
				ca_ES: 'Italià',
				fr_FR: 'Italien',
			},
			image:
				'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440004',
			name: {
				en_US: 'Mexican',
				es_ES: 'Mexicano',
				ca_ES: 'Mexicà',
				fr_FR: 'Mexicain',
			},
			image:
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440005',
			name: {
				en_US: 'American',
				es_ES: 'Americano',
				ca_ES: 'Americà',
				fr_FR: 'Américain',
			},
			image:
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440006',
			name: {
				en_US: 'Chinese',
				es_ES: 'Chino',
				ca_ES: 'Xinès',
				fr_FR: 'Chinois',
			},
			image:
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440007',
			name: {
				en_US: 'Indian',
				es_ES: 'Indio',
				ca_ES: 'Indi',
				fr_FR: 'Indien',
			},
			image:
				'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440008',
			name: {
				en_US: 'Thai',
				es_ES: 'Tailandés',
				ca_ES: 'Tailandès',
				fr_FR: 'Thaïlandais',
			},
			image:
				'https://images.pexels.com/photos/12153467/pexels-photo-12153467.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440009',
			name: {
				en_US: 'Korean',
				es_ES: 'Coreano',
				ca_ES: 'Coreà',
				fr_FR: 'Coréen',
			},
			image:
				'https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg',
		},
		{
			id: '550e8400-e29b-41d4-a716-446655440010',
			name: {
				en_US: 'Haute Cuisine',
				es_ES: 'Alta Cocina',
				ca_ES: 'Alta Cuina',
				fr_FR: 'Haute Cuisine',
			},
			image:
				'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?fm=jpg&q=60&w=3000',
		},
	],

	addresses: [
		{
			id: '650e8400-e29b-41d4-a716-446655440001',
			street: {
				en_US: 'Rector Ubach Street',
				es_ES: 'Carrer Rector Ubach',
				ca_ES: 'Carrer Rector Ubach',
				fr_FR: 'Rue Rector Ubach',
			},
			number: '50',
			additional_information: '2º A',
			postal_code: '08006',
			city: {
				en_US: 'Barcelona',
				es_ES: 'Barcelona',
				ca_ES: 'Barcelona',
				fr_FR: 'Barcelone',
			},
			country: {
				en_US: 'Spain',
				es_ES: 'España',
				ca_ES: 'Espanya',
				fr_FR: 'Espagne',
			},
			coordinates: {
				latitude: 41.3951,
				longitude: 2.1834,
			},
			formatted_address:
				'Carrer Rector Ubach, 50, 2º A, 08006 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440002',
			street: {
				en_US: 'Peace Street',
				es_ES: 'Carrer de la Pau',
				ca_ES: 'Carrer de la Pau',
				fr_FR: 'Rue de la Paix',
			},
			number: '25',
			additional_information: 'Local 3',
			postal_code: '08001',
			city: {
				en_US: 'Barcelona',
				es_ES: 'Barcelona',
				ca_ES: 'Barcelona',
				fr_FR: 'Barcelone',
			},
			country: {
				en_US: 'Spain',
				es_ES: 'España',
				ca_ES: 'Espanya',
				fr_FR: 'Espagne',
			},
			coordinates: {
				latitude: 41.4051,
				longitude: 2.1934,
			},
			formatted_address:
				'Carrer de la Pau, 25, Local 3, 08001 Barcelona, España',
		},
	],

	users: [
		{
			id: '750e8400-e29b-41d4-a716-446655440001',
			email: 'demo@restaurant.com',
			username: 'demo_user',
			name: 'Demo User',
			photo: 'https://randomuser.me/api/portraits/men/10.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'DemoPassword123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440002',
			email: 'owner@restaurant.com',
			username: 'restaurant_owner',
			name: 'Restaurant Owner',
			photo: 'https://randomuser.me/api/portraits/women/5.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'OwnerPassword123!',
		},
	],
};

async function seedDatabase() {
	try {
		console.log('🌱 Starting database seeding...');

		// Clear existing data in reverse order (respecting foreign keys)
		console.log('🧹 Clearing existing data...');
		await supabase
			.from('reviews')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');
		await supabase
			.from('dishes')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');
		await supabase
			.from('menus')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');
		await supabase
			.from('restaurants')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');
		await supabase
			.from('users')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');
		await supabase
			.from('addresses')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');
		await supabase
			.from('cuisines')
			.delete()
			.neq('id', '00000000-0000-0000-0000-000000000000');

		// Seed cuisines
		console.log('🍽️ Seeding cuisines...');
		const { error: cuisinesError } = await supabase
			.from('cuisines')
			.insert(seedData.cuisines);

		if (cuisinesError) {
			console.error('Error seeding cuisines:', cuisinesError);
			throw cuisinesError;
		}

		// Seed addresses
		console.log('📍 Seeding addresses...');
		const { error: addressesError } = await supabase
			.from('addresses')
			.insert(seedData.addresses);

		if (addressesError) {
			console.error('Error seeding addresses:', addressesError);
			throw addressesError;
		}

		// Seed users (with hashed passwords)
		console.log('👥 Seeding users...');
		const usersWithHashedPasswords = await Promise.all(
			seedData.users.map(async (user) => {
				const { password, ...userData } = user;
				const password_hash = await hashPassword(password);
				return {
					...userData,
					password_hash,
				};
			}),
		);

		const { error: usersError } = await supabase
			.from('users')
			.insert(usersWithHashedPasswords);

		if (usersError) {
			console.error('Error seeding users:', usersError);
			throw usersError;
		}

		// Seed sample restaurant
		console.log('🏪 Seeding sample restaurant...');
		const sampleRestaurant = {
			id: '850e8400-e29b-41d4-a716-446655440001',
			name: 'Sant Francesc Restaurant',
			minimum_price: 15.0,
			cuisine_id: seedData.cuisines[0].id, // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
			profile_image:
				'https://visitbegur.cat/wp-content/uploads/2021/06/mooma-1024x813.jpg',
			images: [
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			],
			address_id: seedData.addresses[0].id,
			tags: ['airConditioning', 'vegetarian', 'familyFriendly'],
			phone: '+34 123 456 789',
			reservation_link: 'https://reservas.santfrancesc.com',
			owner_id: seedData.users[1].id,
			is_active: true,
		};

		const { error: restaurantError } = await supabase
			.from('restaurants')
			.insert(sampleRestaurant);

		if (restaurantError) {
			console.error('Error seeding restaurant:', restaurantError);
			throw restaurantError;
		}

		// Seed sample menu
		console.log('📋 Seeding sample menu...');
		const sampleMenu = {
			id: '950e8400-e29b-41d4-a716-446655440001',
			restaurant_id: sampleRestaurant.id,
			name: {
				en_US: 'Lunch Menu',
				es_ES: 'Menú del Mediodía',
				ca_ES: 'Menú del Migdia',
				fr_FR: 'Menu du Déjeuner',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '12:00',
			end_time: '16:00',
			price: 12.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		};

		const { error: menuError } = await supabase
			.from('menus')
			.insert(sampleMenu);

		if (menuError) {
			console.error('Error seeding menu:', menuError);
			throw menuError;
		}

		// Seed sample dishes
		console.log('🍝 Seeding sample dishes...');
		const sampleDishes = [
			{
				id: 'a50e8400-e29b-41d4-a716-446655440001',
				menu_id: sampleMenu.id,
				name: {
					en_US: 'Caesar Salad',
					es_ES: 'Ensalada César',
					ca_ES: 'Amanida Cèsar',
					fr_FR: 'Salade César',
				},
				description: {
					en_US:
						'Fresh romaine lettuce with croutons, lemon juice, olive oil, egg, worcestershire sauce, anchovies, garlic, dijon mustard, parmesan cheese and black pepper.',
					es_ES:
						'Lechuga romana y trozos de pan tostado con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, anchoas, ajo, mostaza de Dijón, queso parmesano y pimienta negra.',
					ca_ES:
						"Enciam romà i trossos de pa torrat amb suc de llimona, oli d'oliva, ou, salsa Worcestershire, anxoves, all, mostassa de Dijon, formatge parmesà i pebre negre.",
					fr_FR:
						"Laitue romaine et morceaux de pain grillé avec jus de citron, huile d'olive, œuf, sauce Worcestershire, anchois, ail, moutarde de Dijon, parmesan et poivre noir.",
				},
				extra_price: 0,
				category: 'appetizers',
				is_vegetarian: true,
				is_lactose_free: false,
				is_spicy: false,
				is_gluten_free: false,
				is_vegan: false,
				is_active: true,
			},
			{
				id: 'a50e8400-e29b-41d4-a716-446655440002',
				menu_id: sampleMenu.id,
				name: {
					en_US: 'Grilled Salmon',
					es_ES: 'Salmón a la Plancha',
					ca_ES: 'Salmó a la Planxa',
					fr_FR: 'Saumon Grillé',
				},
				description: {
					en_US:
						'Fresh grilled salmon with seasonal vegetables and lemon sauce.',
					es_ES:
						'Salmón fresco a la plancha con verduras de temporada y salsa de limón.',
					ca_ES:
						'Salmó fresc a la planxa amb verdures de temporada i salsa de llimona.',
					fr_FR:
						'Saumon frais grillé avec légumes de saison et sauce au citron.',
				},
				extra_price: 0,
				category: 'mainCourses',
				is_vegetarian: false,
				is_lactose_free: true,
				is_spicy: false,
				is_gluten_free: true,
				is_vegan: false,
				is_active: true,
			},
		];

		const { error: dishesError } = await supabase
			.from('dishes')
			.insert(sampleDishes);

		if (dishesError) {
			console.error('Error seeding dishes:', dishesError);
			throw dishesError;
		}

		// Seed sample review
		console.log('⭐ Seeding sample review...');
		const sampleReview = {
			id: 'b50e8400-e29b-41d4-a716-446655440001',
			user_id: seedData.users[0].id,
			restaurant_id: sampleRestaurant.id,
			rating: 4.5,
			comment: {
				en_US:
					'Excellent traditional food, very cozy atmosphere and very attentive staff. The paella was spectacular.',
				es_ES:
					'Excelente comida tradicional, el ambiente es muy acogedor y el personal muy atento. La paella estaba espectacular.',
				ca_ES:
					"Excel·lent menjar tradicional, l'ambient és molt acollidor i el personal molt atent. La paella estava espectacular.",
				fr_FR:
					"Excellente nourriture traditionnelle, l'ambiance est très accueillante et le personnel très attentif. La paella était spectaculaire.",
			},
			photos: [
				'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
				'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300',
			],
		};

		const { error: reviewError } = await supabase
			.from('reviews')
			.insert(sampleReview);

		if (reviewError) {
			console.error('Error seeding review:', reviewError);
			throw reviewError;
		}

		console.log('✅ Database seeding completed successfully!');
		console.log(`
📊 Seeded data summary:
- ${seedData.cuisines.length} cuisines
- ${seedData.addresses.length} addresses  
- ${seedData.users.length} users
- 1 restaurant
- 1 menu
- ${sampleDishes.length} dishes
- 1 review

🔐 Demo credentials:
- Email: demo@restaurant.com
- Password: DemoPassword123!

🏪 Restaurant owner:
- Email: owner@restaurant.com
- Password: OwnerPassword123!
    `);
	} catch (error) {
		console.error('❌ Error seeding database:', error);
		process.exit(1);
	}
}

// Run seeding if this file is executed directly
if (require.main === module) {
	seedDatabase()
		.then(() => process.exit(0))
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
}

export default seedDatabase;
