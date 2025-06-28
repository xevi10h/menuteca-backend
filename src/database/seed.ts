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
		// Addresses for restaurants
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
		{
			id: '650e8400-e29b-41d4-a716-446655440003',
			street: {
				en_US: 'Diagonal Avenue',
				es_ES: 'Avinguda Diagonal',
				ca_ES: 'Avinguda Diagonal',
				fr_FR: 'Avenue Diagonal',
			},
			number: '123',
			additional_information: 'Baix B',
			postal_code: '08028',
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
				latitude: 41.3851,
				longitude: 2.1734,
			},
			formatted_address:
				'Avinguda Diagonal, 123, Baix B, 08028 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440004',
			street: {
				en_US: 'Provença Street',
				es_ES: 'Carrer de Provença',
				ca_ES: 'Carrer de Provença',
				fr_FR: 'Rue de Provença',
			},
			number: '287',
			additional_information: '',
			postal_code: '08037',
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
				latitude: 41.3956,
				longitude: 2.1619,
			},
			formatted_address: 'Carrer de Provença, 287, 08037 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440005',
			street: {
				en_US: 'Muntaner Street',
				es_ES: 'Carrer de Muntaner',
				ca_ES: 'Carrer de Muntaner',
				fr_FR: 'Rue de Muntaner',
			},
			number: '156',
			additional_information: 'Entresol 2',
			postal_code: '08036',
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
				latitude: 41.3889,
				longitude: 2.1515,
			},
			formatted_address:
				'Carrer de Muntaner, 156, Entresol 2, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440006',
			street: {
				en_US: 'Balmes Street',
				es_ES: 'Carrer de Balmes',
				ca_ES: 'Carrer de Balmes',
				fr_FR: 'Rue de Balmes',
			},
			number: '89',
			additional_information: 'Local 1',
			postal_code: '08008',
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
				latitude: 41.3926,
				longitude: 2.1589,
			},
			formatted_address:
				'Carrer de Balmes, 89, Local 1, 08008 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440007',
			street: {
				en_US: 'Consell de Cent Street',
				es_ES: 'Carrer del Consell de Cent',
				ca_ES: 'Carrer del Consell de Cent',
				fr_FR: 'Rue du Consell de Cent',
			},
			number: '345',
			additional_information: '',
			postal_code: '08007',
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
				latitude: 41.3901,
				longitude: 2.1645,
			},
			formatted_address:
				'Carrer del Consell de Cent, 345, 08007 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440008',
			street: {
				en_US: 'Girona Street',
				es_ES: 'Carrer de Girona',
				ca_ES: 'Carrer de Girona',
				fr_FR: 'Rue de Girona',
			},
			number: '78',
			additional_information: '1º 1ª',
			postal_code: '08009',
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
				latitude: 41.4001,
				longitude: 2.1701,
			},
			formatted_address: 'Carrer de Girona, 78, 1º 1ª, 08009 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440009',
			street: {
				en_US: 'Passeig de Gràcia',
				es_ES: 'Passeig de Gràcia',
				ca_ES: 'Passeig de Gràcia',
				fr_FR: 'Passeig de Gràcia',
			},
			number: '92',
			additional_information: 'Planta Baja',
			postal_code: '08008',
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
				latitude: 41.3956,
				longitude: 2.1619,
			},
			formatted_address:
				'Passeig de Gràcia, 92, Planta Baja, 08008 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440010',
			street: {
				en_US: 'Diputació Street',
				es_ES: 'Carrer de la Diputació',
				ca_ES: 'Carrer de la Diputació',
				fr_FR: 'Rue de la Diputació',
			},
			number: '234',
			additional_information: 'Principal',
			postal_code: '08007',
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
				latitude: 41.3889,
				longitude: 2.1634,
			},
			formatted_address:
				'Carrer de la Diputació, 234, Principal, 08007 Barcelona, España',
		},
		// User restaurant addresses
		{
			id: '650e8400-e29b-41d4-a716-446655440011',
			street: {
				en_US: 'Mayor Street',
				es_ES: 'Calle Mayor',
				ca_ES: 'Carrer Major',
				fr_FR: 'Rue Mayor',
			},
			number: '123',
			additional_information: 'Local 2',
			postal_code: '28001',
			city: {
				en_US: 'Madrid',
				es_ES: 'Madrid',
				ca_ES: 'Madrid',
				fr_FR: 'Madrid',
			},
			country: {
				en_US: 'Spain',
				es_ES: 'España',
				ca_ES: 'Espanya',
				fr_FR: 'Espagne',
			},
			coordinates: {
				latitude: 40.4168,
				longitude: -3.7038,
			},
			formatted_address: 'Calle Mayor, 123, Local 2, 28001 Madrid, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440012',
			street: {
				en_US: 'Peace Avenue',
				es_ES: 'Avenida de la Paz',
				ca_ES: 'Avinguda de la Pau',
				fr_FR: 'Avenue de la Paix',
			},
			number: '45',
			additional_information: '2º A',
			postal_code: '08002',
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
				latitude: 41.3851,
				longitude: 2.1734,
			},
			formatted_address: 'Avenida de la Paz, 45, 2º A, 08002 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440013',
			street: {
				en_US: 'Constitution Square',
				es_ES: 'Plaza de la Constitución',
				ca_ES: 'Plaça de la Constitució',
				fr_FR: 'Place de la Constitution',
			},
			number: '8',
			additional_information: '',
			postal_code: '41001',
			city: {
				en_US: 'Seville',
				es_ES: 'Sevilla',
				ca_ES: 'Sevilla',
				fr_FR: 'Séville',
			},
			country: {
				en_US: 'Spain',
				es_ES: 'España',
				ca_ES: 'Espanya',
				fr_FR: 'Espagne',
			},
			coordinates: {
				latitude: 37.3886,
				longitude: -5.9823,
			},
			formatted_address: 'Plaza de la Constitución, 8, 41001 Sevilla, España',
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
		// Additional users for reviews
		{
			id: '750e8400-e29b-41d4-a716-446655440003',
			email: 'maria.garcia@email.com',
			username: 'maria_garcia',
			name: 'María García',
			photo: 'https://randomuser.me/api/portraits/women/1.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440004',
			email: 'carlos.rodriguez@email.com',
			username: 'carlos_rodriguez',
			name: 'Carlos Rodríguez',
			photo: 'https://randomuser.me/api/portraits/men/2.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440005',
			email: 'ana.martinez@email.com',
			username: 'ana_martinez',
			name: 'Ana Martínez',
			photo: 'https://randomuser.me/api/portraits/women/3.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440006',
			email: 'david.lopez@email.com',
			username: 'david_lopez',
			name: 'David López',
			photo: 'https://randomuser.me/api/portraits/men/4.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440007',
			email: 'laura.fernandez@email.com',
			username: 'laura_fernandez',
			name: 'Laura Fernández',
			photo: 'https://randomuser.me/api/portraits/women/5.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
	],

	restaurants: [
		{
			id: '850e8400-e29b-41d4-a716-446655440001',
			name: 'Sant Francesc Restaurant',
			minimum_price: 15.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
			profile_image:
				'https://visitbegur.cat/wp-content/uploads/2021/06/mooma-1024x813.jpg',
			images: [
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440001',
			tags: ['airConditioning', 'vegetarian', 'familyFriendly'],
			phone: '+34 123 456 789',
			reservation_link: 'https://reservas.santfrancesc.com',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440002',
			name: 'Tika Tacos',
			minimum_price: 12.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440004', // Mexican
			main_image:
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
			profile_image:
				'https://visitbegur.cat/wp-content/uploads/2021/06/mooma-1024x813.jpg',
			images: [
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440002',
			tags: ['airConditioning', 'glutenFree', 'liveMusic'],
			phone: '+34 987 654 321',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440003',
			name: 'El gran sol',
			minimum_price: 10.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440006', // Chinese
			main_image:
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			profile_image:
				'https://visitbegur.cat/wp-content/uploads/2021/06/mooma-1024x813.jpg',
			images: [
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440003',
			tags: ['airConditioning', 'reservations', 'petFriendly'],
			reservation_link: 'https://elgransol.opentable.com',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440004',
			name: 'Sakura Tokyo',
			minimum_price: 18.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440002', // Japanese
			main_image:
				'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
			profile_image:
				'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
			images: [
				'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
				'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
				'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440004',
			tags: ['reservations', 'romantic', 'businessFriendly', 'airConditioning'],
			phone: '+34 933 456 789',
			reservation_link: 'https://sakura-tokyo.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440005',
			name: 'La Nonna Italiana',
			minimum_price: 14.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440003', // Italian
			main_image:
				'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
			images: [
				'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
				'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
				'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440005',
			tags: ['familyFriendly', 'vegetarian', 'outdoorSeating', 'wifi'],
			phone: '+34 934 567 890',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440006',
			name: 'Mumbai Spice',
			minimum_price: 13.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440007', // Indian
			main_image:
				'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
			profile_image:
				'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
			images: [
				'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440006',
			tags: ['spicy', 'vegetarian', 'vegan', 'halal', 'glutenFree'],
			phone: '+34 935 678 901',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440007',
			name: 'Bangkok Street',
			minimum_price: 11.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440008', // Thai
			main_image:
				'https://images.pexels.com/photos/12153467/pexels-photo-12153467.jpeg',
			profile_image:
				'https://images.pexels.com/photos/12153467/pexels-photo-12153467.jpeg',
			images: [
				'https://images.pexels.com/photos/12153467/pexels-photo-12153467.jpeg',
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440007',
			tags: ['spicy', 'vegetarian', 'vegan', 'glutenFree', 'wifi'],
			phone: '+34 936 789 012',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440008',
			name: 'Seoul Kitchen',
			minimum_price: 16.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440009', // Korean
			main_image:
				'https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg',
			profile_image:
				'https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg',
			images: [
				'https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg',
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440008',
			tags: ['spicy', 'reservations', 'businessFriendly', 'airConditioning'],
			phone: '+34 937 890 123',
			reservation_link: 'https://seoul-kitchen.com/booking',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440009',
			name: 'Brooklyn Diner',
			minimum_price: 17.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440005', // American
			main_image:
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
			images: [
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440009',
			tags: [
				'familyFriendly',
				'outdoorSeating',
				'liveMusic',
				'wifi',
				'petFriendly',
			],
			phone: '+34 938 901 234',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440010',
			name: 'Le Petit Bistrot',
			minimum_price: 25.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440010', // Haute cuisine
			main_image:
				'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?fm=jpg&q=60&w=3000',
			profile_image:
				'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?fm=jpg&q=60&w=3000',
			images: [
				'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?fm=jpg&q=60&w=3000',
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440010',
			tags: [
				'romantic',
				'businessFriendly',
				'reservations',
				'airConditioning',
				'wifi',
			],
			phone: '+34 939 012 345',
			reservation_link: 'https://lepetitbistrot.com/reservations',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		// User restaurants
		{
			id: '850e8400-e29b-41d4-a716-446655440011',
			name: 'La Taberna del Abuelo',
			minimum_price: 12.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
			profile_image:
				'https://visitbegur.cat/wp-content/uploads/2021/06/mooma-1024x813.jpg',
			images: [
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440011',
			tags: ['familyFriendly', 'vegetarian', 'outdoorSeating', 'wifi'],
			phone: '+34 911 234 567',
			reservation_link: 'https://reservas.latabernaddelabuelo.com',
			owner_id: '750e8400-e29b-41d4-a716-446655440001',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440012',
			name: 'Bistro Mediterráneo',
			minimum_price: 18.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
			profile_image:
				'https://visitbegur.cat/wp-content/uploads/2021/06/mooma-1024x813.jpg',
			images: [
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440012',
			tags: ['romantic', 'businessFriendly', 'reservations', 'airConditioning'],
			phone: '+34 933 456 789',
			reservation_link: 'https://bistromediterraneo.opentable.com',
			owner_id: '750e8400-e29b-41d4-a716-446655440001',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440013',
			name: 'Café Central',
			minimum_price: 8.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440005', // American
			main_image:
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
			images: [
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440013',
			tags: ['wifi', 'outdoorSeating', 'familyFriendly'],
			phone: '+34 954 123 456',
			owner_id: '750e8400-e29b-41d4-a716-446655440001',
			is_active: false,
		},
	],

	menus: [
		// Sant Francesc Restaurant menus
		{
			id: '950e8400-e29b-41d4-a716-446655440001',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
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
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440002',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			name: {
				en_US: 'Dinner Menu',
				es_ES: 'Menú Cena',
				ca_ES: 'Menú Sopar',
				fr_FR: 'Menu Dîner',
			},
			days: [
				'monday',
				'tuesday',
				'wednesday',
				'thursday',
				'friday',
				'saturday',
			],
			start_time: '19:00',
			end_time: '23:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		// Tika Tacos menus
		{
			id: '950e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			name: {
				en_US: 'Taco Tuesday Menu',
				es_ES: 'Menú Taco Tuesday',
				ca_ES: 'Menú Taco Tuesday',
				fr_FR: 'Menu Taco Tuesday',
			},
			days: ['tuesday'],
			start_time: '12:00',
			end_time: '23:00',
			price: 9.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: false,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		// Mumbai Spice menu
		{
			id: '950e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			name: {
				en_US: 'Thali Menu',
				es_ES: 'Menú Thali',
				ca_ES: 'Menú Thali',
				fr_FR: 'Menu Thali',
			},
			days: [
				'monday',
				'tuesday',
				'wednesday',
				'thursday',
				'friday',
				'saturday',
				'sunday',
			],
			start_time: '12:00',
			end_time: '22:00',
			price: 11.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		// User restaurant menu
		{
			id: '950e8400-e29b-41d4-a716-446655440005',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			name: {
				en_US: 'Daily Menu',
				es_ES: 'Menú del día',
				ca_ES: 'Menú del dia',
				fr_FR: 'Menu du jour',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
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
		},
	],

	dishes: [
		// Sant Francesc dishes for lunch menu
		{
			id: 'a50e8400-e29b-41d4-a716-446655440001',
			menu_id: '950e8400-e29b-41d4-a716-446655440001',
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
			menu_id: '950e8400-e29b-41d4-a716-446655440001',
			name: {
				en_US: 'Grilled Salmon',
				es_ES: 'Salmón a la Plancha',
				ca_ES: 'Salmó a la Planxa',
				fr_FR: 'Saumon Grillé',
			},
			description: {
				en_US: 'Fresh grilled salmon with seasonal vegetables and lemon sauce.',
				es_ES:
					'Salmón fresco a la plancha con verduras de temporada y salsa de limón.',
				ca_ES:
					'Salmó fresc a la planxa amb verdures de temporada i salsa de llimona.',
				fr_FR: 'Saumon frais grillé avec légumes de saison et sauce au citron.',
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
		{
			id: 'a50e8400-e29b-41d4-a716-446655440003',
			menu_id: '950e8400-e29b-41d4-a716-446655440001',
			name: {
				en_US: 'Paella Valenciana',
				es_ES: 'Paella Valenciana',
				ca_ES: 'Paella Valenciana',
				fr_FR: 'Paella Valencienne',
			},
			description: {
				en_US:
					'Traditional Valencian paella with chicken, rabbit, green beans, garrofón, tomato, and saffron.',
				es_ES:
					'Paella valenciana tradicional con pollo, conejo, judía verde, garrofón, tomate y azafrán.',
				ca_ES:
					'Paella valenciana tradicional amb pollastre, conill, mongeta verda, garrofó, tomàquet i safrà.',
				fr_FR:
					'Paella valencienne traditionnelle avec poulet, lapin, haricots verts, garrofón, tomate et safran.',
			},
			extra_price: 3.0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440004',
			menu_id: '950e8400-e29b-41d4-a716-446655440001',
			name: {
				en_US: 'Crema Catalana',
				es_ES: 'Crema Catalana',
				ca_ES: 'Crema Catalana',
				fr_FR: 'Crème Catalane',
			},
			description: {
				en_US: 'Traditional Catalan dessert with burnt cream.',
				es_ES: 'Postre tradicional catalán con crema quemada.',
				ca_ES: 'Postres tradicional català amb crema cremada.',
				fr_FR: 'Dessert traditionnel catalan avec crème brûlée.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		// Tika Tacos dishes
		{
			id: 'a50e8400-e29b-41d4-a716-446655440005',
			menu_id: '950e8400-e29b-41d4-a716-446655440003',
			name: {
				en_US: 'Guacamole with Nachos',
				es_ES: 'Guacamole con nachos',
				ca_ES: 'Guacamole amb nacos',
				fr_FR: 'Guacamole avec nachos',
			},
			description: {
				en_US:
					'Fresh guacamole with ripe avocados, lime, cilantro and crispy nachos.',
				es_ES:
					'Guacamole fresco con aguacates maduros, lima, cilantro y nachos crujientes.',
				ca_ES:
					'Guacamole fresc amb alvocats madurs, llima, coriandre i nacos cruixents.',
				fr_FR:
					'Guacamole frais avec avocats mûrs, citron vert, coriandre et nachos croustillants.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440006',
			menu_id: '950e8400-e29b-41d4-a716-446655440003',
			name: {
				en_US: 'Chicken Tacos',
				es_ES: 'Tacos de pollo',
				ca_ES: 'Tacos de pollastre',
				fr_FR: 'Tacos au poulet',
			},
			description: {
				en_US:
					'Three marinated chicken tacos with pico de gallo and sour cream.',
				es_ES: 'Tres tacos de pollo marinado con pico de gallo y crema agria.',
				ca_ES:
					'Tres tacos de pollastre marinat amb pico de gallo i crema àcida.',
				fr_FR: 'Trois tacos de poulet mariné avec pico de gallo et crème sure.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: true,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		// Mumbai Spice dishes
		{
			id: 'a50e8400-e29b-41d4-a716-446655440007',
			menu_id: '950e8400-e29b-41d4-a716-446655440004',
			name: {
				en_US: 'Vegetable Samosas',
				es_ES: 'Samosas vegetales',
				ca_ES: 'Samoses vegetals',
				fr_FR: 'Samosas aux légumes',
			},
			description: {
				en_US: 'Crispy pastries filled with spiced vegetables.',
				es_ES: 'Empanadillas crujientes rellenas de verduras especiadas.',
				ca_ES: 'Empanadetes cruixents farcides de verdures especiades.',
				fr_FR: 'Pâtisseries croustillantes farcies de légumes épicés.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: false,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440008',
			menu_id: '950e8400-e29b-41d4-a716-446655440004',
			name: {
				en_US: 'Chicken Tikka Masala',
				es_ES: 'Pollo tikka masala',
				ca_ES: 'Pollastre tikka masala',
				fr_FR: 'Poulet tikka masala',
			},
			description: {
				en_US:
					'Chicken marinated in yogurt and spices with creamy tomato sauce.',
				es_ES:
					'Pollo marinado en yogur y especias con salsa cremosa de tomate.',
				ca_ES:
					'Pollastre marinat en iogurt i espècies amb salsa cremosa de tomàquet.',
				fr_FR:
					'Poulet mariné dans du yaourt et des épices avec sauce crémeuse à la tomate.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		// User restaurant dishes
		{
			id: 'a50e8400-e29b-41d4-a716-446655440009',
			menu_id: '950e8400-e29b-41d4-a716-446655440005',
			name: {
				en_US: 'Andalusian Gazpacho',
				es_ES: 'Gazpacho andaluz',
				ca_ES: 'Gaspatxo andalús',
				fr_FR: 'Gaspacho andalou',
			},
			description: {
				en_US: 'Traditional gazpacho with fresh vegetables',
				es_ES: 'Gazpacho tradicional con verduras frescas',
				ca_ES: 'Gaspatxo tradicional amb verdures fresques',
				fr_FR: 'Gaspacho traditionnel aux légumes frais',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440010',
			menu_id: '950e8400-e29b-41d4-a716-446655440005',
			name: {
				en_US: 'Mixed Paella',
				es_ES: 'Paella mixta',
				ca_ES: 'Paella mixta',
				fr_FR: 'Paella mixte',
			},
			description: {
				en_US: 'Paella with chicken, seafood and vegetables',
				es_ES: 'Paella con pollo, mariscos y verduras',
				ca_ES: 'Paella amb pollastre, marisc i verdures',
				fr_FR: 'Paella avec poulet, fruits de mer et légumes',
			},
			extra_price: 2,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
	],

	reviews: [
		// Reviews for Sant Francesc Restaurant
		{
			id: 'b50e8400-e29b-41d4-a716-446655440001',
			user_id: '750e8400-e29b-41d4-a716-446655440001',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
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
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440002',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 5,
			comment: {
				en_US:
					'Incredible experience! The food was delicious and the service was exceptional. Will definitely be back soon.',
				es_ES:
					'¡Increíble experiencia! La comida estaba deliciosa y el servicio fue excepcional. Definitivamente volveré pronto.',
				ca_ES:
					'Increïble experiència! El menjar estava deliciós i el servei va ser excepcional. Definitivament tornaré aviat.',
				fr_FR:
					'Expérience incroyable! La nourriture était délicieuse et le service exceptionnel. Je reviendrai certainement bientôt.',
			},
			photos: [
				'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
				'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Thank you so much for your comment María! We are very happy to know that you enjoyed your experience with us.',
				es_ES:
					'¡Muchas gracias por tu comentario María! Nos alegra mucho saber que disfrutaste de tu experiencia con nosotros.',
				ca_ES:
					'Moltes gràcies pel teu comentari María! Ens alegra molt saber que vas gaudir de la teva experiència amb nosaltres.',
				fr_FR:
					'Merci beaucoup pour votre commentaire María! Nous sommes très heureux de savoir que vous avez apprécié votre expérience avec nous.',
			},
			restaurant_response_date: '2024-12-11T10:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440003',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.0,
			comment: {
				en_US:
					'Very good restaurant, the food is very tasty although we had to wait a bit. The atmosphere is cozy.',
				es_ES:
					'Muy buen restaurante, la comida está muy rica aunque tuvimos que esperar un poco. El ambiente es acogedor.',
				ca_ES:
					"Molt bon restaurant, el menjar està molt bo encara que vam haver d'esperar una mica. L'ambient és acollidor.",
				fr_FR:
					"Très bon restaurant, la nourriture est très savoureuse bien que nous ayons dû attendre un peu. L'ambiance est chaleureuse.",
			},
			photos: [
				'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300',
			],
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440004',
			user_id: '750e8400-e29b-41d4-a716-446655440005',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.8,
			comment: {
				en_US:
					'Perfect anniversary dinner. The staff was very attentive and the decoration is beautiful. The desserts are spectacular.',
				es_ES:
					'Perfecta cena de aniversario. El personal fue muy atento y la decoración es preciosa. Los postres son espectaculares.',
				ca_ES:
					"Perfecte sopar d'aniversari. El personal va ser molt atent i la decoració és preciosa. Les postres són espectaculars.",
				fr_FR:
					"Dîner d'anniversaire parfait. Le personnel était très attentionné et la décoration est magnifique. Les desserts sont spectaculaires.",
			},
			photos: [],
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440005',
			user_id: '750e8400-e29b-41d4-a716-446655440006',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 2.5,
			comment: {
				en_US:
					'The food is okay but I expected more for the price. The service could improve a bit.',
				es_ES:
					'La comida está bien pero esperaba más por el precio. El servicio podría mejorar un poco.',
				ca_ES:
					'El menjar està bé però esperava més pel preu. El servei podria millorar una mica.',
				fr_FR:
					"La nourriture est correcte mais j'attendais plus pour le prix. Le service pourrait s'améliorer un peu.",
			},
			photos: [],
			restaurant_response_message: {
				en_US:
					'Thank you for your feedback David. We take note of your comments to continue improving our service.',
				es_ES:
					'Gracias por tu feedback David. Tomamos nota de tus comentarios para seguir mejorando nuestro servicio.',
				ca_ES:
					'Gràcies per la teva opinió David. Prenem nota dels teus comentaris per continuar millorant el nostre servei.',
				fr_FR:
					'Merci pour vos commentaires David. Nous prenons note de vos remarques pour continuer à améliorer notre service.',
			},
			restaurant_response_date: '2024-12-04T14:20:00Z',
		},
		// Review for Mumbai Spice
		{
			id: 'b50e8400-e29b-41d4-a716-446655440006',
			user_id: '750e8400-e29b-41d4-a716-446655440007',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 5,
			comment: {
				en_US:
					'The best curry in the city. The flavors are authentic and the spices perfectly balanced.',
				es_ES:
					'El mejor curry de la ciudad. Los sabores son auténticos y las especias perfectamente balanceadas.',
				ca_ES:
					'El millor curry de la ciutat. Els sabors són autèntics i les espècies perfectament equilibrades.',
				fr_FR:
					'Le meilleur curry de la ville. Les saveurs sont authentiques et les épices parfaitement équilibrées.',
			},
			photos: [],
			restaurant_response_message: {
				en_US:
					'Thank you for your review! We love knowing that you enjoyed our authentic dishes.',
				es_ES:
					'¡Gracias por tu reseña! Nos encanta saber que disfrutaste de nuestros platos auténticos.',
				ca_ES:
					'Gràcies per la teva ressenya! Ens encanta saber que vas gaudir dels nostres plats autèntics.',
				fr_FR:
					'Merci pour votre avis! Nous aimons savoir que vous avez apprécié nos plats authentiques.',
			},
			restaurant_response_date: '2024-05-16T09:15:00Z',
		},
		// User restaurant reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440007',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.5,
			comment: {
				en_US:
					'Excellent homemade food and very good price. The service is very friendly.',
				es_ES:
					'Excelente comida casera y muy buen precio. El servicio es muy amable.',
				ca_ES:
					'Excel·lent menjar casolà i molt bon preu. El servei és molt amable.',
				fr_FR:
					'Excellente cuisine maison et très bon prix. Le service est très aimable.',
			},
			photos: [
				'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Thank you very much Ana! We are glad to know that you enjoyed the experience.',
				es_ES:
					'¡Muchas gracias Ana! Nos alegra saber que disfrutaste de la experiencia.',
				ca_ES:
					"Moltes gràcies Ana! Ens alegra saber que vas gaudir de l'experiència.",
				fr_FR:
					"Merci beaucoup Ana! Nous sommes heureux de savoir que vous avez apprécié l'expérience.",
			},
			restaurant_response_date: '2024-06-11T11:00:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440008',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.0,
			comment: {
				en_US: 'Good paella and family atmosphere. We will definitely repeat.',
				es_ES: 'Buena paella y ambiente familiar. Repetiremos seguro.',
				ca_ES: 'Bona paella i ambient familiar. Repetirem segur.',
				fr_FR:
					'Bonne paella et ambiance familiale. Nous répéterons certainement.',
			},
			photos: [],
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

		// Seed restaurants
		console.log('🏪 Seeding restaurants...');
		const { error: restaurantsError } = await supabase
			.from('restaurants')
			.insert(seedData.restaurants);

		if (restaurantsError) {
			console.error('Error seeding restaurants:', restaurantsError);
			throw restaurantsError;
		}

		// Seed menus
		console.log('📋 Seeding menus...');
		const { error: menusError } = await supabase
			.from('menus')
			.insert(seedData.menus);

		if (menusError) {
			console.error('Error seeding menus:', menusError);
			throw menusError;
		}

		// Seed dishes
		console.log('🍝 Seeding dishes...');
		const { error: dishesError } = await supabase
			.from('dishes')
			.insert(seedData.dishes);

		if (dishesError) {
			console.error('Error seeding dishes:', dishesError);
			throw dishesError;
		}

		// Seed reviews
		console.log('⭐ Seeding reviews...');
		const { error: reviewsError } = await supabase
			.from('reviews')
			.insert(seedData.reviews);

		if (reviewsError) {
			console.error('Error seeding reviews:', reviewsError);
			throw reviewsError;
		}

		// Update restaurant ratings based on reviews
		console.log('📊 Updating restaurant ratings...');
		const restaurantIds = seedData.restaurants.map((r) => r.id);

		for (const restaurantId of restaurantIds) {
			const { data: reviews } = await supabase
				.from('reviews')
				.select('rating')
				.eq('restaurant_id', restaurantId);

			if (reviews && reviews.length > 0) {
				const averageRating =
					reviews.reduce((sum, review) => sum + review.rating, 0) /
					reviews.length;
				const roundedRating = Math.round(averageRating * 10) / 10;

				await supabase
					.from('restaurants')
					.update({ rating: roundedRating })
					.eq('id', restaurantId);
			}
		}

		console.log('✅ Database seeding completed successfully!');
		console.log(`
📊 Seeded data summary:
- ${seedData.cuisines.length} cuisines
- ${seedData.addresses.length} addresses  
- ${seedData.users.length} users
- ${seedData.restaurants.length} restaurants
- ${seedData.menus.length} menus
- ${seedData.dishes.length} dishes
- ${seedData.reviews.length} reviews

🔐 Demo credentials:
- Email: demo@restaurant.com
- Password: DemoPassword123!

🏪 Restaurant owner:
- Email: owner@restaurant.com
- Password: OwnerPassword123!

👤 Additional users:
- Email: maria.garcia@email.com
- Email: carlos.rodriguez@email.com
- Email: ana.martinez@email.com
- Email: david.lopez@email.com
- Email: laura.fernandez@email.com
- Password for all: Password123!
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
