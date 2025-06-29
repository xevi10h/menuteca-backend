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

		// Nuevas addresses (37 más para un total de 50)
		{
			id: '650e8400-e29b-41d4-a716-446655440014',
			street: {
				en_US: 'Aragón Street',
				es_ES: 'Calle Aragón',
				ca_ES: 'Carrer Aragó',
				fr_FR: 'Rue Aragón',
			},
			number: '220',
			additional_information: 'Local 1',
			postal_code: '08011',
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
				latitude: 41.3918,
				longitude: 2.1652,
			},
			formatted_address: 'Calle Aragón, 220, Local 1, 08011 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440015',
			street: {
				en_US: 'Valencia Street',
				es_ES: 'Calle Valencia',
				ca_ES: 'Carrer València',
				fr_FR: 'Rue Valencia',
			},
			number: '345',
			additional_information: '',
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
				latitude: 41.3965,
				longitude: 2.1689,
			},
			formatted_address: 'Calle Valencia, 345, 08009 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440016',
			street: {
				en_US: 'Gran Via de les Corts Catalanes',
				es_ES: 'Gran Via de les Corts Catalanes',
				ca_ES: 'Gran Via de les Corts Catalanes',
				fr_FR: 'Gran Via de les Corts Catalanes',
			},
			number: '578',
			additional_information: 'Entresuelo 2',
			postal_code: '08011',
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
				latitude: 41.3842,
				longitude: 2.1631,
			},
			formatted_address:
				'Gran Via de les Corts Catalanes, 578, Entresuelo 2, 08011 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440017',
			street: {
				en_US: 'Enric Granados Street',
				es_ES: 'Calle Enric Granados',
				ca_ES: 'Carrer Enric Granados',
				fr_FR: 'Rue Enric Granados',
			},
			number: '32',
			additional_information: 'Bajos',
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
				latitude: 41.3877,
				longitude: 2.1598,
			},
			formatted_address:
				'Calle Enric Granados, 32, Bajos, 08007 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440018',
			street: {
				en_US: 'Rambla de Catalunya',
				es_ES: 'Rambla de Catalunya',
				ca_ES: 'Rambla de Catalunya',
				fr_FR: 'Rambla de Catalunya',
			},
			number: '102',
			additional_information: 'Piso 1',
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
				latitude: 41.3922,
				longitude: 2.1605,
			},
			formatted_address:
				'Rambla de Catalunya, 102, Piso 1, 08008 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440019',
			street: {
				en_US: 'Pau Claris Street',
				es_ES: 'Calle Pau Claris',
				ca_ES: 'Carrer Pau Claris',
				fr_FR: 'Rue Pau Claris',
			},
			number: '157',
			additional_information: 'Principal',
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
				latitude: 41.3948,
				longitude: 2.1695,
			},
			formatted_address:
				'Calle Pau Claris, 157, Principal, 08037 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440020',
			street: {
				en_US: 'Roger de Llúria Street',
				es_ES: 'Calle Roger de Llúria',
				ca_ES: 'Carrer Roger de Llúria',
				fr_FR: 'Rue Roger de Llúria',
			},
			number: '74',
			additional_information: 'Local',
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
				latitude: 41.3935,
				longitude: 2.1685,
			},
			formatted_address:
				'Calle Roger de Llúria, 74, Local, 08009 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440021',
			street: {
				en_US: 'Travessera de Gràcia',
				es_ES: 'Travessera de Gràcia',
				ca_ES: 'Travessera de Gràcia',
				fr_FR: 'Travessera de Gràcia',
			},
			number: '256',
			additional_information: '',
			postal_code: '08025',
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
				latitude: 41.4042,
				longitude: 2.1632,
			},
			formatted_address: 'Travessera de Gràcia, 256, 08025 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440022',
			street: {
				en_US: 'Carrer de Còrsega',
				es_ES: 'Calle Córcega',
				ca_ES: 'Carrer de Còrsega',
				fr_FR: 'Rue de Corse',
			},
			number: '315',
			additional_information: 'Bajos',
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
				latitude: 41.3979,
				longitude: 2.1643,
			},
			formatted_address:
				'Carrer de Còrsega, 315, Bajos, 08037 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440023',
			street: {
				en_US: 'Passeig de Sant Joan',
				es_ES: 'Paseo de San Juan',
				ca_ES: 'Passeig de Sant Joan',
				fr_FR: 'Promenade de Saint Jean',
			},
			number: '120',
			additional_information: 'Local 3',
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
				latitude: 41.3985,
				longitude: 2.1716,
			},
			formatted_address:
				'Passeig de Sant Joan, 120, Local 3, 08037 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440024',
			street: {
				en_US: 'Mallorca Street',
				es_ES: 'Calle Mallorca',
				ca_ES: 'Carrer Mallorca',
				fr_FR: 'Rue Majorque',
			},
			number: '225',
			additional_information: 'Local',
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
				latitude: 41.3943,
				longitude: 2.1631,
			},
			formatted_address: 'Calle Mallorca, 225, Local, 08008 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440025',
			street: {
				en_US: 'Aribau Street',
				es_ES: 'Calle Aribau',
				ca_ES: 'Carrer Aribau',
				fr_FR: 'Rue Aribau',
			},
			number: '86',
			additional_information: '',
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
				latitude: 41.3885,
				longitude: 2.1553,
			},
			formatted_address: 'Calle Aribau, 86, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440026',
			street: {
				en_US: 'Rosselló Street',
				es_ES: 'Calle Rosselló',
				ca_ES: 'Carrer Rosselló',
				fr_FR: 'Rue Rosselló',
			},
			number: '175',
			additional_information: 'Principal',
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
				latitude: 41.3928,
				longitude: 2.1565,
			},
			formatted_address:
				'Calle Rosselló, 175, Principal, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440027',
			street: {
				en_US: 'Carrer del Bruc',
				es_ES: 'Calle del Bruc',
				ca_ES: 'Carrer del Bruc',
				fr_FR: 'Rue du Bruc',
			},
			number: '63',
			additional_information: 'Entresuelo',
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
				latitude: 41.3946,
				longitude: 2.1672,
			},
			formatted_address:
				'Carrer del Bruc, 63, Entresuelo, 08009 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440028',
			street: {
				en_US: 'Carrer de París',
				es_ES: 'Calle de París',
				ca_ES: 'Carrer de París',
				fr_FR: 'Rue de Paris',
			},
			number: '192',
			additional_information: 'Local',
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
				latitude: 41.3927,
				longitude: 2.1534,
			},
			formatted_address: 'Carrer de París, 192, Local, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440029',
			street: {
				en_US: 'Carrer de Londres',
				es_ES: 'Calle de Londres',
				ca_ES: 'Carrer de Londres',
				fr_FR: 'Rue de Londres',
			},
			number: '95',
			additional_information: '',
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
				latitude: 41.392,
				longitude: 2.1509,
			},
			formatted_address: 'Carrer de Londres, 95, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440030',
			street: {
				en_US: 'Carrer de Casanova',
				es_ES: 'Calle de Casanova',
				ca_ES: 'Carrer de Casanova',
				fr_FR: 'Rue de Casanova',
			},
			number: '173',
			additional_information: 'Bajos',
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
				latitude: 41.3917,
				longitude: 2.1528,
			},
			formatted_address:
				'Carrer de Casanova, 173, Bajos, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440031',
			street: {
				en_US: "Carrer d'Urgell",
				es_ES: 'Calle de Urgell',
				ca_ES: "Carrer d'Urgell",
				fr_FR: "Rue d'Urgell",
			},
			number: '240',
			additional_information: 'Local 2',
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
				latitude: 41.39,
				longitude: 2.1481,
			},
			formatted_address:
				"Carrer d'Urgell, 240, Local 2, 08036 Barcelona, España",
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440032',
			street: {
				en_US: 'Carrer del Comte Borrell',
				es_ES: 'Calle del Conde Borrell',
				ca_ES: 'Carrer del Comte Borrell',
				fr_FR: 'Rue du Comte Borrell',
			},
			number: '164',
			additional_information: '',
			postal_code: '08015',
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
				latitude: 41.3814,
				longitude: 2.1507,
			},
			formatted_address:
				'Carrer del Comte Borrell, 164, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440033',
			street: {
				en_US: 'Carrer de Villarroel',
				es_ES: 'Calle de Villarroel',
				ca_ES: 'Carrer de Villarroel',
				fr_FR: 'Rue de Villarroel',
			},
			number: '138',
			additional_information: 'Local',
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
				latitude: 41.3891,
				longitude: 2.152,
			},
			formatted_address:
				'Carrer de Villarroel, 138, Local, 08036 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440034',
			street: {
				en_US: "Carrer d'Entença",
				es_ES: 'Calle de Entença',
				ca_ES: "Carrer d'Entença",
				fr_FR: "Rue d'Entença",
			},
			number: '157',
			additional_information: 'Bajos',
			postal_code: '08029',
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
				latitude: 41.3862,
				longitude: 2.1447,
			},
			formatted_address:
				"Carrer d'Entença, 157, Bajos, 08029 Barcelona, España",
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440035',
			street: {
				en_US: 'Carrer de Rocafort',
				es_ES: 'Calle de Rocafort',
				ca_ES: 'Carrer de Rocafort',
				fr_FR: 'Rue de Rocafort',
			},
			number: '103',
			additional_information: 'Local 1',
			postal_code: '08015',
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
				latitude: 41.381,
				longitude: 2.1463,
			},
			formatted_address:
				'Carrer de Rocafort, 103, Local 1, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440036',
			street: {
				en_US: 'Carrer de Calàbria',
				es_ES: 'Calle de Calabria',
				ca_ES: 'Carrer de Calàbria',
				fr_FR: 'Rue de Calabre',
			},
			number: '115',
			additional_information: '',
			postal_code: '08015',
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
				latitude: 41.3821,
				longitude: 2.1491,
			},
			formatted_address: 'Carrer de Calàbria, 115, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440037',
			street: {
				en_US: 'Carrer de Viladomat',
				es_ES: 'Calle de Viladomat',
				ca_ES: 'Carrer de Viladomat',
				fr_FR: 'Rue de Viladomat',
			},
			number: '96',
			additional_information: 'Local',
			postal_code: '08015',
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
				latitude: 41.3798,
				longitude: 2.1525,
			},
			formatted_address:
				'Carrer de Viladomat, 96, Local, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440038',
			street: {
				en_US: 'Carrer de Sepúlveda',
				es_ES: 'Calle de Sepúlveda',
				ca_ES: 'Carrer de Sepúlveda',
				fr_FR: 'Rue de Sepúlveda',
			},
			number: '135',
			additional_information: 'Local 2',
			postal_code: '08011',
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
				latitude: 41.3789,
				longitude: 2.1556,
			},
			formatted_address:
				'Carrer de Sepúlveda, 135, Local 2, 08011 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440039',
			street: {
				en_US: 'Carrer de Floridablanca',
				es_ES: 'Calle de Floridablanca',
				ca_ES: 'Carrer de Floridablanca',
				fr_FR: 'Rue de Floridablanca',
			},
			number: '87',
			additional_information: '',
			postal_code: '08015',
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
				latitude: 41.3781,
				longitude: 2.1603,
			},
			formatted_address: 'Carrer de Floridablanca, 87, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440040',
			street: {
				en_US: 'Carrer de Tamarit',
				es_ES: 'Calle de Tamarit',
				ca_ES: 'Carrer de Tamarit',
				fr_FR: 'Rue de Tamarit',
			},
			number: '142',
			additional_information: 'Local',
			postal_code: '08015',
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
				latitude: 41.3771,
				longitude: 2.1572,
			},
			formatted_address:
				'Carrer de Tamarit, 142, Local, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440041',
			street: {
				en_US: 'Carrer del Parlament',
				es_ES: 'Calle del Parlament',
				ca_ES: 'Carrer del Parlament',
				fr_FR: 'Rue du Parlament',
			},
			number: '12',
			additional_information: 'Bajos',
			postal_code: '08015',
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
				latitude: 41.3754,
				longitude: 2.1637,
			},
			formatted_address:
				'Carrer del Parlament, 12, Bajos, 08015 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440042',
			street: {
				en_US: 'Passeig del Born',
				es_ES: 'Paseo del Born',
				ca_ES: 'Passeig del Born',
				fr_FR: 'Promenade du Born',
			},
			number: '15',
			additional_information: 'Local',
			postal_code: '08003',
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
				latitude: 41.3854,
				longitude: 2.1831,
			},
			formatted_address: 'Passeig del Born, 15, Local, 08003 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440043',
			street: {
				en_US: 'Carrer de Montcada',
				es_ES: 'Calle de Montcada',
				ca_ES: 'Carrer de Montcada',
				fr_FR: 'Rue de Montcada',
			},
			number: '23',
			additional_information: '',
			postal_code: '08003',
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
				latitude: 41.3845,
				longitude: 2.1815,
			},
			formatted_address: 'Carrer de Montcada, 23, 08003 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440044',
			street: {
				en_US: 'Carrer de la Princesa',
				es_ES: 'Calle de la Princesa',
				ca_ES: 'Carrer de la Princesa',
				fr_FR: 'Rue de la Princesse',
			},
			number: '42',
			additional_information: 'Local',
			postal_code: '08003',
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
				latitude: 41.3847,
				longitude: 2.1796,
			},
			formatted_address:
				'Carrer de la Princesa, 42, Local, 08003 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440045',
			street: {
				en_US: 'Carrer dels Escudellers',
				es_ES: 'Calle de los Escudellers',
				ca_ES: 'Carrer dels Escudellers',
				fr_FR: 'Rue des Escudellers',
			},
			number: '28',
			additional_information: 'Bajos',
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
				latitude: 41.3798,
				longitude: 2.1762,
			},
			formatted_address:
				'Carrer dels Escudellers, 28, Bajos, 08002 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440046',
			street: {
				en_US: 'Carrer del Call',
				es_ES: 'Calle del Call',
				ca_ES: 'Carrer del Call',
				fr_FR: 'Rue du Call',
			},
			number: '9',
			additional_information: 'Local',
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
				latitude: 41.3833,
				longitude: 2.1753,
			},
			formatted_address: 'Carrer del Call, 9, Local, 08002 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440047',
			street: {
				en_US: 'Carrer de Ferran',
				es_ES: 'Calle de Ferran',
				ca_ES: 'Carrer de Ferran',
				fr_FR: 'Rue de Ferran',
			},
			number: '34',
			additional_information: '',
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
				latitude: 41.382,
				longitude: 2.1747,
			},
			formatted_address: 'Carrer de Ferran, 34, 08002 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440048',
			street: {
				en_US: 'La Rambla',
				es_ES: 'La Rambla',
				ca_ES: 'La Rambla',
				fr_FR: 'La Rambla',
			},
			number: '115',
			additional_information: 'Local',
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
				latitude: 41.3817,
				longitude: 2.1721,
			},
			formatted_address: 'La Rambla, 115, Local, 08002 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440049',
			street: {
				en_US: 'Passeig de Colom',
				es_ES: 'Paseo de Colón',
				ca_ES: 'Passeig de Colom',
				fr_FR: 'Promenade de Colomb',
			},
			number: '21',
			additional_information: 'Bajos',
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
				latitude: 41.3787,
				longitude: 2.1804,
			},
			formatted_address: 'Passeig de Colom, 21, Bajos, 08002 Barcelona, España',
		},
		{
			id: '650e8400-e29b-41d4-a716-446655440050',
			street: {
				en_US: 'Plaça Reial',
				es_ES: 'Plaza Real',
				ca_ES: 'Plaça Reial',
				fr_FR: 'Place Royale',
			},
			number: '8',
			additional_information: 'Local 3',
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
				latitude: 41.3801,
				longitude: 2.1748,
			},
			formatted_address: 'Plaça Reial, 8, Local 3, 08002 Barcelona, España',
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
		{
			id: '750e8400-e29b-41d4-a716-446655440008',
			email: 'javier.sanchez@email.com',
			username: 'javier_sanchez',
			name: 'Javier Sánchez',
			photo: 'https://randomuser.me/api/portraits/men/6.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440009',
			email: 'carmen.gonzalez@email.com',
			username: 'carmen_gonzalez',
			name: 'Carmen González',
			photo: 'https://randomuser.me/api/portraits/women/7.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440010',
			email: 'antonio.perez@email.com',
			username: 'antonio_perez',
			name: 'Antonio Pérez',
			photo: 'https://randomuser.me/api/portraits/men/8.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440011',
			email: 'sofia.lopez@email.com',
			username: 'sofia_lopez',
			name: 'Sofía López',
			photo: 'https://randomuser.me/api/portraits/women/9.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440012',
			email: 'miguel.torres@email.com',
			username: 'miguel_torres',
			name: 'Miguel Torres',
			photo: 'https://randomuser.me/api/portraits/men/10.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440013',
			email: 'lucia.navarro@email.com',
			username: 'lucia_navarro',
			name: 'Lucía Navarro',
			photo: 'https://randomuser.me/api/portraits/women/11.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440014',
			email: 'pablo.martin@email.com',
			username: 'pablo_martin',
			name: 'Pablo Martín',
			photo: 'https://randomuser.me/api/portraits/men/12.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440015',
			email: 'elena.gomez@email.com',
			username: 'elena_gomez',
			name: 'Elena Gómez',
			photo: 'https://randomuser.me/api/portraits/women/13.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440016',
			email: 'daniel.diaz@email.com',
			username: 'daniel_diaz',
			name: 'Daniel Díaz',
			photo: 'https://randomuser.me/api/portraits/men/14.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440017',
			email: 'andrea.ruiz@email.com',
			username: 'andrea_ruiz',
			name: 'Andrea Ruiz',
			photo: 'https://randomuser.me/api/portraits/women/15.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440018',
			email: 'alberto.hernandez@email.com',
			username: 'alberto_hernandez',
			name: 'Alberto Hernández',
			photo: 'https://randomuser.me/api/portraits/men/16.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440019',
			email: 'irene.santos@email.com',
			username: 'irene_santos',
			name: 'Irene Santos',
			photo: 'https://randomuser.me/api/portraits/women/17.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440020',
			email: 'fernando.moreno@email.com',
			username: 'fernando_moreno',
			name: 'Fernando Moreno',
			photo: 'https://randomuser.me/api/portraits/men/18.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440021',
			email: 'claudia.romero@email.com',
			username: 'claudia_romero',
			name: 'Claudia Romero',
			photo: 'https://randomuser.me/api/portraits/women/19.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440022',
			email: 'manuel.ortega@email.com',
			username: 'manuel_ortega',
			name: 'Manuel Ortega',
			photo: 'https://randomuser.me/api/portraits/men/20.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440023',
			email: 'silvia.jimenez@email.com',
			username: 'silvia_jimenez',
			name: 'Silvia Jiménez',
			photo: 'https://randomuser.me/api/portraits/women/21.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440024',
			email: 'alejandro.vega@email.com',
			username: 'alejandro_vega',
			name: 'Alejandro Vega',
			photo: 'https://randomuser.me/api/portraits/men/22.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440025',
			email: 'alicia.molina@email.com',
			username: 'alicia_molina',
			name: 'Alicia Molina',
			photo: 'https://randomuser.me/api/portraits/women/23.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440026',
			email: 'guillermo.castro@email.com',
			username: 'guillermo_castro',
			name: 'Guillermo Castro',
			photo: 'https://randomuser.me/api/portraits/men/24.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440027',
			email: 'raquel.blanco@email.com',
			username: 'raquel_blanco',
			name: 'Raquel Blanco',
			photo: 'https://randomuser.me/api/portraits/women/25.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440028',
			email: 'hugo.suarez@email.com',
			username: 'hugo_suarez',
			name: 'Hugo Suárez',
			photo: 'https://randomuser.me/api/portraits/men/26.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440029',
			email: 'cristina.serrano@email.com',
			username: 'cristina_serrano',
			name: 'Cristina Serrano',
			photo: 'https://randomuser.me/api/portraits/women/27.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440030',
			email: 'oscar.duran@email.com',
			username: 'oscar_duran',
			name: 'Óscar Durán',
			photo: 'https://randomuser.me/api/portraits/men/28.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440031',
			email: 'natalia.iglesias@email.com',
			username: 'natalia_iglesias',
			name: 'Natalia Iglesias',
			photo: 'https://randomuser.me/api/portraits/women/29.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440032',
			email: 'ruben.flores@email.com',
			username: 'ruben_flores',
			name: 'Rubén Flores',
			photo: 'https://randomuser.me/api/portraits/men/30.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440033',
			email: 'monica.leon@email.com',
			username: 'monica_leon',
			name: 'Mónica León',
			photo: 'https://randomuser.me/api/portraits/women/31.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440034',
			email: 'sergio.cano@email.com',
			username: 'sergio_cano',
			name: 'Sergio Cano',
			photo: 'https://randomuser.me/api/portraits/men/32.jpg',
			language: 'es_ES',
			has_password: true,
			password: 'Password123!',
		},
		{
			id: '750e8400-e29b-41d4-a716-446655440035',
			email: 'beatriz.herrera@email.com',
			username: 'beatriz_herrera',
			name: 'Beatriz Herrera',
			photo: 'https://randomuser.me/api/portraits/women/33.jpg',
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
		{
			id: '850e8400-e29b-41d4-a716-446655440023',
			name: 'Café de Paris',
			minimum_price: 15.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440010', // Haute Cuisine
			main_image:
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
			images: [
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440023',
			tags: ['brunch', 'romantic', 'wifi', 'outdoorSeating', 'desserts'],
			phone: '+34 935 678 123',
			reservation_link: 'https://cafedeparis.es/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440024',
			name: 'La Burguesa',
			minimum_price: 11.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440005', // American
			main_image:
				'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
			profile_image:
				'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
			images: [
				'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
				'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg',
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440024',
			tags: ['burgers', 'craft_beer', 'familyFriendly', 'wifi', 'liveMusic'],
			phone: '+34 936 789 452',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440025',
			name: 'Tandoor Palace',
			minimum_price: 12.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440007', // Indian
			main_image:
				'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
			profile_image:
				'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
			images: [
				'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
				'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
				'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440025',
			tags: ['curry', 'spicy', 'vegetarian', 'vegan', 'familyFriendly'],
			phone: '+34 937 891 234',
			reservation_link: 'https://tandoorpalace.es/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440026',
			name: 'El Asador',
			minimum_price: 22.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg',
			profile_image:
				'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg',
			images: [
				'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg',
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
				'https://images.pexels.com/photos/1115251/pexels-photo-1115251.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440026',
			tags: [
				'steakhouse',
				'grilled',
				'wine',
				'businessFriendly',
				'airConditioning',
			],
			phone: '+34 938 901 234',
			reservation_link: 'https://elasador.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440027',
			name: 'Dim Sum House',
			minimum_price: 14.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440006', // Chinese
			main_image:
				'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
			profile_image:
				'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
			images: [
				'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
				'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg',
				'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440027',
			tags: [
				'dimsum',
				'authentic',
				'familyFriendly',
				'reservations',
				'airConditioning',
			],
			phone: '+34 939 012 345',
			reservation_link: 'https://dimsumhouse.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440028',
			name: 'Cal Pep',
			minimum_price: 25.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			images: [
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440028',
			tags: ['seafood', 'tapas', 'wine', 'localCuisine', 'upscale'],
			phone: '+34 932 107 331',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440029',
			name: 'La Xampanyeria',
			minimum_price: 8.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg',
			images: [
				'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg',
				'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg',
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440029',
			tags: ['tapas', 'cava', 'wine', 'local', 'authentic'],
			phone: '+34 933 197 071',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440030',
			name: 'La Fonda',
			minimum_price: 18.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
			profile_image:
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
			images: [
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440030',
			tags: [
				'traditional',
				'local',
				'familyFriendly',
				'paella',
				'airConditioning',
			],
			phone: '+34 934 124 466',
			reservation_link: 'https://lafonda.es/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440031',
			name: 'Tickets Bar',
			minimum_price: 45.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440010', // Haute Cuisine
			main_image:
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
			images: [
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440031',
			tags: ['tapas', 'creative', 'michelin', 'upscale', 'reservations'],
			phone: '+34 932 924 253',
			reservation_link: 'https://ticketsbar.es/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440032',
			name: 'Koku Kitchen Ramen',
			minimum_price: 12.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440002', // Japanese
			main_image:
				'https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg',
			profile_image:
				'https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg',
			images: [
				'https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg',
				'https://images.pexels.com/photos/1058714/pexels-photo-1058714.jpeg',
				'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440032',
			tags: ['ramen', 'casual', 'asian', 'comfort_food', 'cozy'],
			phone: '+34 936 113 151',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440033',
			name: 'NAP Antic',
			minimum_price: 11.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440003', // Italian
			main_image:
				'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
			images: [
				'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
				'https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg',
				'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440033',
			tags: ['pizza', 'naples', 'authentic', 'familyFriendly', 'takeaway'],
			phone: '+34 932 500 392',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440034',
			name: 'Panchito',
			minimum_price: 13.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440004', // Mexican
			main_image:
				'https://images.pexels.com/photos/2230615/pexels-photo-2230615.jpeg',
			profile_image:
				'https://images.pexels.com/photos/2230615/pexels-photo-2230615.jpeg',
			images: [
				'https://images.pexels.com/photos/2230615/pexels-photo-2230615.jpeg',
				'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg',
				'https://images.pexels.com/photos/4955239/pexels-photo-4955239.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440034',
			tags: ['tacos', 'margaritas', 'spicy', 'casual', 'liveMusic'],
			phone: '+34 937 658 113',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440035',
			name: 'Kimchi',
			minimum_price: 15.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440009', // Korean
			main_image:
				'https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg',
			profile_image:
				'https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg',
			images: [
				'https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg',
				'https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg',
				'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440035',
			tags: ['bibimbap', 'korean_bbq', 'authentic', 'spicy', 'reservations'],
			phone: '+34 938 456 789',
			reservation_link: 'https://kimchi.es/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440036',
			name: 'La Mar Salada',
			minimum_price: 22.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
			profile_image:
				'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
			images: [
				'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440036',
			tags: [
				'seafood',
				'paella',
				'mediterranean',
				'waterfront',
				'reservations',
			],
			phone: '+34 932 215 736',
			reservation_link: 'https://lamarsalada.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440037',
			name: 'El Nacional',
			minimum_price: 18.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
			profile_image:
				'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
			images: [
				'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440037',
			tags: ['tapas', 'gourmet', 'cocktails', 'upscale', 'historic'],
			phone: '+34 935 189 066',
			reservation_link: 'https://elnacionalbcn.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440038',
			name: 'Ciudad Condal',
			minimum_price: 14.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg',
			profile_image:
				'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg',
			images: [
				'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg',
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440038',
			tags: ['tapas', 'classic', 'wine', 'bustling', 'local'],
			phone: '+34 933 189 997',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440039',
			name: 'Quimet & Quimet',
			minimum_price: 10.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
			images: [
				'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
				'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg',
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440039',
			tags: ['tapas', 'wine', 'conservas', 'standing', 'historic'],
			phone: '+34 934 423 142',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440040',
			name: 'Bar Cañete',
			minimum_price: 20.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
			profile_image:
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
			images: [
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440040',
			tags: ['tapas', 'upscale', 'local', 'traditional', 'seafood'],
			phone: '+34 932 703 458',
			reservation_link: 'https://barcanete.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440041',
			name: 'La Pepita',
			minimum_price: 15.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			images: [
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
				'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
				'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440041',
			tags: ['tapas', 'vermouth', 'cozy', 'creative', 'reservations'],
			phone: '+34 932 127 741',
			reservation_link: 'https://lapepita.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440042',
			name: 'Can Ros',
			minimum_price: 16.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
			profile_image:
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
			images: [
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440042',
			tags: [
				'rice_dishes',
				'paella',
				'seafood',
				'traditional',
				'familyFriendly',
			],
			phone: '+34 935 134 587',
			reservation_link: 'https://canros.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440043',
			name: 'Granja Petitbo',
			minimum_price: 9.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440005', // American
			main_image:
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
			images: [
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
				'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg',
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440043',
			tags: ['brunch', 'cafe', 'breakfast', 'wifi', 'petFriendly'],
			phone: '+34 932 956 690',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440044',
			name: 'El Filete Ruso',
			minimum_price: 13.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440005', // American
			main_image:
				'https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg',
			profile_image:
				'https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg',
			images: [
				'https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg',
				'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
				'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440044',
			tags: ['burgers', 'gourmet', 'craft_beer', 'casual', 'familyFriendly'],
			phone: '+34 936 672 090',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440045',
			name: 'Cervecería Catalana',
			minimum_price: 12.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			images: [
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
				'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
				'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440045',
			tags: ['tapas', 'beer', 'bustling', 'classic', 'outdoorSeating'],
			phone: '+34 932 160 126',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440046',
			name: 'La Cova Fumada',
			minimum_price: 10.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			profile_image:
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			images: [
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440046',
			tags: ['seafood', 'authentic', 'hidden_gem', 'local', 'noReservation'],
			phone: '+34 932 216 317',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440047',
			name: 'Boca Grande',
			minimum_price: 35.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440010', // Haute Cuisine
			main_image:
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
			profile_image:
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
			images: [
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440047',
			tags: ['upscale', 'seafood', 'cocktails', 'nightlife', 'reservations'],
			phone: '+34 934 675 462',
			reservation_link: 'https://bocagrande.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440048',
			name: 'El Quim de la Boqueria',
			minimum_price: 16.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
			images: [
				'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
				'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
				'https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440048',
			tags: ['market', 'seafood', 'breakfast', 'fresh', 'local'],
			phone: '+34 933 019 810',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440049',
			name: 'Martinez',
			minimum_price: 30.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440001', // Mediterranean
			main_image:
				'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg',
			profile_image:
				'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg',
			images: [
				'https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg',
				'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
				'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440049',
			tags: ['seafood', 'paella', 'viewpoint', 'romantic', 'upscale'],
			phone: '+34 931 066 581',
			reservation_link: 'https://martinez-barcelona.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
		},
		{
			id: '850e8400-e29b-41d4-a716-446655440050',
			name: 'Disfrutar',
			minimum_price: 80.0,
			cuisine_id: '550e8400-e29b-41d4-a716-446655440010', // Haute Cuisine
			main_image:
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
			profile_image:
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
			images: [
				'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
				'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
				'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
			],
			address_id: '650e8400-e29b-41d4-a716-446655440050',
			tags: [
				'michelin',
				'tasting_menu',
				'experimental',
				'upscale',
				'reservations',
			],
			phone: '+34 933 486 896',
			reservation_link: 'https://disfrutarbarcelona.com/reservas',
			owner_id: '750e8400-e29b-41d4-a716-446655440002',
			is_active: true,
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
		// Menus for new restaurants (first block - 20 menus)

		// Menus for La Paradeta (ID: 850e8400-e29b-41d4-a716-446655440014)
		{
			id: '950e8400-e29b-41d4-a716-446655440017',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440014',
			name: {
				en_US: 'Seafood Selection',
				es_ES: 'Selección de Mariscos',
				ca_ES: 'Selecció de Marisc',
				fr_FR: 'Sélection de Fruits de Mer',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 28.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440018',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440014',
			name: {
				en_US: 'Dinner Deluxe',
				es_ES: 'Cena Deluxe',
				ca_ES: 'Sopar Deluxe',
				fr_FR: 'Dîner Deluxe',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 35.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for El Japonés (ID: 850e8400-e29b-41d4-a716-446655440015)
		{
			id: '950e8400-e29b-41d4-a716-446655440019',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440015',
			name: {
				en_US: 'Sushi Menu',
				es_ES: 'Menú de Sushi',
				ca_ES: 'Menú de Sushi',
				fr_FR: 'Menu Sushi',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440020',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440015',
			name: {
				en_US: 'Omakase Experience',
				es_ES: 'Experiencia Omakase',
				ca_ES: 'Experiència Omakase',
				fr_FR: 'Expérience Omakase',
			},
			days: ['friday', 'saturday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 45.0,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for La Tagliatella (ID: 850e8400-e29b-41d4-a716-446655440016)
		{
			id: '950e8400-e29b-41d4-a716-446655440021',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440016',
			name: {
				en_US: 'Pasta Lover',
				es_ES: 'Amante de la Pasta',
				ca_ES: 'Amant de la Pasta',
				fr_FR: 'Amateur de Pâtes',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 14.95,
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
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440022',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440016',
			name: {
				en_US: 'Italian Weekend',
				es_ES: 'Fin de Semana Italiano',
				ca_ES: 'Cap de Setmana Italià',
				fr_FR: 'Weekend Italien',
			},
			days: ['saturday', 'sunday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 19.95,
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
		{
			id: '950e8400-e29b-41d4-a716-446655440023',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440016',
			name: {
				en_US: 'Business Lunch',
				es_ES: 'Menú Ejecutivo',
				ca_ES: 'Menú Executiu',
				fr_FR: 'Menu Affaires',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 16.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},

		// Menus for Casa Carmen (ID: 850e8400-e29b-41d4-a716-446655440017)
		{
			id: '950e8400-e29b-41d4-a716-446655440024',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: 'Tapas Tasting',
				es_ES: 'Degustación de Tapas',
				ca_ES: 'Degustació de Tapes',
				fr_FR: 'Dégustation de Tapas',
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
			start_time: '13:00',
			end_time: '23:00',
			price: 22.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: true,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440025',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: 'Daily Menu',
				es_ES: 'Menú del Día',
				ca_ES: 'Menú del Dia',
				fr_FR: 'Menu du Jour',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 15.95,
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

		// Menus for Botafumeiro (ID: 850e8400-e29b-41d4-a716-446655440018)
		{
			id: '950e8400-e29b-41d4-a716-446655440026',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Executive Lunch',
				es_ES: 'Almuerzo Ejecutivo',
				ca_ES: 'Dinar Executiu',
				fr_FR: 'Déjeuner Exécutif',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 25.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440027',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Gourmet Experience',
				es_ES: 'Experiencia Gourmet',
				ca_ES: 'Experiència Gourmet',
				fr_FR: 'Expérience Gourmet',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 55.0,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Thai Barcelona (ID: 850e8400-e29b-41d4-a716-446655440019)
		{
			id: '950e8400-e29b-41d4-a716-446655440028',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Thai Express Lunch',
				es_ES: 'Almuerzo Rápido Thai',
				ca_ES: 'Dinar Ràpid Thai',
				fr_FR: 'Déjeuner Express Thaï',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '12:00',
			end_time: '16:00',
			price: 13.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440029',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Thai Royal Dinner',
				es_ES: 'Cena Real Thai',
				ca_ES: 'Sopar Reial Thai',
				fr_FR: 'Dîner Royal Thaï',
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
			start_time: '20:00',
			end_time: '23:00',
			price: 24.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Wagaya (ID: 850e8400-e29b-41d4-a716-446655440020)
		{
			id: '950e8400-e29b-41d4-a716-446655440030',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: 'Ramen Special',
				es_ES: 'Especial Ramen',
				ca_ES: 'Especial Ramen',
				fr_FR: 'Spécial Ramen',
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
			end_time: '16:00',
			price: 16.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440031',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: 'Japanese Feast',
				es_ES: 'Banquete Japonés',
				ca_ES: 'Banquet Japonès',
				fr_FR: 'Festin Japonais',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 28.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: true,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for La Taverna del Born (ID: 850e8400-e29b-41d4-a716-446655440021)
		{
			id: '950e8400-e29b-41d4-a716-446655440032',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Tapas Tour',
				es_ES: 'Tour de Tapas',
				ca_ES: 'Tour de Tapes',
				fr_FR: 'Tour de Tapas',
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
			end_time: '23:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: true,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440033',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Local Menu',
				es_ES: 'Menú Local',
				ca_ES: 'Menú Local',
				fr_FR: 'Menu Local',
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

		// Menus for La Pizza del Born (ID: 850e8400-e29b-41d4-a716-446655440022)
		{
			id: '950e8400-e29b-41d4-a716-446655440034',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440022',
			name: {
				en_US: 'Pizza Lovers',
				es_ES: 'Amantes de la Pizza',
				ca_ES: 'Amants de la Pizza',
				fr_FR: 'Amoureux de la Pizza',
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
			start_time: '13:00',
			end_time: '23:00',
			price: 15.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Café de Paris (ID: 850e8400-e29b-41d4-a716-446655440023)
		{
			id: '950e8400-e29b-41d4-a716-446655440035',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Brunch Menu',
				es_ES: 'Menú Brunch',
				ca_ES: 'Menú Brunch',
				fr_FR: 'Menu Brunch',
			},
			days: ['saturday', 'sunday'],
			start_time: '10:00',
			end_time: '16:00',
			price: 19.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440036',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Gourmet Dinner',
				es_ES: 'Cena Gourmet',
				ca_ES: 'Sopar Gourmet',
				fr_FR: 'Dîner Gourmet',
			},
			days: ['thursday', 'friday', 'saturday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 32.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		// Menus for new restaurants (second block - 20 menus)

		// Menus for La Burguesa (ID: 850e8400-e29b-41d4-a716-446655440024)
		{
			id: '950e8400-e29b-41d4-a716-446655440037',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Burger Feast',
				es_ES: 'Festín de Hamburguesas',
				ca_ES: 'Festí de Hamburgueses',
				fr_FR: 'Festin de Burgers',
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
			start_time: '13:00',
			end_time: '23:00',
			price: 16.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440038',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Group Menu',
				es_ES: 'Menú de Grupo',
				ca_ES: 'Menú de Grup',
				fr_FR: 'Menu de Groupe',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 4,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Tandoor Palace (ID: 850e8400-e29b-41d4-a716-446655440025)
		{
			id: '950e8400-e29b-41d4-a716-446655440039',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Indian Express Lunch',
				es_ES: 'Almuerzo Express Indio',
				ca_ES: 'Dinar Express Indi',
				fr_FR: 'Déjeuner Express Indien',
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
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},

		// Menus for El Asador (ID: 850e8400-e29b-41d4-a716-446655440026)
		{
			id: '950e8400-e29b-41d4-a716-446655440042',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Grill Selection',
				es_ES: 'Selección de la Parrilla',
				ca_ES: 'Selecció de la Graella',
				fr_FR: 'Sélection du Gril',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 24.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440043',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Premium Meat Menu',
				es_ES: 'Menú Carnes Premium',
				ca_ES: 'Menú Carns Premium',
				fr_FR: 'Menu Viandes Premium',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 38.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Dim Sum House (ID: 850e8400-e29b-41d4-a716-446655440027)
		{
			id: '950e8400-e29b-41d4-a716-446655440044',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Dim Sum Selection',
				es_ES: 'Selección de Dim Sum',
				ca_ES: 'Selecció de Dim Sum',
				fr_FR: 'Sélection de Dim Sum',
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
			end_time: '16:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440045',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Chinese Banquet',
				es_ES: 'Banquete Chino',
				ca_ES: 'Banquet Xinès',
				fr_FR: 'Banquet Chinois',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 28.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: true,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 4,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Cal Pep (ID: 850e8400-e29b-41d4-a716-446655440028)
		{
			id: '950e8400-e29b-41d4-a716-446655440046',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Seafood Experience',
				es_ES: 'Experiencia Marisco',
				ca_ES: 'Experiència Marisc',
				fr_FR: 'Expérience Fruits de Mer',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 35.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440047',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Cal Pep Selection',
				es_ES: 'Selección Cal Pep',
				ca_ES: 'Selecció Cal Pep',
				fr_FR: 'Sélection Cal Pep',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 42.0,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for La Xampanyeria (ID: 850e8400-e29b-41d4-a716-446655440029)
		{
			id: '950e8400-e29b-41d4-a716-446655440048',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440029',
			name: {
				en_US: 'Cava & Tapas',
				es_ES: 'Cava y Tapas',
				ca_ES: 'Cava i Tapes',
				fr_FR: 'Cava & Tapas',
			},
			days: [
				'monday',
				'tuesday',
				'wednesday',
				'thursday',
				'friday',
				'saturday',
			],
			start_time: '12:00',
			end_time: '22:00',
			price: 15.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: false,
				wine: false,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for La Fonda (ID: 850e8400-e29b-41d4-a716-446655440030)
		{
			id: '950e8400-e29b-41d4-a716-446655440049',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440030',
			name: {
				en_US: 'Traditional Menu',
				es_ES: 'Menú Tradicional',
				ca_ES: 'Menú Tradicional',
				fr_FR: 'Menu Traditionnel',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 15.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440050',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440030',
			name: {
				en_US: 'Paella Special',
				es_ES: 'Especial de Paella',
				ca_ES: 'Especial de Paella',
				fr_FR: 'Spécial Paella',
			},
			days: ['saturday', 'sunday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 22.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440051',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440030',
			name: {
				en_US: 'Family Feast',
				es_ES: 'Festín Familiar',
				ca_ES: 'Festí Familiar',
				fr_FR: 'Festin Familial',
			},
			days: ['saturday', 'sunday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 19.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 4,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Tickets Bar (ID: 850e8400-e29b-41d4-a716-446655440031)
		{
			id: '950e8400-e29b-41d4-a716-446655440052',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440031',
			name: {
				en_US: 'Tasting Menu',
				es_ES: 'Menú Degustación',
				ca_ES: 'Menú Degustació',
				fr_FR: 'Menu Dégustation',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 75.0,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440053',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440031',
			name: {
				en_US: "Chef's Menu",
				es_ES: 'Menú del Chef',
				ca_ES: 'Menú del Xef',
				fr_FR: 'Menu du Chef',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 110.0,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Koku Kitchen Ramen (ID: 850e8400-e29b-41d4-a716-446655440032)
		{
			id: '950e8400-e29b-41d4-a716-446655440054',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440032',
			name: {
				en_US: 'Ramen Set',
				es_ES: 'Set de Ramen',
				ca_ES: 'Set de Ramen',
				fr_FR: 'Set de Ramen',
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
			end_time: '16:00',
			price: 14.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440055',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440032',
			name: {
				en_US: 'Japanese Street Food',
				es_ES: 'Comida Callejera Japonesa',
				ca_ES: 'Menjar de Carrer Japonès',
				fr_FR: 'Street Food Japonais',
			},
			days: ['friday', 'saturday', 'sunday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 19.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for NAP Antic (ID: 850e8400-e29b-41d4-a716-446655440033)
		{
			id: '950e8400-e29b-41d4-a716-446655440056',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440033',
			name: {
				en_US: 'Naples Menu',
				es_ES: 'Menú Nápoles',
				ca_ES: 'Menú Nàpols',
				fr_FR: 'Menu Naples',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 14.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440040',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Tandoor Special',
				es_ES: 'Especial Tandoor',
				ca_ES: 'Especial Tandoor',
				fr_FR: 'Spécial Tandoor',
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
			start_time: '19:00',
			end_time: '23:00',
			price: 22.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440057',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440034',
			name: {
				en_US: 'Mexican Lunch',
				es_ES: 'Almuerzo Mexicano',
				ca_ES: 'Dinar Mexicà',
				fr_FR: 'Déjeuner Mexicain',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 13.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440058',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440034',
			name: {
				en_US: 'Fiesta Mexicana',
				es_ES: 'Fiesta Mexicana',
				ca_ES: 'Festa Mexicana',
				fr_FR: 'Fiesta Mexicaine',
			},
			days: ['friday', 'saturday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 24.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Kimchi (ID: 850e8400-e29b-41d4-a716-446655440035)
		{
			id: '950e8400-e29b-41d4-a716-446655440059',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440035',
			name: {
				en_US: 'Korean BBQ',
				es_ES: 'BBQ Coreano',
				ca_ES: 'BBQ Coreà',
				fr_FR: 'BBQ Coréen',
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
			end_time: '23:00',
			price: 22.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: true,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440067',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440038',
			name: {
				en_US: 'Lunch Menu',
				es_ES: 'Menú de Almuerzo',
				ca_ES: 'Menú de Dinar',
				fr_FR: 'Menu Déjeuner',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 14.95,
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

		// Menus for Quimet & Quimet (ID: 850e8400-e29b-41d4-a716-446655440039)
		{
			id: '950e8400-e29b-41d4-a716-446655440068',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440039',
			name: {
				en_US: 'Conservas Tasting',
				es_ES: 'Degustación de Conservas',
				ca_ES: 'Degustació de Conserves',
				fr_FR: 'Dégustation de Conserves',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '12:00',
			end_time: '16:00',
			price: 16.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: false,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Bar Cañete (ID: 850e8400-e29b-41d4-a716-446655440040)
		{
			id: '950e8400-e29b-41d4-a716-446655440069',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440040',
			name: {
				en_US: 'Signature Tapas',
				es_ES: 'Tapas de Autor',
				ca_ES: "Tapes d'Autor",
				fr_FR: 'Tapas Signature',
			},
			days: [
				'monday',
				'tuesday',
				'wednesday',
				'thursday',
				'friday',
				'saturday',
			],
			start_time: '13:00',
			end_time: '16:00',
			price: 25.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440070',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440040',
			name: {
				en_US: 'Premium Dinner',
				es_ES: 'Cena Premium',
				ca_ES: 'Sopar Premium',
				fr_FR: 'Dîner Premium',
			},
			days: [
				'monday',
				'tuesday',
				'wednesday',
				'thursday',
				'friday',
				'saturday',
			],
			start_time: '20:00',
			end_time: '23:00',
			price: 38.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for La Pepita (ID: 850e8400-e29b-41d4-a716-446655440041)
		{
			id: '950e8400-e29b-41d4-a716-446655440071',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440041',
			name: {
				en_US: 'Creative Tapas',
				es_ES: 'Tapas Creativas',
				ca_ES: 'Tapes Creatives',
				fr_FR: 'Tapas Créatives',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 19.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440072',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440041',
			name: {
				en_US: 'Vermouth Experience',
				es_ES: 'Experiencia Vermut',
				ca_ES: 'Experiència Vermut',
				fr_FR: 'Expérience Vermouth',
			},
			days: ['saturday', 'sunday'],
			start_time: '12:00',
			end_time: '16:00',
			price: 15.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: false,
				wine: false,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for Can Ros (ID: 850e8400-e29b-41d4-a716-446655440042)
		{
			id: '950e8400-e29b-41d4-a716-446655440073',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440042',
			name: {
				en_US: 'Rice Special',
				es_ES: 'Especial de Arroz',
				ca_ES: "Especial d'Arròs",
				fr_FR: 'Spécial Riz',
			},
			days: ['thursday', 'friday', 'saturday', 'sunday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 22.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440074',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440042',
			name: {
				en_US: 'Traditional Menu',
				es_ES: 'Menú Tradicional',
				ca_ES: 'Menú Tradicional',
				fr_FR: 'Menu Traditionnel',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 16.95,
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

		// Menus for Granja Petitbo (ID: 850e8400-e29b-41d4-a716-446655440043)
		{
			id: '950e8400-e29b-41d4-a716-446655440075',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440043',
			name: {
				en_US: 'Brunch Special',
				es_ES: 'Especial Brunch',
				ca_ES: 'Especial Brunch',
				fr_FR: 'Spécial Brunch',
			},
			days: ['saturday', 'sunday'],
			start_time: '10:00',
			end_time: '16:00',
			price: 16.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440076',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440043',
			name: {
				en_US: 'Daily Lunch',
				es_ES: 'Almuerzo Diario',
				ca_ES: 'Dinar Diari',
				fr_FR: 'Déjeuner Quotidien',
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
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},

		// Menus for El Filete Ruso (ID: 850e8400-e29b-41d4-a716-446655440044)
		{
			id: '950e8400-e29b-41d4-a716-446655440077',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440044',
			name: {
				en_US: 'Burger Experience',
				es_ES: 'Experiencia Burger',
				ca_ES: 'Experiència Burger',
				fr_FR: 'Expérience Burger',
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
			start_time: '13:00',
			end_time: '23:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440060',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440035',
			name: {
				en_US: 'Korean Lunch',
				es_ES: 'Almuerzo Coreano',
				ca_ES: 'Dinar Coreà',
				fr_FR: 'Déjeuner Coréen',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 15.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: false,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},

		// Menus for La Mar Salada (ID: 850e8400-e29b-41d4-a716-446655440036)
		{
			id: '950e8400-e29b-41d4-a716-446655440061',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440036',
			name: {
				en_US: 'Seafood Delight',
				es_ES: 'Delicias del Mar',
				ca_ES: 'Delícies del Mar',
				fr_FR: 'Délices de la Mer',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 29.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
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
		{
			id: '950e8400-e29b-41d4-a716-446655440062',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440036',
			name: {
				en_US: 'Paella Experience',
				es_ES: 'Experiencia Paella',
				ca_ES: 'Experiència Paella',
				fr_FR: 'Expérience Paella',
			},
			days: ['saturday', 'sunday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 24.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440063',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440036',
			name: {
				en_US: 'Fish Lovers',
				es_ES: 'Amantes del Pescado',
				ca_ES: 'Amants del Peix',
				fr_FR: 'Amoureux du Poisson',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 32.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},

		// Menus for El Nacional (ID: 850e8400-e29b-41d4-a716-446655440037)
		{
			id: '950e8400-e29b-41d4-a716-446655440064',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440037',
			name: {
				en_US: 'National Selection',
				es_ES: 'Selección Nacional',
				ca_ES: 'Selecció Nacional',
				fr_FR: 'Sélection Nationale',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 24.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
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
		{
			id: '950e8400-e29b-41d4-a716-446655440065',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440037',
			name: {
				en_US: 'Gourmet Evening',
				es_ES: 'Noche Gourmet',
				ca_ES: 'Nit Gourmet',
				fr_FR: 'Soirée Gourmet',
			},
			days: ['thursday', 'friday', 'saturday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 38.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		// Menus for new restaurants (fourth block - final menus)

		// Menus for Cervecería Catalana (ID: 850e8400-e29b-41d4-a716-446655440045)
		{
			id: '950e8400-e29b-41d4-a716-446655440078',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440045',
			name: {
				en_US: 'Tapas Selection',
				es_ES: 'Selección de Tapas',
				ca_ES: 'Selecció de Tapes',
				fr_FR: 'Sélection de Tapas',
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
			end_time: '23:00',
			price: 19.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: false,
				soft_drinks: false,
				beer: true,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440079',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440045',
			name: {
				en_US: 'Beer & Tapas',
				es_ES: 'Cerveza y Tapas',
				ca_ES: 'Cervesa i Tapes',
				fr_FR: 'Bière et Tapas',
			},
			days: ['thursday', 'friday', 'saturday'],
			start_time: '19:00',
			end_time: '23:00',
			price: 17.95,
			first_courses_to_share: true,
			second_courses_to_share: true,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: false,
				wine: false,
				soft_drinks: false,
				beer: true,
			},
			includes_coffee_and_dessert: 'none',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440080',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440046',
			name: {
				en_US: "Fisherman's Menu",
				es_ES: 'Menú Marinero',
				ca_ES: 'Menú Mariner',
				fr_FR: 'Menu Marin',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 18.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440081',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440047',
			name: {
				en_US: 'Gourmet Experience',
				es_ES: 'Experiencia Gourmet',
				ca_ES: 'Experiència Gourmet',
				fr_FR: 'Expérience Gourmet',
			},
			days: ['wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '20:00',
			end_time: '23:00',
			price: 55.0,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440082',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440047',
			name: {
				en_US: 'Business Lunch',
				es_ES: 'Almuerzo de Negocios',
				ca_ES: 'Dinar de Negocis',
				fr_FR: "Déjeuner d'Affaires",
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 35.0,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440083',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440048',
			name: {
				en_US: 'Market Breakfast',
				es_ES: 'Desayuno de Mercado',
				ca_ES: 'Esmorzar de Mercat',
				fr_FR: 'Petit-déjeuner de Marché',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '08:00',
			end_time: '12:00',
			price: 16.95,
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
		{
			id: '950e8400-e29b-41d4-a716-446655440084',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440048',
			name: {
				en_US: 'Fresh Seafood',
				es_ES: 'Mariscos Frescos',
				ca_ES: 'Marisc Fresc',
				fr_FR: 'Fruits de Mer Frais',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '12:00',
			end_time: '16:00',
			price: 24.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: false,
				beer: false,
			},
			includes_coffee_and_dessert: 'dessert',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440085',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440049',
			name: {
				en_US: 'Paella & Views',
				es_ES: 'Paella y Vistas',
				ca_ES: 'Paella i Vistes',
				fr_FR: 'Paella et Vues',
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
			start_time: '13:00',
			end_time: '16:00',
			price: 32.95,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: false,
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
		{
			id: '950e8400-e29b-41d4-a716-446655440086',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440049',
			name: {
				en_US: 'Sunset Dinner',
				es_ES: 'Cena al Atardecer',
				ca_ES: 'Sopar al Capvespre',
				fr_FR: 'Dîner au Coucher du Soleil',
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
			start_time: '19:00',
			end_time: '23:00',
			price: 45.0,
			first_courses_to_share: true,
			second_courses_to_share: false,
			desserts_to_share: true,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440087',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440049',
			name: {
				en_US: 'Executive Lunch',
				es_ES: 'Almuerzo Ejecutivo',
				ca_ES: 'Dinar Executiu',
				fr_FR: 'Déjeuner Exécutif',
			},
			days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
			start_time: '13:00',
			end_time: '16:00',
			price: 28.95,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: false,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440088',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440050',
			name: {
				en_US: 'Classic Tasting Menu',
				es_ES: 'Menú Degustación Clásico',
				ca_ES: 'Menú Degustació Clàssic',
				fr_FR: 'Menu Dégustation Classique',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '13:00',
			end_time: '15:30',
			price: 95.0,
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
			includes_coffee_and_dessert: 'both',
			minimum_people: 1,
			has_minimum_people: false,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440089',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440050',
			name: {
				en_US: 'Grand Tasting Menu',
				es_ES: 'Gran Menú Degustación',
				ca_ES: 'Gran Menú Degustació',
				fr_FR: 'Grand Menu Dégustation',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '13:00',
			end_time: '15:30',
			price: 145.0,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
		{
			id: '950e8400-e29b-41d4-a716-446655440090',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440050',
			name: {
				en_US: 'Evening Experience',
				es_ES: 'Experiencia Nocturna',
				ca_ES: 'Experiència Nocturna',
				fr_FR: 'Expérience Nocturne',
			},
			days: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			start_time: '20:00',
			end_time: '22:30',
			price: 160.0,
			first_courses_to_share: false,
			second_courses_to_share: false,
			desserts_to_share: false,
			includes_bread: true,
			drinks: {
				water: true,
				wine: true,
				soft_drinks: true,
				beer: true,
			},
			includes_coffee_and_dessert: 'both',
			minimum_people: 2,
			has_minimum_people: true,
			is_active: true,
		},
	],

	dishes: [
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
		// Platos para los nuevos menús (primer bloque - 25 platos)

		// Platos para el menú "Seafood Selection" de La Paradeta (ID: 950e8400-e29b-41d4-a716-446655440017)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440011',
			menu_id: '950e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: 'Mixed Seafood Platter',
				es_ES: 'Bandeja de Mariscos Variados',
				ca_ES: 'Safata de Marisc Variat',
				fr_FR: 'Plateau de Fruits de Mer Mixtes',
			},
			description: {
				en_US:
					'Selection of fresh clams, mussels, shrimp and other seasonal seafood.',
				es_ES:
					'Selección de almejas frescas, mejillones, gambas y otros mariscos de temporada.',
				ca_ES:
					'Selecció de cloïsses fresques, musclos, gambes i altres mariscs de temporada.',
				fr_FR:
					'Sélection de palourdes fraîches, moules, crevettes et autres fruits de mer de saison.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440012',
			menu_id: '950e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: "Fisherman's Rice",
				es_ES: 'Arroz del Pescador',
				ca_ES: 'Arròs del Pescador',
				fr_FR: 'Riz du Pêcheur',
			},
			description: {
				en_US: 'Traditional rice with squid, clams, mussels and fresh fish.',
				es_ES:
					'Arroz tradicional con calamares, almejas, mejillones y pescado fresco.',
				ca_ES:
					'Arròs tradicional amb calamars, cloïsses, musclos i peix fresc.',
				fr_FR:
					'Riz traditionnel avec calamars, palourdes, moules et poisson frais.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440013',
			menu_id: '950e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: 'Grilled Sea Bass',
				es_ES: 'Lubina a la Plancha',
				ca_ES: 'Llobarro a la Planxa',
				fr_FR: 'Bar Grillé',
			},
			description: {
				en_US: 'Fresh sea bass grilled with olive oil, garlic and parsley.',
				es_ES: 'Lubina fresca a la plancha con aceite de oliva, ajo y perejil.',
				ca_ES: "Llobarro fresc a la planxa amb oli d'oliva, all i julivert.",
				fr_FR: "Bar frais grillé à l'huile d'olive, à l'ail et au persil.",
			},
			extra_price: 3,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440014',
			menu_id: '950e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: 'Catalan Cream',
				es_ES: 'Crema Catalana',
				ca_ES: 'Crema Catalana',
				fr_FR: 'Crème Catalane',
			},
			description: {
				en_US: 'Traditional Catalan dessert with caramelized sugar crust.',
				es_ES: 'Postre tradicional catalán con costra de azúcar caramelizada.',
				ca_ES: 'Postre tradicional català amb crosta de sucre caramel·litzada.',
				fr_FR: 'Dessert traditionnel catalan avec croûte de sucre caramélisé.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440015',
			menu_id: '950e8400-e29b-41d4-a716-446655440017',
			name: {
				en_US: 'Fruit Sorbet',
				es_ES: 'Sorbete de Frutas',
				ca_ES: 'Sorbet de Fruites',
				fr_FR: 'Sorbet aux Fruits',
			},
			description: {
				en_US: 'Refreshing seasonal fruit sorbet.',
				es_ES: 'Refrescante sorbete de frutas de temporada.',
				ca_ES: 'Refrescant sorbet de fruites de temporada.',
				fr_FR: 'Sorbet rafraîchissant aux fruits de saison.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},

		// Platos para el menú "Dinner Deluxe" de La Paradeta (ID: 950e8400-e29b-41d4-a716-446655440018)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440016',
			menu_id: '950e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Seafood Croquettes',
				es_ES: 'Croquetas de Marisco',
				ca_ES: 'Croquetes de Marisc',
				fr_FR: 'Croquettes aux Fruits de Mer',
			},
			description: {
				en_US: 'Homemade croquettes with bechamel and mixed seafood.',
				es_ES: 'Croquetas caseras con bechamel y mariscos variados.',
				ca_ES: 'Croquetes casolanes amb beixamel i marisc variat.',
				fr_FR: 'Croquettes maison à la béchamel et aux fruits de mer variés.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440017',
			menu_id: '950e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Garlic Prawns',
				es_ES: 'Gambas al Ajillo',
				ca_ES: "Gambes a l'All",
				fr_FR: "Crevettes à l'Ail",
			},
			description: {
				en_US: 'Fresh prawns sautéed with garlic and chili in olive oil.',
				es_ES: 'Gambas frescas salteadas con ajo y chile en aceite de oliva.',
				ca_ES: "Gambes fresques saltades amb all i xili en oli d'oliva.",
				fr_FR:
					"Crevettes fraîches sautées à l'ail et au piment dans l'huile d'olive.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440018',
			menu_id: '950e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Seafood Paella',
				es_ES: 'Paella de Mariscos',
				ca_ES: 'Paella de Marisc',
				fr_FR: 'Paella aux Fruits de Mer',
			},
			description: {
				en_US:
					'Traditional rice with saffron, shrimp, mussels, clams and squid.',
				es_ES:
					'Arroz tradicional con azafrán, gambas, mejillones, almejas y calamares.',
				ca_ES:
					'Arròs tradicional amb safrà, gambes, musclos, cloïsses i calamars.',
				fr_FR:
					'Riz traditionnel au safran, crevettes, moules, palourdes et calamars.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440019',
			menu_id: '950e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Grilled Octopus',
				es_ES: 'Pulpo a la Brasa',
				ca_ES: 'Pop a la Brasa',
				fr_FR: 'Poulpe Grillé',
			},
			description: {
				en_US: 'Tender octopus grilled with olive oil, paprika and sea salt.',
				es_ES:
					'Pulpo tierno a la brasa con aceite de oliva, pimentón y sal marina.',
				ca_ES:
					"Pop tendre a la brasa amb oli d'oliva, pebre vermell i sal marina.",
				fr_FR:
					"Poulpe tendre grillé à l'huile d'olive, au paprika et au sel de mer.",
			},
			extra_price: 5,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440020',
			menu_id: '950e8400-e29b-41d4-a716-446655440018',
			name: {
				en_US: 'Chocolate Mousse',
				es_ES: 'Mousse de Chocolate',
				ca_ES: 'Mousse de Xocolata',
				fr_FR: 'Mousse au Chocolat',
			},
			description: {
				en_US: 'Light and airy chocolate mousse with a hint of orange.',
				es_ES:
					'Mousse de chocolate ligera y esponjosa con un toque de naranja.',
				ca_ES: 'Mousse de xocolata lleugera i esponjosa amb un toc de taronja.',
				fr_FR: "Mousse au chocolat légère et aérée avec une touche d'orange.",
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Sushi Menu" de El Japonés (ID: 950e8400-e29b-41d4-a716-446655440019)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440021',
			menu_id: '950e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Edamame',
				es_ES: 'Edamame',
				ca_ES: 'Edamame',
				fr_FR: 'Edamame',
			},
			description: {
				en_US: 'Steamed young soybeans sprinkled with sea salt.',
				es_ES: 'Judías de soja jóvenes al vapor espolvoreadas con sal marina.',
				ca_ES: 'Faves de soja joves al vapor empolvorades amb sal marina.',
				fr_FR: 'Jeunes fèves de soja à la vapeur saupoudrées de sel de mer.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440022',
			menu_id: '950e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Miso Soup',
				es_ES: 'Sopa de Miso',
				ca_ES: 'Sopa de Miso',
				fr_FR: 'Soupe Miso',
			},
			description: {
				en_US: 'Traditional Japanese soup with tofu, seaweed and spring onion.',
				es_ES: 'Sopa tradicional japonesa con tofu, algas y cebolleta.',
				ca_ES: 'Sopa tradicional japonesa amb tofu, algues i cibulet.',
				fr_FR:
					'Soupe japonaise traditionnelle avec tofu, algues et oignon vert.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440023',
			menu_id: '950e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Nigiri Selection',
				es_ES: 'Selección de Nigiri',
				ca_ES: 'Selecció de Nigiri',
				fr_FR: 'Sélection de Nigiri',
			},
			description: {
				en_US:
					'Assortment of fresh fish over pressed rice: tuna, salmon, sea bass and prawn.',
				es_ES:
					'Surtido de pescado fresco sobre arroz prensado: atún, salmón, lubina y gamba.',
				ca_ES:
					'Assortiment de peix fresc sobre arròs premsat: tonyina, salmó, llobarro i gamba.',
				fr_FR:
					'Assortiment de poisson frais sur riz pressé: thon, saumon, bar et crevette.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440024',
			menu_id: '950e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Maki Roll Selection',
				es_ES: 'Selección de Maki',
				ca_ES: 'Selecció de Maki',
				fr_FR: 'Sélection de Maki',
			},
			description: {
				en_US:
					'Variety of maki rolls: california, spicy tuna, salmon and avocado.',
				es_ES:
					'Variedad de rollos maki: california, atún picante, salmón y aguacate.',
				ca_ES:
					'Varietat de rotlles maki: califòrnia, tonyina picant, salmó i alvocat.',
				fr_FR:
					'Variété de rouleaux maki: californie, thon épicé, saumon et avocat.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440025',
			menu_id: '950e8400-e29b-41d4-a716-446655440019',
			name: {
				en_US: 'Green Tea Ice Cream',
				es_ES: 'Helado de Té Verde',
				ca_ES: 'Gelat de Te Verd',
				fr_FR: 'Glace au Thé Vert',
			},
			description: {
				en_US: 'Creamy matcha green tea ice cream.',
				es_ES: 'Cremoso helado de té verde matcha.',
				ca_ES: 'Cremós gelat de te verd matcha.',
				fr_FR: 'Glace crémeuse au thé vert matcha.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Omakase Experience" de El Japonés (ID: 950e8400-e29b-41d4-a716-446655440020)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440026',
			menu_id: '950e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: 'Tuna Tartare',
				es_ES: 'Tartar de Atún',
				ca_ES: 'Tàrtar de Tonyina',
				fr_FR: 'Tartare de Thon',
			},
			description: {
				en_US: 'Fresh tuna tartare with avocado, sesame oil and soy sauce.',
				es_ES:
					'Tartar de atún fresco con aguacate, aceite de sésamo y salsa de soja.',
				ca_ES:
					'Tàrtar de tonyina fresca amb alvocat, oli de sèsam i salsa de soja.',
				fr_FR:
					'Tartare de thon frais avec avocat, huile de sésame et sauce soja.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440027',
			menu_id: '950e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: 'Sashimi Platter',
				es_ES: 'Plato de Sashimi',
				ca_ES: 'Plat de Sashimi',
				fr_FR: 'Plateau de Sashimi',
			},
			description: {
				en_US:
					'Selection of premium raw fish slices: toro, salmon, yellowtail and sea bream.',
				es_ES:
					'Selección de lonchas de pescado crudo premium: toro, salmón, pez limón y dorada.',
				ca_ES:
					'Selecció de llesques de peix cru premium: toro, salmó, peix llimona i orada.',
				fr_FR:
					'Sélection de tranches de poisson cru premium: toro, saumon, sériole et daurade.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440028',
			menu_id: '950e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: 'Wagyu Nigiri',
				es_ES: 'Nigiri de Wagyu',
				ca_ES: 'Nigiri de Wagyu',
				fr_FR: 'Nigiri de Wagyu',
			},
			description: {
				en_US: 'Seared A5 Wagyu beef over sushi rice with a touch of wasabi.',
				es_ES:
					'Carne de ternera Wagyu A5 marcada sobre arroz de sushi con un toque de wasabi.',
				ca_ES:
					'Carn de vedella Wagyu A5 marcada sobre arròs de sushi amb un toc de wasabi.',
				fr_FR: 'Bœuf Wagyu A5 saisi sur riz à sushi avec une touche de wasabi.',
			},
			extra_price: 8,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440029',
			menu_id: '950e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: "Chef's Special Sushi",
				es_ES: 'Sushi Especial del Chef',
				ca_ES: 'Sushi Especial del Xef',
				fr_FR: 'Sushi Spécial du Chef',
			},
			description: {
				en_US:
					'Selection of special nigiri and maki prepared by the chef with seasonal ingredients.',
				es_ES:
					'Selección de nigiri y maki especiales preparados por el chef con ingredientes de temporada.',
				ca_ES:
					'Selecció de nigiri i maki especials preparats pel xef amb ingredients de temporada.',
				fr_FR:
					'Sélection de nigiri et maki spéciaux préparés par le chef avec des ingrédients de saison.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440030',
			menu_id: '950e8400-e29b-41d4-a716-446655440020',
			name: {
				en_US: 'Mochi Ice Cream',
				es_ES: 'Mochi Helado',
				ca_ES: 'Mochi Gelat',
				fr_FR: 'Mochi Glacé',
			},
			description: {
				en_US: 'Japanese rice cake filled with ice cream in various flavors.',
				es_ES: 'Pastel de arroz japonés relleno de helado en varios sabores.',
				ca_ES: "Pastís d'arròs japonès farcit de gelat en diversos sabors.",
				fr_FR: 'Gâteau de riz japonais fourré à la glace en diverses saveurs.',
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

		// Platos para el menú "Pasta Lover" de La Tagliatella (ID: 950e8400-e29b-41d4-a716-446655440021)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440031',
			menu_id: '950e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Caprese Salad',
				es_ES: 'Ensalada Caprese',
				ca_ES: 'Amanida Caprese',
				fr_FR: 'Salade Caprese',
			},
			description: {
				en_US: 'Fresh mozzarella, tomatoes, basil and olive oil drizzle.',
				es_ES: 'Mozzarella fresca, tomates, albahaca y aceite de oliva.',
				ca_ES: "Mozzarella fresca, tomàquets, alfàbrega i oli d'oliva.",
				fr_FR: "Mozzarella fraîche, tomates, basilic et filet d'huile d'olive.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440032',
			menu_id: '950e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Bruschetta',
				es_ES: 'Bruschetta',
				ca_ES: 'Bruschetta',
				fr_FR: 'Bruschetta',
			},
			description: {
				en_US:
					'Toasted bread topped with diced tomatoes, garlic, basil and olive oil.',
				es_ES:
					'Pan tostado cubierto con tomates en dados, ajo, albahaca y aceite de oliva.',
				ca_ES:
					"Pa torrat cobert amb tomàquets a daus, all, alfàbrega i oli d'oliva.",
				fr_FR:
					"Pain grillé garni de tomates en dés, ail, basilic et huile d'olive.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440033',
			menu_id: '950e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Tagliatelle Bolognese',
				es_ES: 'Tagliatelle Boloñesa',
				ca_ES: 'Tagliatelle Bolonyesa',
				fr_FR: 'Tagliatelles Bolognaise',
			},
			description: {
				en_US:
					'Ribbon pasta with traditional meat sauce, carrots, celery and tomatoes.',
				es_ES:
					'Pasta en cintas con salsa tradicional de carne, zanahorias, apio y tomates.',
				ca_ES:
					'Pasta en cintes amb salsa tradicional de carn, pastanagues, api i tomàquets.',
				fr_FR:
					'Pâtes en ruban avec sauce traditionnelle à la viande, carottes, céleri et tomates.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440034',
			menu_id: '950e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Fettuccine Alfredo',
				es_ES: 'Fettuccine Alfredo',
				ca_ES: 'Fettuccine Alfredo',
				fr_FR: 'Fettuccine Alfredo',
			},
			description: {
				en_US: 'Creamy pasta with butter, parmesan cheese and black pepper.',
				es_ES:
					'Pasta cremosa con mantequilla, queso parmesano y pimienta negra.',
				ca_ES: 'Pasta cremosa amb mantega, formatge parmesà i pebre negre.',
				fr_FR: 'Pâtes crémeuses au beurre, parmesan et poivre noir.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440035',
			menu_id: '950e8400-e29b-41d4-a716-446655440021',
			name: {
				en_US: 'Tiramisu',
				es_ES: 'Tiramisú',
				ca_ES: 'Tiramisú',
				fr_FR: 'Tiramisu',
			},
			description: {
				en_US:
					'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
				es_ES:
					'Postre italiano clásico con bizcochos empapados en café y crema de mascarpone.',
				ca_ES:
					'Postre italià clàssic amb melindros xopats en cafè i crema de mascarpone.',
				fr_FR:
					'Dessert italien classique avec biscuits à la cuillère imbibés de café et crème de mascarpone.',
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
		// Platos para más menús (segundo bloque - 25 platos adicionales)

		// Platos para el menú "Italian Weekend" de La Tagliatella (ID: 950e8400-e29b-41d4-a716-446655440022)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440036',
			menu_id: '950e8400-e29b-41d4-a716-446655440022',
			name: {
				en_US: 'Antipasti Platter',
				es_ES: 'Tabla de Antipasti',
				ca_ES: "Taula d'Antipasti",
				fr_FR: "Plateau d'Antipasti",
			},
			description: {
				en_US: 'Traditional Spanish caramel custard.',
				es_ES: 'Flan tradicional español con caramelo.',
				ca_ES: 'Flam tradicional espanyol amb caramel.',
				fr_FR: 'Flan caramel traditionnel espagnol.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440058',
			menu_id: '950e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Seasonal Fruit',
				es_ES: 'Fruta de Temporada',
				ca_ES: 'Fruita de Temporada',
				fr_FR: 'Fruits de Saison',
			},
			description: {
				en_US: 'Selection of fresh seasonal fruits.',
				es_ES: 'Selección de frutas frescas de temporada.',
				ca_ES: 'Selecció de fruites fresques de temporada.',
				fr_FR: 'Sélection de fruits frais de saison.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440037',
			menu_id: '950e8400-e29b-41d4-a716-446655440022',
			name: {
				en_US: 'Burrata Salad',
				es_ES: 'Ensalada de Burrata',
				ca_ES: 'Amanida de Burrata',
				fr_FR: 'Salade de Burrata',
			},
			description: {
				en_US:
					'Creamy burrata cheese served with cherry tomatoes, arugula and olive oil.',
				es_ES:
					'Queso burrata cremoso servido con tomates cherry, rúcula y aceite de oliva.',
				ca_ES:
					"Formatge burrata cremós servit amb tomàquets cherry, ruca i oli d'oliva.",
				fr_FR:
					"Fromage burrata crémeux servi avec tomates cerises, roquette et huile d'olive.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440038',
			menu_id: '950e8400-e29b-41d4-a716-446655440022',
			name: {
				en_US: 'Gnocchi Quattro Formaggi',
				es_ES: 'Ñoquis Cuatro Quesos',
				ca_ES: 'Nyoquis Quatre Formatges',
				fr_FR: 'Gnocchi Quatre Fromages',
			},
			description: {
				en_US: 'Potato dumplings in a creamy sauce of four Italian cheeses.',
				es_ES: 'Ñoquis de patata en salsa cremosa de cuatro quesos italianos.',
				ca_ES:
					'Nyoquis de patata en salsa cremosa de quatre formatges italians.',
				fr_FR:
					'Gnocchi de pomme de terre dans une sauce crémeuse aux quatre fromages italiens.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440039',
			menu_id: '950e8400-e29b-41d4-a716-446655440022',
			name: {
				en_US: 'Ossobuco Milanese',
				es_ES: 'Ossobuco Milanés',
				ca_ES: 'Ossobuco Milanès',
				fr_FR: 'Ossobuco Milanais',
			},
			description: {
				en_US: 'Braised veal shanks with vegetables, white wine and gremolata.',
				es_ES:
					'Jarrete de ternera estofado con verduras, vino blanco y gremolata.',
				ca_ES: 'Garró de vedella estofat amb verdures, vi blanc i gremolata.',
				fr_FR: 'Jarret de veau braisé aux légumes, vin blanc et gremolata.',
			},
			extra_price: 5,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440040',
			menu_id: '950e8400-e29b-41d4-a716-446655440022',
			name: {
				en_US: 'Panna Cotta',
				es_ES: 'Panna Cotta',
				ca_ES: 'Panna Cotta',
				fr_FR: 'Panna Cotta',
			},
			description: {
				en_US: 'Silky vanilla cream dessert with berry coulis.',
				es_ES: 'Postre de crema sedosa de vainilla con coulis de frutos rojos.',
				ca_ES:
					'Postre de crema sedosa de vainilla amb coulis de fruits vermells.',
				fr_FR: 'Dessert crémeux à la vanille avec coulis de baies.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Business Lunch" de La Tagliatella (ID: 950e8400-e29b-41d4-a716-446655440023)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440041',
			menu_id: '950e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Minestrone Soup',
				es_ES: 'Sopa Minestrone',
				ca_ES: 'Sopa Minestrone',
				fr_FR: 'Soupe Minestrone',
			},
			description: {
				en_US: 'Hearty Italian vegetable soup with pasta and beans.',
				es_ES: 'Sustanciosa sopa italiana de verduras con pasta y alubias.',
				ca_ES: 'Substanciosa sopa italiana de verdures amb pasta i mongetes.',
				fr_FR: 'Copieuse soupe italienne aux légumes avec pâtes et haricots.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440042',
			menu_id: '950e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Arancini',
				es_ES: 'Arancini',
				ca_ES: 'Arancini',
				fr_FR: 'Arancini',
			},
			description: {
				en_US: 'Crispy fried rice balls filled with ragù, peas and mozzarella.',
				es_ES:
					'Bolas de arroz fritas y crujientes rellenas de ragú, guisantes y mozzarella.',
				ca_ES:
					"Boles d'arròs fregides i cruixents farcides de ragú, pèsols i mozzarella.",
				fr_FR:
					'Boules de riz frites et croustillantes farcies de ragù, petits pois et mozzarella.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440043',
			menu_id: '950e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Risotto ai Funghi',
				es_ES: 'Risotto de Setas',
				ca_ES: 'Risotto de Bolets',
				fr_FR: 'Risotto aux Champignons',
			},
			description: {
				en_US:
					'Creamy arborio rice with wild mushrooms, white wine and parmesan.',
				es_ES:
					'Arroz arborio cremoso con setas silvestres, vino blanco y parmesano.',
				ca_ES:
					'Arròs arborio cremós amb bolets silvestres, vi blanc i parmesà.',
				fr_FR:
					'Riz arborio crémeux aux champignons sauvages, vin blanc et parmesan.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440044',
			menu_id: '950e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Scaloppine al Limone',
				es_ES: 'Escalopines al Limón',
				ca_ES: 'Escalopins a la Llimona',
				fr_FR: 'Escalopes au Citron',
			},
			description: {
				en_US:
					'Thin slices of veal sautéed with lemon, butter and white wine sauce.',
				es_ES:
					'Finas lonchas de ternera salteadas con limón, mantequilla y salsa de vino blanco.',
				ca_ES:
					'Fines llesques de vedella saltades amb llimona, mantega i salsa de vi blanc.',
				fr_FR:
					'Fines tranches de veau sautées au citron, beurre et sauce au vin blanc.',
			},
			extra_price: 3,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440045',
			menu_id: '950e8400-e29b-41d4-a716-446655440023',
			name: {
				en_US: 'Cannoli Siciliani',
				es_ES: 'Cannoli Sicilianos',
				ca_ES: 'Cannoli Sicilians',
				fr_FR: 'Cannoli Siciliens',
			},
			description: {
				en_US:
					'Crispy pastry tubes filled with sweet ricotta cream and pistachios.',
				es_ES:
					'Tubos de masa crujiente rellenos de crema dulce de ricotta y pistachos.',
				ca_ES:
					'Tubs de massa cruixent farcits de crema dolça de ricotta i festucs.',
				fr_FR:
					'Tubes de pâte croustillante farcis de crème de ricotta sucrée et pistaches.',
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

		// Platos para el menú "Tapas Tasting" de Casa Carmen (ID: 950e8400-e29b-41d4-a716-446655440024)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440046',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Patatas Bravas',
				es_ES: 'Patatas Bravas',
				ca_ES: 'Patates Braves',
				fr_FR: 'Patatas Bravas',
			},
			description: {
				en_US: 'Fried potato cubes served with spicy tomato sauce and aioli.',
				es_ES:
					'Cubos de patata frita servidos con salsa picante de tomate y alioli.',
				ca_ES:
					'Daus de patata fregida servits amb salsa picant de tomàquet i allioli.',
				fr_FR:
					'Cubes de pommes de terre frites servis avec sauce tomate épicée et aïoli.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440047',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Jamón Ibérico',
				es_ES: 'Jamón Ibérico',
				ca_ES: 'Pernil Ibèric',
				fr_FR: 'Jambon Ibérique',
			},
			description: {
				en_US: 'Hand-sliced premium Iberian ham served with bread and tomato.',
				es_ES: 'Jamón ibérico premium cortado a mano servido con pan y tomate.',
				ca_ES: 'Pernil ibèric premium tallat a mà servit amb pa i tomàquet.',
				fr_FR:
					'Jambon ibérique premium tranché à la main servi avec du pain et de la tomate.',
			},
			extra_price: 5,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440048',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Croquetas de Jamón',
				es_ES: 'Croquetas de Jamón',
				ca_ES: 'Croquetes de Pernil',
				fr_FR: 'Croquettes au Jambon',
			},
			description: {
				en_US: 'Homemade creamy croquettes with Iberian ham.',
				es_ES: 'Croquetas caseras cremosas con jamón ibérico.',
				ca_ES: 'Croquetes casolanes cremoses amb pernil ibèric.',
				fr_FR: 'Croquettes crémeuses maison au jambon ibérique.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440049',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Gambas al Ajillo',
				es_ES: 'Gambas al Ajillo',
				ca_ES: "Gambes a l'All",
				fr_FR: "Crevettes à l'Ail",
			},
			description: {
				en_US: 'Shrimp sautéed in olive oil with garlic and chili pepper.',
				es_ES: 'Gambas salteadas en aceite de oliva con ajo y guindilla.',
				ca_ES: "Gambes saltades en oli d'oliva amb all i bitxo.",
				fr_FR: "Crevettes sautées à l'huile d'olive avec ail et piment.",
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440050',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Pulpo a la Gallega',
				es_ES: 'Pulpo a la Gallega',
				ca_ES: 'Pop a la Gallega',
				fr_FR: 'Poulpe à la Galicienne',
			},
			description: {
				en_US:
					'Tender octopus slices served on potatoes with olive oil and paprika.',
				es_ES:
					'Rodajas de pulpo tierno servidas sobre patatas con aceite de oliva y pimentón.',
				ca_ES:
					"Rodanxes de pop tendre servides sobre patates amb oli d'oliva i pebre vermell.",
				fr_FR:
					"Tranches de poulpe tendre servies sur pommes de terre avec huile d'olive et paprika.",
			},
			extra_price: 4,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440051',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Tortilla Española',
				es_ES: 'Tortilla Española',
				ca_ES: 'Truita Espanyola',
				fr_FR: 'Tortilla Espagnole',
			},
			description: {
				en_US: 'Spanish omelette with potatoes and onions.',
				es_ES: 'Tortilla española con patatas y cebollas.',
				ca_ES: 'Truita espanyola amb patates i cebes.',
				fr_FR: 'Omelette espagnole aux pommes de terre et oignons.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440052',
			menu_id: '950e8400-e29b-41d4-a716-446655440024',
			name: {
				en_US: 'Churros con Chocolate',
				es_ES: 'Churros con Chocolate',
				ca_ES: 'Xurros amb Xocolata',
				fr_FR: 'Churros au Chocolat',
			},
			description: {
				en_US:
					'Fried dough pastry served with thick hot chocolate for dipping.',
				es_ES: 'Masa frita servida con chocolate caliente espeso para mojar.',
				ca_ES: 'Massa fregida servida amb xocolata calenta espessa per sucar.',
				fr_FR: 'Pâte frite servie avec du chocolat chaud épais pour tremper.',
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

		// Platos para el menú "Daily Menu" de Casa Carmen (ID: 950e8400-e29b-41d4-a716-446655440025)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440053',
			menu_id: '950e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Mixed Salad',
				es_ES: 'Ensalada Mixta',
				ca_ES: 'Amanida Mixta',
				fr_FR: 'Salade Mixte',
			},
			description: {
				en_US:
					'Fresh lettuce, tomatoes, onions, tuna, eggs and olives with vinaigrette.',
				es_ES:
					'Lechuga fresca, tomates, cebollas, atún, huevos y aceitunas con vinagreta.',
				ca_ES:
					'Enciam fresc, tomàquets, cebes, tonyina, ous i olives amb vinagreta.',
				fr_FR:
					'Laitue fraîche, tomates, oignons, thon, œufs et olives avec vinaigrette.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440054',
			menu_id: '950e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Gazpacho',
				es_ES: 'Gazpacho',
				ca_ES: 'Gaspatxo',
				fr_FR: 'Gaspacho',
			},
			description: {
				en_US:
					'Cold tomato soup with cucumber, bell pepper, onion and olive oil.',
				es_ES:
					'Sopa fría de tomate con pepino, pimiento, cebolla y aceite de oliva.',
				ca_ES:
					"Sopa freda de tomàquet amb cogombre, pebrot, ceba i oli d'oliva.",
				fr_FR:
					"Soupe froide à la tomate avec concombre, poivron, oignon et huile d'olive.",
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
			id: 'a50e8400-e29b-41d4-a716-446655440055',
			menu_id: '950e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Paella de Marisco',
				es_ES: 'Paella de Marisco',
				ca_ES: 'Paella de Marisc',
				fr_FR: 'Paella aux Fruits de Mer',
			},
			description: {
				en_US:
					'Traditional seafood paella with rice, shrimp, mussels and squid.',
				es_ES:
					'Paella tradicional de mariscos con arroz, gambas, mejillones y calamares.',
				ca_ES:
					'Paella tradicional de marisc amb arròs, gambes, musclos i calamars.',
				fr_FR:
					'Paella traditionnelle aux fruits de mer avec riz, crevettes, moules et calamars.',
			},
			extra_price: 3,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440056',
			menu_id: '950e8400-e29b-41d4-a716-446655440025',
			name: {
				en_US: 'Grilled Chicken',
				es_ES: 'Pollo a la Plancha',
				ca_ES: 'Pollastre a la Planxa',
				fr_FR: 'Poulet Grillé',
			},
			description: {
				en_US:
					'Grilled chicken breast served with roasted potatoes and seasonal vegetables.',
				es_ES:
					'Pechuga de pollo a la plancha servida con patatas asadas y verduras de temporada.',
				ca_ES:
					'Pit de pollastre a la planxa servit amb patates rostides i verdures de temporada.',
				fr_FR:
					'Poitrine de poulet grillée servie avec pommes de terre rôties et légumes de saison.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440059',
			menu_id: '950e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Seafood Soup',
				es_ES: 'Sopa de Mariscos',
				ca_ES: 'Sopa de Marisc',
				fr_FR: 'Soupe aux Fruits de Mer',
			},
			description: {
				en_US: 'Rich fish broth with prawns, mussels and clams.',
				es_ES: 'Rico caldo de pescado con langostinos, mejillones y almejas.',
				ca_ES: 'Ric brou de peix amb llagostins, musclos i cloïsses.',
				fr_FR: 'Riche bouillon de poisson avec crevettes, moules et palourdes.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440081',
			menu_id: '950e8400-e29b-41d4-a716-446655440029',
			name: {
				en_US: 'Pla Rad Prik',
				es_ES: 'Pla Rad Prik',
				ca_ES: 'Pla Rad Prik',
				fr_FR: 'Pla Rad Prik',
			},
			description: {
				en_US: 'Deep-fried whole fish with spicy sweet and sour chili sauce.',
				es_ES: 'Pescado entero frito con salsa picante agridulce de chile.',
				ca_ES: 'Peix sencer fregit amb salsa picant agredolça de xili.',
				fr_FR: 'Poisson entier frit avec sauce chili aigre-douce épicée.',
			},
			extra_price: 5,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440082',
			menu_id: '950e8400-e29b-41d4-a716-446655440029',
			name: {
				en_US: 'Duck with Red Curry',
				es_ES: 'Pato con Curry Rojo',
				ca_ES: 'Ànec amb Curry Vermell',
				fr_FR: 'Canard au Curry Rouge',
			},
			description: {
				en_US:
					'Roasted duck with red curry sauce, pineapple, grapes and cherry tomatoes.',
				es_ES:
					'Pato asado con salsa de curry rojo, piña, uvas y tomates cherry.',
				ca_ES:
					'Ànec rostit amb salsa de curry vermell, pinya, raïm i tomàquets cherry.',
				fr_FR:
					'Canard rôti avec sauce curry rouge, ananas, raisins et tomates cerises.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440083',
			menu_id: '950e8400-e29b-41d4-a716-446655440029',
			name: {
				en_US: 'Mango with Sticky Rice',
				es_ES: 'Mango con Arroz Glutinoso',
				ca_ES: 'Mango amb Arròs Glutinós',
				fr_FR: 'Mangue au Riz Gluant',
			},
			description: {
				en_US: 'Fresh ripe mango with sweet coconut sticky rice.',
				es_ES: 'Mango maduro fresco con arroz glutinoso dulce de coco.',
				ca_ES: 'Mango madur fresc amb arròs glutinós dolç de coco.',
				fr_FR: 'Mangue fraîche mûre avec riz gluant sucré à la noix de coco.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440060',
			menu_id: '950e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Galician Octopus',
				es_ES: 'Pulpo a la Gallega',
				ca_ES: 'Pop a la Gallega',
				fr_FR: 'Poulpe à la Galicienne',
			},
			description: {
				en_US: 'Octopus slices served with potatoes, olive oil and paprika.',
				es_ES:
					'Rodajas de pulpo servidas con patatas, aceite de oliva y pimentón.',
				ca_ES:
					"Rodanxes de pop servides amb patates, oli d'oliva i pebre vermell.",
				fr_FR:
					"Tranches de poulpe servies avec pommes de terre, huile d'olive et paprika.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440061',
			menu_id: '950e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Grilled Sea Bass',
				es_ES: 'Lubina a la Plancha',
				ca_ES: 'Llobarro a la Planxa',
				fr_FR: 'Bar Grillé',
			},
			description: {
				en_US: 'Fresh sea bass grilled with olive oil, garlic and parsley.',
				es_ES: 'Lubina fresca a la plancha con aceite de oliva, ajo y perejil.',
				ca_ES: "Llobarro fresc a la planxa amb oli d'oliva, all i julivert.",
				fr_FR: "Bar frais grillé avec huile d'olive, ail et persil.",
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
			id: 'a50e8400-e29b-41d4-a716-446655440062',
			menu_id: '950e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Grilled Turbot',
				es_ES: 'Rodaballo a la Plancha',
				ca_ES: 'Turbot a la Planxa',
				fr_FR: 'Turbot Grillé',
			},
			description: {
				en_US:
					'Premium turbot fish grilled and served with seasonal vegetables.',
				es_ES:
					'Rodaballo premium a la plancha servido con verduras de temporada.',
				ca_ES: 'Turbot premium a la planxa servit amb verdures de temporada.',
				fr_FR: 'Turbot premium grillé et servi avec des légumes de saison.',
			},
			extra_price: 5,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440063',
			menu_id: '950e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Catalan Cream',
				es_ES: 'Crema Catalana',
				ca_ES: 'Crema Catalana',
				fr_FR: 'Crème Catalane',
			},
			description: {
				en_US: 'Traditional Catalan dessert with caramelized sugar crust.',
				es_ES: 'Postre tradicional catalán con costra de azúcar caramelizada.',
				ca_ES: 'Postre tradicional català amb crosta de sucre caramel·litzada.',
				fr_FR: 'Dessert traditionnel catalan avec croûte de sucre caramélisé.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440064',
			menu_id: '950e8400-e29b-41d4-a716-446655440026',
			name: {
				en_US: 'Santiago Cake',
				es_ES: 'Tarta de Santiago',
				ca_ES: 'Pastís de Santiago',
				fr_FR: 'Gâteau de Saint-Jacques',
			},
			description: {
				en_US: 'Traditional almond cake from Galicia with powdered sugar.',
				es_ES: 'Tarta tradicional de almendras de Galicia con azúcar glas.',
				ca_ES: "Pastís tradicional d'ametlles de Galícia amb sucre en pols.",
				fr_FR:
					'Gâteau traditionnel aux amandes de Galice avec sucre en poudre.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Gourmet Experience" de Botafumeiro (ID: 950e8400-e29b-41d4-a716-446655440027)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440065',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Seafood Platter',
				es_ES: 'Mariscada',
				ca_ES: 'Mariscada',
				fr_FR: 'Plateau de Fruits de Mer',
			},
			description: {
				en_US:
					'Selection of premium seafood: lobster, prawns, crab, oysters and clams.',
				es_ES:
					'Selección de mariscos premium: bogavante, langostinos, centollo, ostras y almejas.',
				ca_ES:
					'Selecció de marisc premium: llagosta, llagostins, cabra de mar, ostres i cloïsses.',
				fr_FR:
					'Sélection de fruits de mer premium: homard, crevettes, crabe, huîtres et palourdes.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440066',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Oysters with Cava',
				es_ES: 'Ostras con Cava',
				ca_ES: 'Ostres amb Cava',
				fr_FR: 'Huîtres au Cava',
			},
			description: {
				en_US: 'Fresh oysters served with Catalan sparkling wine.',
				es_ES: 'Ostras frescas servidas con vino espumoso catalán.',
				ca_ES: 'Ostres fresques servides amb vi escumós català.',
				fr_FR: 'Huîtres fraîches servies avec du vin mousseux catalan.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440067',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Lobster Rice',
				es_ES: 'Arroz con Bogavante',
				ca_ES: 'Arròs amb Llagosta',
				fr_FR: 'Riz au Homard',
			},
			description: {
				en_US: 'Traditional rice with fresh lobster, saffron and fish broth.',
				es_ES:
					'Arroz tradicional con bogavante fresco, azafrán y caldo de pescado.',
				ca_ES: 'Arròs tradicional amb llagosta fresca, safrà i brou de peix.',
				fr_FR:
					'Riz traditionnel au homard frais, safran et bouillon de poisson.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440068',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Grilled Monkfish',
				es_ES: 'Rape a la Plancha',
				ca_ES: 'Rap a la Planxa',
				fr_FR: 'Lotte Grillée',
			},
			description: {
				en_US: 'Tender monkfish medallions grilled with garlic oil and herbs.',
				es_ES:
					'Medallones de rape tierno a la plancha con aceite de ajo y hierbas.',
				ca_ES: "Medallons de rap tendre a la planxa amb oli d'all i herbes.",
				fr_FR:
					"Médaillons de lotte tendre grillés à l'huile d'ail et aux herbes.",
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
			id: 'a50e8400-e29b-41d4-a716-446655440069',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Seafood Paella',
				es_ES: 'Paella de Mariscos',
				ca_ES: 'Paella de Marisc',
				fr_FR: 'Paella aux Fruits de Mer',
			},
			description: {
				en_US:
					'Traditional paella with premium seafood, saffron rice and socarrat.',
				es_ES:
					'Paella tradicional con mariscos premium, arroz con azafrán y socarrat.',
				ca_ES:
					'Paella tradicional amb marisc premium, arròs amb safrà i socarrat.',
				fr_FR:
					'Paella traditionnelle aux fruits de mer premium, riz au safran et socarrat.',
			},
			extra_price: 5,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440070',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Chocolate Soufflé',
				es_ES: 'Soufflé de Chocolate',
				ca_ES: 'Soufflé de Xocolata',
				fr_FR: 'Soufflé au Chocolat',
			},
			description: {
				en_US: 'Warm chocolate soufflé with vanilla ice cream.',
				es_ES: 'Soufflé caliente de chocolate con helado de vainilla.',
				ca_ES: 'Soufflé calent de xocolata amb gelat de vainilla.',
				fr_FR: 'Soufflé chaud au chocolat avec glace à la vanille.',
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
		{
			id: 'a50e8400-e29b-41d4-a716-446655440071',
			menu_id: '950e8400-e29b-41d4-a716-446655440027',
			name: {
				en_US: 'Sorbet Selection',
				es_ES: 'Selección de Sorbetes',
				ca_ES: 'Selecció de Sorbets',
				fr_FR: 'Sélection de Sorbets',
			},
			description: {
				en_US: 'Trio of homemade sorbets: lemon, mango and raspberry.',
				es_ES: 'Trío de sorbetes caseros: limón, mango y frambuesa.',
				ca_ES: 'Trio de sorbets casolans: llimona, mango i gerds.',
				fr_FR: 'Trio de sorbets maison: citron, mangue et framboise.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},

		// Platos para el menú "Thai Express Lunch" de Thai Barcelona (ID: 950e8400-e29b-41d4-a716-446655440028)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440072',
			menu_id: '950e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Spring Rolls',
				es_ES: 'Rollitos de Primavera',
				ca_ES: 'Rotllets de Primavera',
				fr_FR: 'Rouleaux de Printemps',
			},
			description: {
				en_US: 'Crispy vegetable spring rolls with sweet chili sauce.',
				es_ES:
					'Crujientes rollitos de primavera de verduras con salsa de chile dulce.',
				ca_ES:
					'Cruixents rotllets de primavera de verdures amb salsa de xili dolç.',
				fr_FR:
					'Rouleaux de printemps croustillants aux légumes avec sauce chili douce.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440073',
			menu_id: '950e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Tom Yum Soup',
				es_ES: 'Sopa Tom Yum',
				ca_ES: 'Sopa Tom Yum',
				fr_FR: 'Soupe Tom Yum',
			},
			description: {
				en_US: 'Spicy and sour Thai soup with shrimp, lemongrass and galangal.',
				es_ES:
					'Sopa tailandesa picante y ácida con gambas, hierba de limón y galanga.',
				ca_ES:
					'Sopa tailandesa picant i àcida amb gambes, herba de llimona i galanga.',
				fr_FR:
					'Soupe thaïlandaise épicée et acide aux crevettes, citronnelle et galanga.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440074',
			menu_id: '950e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Pad Thai',
				es_ES: 'Pad Thai',
				ca_ES: 'Pad Thai',
				fr_FR: 'Pad Thai',
			},
			description: {
				en_US:
					'Stir-fried rice noodles with tofu, bean sprouts, eggs and peanuts.',
				es_ES:
					'Fideos de arroz salteados con tofu, brotes de soja, huevos y cacahuetes.',
				ca_ES:
					"Fideus d'arròs saltats amb tofu, brots de soja, ous i cacauets.",
				fr_FR:
					'Nouilles de riz sautées avec tofu, pousses de soja, œufs et cacahuètes.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440075',
			menu_id: '950e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Green Curry',
				es_ES: 'Curry Verde',
				ca_ES: 'Curry Verd',
				fr_FR: 'Curry Vert',
			},
			description: {
				en_US:
					'Spicy Thai green curry with coconut milk, chicken and vegetables.',
				es_ES:
					'Curry verde tailandés picante con leche de coco, pollo y verduras.',
				ca_ES:
					'Curry verd tailandès picant amb llet de coco, pollastre i verdures.',
				fr_FR:
					'Curry vert thaïlandais épicé au lait de coco, poulet et légumes.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440076',
			menu_id: '950e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Mango Sticky Rice',
				es_ES: 'Arroz Pegajoso con Mango',
				ca_ES: 'Arròs Enganxós amb Mango',
				fr_FR: 'Riz Gluant à la Mangue',
			},
			description: {
				en_US: 'Sweet sticky rice with fresh mango and coconut sauce.',
				es_ES: 'Arroz pegajoso dulce con mango fresco y salsa de coco.',
				ca_ES: 'Arròs enganxós dolç amb mango fresc i salsa de coco.',
				fr_FR: 'Riz gluant sucré avec mangue fraîche et sauce coco.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440077',
			menu_id: '950e8400-e29b-41d4-a716-446655440028',
			name: {
				en_US: 'Coconut Ice Cream',
				es_ES: 'Helado de Coco',
				ca_ES: 'Gelat de Coco',
				fr_FR: 'Glace à la Noix de Coco',
			},
			description: {
				en_US: 'Homemade coconut ice cream served with toasted coconut flakes.',
				es_ES: 'Helado casero de coco servido con copos de coco tostado.',
				ca_ES: 'Gelat casolà de coco servit amb flocs de coco torrat.',
				fr_FR:
					'Glace à la noix de coco maison servie avec des flocons de coco grillés.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},

		// Platos para el menú "Thai Royal Dinner" de Thai Barcelona (ID: 950e8400-e29b-41d4-a716-446655440029)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440078',
			menu_id: '950e8400-e29b-41d4-a716-446655440029',
			name: {
				en_US: 'Royal Appetizer Platter',
				es_ES: 'Surtido de Entrantes Reales',
				ca_ES: "Assortiment d'Entrants Reials",
				fr_FR: "Plateau d'Entrées Royales",
			},
			description: {
				en_US:
					'Selection of Thai appetizers: satay, spring rolls, fish cakes and shrimp toast.',
				es_ES:
					'Selección de entrantes tailandeses: satay, rollitos de primavera, pasteles de pescado y tostada de gambas.',
				ca_ES:
					"Selecció d'entrants tailandesos: satay, rotllets de primavera, pastissos de peix i torrada de gambes.",
				fr_FR:
					"Sélection d'entrées thaïlandaises: satay, rouleaux de printemps, galettes de poisson et toasts aux crevettes.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440079',
			menu_id: '950e8400-e29b-41d4-a716-446655440029',
			name: {
				en_US: 'Tom Kha Gai',
				es_ES: 'Tom Kha Gai',
				ca_ES: 'Tom Kha Gai',
				fr_FR: 'Tom Kha Gai',
			},
			description: {
				en_US: 'Chicken soup with coconut milk, galangal, lemongrass and lime.',
				es_ES:
					'Sopa de pollo con leche de coco, galanga, hierba de limón y lima.',
				ca_ES:
					'Sopa de pollastre amb llet de coco, galanga, herba de llimona i llima.',
				fr_FR:
					'Soupe au poulet avec lait de coco, galanga, citronnelle et citron vert.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		// Platos para más menús (cuarto bloque - 25 platos adicionales)

		// Platos para el menú "Ramen Set" de Koku Kitchen Ramen (ID: 950e8400-e29b-41d4-a716-446655440054)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440084',
			menu_id: '950e8400-e29b-41d4-a716-446655440054',
			name: {
				en_US: 'Edamame',
				es_ES: 'Edamame',
				ca_ES: 'Edamame',
				fr_FR:
					'Plat traditionnel espagnol de riz avec variété de fruits de mer, safran et socarrat.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440104',
			menu_id: '950e8400-e29b-41d4-a716-446655440085',
			name: {
				en_US: 'Valencian Paella',
				es_ES: 'Paella Valenciana',
				ca_ES: 'Paella Valenciana',
				fr_FR: 'Paella Valencienne',
			},
			description: {
				en_US:
					'Traditional paella with chicken, rabbit, green beans, and saffron rice.',
				es_ES:
					'Paella tradicional con pollo, conejo, judías verdes y arroz con azafrán.',
				ca_ES:
					'Paella tradicional amb pollastre, conill, mongetes verdes i arròs amb safrà.',
				fr_FR:
					'Paella traditionnelle au poulet, lapin, haricots verts et riz au safran.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440105',
			menu_id: '950e8400-e29b-41d4-a716-446655440085',
			name: {
				en_US: 'Black Rice',
				es_ES: 'Arroz Negro',
				ca_ES: 'Arròs Negre',
				fr_FR: 'Riz Noir',
			},
			description: {
				en_US: 'Rice cooked with squid ink, seafood and alioli on the side.',
				es_ES: 'Arroz cocinado con tinta de calamar, mariscos y alioli aparte.',
				ca_ES: 'Arròs cuinat amb tinta de calamar, marisc i allioli a banda.',
				fr_FR: "Riz cuit à l'encre de seiche, fruits de mer et aïoli à part.",
			},
			extra_price: 3,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440106',
			menu_id: '950e8400-e29b-41d4-a716-446655440085',
			name: {
				en_US: 'Crema Catalana',
				es_ES: 'Crema Catalana',
				ca_ES: 'Crema Catalana',
				fr_FR: 'Crème Catalane',
			},
			description: {
				en_US: 'Traditional Catalan dessert with caramelized sugar crust.',
				es_ES: 'Postre tradicional catalán con costra de azúcar caramelizada.',
				ca_ES: 'Postre tradicional català amb crosta de sucre caramel·litzada.',
				fr_FR: 'Dessert traditionnel catalan avec croûte de sucre caramélisé.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440107',
			menu_id: '950e8400-e29b-41d4-a716-446655440085',
			name: {
				en_US: 'Almond Cake',
				es_ES: 'Tarta de Almendras',
				ca_ES: "Pastís d'Ametlles",
				fr_FR: 'Gâteau aux Amandes',
			},
			description: {
				en_US: 'Traditional Spanish almond cake with powdered sugar.',
				es_ES: 'Tarta tradicional española de almendras con azúcar glas.',
				ca_ES: "Pastís tradicional espanyol d'ametlles amb sucre de llustre.",
				fr_FR: 'Gâteau traditionnel espagnol aux amandes avec sucre glace.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Classic Tasting Menu" de Disfrutar (ID: 950e8400-e29b-41d4-a716-446655440088)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440108',
			menu_id: '950e8400-e29b-41d4-a716-446655440088',
			name: {
				en_US: 'Crispy Egg Yolk',
				es_ES: 'Yema de Huevo Crujiente',
				ca_ES: "Rovell d'Ou Cruixent",
				fr_FR: "Jaune d'Œuf Croustillant",
			},
			description: {
				en_US: 'Liquid egg yolk inside a crispy shell with mushroom gelée.',
				es_ES:
					'Yema de huevo líquida dentro de una concha crujiente con gelée de setas.',
				ca_ES:
					"Rovell d'ou líquid dins d'una closca cruixent amb gelea de bolets.",
				fr_FR:
					"Jaune d'œuf liquide à l'intérieur d'une coquille croustillante avec gelée de champignons.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440109',
			menu_id: '950e8400-e29b-41d4-a716-446655440088',
			name: {
				en_US: 'Panchino with Caviar',
				es_ES: 'Panchino con Caviar',
				ca_ES: 'Panchino amb Caviar',
				fr_FR: 'Panchino au Caviar',
			},
			description: {
				en_US: 'Small brioche filled with sour cream and topped with caviar.',
				es_ES: 'Pequeño brioche relleno de crema agria y cubierto con caviar.',
				ca_ES: 'Petit brioix farcit de crema agra i cobert amb caviar.',
				fr_FR: 'Petit brioche farci à la crème fraîche et garni de caviar.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440110',
			menu_id: '950e8400-e29b-41d4-a716-446655440088',
			name: {
				en_US: 'Red Mullet with Pil Pil',
				es_ES: 'Salmonete con Pil Pil',
				ca_ES: 'Moll amb Pil Pil',
				fr_FR: 'Rouget au Pil Pil',
			},
			description: {
				en_US:
					'Red mullet filet with traditional Basque pil pil sauce and crispy scales.',
				es_ES:
					'Filete de salmonete con salsa tradicional vasca pil pil y escamas crujientes.',
				ca_ES:
					'Filet de moll amb salsa tradicional basca pil pil i escates cruixents.',
				fr_FR:
					'Filet de rouget avec sauce traditionnelle basque pil pil et écailles croustillantes.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440111',
			menu_id: '950e8400-e29b-41d4-a716-446655440088',
			name: {
				en_US: 'Hare à la Royale',
				es_ES: 'Liebre à la Royale',
				ca_ES: 'Llebre à la Royale',
				fr_FR: 'Lièvre à la Royale',
			},
			description: {
				en_US:
					'Modern interpretation of the classic hare dish with rich sauce and truffles.',
				es_ES:
					'Interpretación moderna del plato clásico de liebre con salsa intensa y trufas.',
				ca_ES:
					'Interpretació moderna del plat clàssic de llebre amb salsa intensa i tòfones.',
				fr_FR:
					'Interprétation moderne du plat classique de lièvre avec sauce riche et truffes.',
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
			id: 'a50e8400-e29b-41d4-a716-446655440112',
			menu_id: '950e8400-e29b-41d4-a716-446655440088',
			name: {
				en_US: 'Chocolate Sphere',
				es_ES: 'Esfera de Chocolate',
				ca_ES: 'Esfera de Xocolata',
				fr_FR: 'Sphère de Chocolat',
			},
			description: {
				en_US:
					'Chocolate sphere that melts with hot sauce revealing ice cream inside.',
				es_ES:
					'Esfera de chocolate que se derrite con salsa caliente revelando helado en su interior.',
				ca_ES:
					'Esfera de xocolata que es fon amb salsa calenta revelant gelat al seu interior.',
				fr_FR:
					"Sphère de chocolat qui fond avec une sauce chaude révélant une glace à l'intérieur.",
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440113',
			menu_id: '950e8400-e29b-41d4-a716-446655440088',
			name: {
				en_US: 'Cotton Candy Cloud',
				es_ES: 'Nube de Algodón de Azúcar',
				ca_ES: 'Núvol de Cotó de Sucre',
				fr_FR: 'Nuage de Barbe à Papa',
			},
			description: {
				en_US: 'Cotton candy cloud with refreshing fruit surprises inside.',
				es_ES:
					'Nube de algodón de azúcar con sorpresas refrescantes de frutas en su interior.',
				ca_ES:
					'Núvol de cotó de sucre amb sorpreses refrescants de fruites al seu interior.',
				fr_FR:
					"Nuage de barbe à papa avec des surprises rafraîchissantes de fruits à l'intérieur.",
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440085',
			menu_id: '950e8400-e29b-41d4-a716-446655440054',
			name: {
				en_US: 'Gyoza',
				es_ES: 'Gyoza',
				ca_ES: 'Gyoza',
				fr_FR: 'Gyoza',
			},
			description: {
				en_US: 'Pan-fried Japanese dumplings filled with pork and vegetables.',
				es_ES:
					'Empanadillas japonesas a la plancha rellenas de cerdo y verduras.',
				ca_ES: 'Crestes japoneses a la planxa farcides de porc i verdures.',
				fr_FR: 'Raviolis japonais poêlés farcis au porc et aux légumes.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440086',
			menu_id: '950e8400-e29b-41d4-a716-446655440054',
			name: {
				en_US: 'Tonkotsu Ramen',
				es_ES: 'Ramen Tonkotsu',
				ca_ES: 'Ramen Tonkotsu',
				fr_FR: 'Ramen Tonkotsu',
			},
			description: {
				en_US:
					'Rich pork bone broth with chashu pork, soft-boiled egg, green onions and noodles.',
				es_ES:
					'Caldo espeso de huesos de cerdo con cerdo chashu, huevo pasado por agua, cebolletas y fideos.',
				ca_ES:
					"Brou espès d'ossos de porc amb porc chashu, ou passat per aigua, cibulets i fideus.",
				fr_FR:
					"Bouillon riche d'os de porc avec porc chashu, œuf mollet, oignons verts et nouilles.",
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440087',
			menu_id: '950e8400-e29b-41d4-a716-446655440054',
			name: {
				en_US: 'Shoyu Ramen',
				es_ES: 'Ramen Shoyu',
				ca_ES: 'Ramen Shoyu',
				fr_FR: 'Ramen Shoyu',
			},
			description: {
				en_US:
					'Soy sauce-based broth with chicken, bamboo shoots, nori and ramen noodles.',
				es_ES:
					'Caldo a base de salsa de soja con pollo, brotes de bambú, nori y fideos ramen.',
				ca_ES:
					'Brou a base de salsa de soja amb pollastre, brots de bambú, nori i fideus ramen.',
				fr_FR:
					'Bouillon à base de sauce soja avec poulet, pousses de bambou, nori et nouilles ramen.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440088',
			menu_id: '950e8400-e29b-41d4-a716-446655440054',
			name: {
				en_US: 'Spicy Miso Ramen',
				es_ES: 'Ramen Miso Picante',
				ca_ES: 'Ramen Miso Picant',
				fr_FR: 'Ramen Miso Épicé',
			},
			description: {
				en_US:
					'Spicy miso broth with ground pork, corn, butter, bean sprouts and ramen noodles.',
				es_ES:
					'Caldo picante de miso con carne de cerdo picada, maíz, mantequilla, brotes de soja y fideos ramen.',
				ca_ES:
					'Brou picant de miso amb carn de porc picada, blat de moro, mantega, brots de soja i fideus ramen.',
				fr_FR:
					'Bouillon de miso épicé avec porc haché, maïs, beurre, pousses de soja et nouilles ramen.',
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
		{
			id: 'a50e8400-e29b-41d4-a716-446655440089',
			menu_id: '950e8400-e29b-41d4-a716-446655440054',
			name: {
				en_US: 'Green Tea Ice Cream',
				es_ES: 'Helado de Té Verde',
				ca_ES: 'Gelat de Te Verd',
				fr_FR: 'Glace au Thé Vert',
			},
			description: {
				en_US: 'Traditional Japanese matcha green tea ice cream.',
				es_ES: 'Helado tradicional japonés de té verde matcha.',
				ca_ES: 'Gelat tradicional japonès de te verd matcha.',
				fr_FR: 'Glace traditionnelle japonaise au thé vert matcha.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Japanese Street Food" de Koku Kitchen Ramen (ID: 950e8400-e29b-41d4-a716-446655440055)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440090',
			menu_id: '950e8400-e29b-41d4-a716-446655440055',
			name: {
				en_US: 'Takoyaki',
				es_ES: 'Takoyaki',
				ca_ES: 'Takoyaki',
				fr_FR: 'Takoyaki',
			},
			description: {
				en_US:
					'Ball-shaped Japanese snack filled with octopus pieces, tempura scraps and green onion.',
				es_ES:
					'Aperitivo japonés en forma de bola relleno de trozos de pulpo, restos de tempura y cebolleta.',
				ca_ES:
					'Aperitiu japonès en forma de bola farcit de trossos de pop, restes de tempura i cibulet.',
				fr_FR:
					'Collation japonaise en forme de boule farcie de morceaux de poulpe, restes de tempura et oignon vert.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440091',
			menu_id: '950e8400-e29b-41d4-a716-446655440055',
			name: {
				en_US: 'Yakitori',
				es_ES: 'Yakitori',
				ca_ES: 'Yakitori',
				fr_FR: 'Yakitori',
			},
			description: {
				en_US:
					'Japanese skewered chicken, grilled over charcoal with tare sauce.',
				es_ES: 'Brochetas de pollo japonesas, asadas al carbón con salsa tare.',
				ca_ES:
					'Broquetes de pollastre japoneses, rostides al carbó amb salsa tare.',
				fr_FR:
					'Brochettes de poulet japonaises, grillées au charbon de bois avec sauce tare.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440092',
			menu_id: '950e8400-e29b-41d4-a716-446655440055',
			name: {
				en_US: 'Okonomiyaki',
				es_ES: 'Okonomiyaki',
				ca_ES: 'Okonomiyaki',
				fr_FR: 'Okonomiyaki',
			},
			description: {
				en_US:
					'Japanese savory pancake with cabbage, pork, bonito flakes and special sauce.',
				es_ES:
					'Tortita salada japonesa con col, cerdo, copos de bonito y salsa especial.',
				ca_ES:
					'Truita salada japonesa amb col, porc, flocs de bonítol i salsa especial.',
				fr_FR:
					'Crêpe salée japonaise avec chou, porc, flocons de bonite et sauce spéciale.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440093',
			menu_id: '950e8400-e29b-41d4-a716-446655440055',
			name: {
				en_US: 'Curry Rice',
				es_ES: 'Arroz con Curry',
				ca_ES: 'Arròs amb Curry',
				fr_FR: 'Riz au Curry',
			},
			description: {
				en_US: 'Japanese-style curry with rice, tender chicken and vegetables.',
				es_ES: 'Curry estilo japonés con arroz, pollo tierno y verduras.',
				ca_ES: 'Curry estil japonès amb arròs, pollastre tendre i verdures.',
				fr_FR: 'Curry de style japonais avec riz, poulet tendre et légumes.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: false,
			is_lactose_free: true,
			is_spicy: true,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440094',
			menu_id: '950e8400-e29b-41d4-a716-446655440055',
			name: {
				en_US: 'Mochi Ice Cream',
				es_ES: 'Helado de Mochi',
				ca_ES: 'Gelat de Mochi',
				fr_FR: 'Glace Mochi',
			},
			description: {
				en_US: 'Japanese rice cake filled with ice cream in various flavors.',
				es_ES: 'Pastel de arroz japonés relleno de helado en varios sabores.',
				ca_ES: "Pastís d'arròs japonès farcit de gelat en diversos sabors.",
				fr_FR:
					'Gâteau de riz japonais fourré à la glace en différentes saveurs.',
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

		// Platos para el menú "Naples Menu" de NAP Antic (ID: 950e8400-e29b-41d4-a716-446655440056)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440095',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Bruschetta Napoletana',
				es_ES: 'Bruschetta Napolitana',
				ca_ES: 'Bruschetta Napolitana',
				fr_FR: 'Bruschetta Napolitaine',
			},
			description: {
				en_US:
					'Toasted bread with fresh tomatoes, basil, garlic and extra virgin olive oil.',
				es_ES:
					'Pan tostado con tomates frescos, albahaca, ajo y aceite de oliva virgen extra.',
				ca_ES:
					"Pa torrat amb tomàquets frescos, alfàbrega, all i oli d'oliva verge extra.",
				fr_FR:
					"Pain grillé avec tomates fraîches, basilic, ail et huile d'olive extra vierge.",
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: true,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: true,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440096',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Carpaccio di Bresaola',
				es_ES: 'Carpaccio de Bresaola',
				ca_ES: 'Carpaccio de Bresaola',
				fr_FR: 'Carpaccio de Bresaola',
			},
			description: {
				en_US:
					'Thin slices of cured beef with arugula, parmesan and lemon dressing.',
				es_ES:
					'Finas lonchas de carne de res curada con rúcula, parmesano y aliño de limón.',
				ca_ES:
					'Fines llesques de carn de vedella curada amb ruca, parmesà i amaniment de llimona.',
				fr_FR:
					'Fines tranches de bœuf séché avec roquette, parmesan et vinaigrette au citron.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: false,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440097',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Pizza Margherita',
				es_ES: 'Pizza Margarita',
				ca_ES: 'Pizza Margarida',
				fr_FR: 'Pizza Margherita',
			},
			description: {
				en_US:
					'Classic Neapolitan pizza with tomato sauce, mozzarella and basil.',
				es_ES:
					'Pizza napolitana clásica con salsa de tomate, mozzarella y albahaca.',
				ca_ES:
					'Pizza napolitana clàssica amb salsa de tomàquet, mozzarella i alfàbrega.',
				fr_FR:
					'Pizza napolitaine classique avec sauce tomate, mozzarella et basilic.',
			},
			extra_price: 0,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440098',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Pizza Diavola',
				es_ES: 'Pizza Diávola',
				ca_ES: 'Pizza Diàvola',
				fr_FR: 'Pizza Diavola',
			},
			description: {
				en_US:
					'Spicy pizza with tomato sauce, mozzarella, spicy salami and chili oil.',
				es_ES:
					'Pizza picante con salsa de tomate, mozzarella, salami picante y aceite de chile.',
				ca_ES:
					'Pizza picant amb salsa de tomàquet, mozzarella, salami picant i oli de xili.',
				fr_FR:
					'Pizza épicée avec sauce tomate, mozzarella, salami épicé et huile de piment.',
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
		{
			id: 'a50e8400-e29b-41d4-a716-446655440099',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Pizza Quattro Formaggi',
				es_ES: 'Pizza Cuatro Quesos',
				ca_ES: 'Pizza Quatre Formatges',
				fr_FR: 'Pizza Quatre Fromages',
			},
			description: {
				en_US:
					'Pizza with tomato sauce and four cheeses: mozzarella, gorgonzola, parmesan and fontina.',
				es_ES:
					'Pizza con salsa de tomate y cuatro quesos: mozzarella, gorgonzola, parmesano y fontina.',
				ca_ES:
					'Pizza amb salsa de tomàquet i quatre formatges: mozzarella, gorgonzola, parmesà i fontina.',
				fr_FR:
					'Pizza avec sauce tomate et quatre fromages: mozzarella, gorgonzola, parmesan et fontina.',
			},
			extra_price: 2,
			category: 'mainCourses',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: false,
			is_vegan: false,
			is_active: true,
		},
		{
			id: 'a50e8400-e29b-41d4-a716-446655440100',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Tiramisù',
				es_ES: 'Tiramisú',
				ca_ES: 'Tiramisú',
				fr_FR: 'Tiramisu',
			},
			description: {
				en_US:
					'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
				es_ES:
					'Postre italiano tradicional con bizcochos empapados en café y crema de mascarpone.',
				ca_ES:
					'Postre italià tradicional amb melindros xopats en cafè i crema de mascarpone.',
				fr_FR:
					'Dessert italien traditionnel avec biscuits à la cuillère imbibés de café et crème de mascarpone.',
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
		{
			id: 'a50e8400-e29b-41d4-a716-446655440101',
			menu_id: '950e8400-e29b-41d4-a716-446655440056',
			name: {
				en_US: 'Panna Cotta',
				es_ES: 'Panna Cotta',
				ca_ES: 'Panna Cotta',
				fr_FR: 'Panna Cotta',
			},
			description: {
				en_US: 'Italian cream dessert with berry coulis.',
				es_ES: 'Postre italiano de crema con coulis de frutos rojos.',
				ca_ES: 'Postre italià de crema amb coulis de fruits vermells.',
				fr_FR: 'Dessert italien à la crème avec coulis de baies.',
			},
			extra_price: 0,
			category: 'desserts',
			is_vegetarian: true,
			is_lactose_free: false,
			is_spicy: false,
			is_gluten_free: true,
			is_vegan: false,
			is_active: true,
		},

		// Platos para el menú "Paella & Views" de Martinez (ID: 950e8400-e29b-41d4-a716-446655440085)
		{
			id: 'a50e8400-e29b-41d4-a716-446655440102',
			menu_id: '950e8400-e29b-41d4-a716-446655440085',
			name: {
				en_US: 'Mediterranean Salad',
				es_ES: 'Ensalada Mediterránea',
				ca_ES: 'Amanida Mediterrània',
				fr_FR: 'Salade Méditerranéenne',
			},
			description: {
				en_US:
					'Fresh salad with lettuce, tomatoes, cucumber, olives, feta cheese and oregano.',
				es_ES:
					'Ensalada fresca con lechuga, tomates, pepino, aceitunas, queso feta y orégano.',
				ca_ES:
					'Amanida fresca amb enciam, tomàquets, cogombre, olives, formatge feta i orenga.',
				fr_FR:
					'Salade fraîche avec laitue, tomates, concombre, olives, fromage feta et origan.',
			},
			extra_price: 0,
			category: 'appetizers',
			is_vegetarian: true,
			is_lactose_free: false,
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
