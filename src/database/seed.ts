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
		// Reviews para Sant Francesc Restaurant (ID: 850e8400-e29b-41d4-a716-446655440001) - 12 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440001',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
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
			created_at: '2024-12-01T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440002',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
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
			restaurant_response_date: '2024-12-02T10:30:00Z',
			created_at: '2024-12-01T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440003',
			user_id: '750e8400-e29b-41d4-a716-446655440005',
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
			created_at: '2024-11-28T18:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440004',
			user_id: '750e8400-e29b-41d4-a716-446655440006',
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
			created_at: '2024-11-25T21:00:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440005',
			user_id: '750e8400-e29b-41d4-a716-446655440007',
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
			restaurant_response_date: '2024-11-23T14:20:00Z',
			created_at: '2024-11-22T16:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440006',
			user_id: '750e8400-e29b-41d4-a716-446655440008',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.7,
			comment: {
				en_US:
					'Amazing Mediterranean flavors! The grilled salmon was perfectly cooked and the Caesar salad was fresh and delicious.',
				es_ES:
					'¡Sabores mediterráneos increíbles! El salmón a la plancha estaba perfectamente cocinado y la ensalada César fresca y deliciosa.',
				ca_ES:
					'Sabors mediterranis increïbles! El salmó a la planxa estava perfectament cuinat i la amanida Cèsar fresca i deliciosa.',
				fr_FR:
					'Saveurs méditerranéennes incroyables! Le saumon grillé était parfaitement cuit et la salade César fraîche et délicieuse.',
			},
			photos: [
				'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300',
			],
			created_at: '2024-11-20T19:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440007',
			user_id: '750e8400-e29b-41d4-a716-446655440009',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 3.8,
			comment: {
				en_US:
					'Good food overall, but the portions could be a bit larger. The wine selection is excellent though.',
				es_ES:
					'Buena comida en general, pero las porciones podrían ser un poco más grandes. Eso sí, la selección de vinos es excelente.',
				ca_ES:
					'Bon menjar en general, però les porcions podrien ser una mica més grans. Això sí, la selecció de vins és excel·lent.',
				fr_FR:
					'Bonne nourriture en général, mais les portions pourraient être un peu plus grandes. La sélection de vins est excellente cependant.',
			},
			photos: [],
			created_at: '2024-11-18T20:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440008',
			user_id: '750e8400-e29b-41d4-a716-446655440010',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.9,
			comment: {
				en_US:
					"Outstanding dinner! Every dish was perfectly prepared. The crema catalana was the best I've ever had. Highly recommended!",
				es_ES:
					'¡Cena excepcional! Cada plato estaba perfectamente preparado. La crema catalana fue la mejor que he probado. ¡Muy recomendable!',
				ca_ES:
					'Sopar excepcional! Cada plat estava perfectament preparat. La crema catalana va ser la millor que he tastat. Molt recomanable!',
				fr_FR:
					"Dîner exceptionnel! Chaque plat était parfaitement préparé. La crème catalane était la meilleure que j'aie jamais goûtée. Hautement recommandé!",
			},
			photos: [
				'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300',
				'https://images.unsplash.com/photo-1563379091-20324deb58b9?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you so much Antonio! We're thrilled that you enjoyed our crema catalana. It's made with our grandmother's recipe!",
				es_ES:
					'¡Muchísimas gracias Antonio! Nos emociona que hayas disfrutado nuestra crema catalana. ¡Está hecha con la receta de nuestra abuela!',
				ca_ES:
					'Moltes gràcies Antonio! Ens emociona que hagis gaudit de la nostra crema catalana. Està feta amb la recepta de la nostra àvia!',
				fr_FR:
					'Merci beaucoup Antonio! Nous sommes ravis que vous ayez apprécié notre crème catalane. Elle est faite avec la recette de notre grand-mère!',
			},
			restaurant_response_date: '2024-11-16T09:45:00Z',
			created_at: '2024-11-15T21:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440009',
			user_id: '750e8400-e29b-41d4-a716-446655440011',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.2,
			comment: {
				en_US:
					'Great location and nice atmosphere. The paella valenciana was authentic and delicious. Will come back with friends.',
				es_ES:
					'Excelente ubicación y buen ambiente. La paella valenciana era auténtica y deliciosa. Volveré con amigos.',
				ca_ES:
					'Excel·lent ubicació i bon ambient. La paella valenciana era autèntica i deliciosa. Tornaré amb amics.',
				fr_FR:
					'Excellent emplacement et bonne ambiance. La paella valencienne était authentique et délicieuse. Je reviendrai avec des amis.',
			},
			photos: [],
			created_at: '2024-11-12T19:00:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440010',
			user_id: '750e8400-e29b-41d4-a716-446655440012',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 3.5,
			comment: {
				en_US:
					'The lunch menu offers good value for money. Service was friendly but a bit slow during peak hours.',
				es_ES:
					'El menú del mediodía ofrece una buena relación calidad-precio. El servicio fue amable pero un poco lento en horas punta.',
				ca_ES:
					'El menú del migdia ofereix una bona relació qualitat-preu. El servei va ser amable però una mica lent en hores punta.',
				fr_FR:
					'Le menu du déjeuner offre un bon rapport qualité-prix. Le service était amical mais un peu lent aux heures de pointe.',
			},
			photos: [],
			created_at: '2024-11-10T14:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440011',
			user_id: '750e8400-e29b-41d4-a716-446655440013',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.6,
			comment: {
				en_US:
					'Beautiful restaurant with traditional Catalan cuisine. The dinner menu with wine pairing was fantastic. Perfect for special occasions.',
				es_ES:
					'Hermoso restaurante con cocina tradicional catalana. El menú cena con maridaje de vinos fue fantástico. Perfecto para ocasiones especiales.',
				ca_ES:
					'Bonic restaurant amb cuina tradicional catalana. El menú sopar amb maridatge de vins va ser fantàstic. Perfecte per a ocasions especials.',
				fr_FR:
					'Beau restaurant avec cuisine traditionnelle catalane. Le menu dîner avec accord mets et vins était fantastique. Parfait pour les occasions spéciales.',
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
			],
			created_at: '2024-11-08T22:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440012',
			user_id: '750e8400-e29b-41d4-a716-446655440014',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440001',
			rating: 4.4,
			comment: {
				en_US:
					'Excellent Mediterranean restaurant. The shared appetizers are perfect for groups. Loved the rustic bread and olive oil.',
				es_ES:
					'Excelente restaurante mediterráneo. Los entrantes para compartir son perfectos para grupos. Me encantó el pan rústico y el aceite de oliva.',
				ca_ES:
					"Excel·lent restaurant mediterrani. Els entrants per compartir són perfectes per a grups. M'va encantar el pa rústic i l'oli d'oliva.",
				fr_FR:
					"Excellent restaurant méditerranéen. Les entrées à partager sont parfaites pour les groupes. J'ai adoré le pain rustique et l'huile d'olive.",
			},
			photos: [],
			created_at: '2024-11-05T20:45:00Z',
		},

		// Reviews para Tika Tacos (ID: 850e8400-e29b-41d4-a716-446655440002) - 8 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440013',
			user_id: '750e8400-e29b-41d4-a716-446655440015',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 4.3,
			comment: {
				en_US:
					'Great Mexican food! The guacamole is fresh and the tacos are authentic. Taco Tuesday is definitely worth it.',
				es_ES:
					'¡Excelente comida mexicana! El guacamole está fresco y los tacos son auténticos. El Taco Tuesday definitivamente vale la pena.',
				ca_ES:
					'Excel·lent menjar mexicà! El guacamole està fresc i els tacos són autèntics. El Taco Tuesday definitivament val la pena.',
				fr_FR:
					'Excellente cuisine mexicaine! Le guacamole est frais et les tacos sont authentiques. Le Taco Tuesday en vaut vraiment la peine.',
			},
			photos: [
				'https://images.unsplash.com/photo-1565299585323-38174c19d15d?w=300',
			],
			created_at: '2024-12-03T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440014',
			user_id: '750e8400-e29b-41d4-a716-446655440016',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 4.7,
			comment: {
				en_US:
					'Amazing atmosphere and delicious food! The chicken tacos with pico de gallo were incredibly flavorful. Great value for money.',
				es_ES:
					'¡Ambiente increíble y comida deliciosa! Los tacos de pollo con pico de gallo tenían un sabor increíble. Excelente relación calidad-precio.',
				ca_ES:
					'Ambient increïble i menjar deliciós! Els tacos de pollastre amb pico de gallo tenien un sabor increïble. Excel·lent relació qualitat-preu.',
				fr_FR:
					'Ambiance incroyable et nourriture délicieuse! Les tacos au poulet avec pico de gallo étaient incroyablement savoureux. Excellent rapport qualité-prix.',
			},
			photos: [
				'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300',
				'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you Elena! We're so happy you enjoyed our homemade pico de gallo. See you next Tuesday!",
				es_ES:
					'¡Gracias Elena! Nos alegra mucho que hayas disfrutado nuestro pico de gallo casero. ¡Te esperamos el próximo martes!',
				ca_ES:
					"Gràcies Elena! Ens alegra molt que hagis gaudit del nostre pico de gallo casolà. T'esperem el proper dimarts!",
				fr_FR:
					'Merci Elena! Nous sommes si heureux que vous ayez apprécié notre pico de gallo fait maison. À mardi prochain!',
			},
			restaurant_response_date: '2024-11-30T10:15:00Z',
			created_at: '2024-11-29T20:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440015',
			user_id: '750e8400-e29b-41d4-a716-446655440017',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 3.9,
			comment: {
				en_US:
					'Good Mexican spot in the neighborhood. The nachos are crispy and the guacamole is well-seasoned. Could use more vegetarian options.',
				es_ES:
					'Buen lugar mexicano en el barrio. Los nachos están crujientes y el guacamole bien sazonado. Podrían tener más opciones vegetarianas.',
				ca_ES:
					'Bon lloc mexicà al barri. Els nacos estan cruixents i el guacamole ben sabonejat. Podrien tenir més opcions vegetarianes.',
				fr_FR:
					"Bon endroit mexicain dans le quartier. Les nachos sont croustillants et le guacamole bien assaisonné. Il pourrait y avoir plus d'options végétariennes.",
			},
			photos: [],
			created_at: '2024-11-26T18:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440016',
			user_id: '750e8400-e29b-41d4-a716-446655440018',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 4.5,
			comment: {
				en_US:
					'Love the casual vibe and live music! The margaritas are strong and the food portions are generous. Perfect for groups.',
				es_ES:
					'¡Me encanta el ambiente casual y la música en vivo! Las margaritas son fuertes y las porciones de comida generosas. Perfecto para grupos.',
				ca_ES:
					"M'encanta l'ambient casual i la música en viu! Les margarites són fortes i les porcions de menjar generoses. Perfecte per a grups.",
				fr_FR:
					"J'adore l'ambiance décontractée et la musique live! Les margaritas sont fortes et les portions de nourriture généreuses. Parfait pour les groupes.",
			},
			photos: [
				'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300',
			],
			created_at: '2024-11-23T21:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440017',
			user_id: '750e8400-e29b-41d4-a716-446655440019',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 4.1,
			comment: {
				en_US:
					'Authentic Mexican flavors! The soft drinks complement the spicy food perfectly. Air conditioning is a plus during summer.',
				es_ES:
					'¡Sabores mexicanos auténticos! Los refrescos complementan perfectamente la comida picante. El aire acondicionado es un plus en verano.',
				ca_ES:
					"Sabors mexicans autèntics! Els refrescos complementen perfectament el menjar picant. L'aire condicionat és un plus a l'estiu.",
				fr_FR:
					'Saveurs mexicaines authentiques! Les boissons gazeuses complètent parfaitement la nourriture épicée. La climatisation est un plus en été.',
			},
			photos: [],
			created_at: '2024-11-20T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440018',
			user_id: '750e8400-e29b-41d4-a716-446655440020',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 3.7,
			comment: {
				en_US:
					'Decent tacos but nothing extraordinary. The prices are fair and the service is quick. Good for a casual lunch.',
				es_ES:
					'Tacos decentes pero nada extraordinario. Los precios son justos y el servicio es rápido. Bueno para un almuerzo casual.',
				ca_ES:
					'Tacos decents però res extraordinari. Els preus són justos i el servei és ràpid. Bé per a un dinar casual.',
				fr_FR:
					"Tacos corrects mais rien d'extraordinaire. Les prix sont justes et le service est rapide. Bon pour un déjeuner décontracté.",
			},
			photos: [],
			created_at: '2024-11-17T13:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440019',
			user_id: '750e8400-e29b-41d4-a716-446655440021',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 4.8,
			comment: {
				en_US:
					'Best Mexican food in Barcelona! The sharing concept is great for trying different dishes. The beer selection pairs perfectly with the spicy food.',
				es_ES:
					'¡La mejor comida mexicana de Barcelona! El concepto de compartir es genial para probar diferentes platos. La selección de cervezas combina perfectamente con la comida picante.',
				ca_ES:
					'La millor menjar mexicà de Barcelona! El concepte de compartir és genial per provar diferents plats. La selecció de cerveses combina perfectament amb el menjar picant.',
				fr_FR:
					'La meilleure cuisine mexicaine de Barcelone! Le concept de partage est génial pour goûter différents plats. La sélection de bières se marie parfaitement avec la nourriture épicée.',
			},
			photos: [
				'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=300',
				'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Wow, thank you so much Silvia! We're honored to be considered the best Mexican food in Barcelona. ¡Muchas gracias!",
				es_ES:
					'¡Wow, muchísimas gracias Silvia! Nos honra ser considerados la mejor comida mexicana de Barcelona. ¡Muchas gracias!',
				ca_ES:
					'Wow, moltes gràcies Silvia! Ens honra ser considerats el millor menjar mexicà de Barcelona. Moltes gràcies!',
				fr_FR:
					"Wow, merci beaucoup Silvia! Nous sommes honorés d'être considérés comme la meilleure cuisine mexicaine de Barcelone. ¡Muchas gracias!",
			},
			restaurant_response_date: '2024-11-15T11:20:00Z',
			created_at: '2024-11-14T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440020',
			user_id: '750e8400-e29b-41d4-a716-446655440022',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440002',
			rating: 4.0,
			comment: {
				en_US:
					'Great spot for Taco Tuesday! The variety of tacos is impressive and the salsas have the right amount of heat. Will definitely return.',
				es_ES:
					'¡Excelente lugar para el Taco Tuesday! La variedad de tacos es impresionante y las salsas tienen el punto justo de picante. Definitivamente volveré.',
				ca_ES:
					'Excel·lent lloc per al Taco Tuesday! La varietat de tacos és impressionant i les salses tenen el punt just de picant. Definitivament tornaré.',
				fr_FR:
					"Excellent endroit pour le Taco Tuesday! La variété de tacos est impressionnante et les salsas ont juste ce qu'il faut de piquant. Je reviendrai certainement.",
			},
			photos: [],
			created_at: '2024-11-12T19:50:00Z',
		},
		// Reviews para El gran sol (ID: 850e8400-e29b-41d4-a716-446655440003) - 9 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440021',
			user_id: '750e8400-e29b-41d4-a716-446655440023',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 4.2,
			comment: {
				en_US:
					'Good Chinese restaurant with reasonable prices. The air conditioning makes it comfortable and the service is efficient.',
				es_ES:
					'Buen restaurante chino con precios razonables. El aire acondicionado lo hace cómodo y el servicio es eficiente.',
				ca_ES:
					"Bon restaurant xinès amb preus raonables. L'aire condicionat el fa còmode i el servei és eficient.",
				fr_FR:
					'Bon restaurant chinois avec des prix raisonnables. La climatisation le rend confortable et le service est efficace.',
			},
			photos: [
				'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300',
			],
			created_at: '2024-12-02T14:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440022',
			user_id: '750e8400-e29b-41d4-a716-446655440024',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 3.8,
			comment: {
				en_US:
					'Nice family-friendly place. My kids loved the sweet and sour chicken. Great for bringing pets too!',
				es_ES:
					'Buen lugar familiar. A mis hijos les encantó el pollo agridulce. ¡También genial para traer mascotas!',
				ca_ES:
					'Bon lloc familiar. Als meus fills els va encantar el pollastre agredolç. També genial per portar mascotes!',
				fr_FR:
					'Bon endroit familial. Mes enfants ont adoré le poulet aigre-doux. Parfait aussi pour amener les animaux de compagnie!',
			},
			photos: [],
			created_at: '2024-11-28T18:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440023',
			user_id: '750e8400-e29b-41d4-a716-446655440025',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 4.5,
			comment: {
				en_US:
					'Excellent Chinese food! The fried rice is perfectly seasoned and the spring rolls are crispy. Reservations are recommended for dinner.',
				es_ES:
					'¡Excelente comida china! El arroz frito está perfectamente sazonado y los rollitos de primavera crujientes. Se recomienda reservar para la cena.',
				ca_ES:
					"Excel·lent menjar xinès! L'arròs fregit està perfectament sabonejat i els rotllets de primavera cruixents. Es recomana reservar per al sopar.",
				fr_FR:
					'Excellente cuisine chinoise! Le riz frit est parfaitement assaisonné et les rouleaux de printemps croustillants. Il est recommandé de réserver pour le dîner.',
			},
			photos: [
				'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300',
				'https://images.unsplash.com/photo-1552611052-33e04de081de?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you Alicia! We're glad you enjoyed our traditional recipes. We look forward to welcoming you again!",
				es_ES:
					'¡Gracias Alicia! Nos alegra que hayas disfrutado nuestras recetas tradicionales. ¡Esperamos volverte a recibir!',
				ca_ES:
					'Gràcies Alicia! Ens alegra que hagis gaudit de les nostres receptes tradicionals. Esperem tornar-te a rebre!',
				fr_FR:
					'Merci Alicia! Nous sommes ravis que vous ayez apprécié nos recettes traditionnelles. Nous avons hâte de vous accueillir à nouveau!',
			},
			restaurant_response_date: '2024-11-26T10:00:00Z',
			created_at: '2024-11-25T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440024',
			user_id: '750e8400-e29b-41d4-a716-446655440026',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 3.6,
			comment: {
				en_US:
					'Average Chinese food. The portions are good but the flavors could be more authentic. Service is fast though.',
				es_ES:
					'Comida china promedio. Las porciones son buenas pero los sabores podrían ser más auténticos. Aunque el servicio es rápido.',
				ca_ES:
					'Menjar xinès mitjà. Les porcions són bones però els sabors podrien ser més autèntics. Encara que el servei és ràpid.',
				fr_FR:
					'Cuisine chinoise moyenne. Les portions sont bonnes mais les saveurs pourraient être plus authentiques. Le service est rapide cependant.',
			},
			photos: [],
			created_at: '2024-11-22T20:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440025',
			user_id: '750e8400-e29b-41d4-a716-446655440027',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 4.0,
			comment: {
				en_US:
					'Good value for money. The beef with broccoli was tender and flavorful. Perfect for a quick dinner with the family.',
				es_ES:
					'Buena relación calidad-precio. La ternera con brócoli estaba tierna y sabrosa. Perfecto para una cena rápida en familia.',
				ca_ES:
					'Bona relació qualitat-preu. La vedella amb bròquil estava tendra i saborosa. Perfecte per a un sopar ràpid en família.',
				fr_FR:
					'Bon rapport qualité-prix. Le bœuf aux brocolis était tendre et savoureux. Parfait pour un dîner rapide en famille.',
			},
			photos: [],
			created_at: '2024-11-19T17:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440026',
			user_id: '750e8400-e29b-41d4-a716-446655440028',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 4.3,
			comment: {
				en_US:
					'Love that they welcome pets! The dim sum selection is good and the tea is always fresh. Very accommodating staff.',
				es_ES:
					'¡Me encanta que reciban mascotas! La selección de dim sum es buena y el té siempre está fresco. Personal muy servicial.',
				ca_ES:
					"M'encanta que rebin mascotes! La selecció de dim sum és bona i el te sempre està fresc. Personal molt servicial.",
				fr_FR:
					"J'adore qu'ils accueillent les animaux de compagnie! La sélection de dim sum est bonne et le thé est toujours frais. Personnel très serviable.",
			},
			photos: [
				'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300',
			],
			created_at: '2024-11-16T16:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440027',
			user_id: '750e8400-e29b-41d4-a716-446655440029',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 3.9,
			comment: {
				en_US:
					'Solid neighborhood Chinese restaurant. The orange chicken is crispy and the fried noodles are well-prepared. Clean and comfortable environment.',
				es_ES:
					'Sólido restaurante chino de barrio. El pollo a la naranja está crujiente y los fideos fritos bien preparados. Ambiente limpio y cómodo.',
				ca_ES:
					'Sòlid restaurant xinès de barri. El pollastre a la taronja està cruixent i els fideus fregits ben preparats. Ambient net i còmode.',
				fr_FR:
					"Solide restaurant chinois de quartier. Le poulet à l'orange est croustillant et les nouilles frites bien préparées. Environnement propre et confortable.",
			},
			photos: [],
			created_at: '2024-11-13T19:00:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440028',
			user_id: '750e8400-e29b-41d4-a716-446655440030',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 4.7,
			comment: {
				en_US:
					'Outstanding kung pao chicken! Spicy and flavorful exactly how it should be. The online reservation system through OpenTable is very convenient.',
				es_ES:
					'¡Pollo kung pao excepcional! Picante y sabroso exactamente como debe ser. El sistema de reservas online a través de OpenTable es muy conveniente.',
				ca_ES:
					"Pollastre kung pao excepcional! Picant i saborós exactament com ha de ser. El sistema de reserves online a través d'OpenTable és molt convenient.",
				fr_FR:
					'Poulet kung pao exceptionnel! Épicé et savoureux exactement comme il se doit. Le système de réservation en ligne via OpenTable est très pratique.',
			},
			photos: [
				'https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300',
			],
			created_at: '2024-11-10T21:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440029',
			user_id: '750e8400-e29b-41d4-a716-446655440031',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440003',
			rating: 3.5,
			comment: {
				en_US:
					'Decent Chinese takeout option. The sweet and sour pork is good, though not exceptional. Fair prices for the portion sizes.',
				es_ES:
					'Opción decente de comida china para llevar. El cerdo agridulce está bien, aunque no excepcional. Precios justos para el tamaño de las porciones.',
				ca_ES:
					'Opció decent de menjar xinès per emportar. El porc agredolç està bé, encara que no excepcional. Preus justos per la mida de les porcions.',
				fr_FR:
					'Option correcte de plats chinois à emporter. Le porc aigre-doux est bon, bien que pas exceptionnel. Prix équitables pour la taille des portions.',
			},
			photos: [],
			created_at: '2024-11-07T18:45:00Z',
		},

		// Reviews para Sakura Tokyo (ID: 850e8400-e29b-41d4-a716-446655440004) - 11 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440030',
			user_id: '750e8400-e29b-41d4-a716-446655440032',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.8,
			comment: {
				en_US:
					'Exceptional Japanese restaurant! The sushi is incredibly fresh and the presentation is beautiful. Perfect for romantic dinners and business meetings.',
				es_ES:
					'¡Restaurante japonés excepcional! El sushi está increíblemente fresco y la presentación es hermosa. Perfecto para cenas románticas y reuniones de negocios.',
				ca_ES:
					'Restaurant japonès excepcional! El sushi està increïblement fresc i la presentació és bonica. Perfecte per a sopars romàntics i reunions de negocis.',
				fr_FR:
					"Restaurant japonais exceptionnel! Les sushis sont incroyablement frais et la présentation est magnifique. Parfait pour les dîners romantiques et les réunions d'affaires.",
			},
			photos: [
				'https://images.unsplash.com/photo-1579952363873-27d3bfae90af?w=300',
				'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Arigato gozaimasu Mónica! We're honored by your review. Our chefs take great pride in the freshness and presentation of every dish.",
				es_ES:
					'¡Arigato gozaimasu Mónica! Nos honra tu reseña. Nuestros chefs se enorgullecen mucho de la frescura y presentación de cada plato.',
				ca_ES:
					"Arigato gozaimasu Mónica! Ens honra la teva ressenya. Els nostres xefs s'enorgulleixen molt de la frescor i presentació de cada plat.",
				fr_FR:
					'Arigato gozaimasu Mónica! Nous sommes honorés par votre avis. Nos chefs sont très fiers de la fraîcheur et de la présentation de chaque plat.',
			},
			restaurant_response_date: '2024-12-01T09:30:00Z',
			created_at: '2024-11-30T20:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440031',
			user_id: '750e8400-e29b-41d4-a716-446655440033',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.6,
			comment: {
				en_US:
					'Amazing authentic Japanese cuisine. The tempura is light and crispy, and the miso soup is perfectly balanced. Excellent service and atmosphere.',
				es_ES:
					'Increíble cocina japonesa auténtica. La tempura es ligera y crujiente, y la sopa de miso está perfectamente equilibrada. Excelente servicio y ambiente.',
				ca_ES:
					'Increïble cuina japonesa autèntica. La tempura és lleugera i cruixent, i la sopa de miso està perfectament equilibrada. Excel·lent servei i ambient.',
				fr_FR:
					'Incroyable cuisine japonaise authentique. Les tempuras sont légères et croustillantes, et la soupe miso est parfaitement équilibrée. Excellent service et ambiance.',
			},
			photos: [
				'https://images.unsplash.com/photo-1579952363873-27d3bfae90af?w=300',
			],
			created_at: '2024-11-27T19:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440032',
			user_id: '750e8400-e29b-41d4-a716-446655440034',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 5.0,
			comment: {
				en_US:
					'Absolutely outstanding! Best Japanese restaurant in Barcelona. The omakase experience was unforgettable. Every piece of sushi was perfect.',
				es_ES:
					'¡Absolutamente excepcional! El mejor restaurante japonés de Barcelona. La experiencia omakase fue inolvidable. Cada pieza de sushi era perfecta.',
				ca_ES:
					"Absolutament excepcional! El millor restaurant japonès de Barcelona. L'experiència omakase va ser inoblidable. Cada peça de sushi era perfecta.",
				fr_FR:
					"Absolument exceptionnel! Le meilleur restaurant japonais de Barcelone. L'expérience omakase était inoubliable. Chaque pièce de sushi était parfaite.",
			},
			photos: [
				'https://images.unsplash.com/photo-1563612198-e1a5d6c88adf?w=300',
				'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
				'https://images.unsplash.com/photo-1579952363873-27d3bfae90af?w=300',
			],
			restaurant_response_message: {
				en_US:
					'We are deeply grateful for your wonderful review! Creating unforgettable experiences is our greatest joy. Thank you for choosing Sakura Tokyo.',
				es_ES:
					'¡Estamos profundamente agradecidos por tu maravillosa reseña! Crear experiencias inolvidables es nuestra mayor alegría. Gracias por elegir Sakura Tokyo.',
				ca_ES:
					'Estem profundament agraïts per la teva meravellosa ressenya! Crear experiències inoblidables és la nostra major alegria. Gràcies per triar Sakura Tokyo.',
				fr_FR:
					"Nous sommes profondément reconnaissants pour votre merveilleuse critique! Créer des expériences inoubliables est notre plus grande joie. Merci d'avoir choisi Sakura Tokyo.",
			},
			restaurant_response_date: '2024-11-25T08:45:00Z',
			created_at: '2024-11-24T21:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440033',
			user_id: '750e8400-e29b-41d4-a716-446655440035',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.2,
			comment: {
				en_US:
					'Great sushi restaurant with upscale atmosphere. The salmon sashimi melts in your mouth. Reservations are essential, especially on weekends.',
				es_ES:
					'Gran restaurante de sushi con ambiente elegante. El sashimi de salmón se derrite en la boca. Las reservas son esenciales, especialmente los fines de semana.',
				ca_ES:
					'Gran restaurant de sushi amb ambient elegant. El sashimi de salmó es fon a la boca. Les reserves són essencials, especialment els caps de setmana.',
				fr_FR:
					'Grand restaurant de sushi avec une ambiance haut de gamme. Le sashimi de saumon fond dans la bouche. Les réservations sont essentielles, surtout le week-end.',
			},
			photos: [],
			created_at: '2024-11-21T18:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440034',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.4,
			comment: {
				en_US:
					'Excellent Japanese restaurant for special occasions. The teppanyaki show is entertaining and the food quality is top-notch. Professional service.',
				es_ES:
					'Excelente restaurante japonés para ocasiones especiales. El show de teppanyaki es entretenido y la calidad de la comida es de primera. Servicio profesional.',
				ca_ES:
					'Excel·lent restaurant japonès per a ocasions especials. El show de teppanyaki és entretingut i la qualitat del menjar és de primera. Servei professional.',
				fr_FR:
					'Excellent restaurant japonais pour les occasions spéciales. Le spectacle de teppanyaki est divertissant et la qualité de la nourriture est de premier ordre. Service professionnel.',
			},
			photos: [
				'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=300',
			],
			created_at: '2024-11-18T20:00:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440035',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 3.8,
			comment: {
				en_US:
					'Good Japanese food but quite expensive. The portions are small but the quality is high. Nice for business dinners with air conditioning.',
				es_ES:
					'Buena comida japonesa pero bastante cara. Las porciones son pequeñas pero la calidad es alta. Agradable para cenas de negocios con aire acondicionado.',
				ca_ES:
					'Bon menjar japonès però bastant car. Les porcions són petites però la qualitat és alta. Agradable per a sopars de negocis amb aire condicionat.',
				fr_FR:
					"Bonne cuisine japonaise mais assez chère. Les portions sont petites mais la qualité est élevée. Agréable pour les dîners d'affaires avec climatisation.",
			},
			photos: [],
			created_at: '2024-11-15T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440036',
			user_id: '750e8400-e29b-41d4-a716-446655440005',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.7,
			comment: {
				en_US:
					"Fantastic sushi and sashimi selection! The chef's recommendations were spot on. Perfect romantic atmosphere with excellent wine pairing.",
				es_ES:
					'¡Fantástica selección de sushi y sashimi! Las recomendaciones del chef fueron acertadas. Ambiente romántico perfecto con excelente maridaje de vinos.',
				ca_ES:
					'Fantàstica selecció de sushi i sashimi! Les recomanacions del xef van ser encertades. Ambient romàntic perfecte amb excel·lent maridatge de vins.',
				fr_FR:
					'Fantastique sélection de sushi et sashimi! Les recommandations du chef étaient parfaites. Ambiance romantique parfaite avec un excellent accord mets-vins.',
			},
			photos: [
				'https://images.unsplash.com/photo-1579952363873-27d3bfae90af?w=300',
				'https://images.unsplash.com/photo-1559847844-56bb0c6da5ba?w=300',
			],
			created_at: '2024-11-12T21:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440037',
			user_id: '750e8400-e29b-41d4-a716-446655440006',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.1,
			comment: {
				en_US:
					'Very good Japanese restaurant. The chicken teriyaki is tender and flavorful. Online reservations through their website are convenient.',
				es_ES:
					'Muy buen restaurante japonés. El pollo teriyaki está tierno y sabroso. Las reservas online a través de su sitio web son convenientes.',
				ca_ES:
					'Molt bon restaurant japonès. El pollastre teriyaki està tendre i saborós. Les reserves online a través del seu lloc web són convenients.',
				fr_FR:
					'Très bon restaurant japonais. Le poulet teriyaki est tendre et savoureux. Les réservations en ligne via leur site web sont pratiques.',
			},
			photos: [],
			created_at: '2024-11-09T18:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440038',
			user_id: '750e8400-e29b-41d4-a716-446655440007',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.9,
			comment: {
				en_US:
					'Incredible authentic Japanese experience! The wagyu beef was absolutely divine. The staff is knowledgeable about sake pairings. A true culinary journey.',
				es_ES:
					'¡Increíble experiencia japonesa auténtica! La carne de wagyu era absolutamente divina. El personal conoce bien los maridajes de sake. Un verdadero viaje culinario.',
				ca_ES:
					'Increïble experiència japonesa autèntica! La carn de wagyu era absolutament divina. El personal coneix bé els maridatges de sake. Un veritable viatge culinari.',
				fr_FR:
					'Incroyable expérience japonaise authentique! Le bœuf wagyu était absolument divin. Le personnel connaît bien les accords avec le saké. Un véritable voyage culinaire.',
			},
			photos: [
				'https://images.unsplash.com/photo-1540630039971-0bc30db95718?w=300',
				'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you Laura for this beautiful review! We're thrilled that our wagyu exceeded your expectations. Your appreciation means the world to us.",
				es_ES:
					'¡Gracias Laura por esta hermosa reseña! Nos emociona que nuestro wagyu haya superado tus expectativas. Tu apreciación significa mucho para nosotros.',
				ca_ES:
					'Gràcies Laura per aquesta bonica ressenya! Ens emociona que el nostre wagyu hagi superat les teves expectatives. La teva apreciació significa molt per a nosaltres.',
				fr_FR:
					'Merci Laura pour cette belle critique! Nous sommes ravis que notre wagyu ait dépassé vos attentes. Votre appréciation signifie beaucoup pour nous.',
			},
			restaurant_response_date: '2024-11-07T10:15:00Z',
			created_at: '2024-11-06T20:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440039',
			user_id: '750e8400-e29b-41d4-a716-446655440008',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 3.9,
			comment: {
				en_US:
					'Solid Japanese restaurant with good variety. The bento boxes are well-balanced and filling. Nice place for business lunches.',
				es_ES:
					'Sólido restaurante japonés con buena variedad. Las cajas bento están bien equilibradas y son abundantes. Buen lugar para almuerzos de negocios.',
				ca_ES:
					'Sòlid restaurant japonès amb bona varietat. Les caixes bento estan ben equilibrades i són abundants. Bon lloc per a dinars de negocis.',
				fr_FR:
					"Solide restaurant japonais avec une bonne variété. Les boîtes bento sont bien équilibrées et copieuses. Bon endroit pour les déjeuners d'affaires.",
			},
			photos: [],
			created_at: '2024-11-03T13:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440040',
			user_id: '750e8400-e29b-41d4-a716-446655440009',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440004',
			rating: 4.3,
			comment: {
				en_US:
					'Great Japanese dining experience. The green tea ice cream is a perfect way to end the meal. Attentive service and clean environment.',
				es_ES:
					'Gran experiencia gastronómica japonesa. El helado de té verde es una forma perfecta de terminar la comida. Servicio atento y ambiente limpio.',
				ca_ES:
					"Gran experiència gastronòmica japonesa. El gelat de te verd és una forma perfecta d'acabar el menjar. Servei atent i ambient net.",
				fr_FR:
					'Grande expérience gastronomique japonaise. La glace au thé vert est une façon parfaite de terminer le repas. Service attentionné et environnement propre.',
			},
			photos: [
				'https://images.unsplash.com/photo-1563612198-e1a5d6c88adf?w=300',
			],
			created_at: '2024-10-31T19:10:00Z',
		},
		// Reviews para La Nonna Italiana (ID: 850e8400-e29b-41d4-a716-446655440005) - 10 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440041',
			user_id: '750e8400-e29b-41d4-a716-446655440010',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.5,
			comment: {
				en_US:
					'Authentic Italian flavors! The pasta is homemade and delicious. Perfect family-friendly atmosphere with great vegetarian options.',
				es_ES:
					'¡Sabores italianos auténticos! La pasta es casera y deliciosa. Ambiente familiar perfecto con excelentes opciones vegetarianas.',
				ca_ES:
					'Sabors italians autèntics! La pasta és casolana i deliciosa. Ambient familiar perfecte amb excel·lents opcions vegetarianes.',
				fr_FR:
					"Saveurs italiennes authentiques! Les pâtes sont faites maison et délicieuses. Ambiance familiale parfaite avec d'excellentes options végétariennes.",
			},
			photos: [
				'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300',
				'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
			],
			created_at: '2024-12-01T18:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440042',
			user_id: '750e8400-e29b-41d4-a716-446655440011',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.8,
			comment: {
				en_US:
					'Best Italian restaurant in the neighborhood! The outdoor seating is lovely and the carbonara is creamy perfection. Excellent service.',
				es_ES:
					'¡El mejor restaurante italiano del barrio! La terraza es encantadora y la carbonara es perfección cremosa. Excelente servicio.',
				ca_ES:
					'El millor restaurant italià del barri! La terrassa és encantadora i la carbonara és perfecció cremosa. Excel·lent servei.',
				fr_FR:
					'Meilleur restaurant italien du quartier! La terrasse est charmante et la carbonara est la perfection crémeuse. Excellent service.',
			},
			photos: [
				'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Grazie mille Sofia! We're delighted that you enjoyed our carbonara. Our nonna's recipe never fails to bring smiles!",
				es_ES:
					'¡Grazie mille Sofia! Nos alegra que hayas disfrutado nuestra carbonara. ¡La receta de nuestra nonna nunca falla en traer sonrisas!',
				ca_ES:
					'Grazie mille Sofia! Ens alegra que hagis gaudit de la nostra carbonara. La recepta de la nostra nonna mai falla a portar somriures!',
				fr_FR:
					"Grazie mille Sofia! Nous sommes ravis que vous ayez apprécié nos carbonara. La recette de notre nonna ne manque jamais d'apporter des sourires!",
			},
			restaurant_response_date: '2024-11-29T10:45:00Z',
			created_at: '2024-11-28T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440043',
			user_id: '750e8400-e29b-41d4-a716-446655440012',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.2,
			comment: {
				en_US:
					'Cozy Italian place with WiFi for remote work. The margherita pizza has a perfect thin crust. Good coffee too!',
				es_ES:
					'Lugar italiano acogedor con WiFi para trabajo remoto. La pizza margarita tiene una corteza fina perfecta. ¡Buen café también!',
				ca_ES:
					'Lloc italià acollidor amb WiFi per a treball remot. La pizza margarida té una crosta fina perfecta. Bon cafè també!',
				fr_FR:
					'Endroit italien cosy avec WiFi pour le travail à distance. La pizza margherita a une pâte fine parfaite. Bon café aussi!',
			},
			photos: [],
			created_at: '2024-11-25T15:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440044',
			user_id: '750e8400-e29b-41d4-a716-446655440013',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.6,
			comment: {
				en_US:
					'Wonderful Italian experience! The lasagna is layered to perfection and the tiramisu is heavenly. Great for date nights.',
				es_ES:
					'¡Maravillosa experiencia italiana! La lasaña está perfectamente estratificada y el tiramisú es celestial. Genial para citas románticas.',
				ca_ES:
					'Meravellosa experiència italiana! La lasanya està perfectament estratificada i el tiramisú és celestial. Genial per a cites romàntiques.',
				fr_FR:
					'Merveilleuse expérience italienne! Les lasagnes sont parfaitement stratifiées et le tiramisu est divin. Parfait pour les rendez-vous romantiques.',
			},
			photos: [
				'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300',
				'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300',
			],
			created_at: '2024-11-22T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440045',
			user_id: '750e8400-e29b-41d4-a716-446655440014',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 3.8,
			comment: {
				en_US:
					'Good Italian food with reasonable prices. The gnocchi could use more flavor, but the atmosphere is nice for families with kids.',
				es_ES:
					'Buena comida italiana con precios razonables. Los ñoquis podrían tener más sabor, pero el ambiente es agradable para familias con niños.',
				ca_ES:
					"Bon menjar italià amb preus raonables. Els nyoquis podrien tenir més sabor, però l'ambient és agradable per a famílies amb nens.",
				fr_FR:
					"Bonne cuisine italienne avec des prix raisonnables. Les gnocchis pourraient avoir plus de saveur, mais l'ambiance est agréable pour les familles avec enfants.",
			},
			photos: [],
			created_at: '2024-11-19T17:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440046',
			user_id: '750e8400-e29b-41d4-a716-446655440015',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.4,
			comment: {
				en_US:
					'Lovely Italian restaurant with great vegetarian selection. The eggplant parmigiana is outstanding. Nice outdoor terrace for summer evenings.',
				es_ES:
					'Encantador restaurante italiano con gran selección vegetariana. La berenjena a la parmesana es excepcional. Bonita terraza para las tardes de verano.',
				ca_ES:
					"Encantador restaurant italià amb gran selecció vegetariana. L'albergínia a la parmesana és excepcional. Bonica terrassa per a les tardes d'estiu.",
				fr_FR:
					"Charmant restaurant italien avec une grande sélection végétarienne. L'aubergine parmigiana est exceptionnelle. Belle terrasse pour les soirées d'été.",
			},
			photos: [
				'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300',
			],
			created_at: '2024-11-16T20:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440047',
			user_id: '750e8400-e29b-41d4-a716-446655440016',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.7,
			comment: {
				en_US:
					'Fantastic family restaurant! The kids loved the spaghetti and meatballs. WiFi available and very accommodating staff. Highly recommended.',
				es_ES:
					'¡Fantástico restaurante familiar! A los niños les encantaron los espaguetis con albóndigas. WiFi disponible y personal muy servicial. Muy recomendable.',
				ca_ES:
					'Fantàstic restaurant familiar! Als nens els van encantar els espaguetis amb mandonguilles. WiFi disponible i personal molt servicial. Molt recomanable.',
				fr_FR:
					'Fantastique restaurant familial! Les enfants ont adoré les spaghettis aux boulettes. WiFi disponible et personnel très serviable. Hautement recommandé.',
			},
			photos: [],
			restaurant_response_message: {
				en_US:
					"Grazie Andrea! We love welcoming families and seeing the joy on children's faces when they taste our homemade meatballs!",
				es_ES:
					'¡Grazie Andrea! Nos encanta recibir familias y ver la alegría en las caras de los niños cuando prueban nuestras albóndigas caseras!',
				ca_ES:
					"Grazie Andrea! Ens encanta rebre famílies i veure l'alegria a les cares dels nens quan proven les nostres mandonguilles casolanes!",
				fr_FR:
					'Grazie Andrea! Nous aimons accueillir les familles et voir la joie sur les visages des enfants quand ils goûtent nos boulettes maison!',
			},
			restaurant_response_date: '2024-11-14T09:20:00Z',
			created_at: '2024-11-13T18:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440048',
			user_id: '750e8400-e29b-41d4-a716-446655440017',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.0,
			comment: {
				en_US:
					'Solid Italian cuisine. The risotto is creamy and well-cooked. Good wine selection and the outdoor seating is pleasant.',
				es_ES:
					'Sólida cocina italiana. El risotto está cremoso y bien cocinado. Buena selección de vinos y la terraza es agradable.',
				ca_ES:
					'Sòlida cuina italiana. El risotto està cremós i ben cuinat. Bona selecció de vins i la terrassa és agradable.',
				fr_FR:
					'Cuisine italienne solide. Le risotto est crémeux et bien cuit. Bonne sélection de vins et la terrasse est agréable.',
			},
			photos: [],
			created_at: '2024-11-10T19:25:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440049',
			user_id: '750e8400-e29b-41d4-a716-446655440018',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 3.6,
			comment: {
				en_US:
					'Average Italian restaurant. The pizza is okay but not exceptional. Service is friendly and they have WiFi which is convenient.',
				es_ES:
					'Restaurante italiano promedio. La pizza está bien pero no es excepcional. El servicio es amable y tienen WiFi que es conveniente.',
				ca_ES:
					'Restaurant italià mitjà. La pizza està bé però no és excepcional. El servei és amable i tenen WiFi que és convenient.',
				fr_FR:
					'Restaurant italien moyen. La pizza est correcte mais pas exceptionnelle. Le service est amical et ils ont le WiFi ce qui est pratique.',
			},
			photos: [],
			created_at: '2024-11-07T16:40:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440050',
			user_id: '750e8400-e29b-41d4-a716-446655440019',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440005',
			rating: 4.9,
			comment: {
				en_US:
					'Absolutely love this place! The osso buco is tender and flavorful. Perfect for vegetarians too with many great options. Outstanding service!',
				es_ES:
					'¡Absolutamente amo este lugar! El osso buco está tierno y sabroso. Perfecto para vegetarianos también con muchas opciones geniales. ¡Servicio excepcional!',
				ca_ES:
					"Absolutament estimo aquest lloc! L'osso buco està tendre i saborós. Perfecte per a vegetarians també amb moltes opcions genials. Servei excepcional!",
				fr_FR:
					"J'adore absolument cet endroit! L'osso buco est tendre et savoureux. Parfait pour les végétariens aussi avec beaucoup de bonnes options. Service exceptionnel!",
			},
			photos: [
				'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300',
				'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300',
			],
			created_at: '2024-11-04T21:15:00Z',
		},

		// Reviews para Mumbai Spice (ID: 850e8400-e29b-41d4-a716-446655440006) - 13 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440051',
			user_id: '750e8400-e29b-41d4-a716-446655440020',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 5.0,
			comment: {
				en_US:
					'Best curry in the city! The flavors are authentic and the spices perfectly balanced. Amazing vegetarian and vegan options.',
				es_ES:
					'¡El mejor curry de la ciudad! Los sabores son auténticos y las especias perfectamente balanceadas. Increíbles opciones vegetarianas y veganas.',
				ca_ES:
					'El millor curry de la ciutat! Els sabors són autèntics i les espècies perfectament equilibrades. Increïbles opcions vegetarianes i veganes.',
				fr_FR:
					'Le meilleur curry de la ville! Les saveurs sont authentiques et les épices parfaitement équilibrées. Incroyables options végétariennes et véganes.',
			},
			photos: [
				'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
				'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Thank you for your review! We love knowing that you enjoyed our authentic dishes. Namaste!',
				es_ES:
					'¡Gracias por tu reseña! Nos encanta saber que disfrutaste de nuestros platos auténticos. ¡Namaste!',
				ca_ES:
					'Gràcies per la teva ressenya! Ens encanta saber que vas gaudir dels nostres plats autèntics. Namaste!',
				fr_FR:
					'Merci pour votre avis! Nous aimons savoir que vous avez apprécié nos plats authentiques. Namaste!',
			},
			restaurant_response_date: '2024-12-01T09:15:00Z',
			created_at: '2024-11-30T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440052',
			user_id: '750e8400-e29b-41d4-a716-446655440021',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.6,
			comment: {
				en_US:
					'Excellent Indian restaurant! The chicken tikka masala is creamy and perfectly spiced. Great gluten-free options available.',
				es_ES:
					'¡Excelente restaurante indio! El pollo tikka masala está cremoso y perfectamente especiado. Excelentes opciones sin gluten disponibles.',
				ca_ES:
					'Excel·lent restaurant indi! El pollastre tikka masala està cremós i perfectament especiat. Excel·lents opcions sense gluten disponibles.',
				fr_FR:
					'Excellent restaurant indien! Le poulet tikka masala est crémeux et parfaitement épicé. Excellentes options sans gluten disponibles.',
			},
			photos: [
				'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
			],
			created_at: '2024-11-27T20:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440053',
			user_id: '750e8400-e29b-41d4-a716-446655440022',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.3,
			comment: {
				en_US:
					'Authentic Indian flavors! The samosas are crispy and the dal is perfectly seasoned. Good variety for vegetarians.',
				es_ES:
					'¡Sabores indios auténticos! Las samosas están crujientes y el dal perfectamente sazonado. Buena variedad para vegetarianos.',
				ca_ES:
					'Sabors indis autèntics! Les samoses estan cruixents i el dal perfectament sabonejat. Bona varietat per a vegetarians.',
				fr_FR:
					'Saveurs indiennes authentiques! Les samosas sont croustillants et le dal parfaitement assaisonné. Bonne variété pour les végétariens.',
			},
			photos: [],
			created_at: '2024-11-24T18:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440054',
			user_id: '750e8400-e29b-41d4-a716-446655440023',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.8,
			comment: {
				en_US:
					'Outstanding Indian cuisine! The thali menu offers great value and variety. Spice levels are perfect and staff is knowledgeable about ingredients.',
				es_ES:
					'¡Cocina india excepcional! El menú thali ofrece gran valor y variedad. Los niveles de picante son perfectos y el personal conoce bien los ingredientes.',
				ca_ES:
					'Cuina índia excepcional! El menú thali ofereix gran valor i varietat. Els nivells de picant són perfectes i el personal coneix bé els ingredients.',
				fr_FR:
					"Cuisine indienne exceptionnelle! Le menu thali offre une grande valeur et variété. Les niveaux d'épices sont parfaits et le personnel connaît bien les ingrédients.",
			},
			photos: [
				'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300',
				'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you so much Manuel! Our thali is made with family recipes passed down through generations. We're happy you enjoyed it!",
				es_ES:
					'¡Muchísimas gracias Manuel! Nuestro thali está hecho con recetas familiares transmitidas a través de generaciones. ¡Nos alegra que lo hayas disfrutado!',
				ca_ES:
					"Moltes gràcies Manuel! El nostre thali està fet amb receptes familiars transmeses a través de generacions. Ens alegra que l'hagis gaudit!",
				fr_FR:
					"Merci beaucoup Manuel! Notre thali est fait avec des recettes familiales transmises de génération en génération. Nous sommes ravis que vous l'ayez apprécié!",
			},
			restaurant_response_date: '2024-11-22T11:30:00Z',
			created_at: '2024-11-21T19:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440055',
			user_id: '750e8400-e29b-41d4-a716-446655440024',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.1,
			comment: {
				en_US:
					'Good Indian restaurant with halal options. The biryani is aromatic and flavorful. Reasonable prices for generous portions.',
				es_ES:
					'Buen restaurante indio con opciones halal. El biryani es aromático y sabroso. Precios razonables para porciones generosas.',
				ca_ES:
					'Bon restaurant indi amb opcions halal. El biryani és aromàtic i saborós. Preus raonables per a porcions generoses.',
				fr_FR:
					'Bon restaurant indien avec des options halal. Le biryani est aromatique et savoureux. Prix raisonnables pour des portions généreuses.',
			},
			photos: [],
			created_at: '2024-11-18T17:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440056',
			user_id: '750e8400-e29b-41d4-a716-446655440025',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.4,
			comment: {
				en_US:
					'Love the variety of vegan dishes! The cauliflower curry is amazing and the naan bread is freshly baked. Spice levels can be adjusted perfectly.',
				es_ES:
					'¡Me encanta la variedad de platos veganos! El curry de coliflor es increíble y el pan naan está recién horneado. Los niveles de picante se pueden ajustar perfectamente.',
				ca_ES:
					"M'encanta la varietat de plats vegans! El curry de coliflor és increïble i el pa naan està acabat de fer. Els nivells de picant es poden ajustar perfectament.",
				fr_FR:
					"J'adore la variété de plats végans! Le curry de chou-fleur est incroyable et le pain naan est fraîchement cuit. Les niveaux d'épices peuvent être parfaitement ajustés.",
			},
			photos: [
				'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
			],
			created_at: '2024-11-15T20:35:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440057',
			user_id: '750e8400-e29b-41d4-a716-446655440026',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 3.9,
			comment: {
				en_US:
					"Decent Indian food. The lamb curry is tender but could use more complex spices. Good for those who don't like very spicy food.",
				es_ES:
					'Comida india decente. El curry de cordero está tierno pero podría usar especias más complejas. Bueno para quienes no les gusta la comida muy picante.',
				ca_ES:
					'Menjar indi decent. El curry de xai està tendre però podria usar espècies més complexes. Bé per a aquells que no els agrada el menjar molt picant.',
				fr_FR:
					"Cuisine indienne correcte. Le curry d'agneau est tendre mais pourrait utiliser des épices plus complexes. Bon pour ceux qui n'aiment pas la nourriture très épicée.",
			},
			photos: [],
			created_at: '2024-11-12T18:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440058',
			user_id: '750e8400-e29b-41d4-a716-446655440027',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.7,
			comment: {
				en_US:
					'Fantastic Indian restaurant! The palak paneer is creamy and rich. Excellent gluten-free and vegan options. Very accommodating for dietary restrictions.',
				es_ES:
					'¡Fantástico restaurante indio! El palak paneer está cremoso y rico. Excelentes opciones sin gluten y veganas. Muy flexible con las restricciones dietéticas.',
				ca_ES:
					'Fantàstic restaurant indi! El palak paneer està cremós i ric. Excel·lents opcions sense gluten i veganes. Molt flexible amb les restriccions dietètiques.',
				fr_FR:
					'Fantastique restaurant indien! Le palak paneer est crémeux et riche. Excellentes options sans gluten et véganes. Très accommodant pour les restrictions alimentaires.',
			},
			photos: [
				'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300',
			],
			created_at: '2024-11-09T19:25:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440059',
			user_id: '750e8400-e29b-41d4-a716-446655440028',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.0,
			comment: {
				en_US:
					'Good curry house with authentic flavors. The mango lassi is refreshing and the garlic naan is perfectly crispy. Service could be faster.',
				es_ES:
					'Buena casa de curry con sabores auténticos. El mango lassi es refrescante y el naan de ajo está perfectamente crujiente. El servicio podría ser más rápido.',
				ca_ES:
					"Bona casa de curry amb sabors autèntics. El mango lassi és refrescant i el naan d'all està perfectament cruixent. El servei podria ser més ràpid.",
				fr_FR:
					"Bonne maison de curry avec des saveurs authentiques. Le mango lassi est rafraîchissant et le naan à l'ail est parfaitement croustillant. Le service pourrait être plus rapide.",
			},
			photos: [],
			created_at: '2024-11-06T17:40:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440060',
			user_id: '750e8400-e29b-41d4-a716-446655440029',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.5,
			comment: {
				en_US:
					'Amazing butter chicken! The sauce is velvety smooth and the spice level is just right. Great selection of vegetarian dishes too.',
				es_ES:
					'¡Increíble pollo a la mantequilla! La salsa es aterciopelada y el nivel de picante es perfecto. Gran selección de platos vegetarianos también.',
				ca_ES:
					'Increïble pollastre a la mantega! La salsa és atercionada i el nivell de picant és perfecte. Gran selecció de plats vegetarians també.',
				fr_FR:
					"Incroyable poulet au beurre! La sauce est veloutée et le niveau d'épices est parfait. Grande sélection de plats végétariens aussi.",
			},
			photos: [
				'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300',
			],
			created_at: '2024-11-03T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440061',
			user_id: '750e8400-e29b-41d4-a716-446655440030',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 3.7,
			comment: {
				en_US:
					'Solid Indian restaurant. The tandoori chicken is well-marinated and flavorful. Prices are reasonable and portions are good.',
				es_ES:
					'Sólido restaurante indio. El pollo tandoori está bien marinado y sabroso. Los precios son razonables y las porciones buenas.',
				ca_ES:
					'Sòlid restaurant indi. El pollastre tandoori està ben marinat i saborós. Els preus són raonables i les porcions bones.',
				fr_FR:
					'Restaurant indien solide. Le poulet tandoori est bien mariné et savoureux. Les prix sont raisonnables et les portions bonnes.',
			},
			photos: [],
			created_at: '2024-10-31T18:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440062',
			user_id: '750e8400-e29b-41d4-a716-446655440031',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.9,
			comment: {
				en_US:
					'Exceptional Indian dining experience! The vindaloo has the perfect heat and the chutneys are homemade. Best Indian food in Barcelona!',
				es_ES:
					'¡Experiencia gastronómica india excepcional! El vindaloo tiene el picante perfecto y los chutneys son caseros. ¡La mejor comida india de Barcelona!',
				ca_ES:
					'Experiència gastronòmica índia excepcional! El vindaloo té el picant perfecte i els chutneys són casolans. La millor menjar indi de Barcelona!',
				fr_FR:
					'Expérience gastronomique indienne exceptionnelle! Le vindaloo a la chaleur parfaite et les chutneys sont faits maison. Meilleure cuisine indienne de Barcelone!',
			},
			photos: [
				'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300',
				'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Wow! Thank you Natalia for calling us the best in Barcelona! Our grandmother's chutney recipes are indeed special. Dhanyawad!",
				es_ES:
					'¡Wow! ¡Gracias Natalia por llamarnos los mejores de Barcelona! Las recetas de chutney de nuestra abuela son realmente especiales. ¡Dhanyawad!',
				ca_ES:
					'Wow! Gràcies Natalia per dir-nos els millors de Barcelona! Les receptes de chutney de la nostra àvia són realment especials. Dhanyawad!',
				fr_FR:
					'Wow! Merci Natalia de nous appeler les meilleurs de Barcelone! Les recettes de chutney de notre grand-mère sont vraiment spéciales. Dhanyawad!',
			},
			restaurant_response_date: '2024-10-29T10:20:00Z',
			created_at: '2024-10-28T20:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440063',
			user_id: '750e8400-e29b-41d4-a716-446655440032',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440006',
			rating: 4.2,
			comment: {
				en_US:
					'Great place for a curry fix! The korma is mild and creamy, perfect for those new to Indian food. Friendly staff and clean environment.',
				es_ES:
					'¡Gran lugar para satisfacer el antojo de curry! El korma es suave y cremoso, perfecto para quienes son nuevos en la comida india. Personal amable y ambiente limpio.',
				ca_ES:
					'Gran lloc per satisfer el caprici de curry! El korma és suau i cremós, perfecte per a aquells nous en el menjar indi. Personal amable i ambient net.',
				fr_FR:
					'Super endroit pour une envie de curry! Le korma est doux et crémeux, parfait pour ceux qui découvrent la cuisine indienne. Personnel amical et environnement propre.',
			},
			photos: [],
			created_at: '2024-10-25T19:30:00Z',
		},
		// Reviews para Bangkok Street (ID: 850e8400-e29b-41d4-a716-446655440007) - 11 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440064',
			user_id: '750e8400-e29b-41d4-a716-446655440033',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.6,
			comment: {
				en_US:
					'Authentic Thai flavors! The pad thai is perfectly balanced and the tom yum soup has the right amount of heat. Great vegan options.',
				es_ES:
					'¡Sabores tailandeses auténticos! El pad thai está perfectamente equilibrado y la sopa tom yum tiene la cantidad justa de picante. Excelentes opciones veganas.',
				ca_ES:
					'Sabors tailandesos autèntics! El pad thai està perfectament equilibrat i la sopa tom yum té la quantitat justa de picant. Excel·lents opcions veganes.',
				fr_FR:
					"Saveurs thaïlandaises authentiques! Le pad thai est parfaitement équilibré et la soupe tom yum a juste ce qu'il faut de piquant. Excellentes options véganes.",
			},
			photos: [
				'https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300',
				'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300',
			],
			created_at: '2024-12-02T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440065',
			user_id: '750e8400-e29b-41d4-a716-446655440034',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.3,
			comment: {
				en_US:
					'Love the green curry! Spicy and aromatic with fresh herbs. The WiFi is fast and the atmosphere is perfect for casual dining.',
				es_ES:
					'¡Me encanta el curry verde! Picante y aromático con hierbas frescas. El WiFi es rápido y el ambiente es perfecto para cenas casuales.',
				ca_ES:
					"M'encanta el curry verd! Picant i aromàtic amb herbes fresques. El WiFi és ràpid i l'ambient és perfecte per a sopars casuals.",
				fr_FR:
					"J'adore le curry vert! Épicé et aromatique avec des herbes fraîches. Le WiFi est rapide et l'ambiance est parfaite pour un dîner décontracté.",
			},
			photos: [
				'https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Kob khun ka! We're delighted you enjoyed our curry. Our herbs are imported fresh from Thailand twice a week!",
				es_ES:
					'¡Kob khun ka! Nos alegra que hayas disfrutado nuestro curry. ¡Nuestras hierbas se importan frescas de Tailandia dos veces por semana!',
				ca_ES:
					"Kob khun ka! Ens alegra que hagis gaudit del nostre curry. Les nostres herbes s'importen fresques de Tailàndia dues vegades per setmana!",
				fr_FR:
					'Kob khun ka! Nous sommes ravis que vous ayez apprécié notre curry. Nos herbes sont importées fraîches de Thaïlande deux fois par semaine!',
			},
			restaurant_response_date: '2024-11-30T11:20:00Z',
			created_at: '2024-11-29T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440066',
			user_id: '750e8400-e29b-41d4-a716-446655440035',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.8,
			comment: {
				en_US:
					'Outstanding Thai restaurant! The mango sticky rice is heavenly and the massaman curry is rich and complex. Excellent gluten-free options.',
				es_ES:
					'¡Restaurante tailandés excepcional! El arroz pegajoso con mango es celestial y el curry massaman es rico y complejo. Excelentes opciones sin gluten.',
				ca_ES:
					"Restaurant tailandès excepcional! L'arròs enganxós amb mango és celestial i el curry massaman és ric i complex. Excel·lents opcions sense gluten.",
				fr_FR:
					'Restaurant thaïlandais exceptionnel! Le riz gluant à la mangue est divin et le curry massaman est riche et complexe. Excellentes options sans gluten.',
			},
			photos: [
				'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300',
				'https://images.unsplash.com/photo-1596040001871-cfa80ac4cd98?w=300',
			],
			created_at: '2024-11-26T20:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440067',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.1,
			comment: {
				en_US:
					'Good Thai food with reasonable prices. The spring rolls are crispy and fresh. Nice place for vegetarians with many plant-based options.',
				es_ES:
					'Buena comida tailandesa con precios razonables. Los rollitos de primavera están crujientes y frescos. Buen lugar para vegetarianos con muchas opciones vegetales.',
				ca_ES:
					'Bon menjar tailandès amb preus raonables. Els rotllets de primavera estan cruixents i frescos. Bon lloc per a vegetarians amb moltes opcions vegetals.',
				fr_FR:
					'Bonne cuisine thaïlandaise avec des prix raisonnables. Les rouleaux de printemps sont croustillants et frais. Bon endroit pour les végétariens avec de nombreuses options végétales.',
			},
			photos: [],
			created_at: '2024-11-23T18:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440068',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.4,
			comment: {
				en_US:
					'Fantastic Thai curry! The coconut soup is creamy and aromatic. Love that they have WiFi and the spice levels can be customized.',
				es_ES:
					'¡Fantástico curry tailandés! La sopa de coco está cremosa y aromática. Me encanta que tengan WiFi y que se puedan personalizar los niveles de picante.',
				ca_ES:
					"Fantàstic curry tailandès! La sopa de coco està cremosa i aromàtica. M'encanta que tinguin WiFi i que es puguin personalitzar els nivells de picant.",
				fr_FR:
					"Fantastique curry thaïlandais! La soupe de coco est crémeuse et aromatique. J'adore qu'ils aient le WiFi et que les niveaux d'épices puissent être personnalisés.",
			},
			photos: [
				'https://images.unsplash.com/photo-1559847844-d721426d6edc?w=300',
			],
			created_at: '2024-11-20T19:25:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440069',
			user_id: '750e8400-e29b-41d4-a716-446655440005',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 3.9,
			comment: {
				en_US:
					'Decent Thai restaurant. The basil fried rice is flavorful but the portion could be larger. Good vegetarian selection and quick service.',
				es_ES:
					'Restaurante tailandés decente. El arroz frito con albahaca es sabroso pero la porción podría ser más grande. Buena selección vegetariana y servicio rápido.',
				ca_ES:
					"Restaurant tailandès decent. L'arròs fregit amb alfàbrega és saborós però la porció podria ser més gran. Bona selecció vegetariana i servei ràpid.",
				fr_FR:
					'Restaurant thaïlandais correct. Le riz frit au basilic est savoureux mais la portion pourrait être plus grande. Bonne sélection végétarienne et service rapide.',
			},
			photos: [],
			created_at: '2024-11-17T17:40:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440070',
			user_id: '750e8400-e29b-41d4-a716-446655440006',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.7,
			comment: {
				en_US:
					'Amazing Thai food! The red curry is perfectly spiced and the coconut ice cream is refreshing. Great vegan and gluten-free options available.',
				es_ES:
					'¡Increíble comida tailandesa! El curry rojo está perfectamente especiado y el helado de coco es refrescante. Excelentes opciones veganas y sin gluten disponibles.',
				ca_ES:
					'Increïble menjar tailandès! El curry vermell està perfectament especiat i el gelat de coco és refrescant. Excel·lents opcions veganes i sense gluten disponibles.',
				fr_FR:
					'Incroyable cuisine thaïlandaise! Le curry rouge est parfaitement épicé et la glace à la noix de coco est rafraîchissante. Excellentes options véganes et sans gluten disponibles.',
			},
			photos: [
				'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300',
			],
			created_at: '2024-11-14T20:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440071',
			user_id: '750e8400-e29b-41d4-a716-446655440007',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.0,
			comment: {
				en_US:
					'Good neighborhood Thai spot. The cashew chicken is tasty and the atmosphere is casual. WiFi works well for working while eating.',
				es_ES:
					'Buen lugar tailandés de barrio. El pollo con anacardos está sabroso y el ambiente es casual. El WiFi funciona bien para trabajar mientras comes.',
				ca_ES:
					"Bon lloc tailandès de barri. El pollastre amb anacards està saborós i l'ambient és casual. El WiFi funciona bé per treballar mentre menges.",
				fr_FR:
					"Bon spot thaïlandais de quartier. Le poulet aux noix de cajou est savoureux et l'ambiance est décontractée. Le WiFi fonctionne bien pour travailler en mangeant.",
			},
			photos: [],
			created_at: '2024-11-11T16:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440072',
			user_id: '750e8400-e29b-41d4-a716-446655440008',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 3.6,
			comment: {
				en_US:
					'Average Thai food. The som tam salad is refreshing but lacks authentic flavors. Service is friendly and prices are fair.',
				es_ES:
					'Comida tailandesa promedio. La ensalada som tam es refrescante pero carece de sabores auténticos. El servicio es amable y los precios justos.',
				ca_ES:
					"Menjar tailandès mitjà. L'amanida som tam és refrescant però manca de sabors autèntics. El servei és amable i els preus justos.",
				fr_FR:
					'Cuisine thaïlandaise moyenne. La salade som tam est rafraîchissante mais manque de saveurs authentiques. Le service est amical et les prix équitables.',
			},
			photos: [],
			created_at: '2024-11-08T18:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440073',
			user_id: '750e8400-e29b-41d4-a716-446655440009',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.5,
			comment: {
				en_US:
					'Excellent Thai restaurant! The boat noodles are authentic and the papaya salad is perfectly spicy. Great for vegans with lots of options.',
				es_ES:
					'¡Excelente restaurante tailandés! Los fideos boat son auténticos y la ensalada de papaya está perfectamente picante. Genial para veganos con muchas opciones.',
				ca_ES:
					"Excel·lent restaurant tailandès! Els fideus boat són autèntics i l'amanida de papaia està perfectament picant. Genial per a vegans amb moltes opcions.",
				fr_FR:
					"Excellent restaurant thaïlandais! Les nouilles boat sont authentiques et la salade de papaye est parfaitement épicée. Parfait pour les végans avec beaucoup d'options.",
			},
			photos: [
				'https://images.unsplash.com/photo-1596040001871-cfa80ac4cd98?w=300',
			],
			created_at: '2024-11-05T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440074',
			user_id: '750e8400-e29b-41d4-a716-446655440010',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440007',
			rating: 4.9,
			comment: {
				en_US:
					"Phenomenal Thai food! The best I've had outside of Thailand. Every dish is bursting with authentic flavors. The mango sticky rice is to die for!",
				es_ES:
					'¡Comida tailandesa fenomenal! La mejor que he probado fuera de Tailandia. Cada plato está lleno de sabores auténticos. ¡El arroz pegajoso con mango es para morirse!',
				ca_ES:
					"Menjar tailandès fenomenal! El millor que he tastat fora de Tailàndia. Cada plat està ple de sabors autèntics. L'arròs enganxós amb mango és per morir-se!",
				fr_FR:
					"Cuisine thaïlandaise phénoménale! La meilleure que j'aie goûtée en dehors de la Thaïlande. Chaque plat regorge de saveurs authentiques. Le riz gluant à la mangue est à tomber!",
			},
			photos: [
				'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300',
				'https://images.unsplash.com/photo-1596040001871-cfa80ac4cd98?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Kob khun mak ka Antonio! Your review fills our hearts with joy. We bring Thailand to Barcelona one dish at a time!',
				es_ES:
					'¡Kob khun mak ka Antonio! Tu reseña llena nuestros corazones de alegría. ¡Traemos Tailandia a Barcelona un plato a la vez!',
				ca_ES:
					"Kob khun mak ka Antonio! La teva ressenya omple els nostres cors d'alegria. Portem Tailàndia a Barcelona un plat cada vegada!",
				fr_FR:
					'Kob khun mak ka Antonio! Votre critique remplit nos cœurs de joie. Nous apportons la Thaïlande à Barcelone un plat à la fois!',
			},
			restaurant_response_date: '2024-11-03T09:30:00Z',
			created_at: '2024-11-02T21:20:00Z',
		},

		// Reviews para Seoul Kitchen (ID: 850e8400-e29b-41d4-a716-446655440008) - 12 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440075',
			user_id: '750e8400-e29b-41d4-a716-446655440011',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.7,
			comment: {
				en_US:
					'Incredible Korean BBQ experience! The kimchi is perfectly fermented and the bulgogi is tender and flavorful. Great for business dinners.',
				es_ES:
					'¡Increíble experiencia de BBQ coreano! El kimchi está perfectamente fermentado y el bulgogi tierno y sabroso. Genial para cenas de negocios.',
				ca_ES:
					'Increïble experiència de BBQ coreà! El kimchi està perfectament fermentat i el bulgogi tendre i saborós. Genial per a sopars de negocis.',
				fr_FR:
					"Incroyable expérience de BBQ coréen! Le kimchi est parfaitement fermenté et le bulgogi tendre et savoureux. Parfait pour les dîners d'affaires.",
			},
			photos: [
				'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=300',
				'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300',
			],
			created_at: '2024-12-01T21:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440076',
			user_id: '750e8400-e29b-41d4-a716-446655440012',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.4,
			comment: {
				en_US:
					'Authentic Korean cuisine! The bibimbap is colorful and nutritious. Air conditioning makes it comfortable even when grilling at the table.',
				es_ES:
					'¡Cocina coreana auténtica! El bibimbap es colorido y nutritivo. El aire acondicionado lo hace cómodo incluso cuando asas en la mesa.',
				ca_ES:
					"Cuina coreana autèntica! El bibimbap és colorit i nutritiu. L'aire condicionat el fa còmode fins i tot quan asses a la taula.",
				fr_FR:
					'Cuisine coréenne authentique! Le bibimbap est coloré et nutritif. La climatisation le rend confortable même en grillant à table.',
			},
			photos: [
				'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Kamsahamnida Miguel! We're thrilled you enjoyed our bibimbap. Each ingredient is carefully selected for the perfect balance!",
				es_ES:
					'¡Kamsahamnida Miguel! Nos emociona que hayas disfrutado nuestro bibimbap. ¡Cada ingrediente se selecciona cuidadosamente para el equilibrio perfecto!',
				ca_ES:
					"Kamsahamnida Miguel! Ens emociona que hagis gaudit del nostre bibimbap. Cada ingredient se selecciona acuradament per a l'equilibri perfecte!",
				fr_FR:
					"Kamsahamnida Miguel! Nous sommes ravis que vous ayez apprécié notre bibimbap. Chaque ingrédient est soigneusement sélectionné pour l'équilibre parfait!",
			},
			restaurant_response_date: '2024-11-28T10:45:00Z',
			created_at: '2024-11-27T20:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440077',
			user_id: '750e8400-e29b-41d4-a716-446655440013',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.8,
			comment: {
				en_US:
					'Outstanding Korean restaurant! The Korean fried chicken is crispy and addictive. Perfect spice level and excellent service. Highly recommended!',
				es_ES:
					'¡Restaurante coreano excepcional! El pollo frito coreano está crujiente y es adictivo. Nivel de picante perfecto y excelente servicio. ¡Muy recomendable!',
				ca_ES:
					'Restaurant coreà excepcional! El pollastre fregit coreà està cruixent i és addictiu. Nivell de picant perfecte i excel·lent servei. Molt recomanable!',
				fr_FR:
					"Restaurant coréen exceptionnel! Le poulet frit coréen est croustillant et addictif. Niveau d'épices parfait et excellent service. Hautement recommandé!",
			},
			photos: [
				'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300',
			],
			created_at: '2024-11-24T19:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440078',
			user_id: '750e8400-e29b-41d4-a716-446655440014',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.1,
			comment: {
				en_US:
					'Good Korean food with reasonable prices. The japchae noodles are well-prepared. Reservation system through their website is convenient.',
				es_ES:
					'Buena comida coreana con precios razonables. Los fideos japchae están bien preparados. El sistema de reservas a través de su sitio web es conveniente.',
				ca_ES:
					'Bon menjar coreà amb preus raonables. Els fideus japchae estan ben preparats. El sistema de reserves a través del seu lloc web és convenient.',
				fr_FR:
					'Bonne cuisine coréenne avec des prix raisonnables. Les nouilles japchae sont bien préparées. Le système de réservation via leur site web est pratique.',
			},
			photos: [],
			created_at: '2024-11-21T18:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440079',
			user_id: '750e8400-e29b-41d4-a716-446655440015',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.6,
			comment: {
				en_US:
					'Fantastic Korean BBQ experience! The galbi is marinated to perfection and the banchan side dishes are fresh and varied. Great atmosphere for groups.',
				es_ES:
					'¡Fantástica experiencia de BBQ coreano! El galbi está marinado a la perfección y los acompañamientos banchan son frescos y variados. Gran ambiente para grupos.',
				ca_ES:
					'Fantàstica experiència de BBQ coreà! El galbi està marinat a la perfecció i els acompanyaments banchan són frescos i variats. Gran ambient per a grups.',
				fr_FR:
					'Fantastique expérience de BBQ coréen! Le galbi est mariné à la perfection et les accompagnements banchan sont frais et variés. Excellente ambiance pour les groupes.',
			},
			photos: [
				'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=300',
			],
			created_at: '2024-11-18T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440080',
			user_id: '750e8400-e29b-41d4-a716-446655440016',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 3.8,
			comment: {
				en_US:
					'Decent Korean restaurant. The kimchi jjigae is warming and comforting. Service could be faster but the food quality is good.',
				es_ES:
					'Restaurante coreano decente. El kimchi jjigae es reconfortante y cálido. El servicio podría ser más rápido pero la calidad de la comida es buena.',
				ca_ES:
					'Restaurant coreà decent. El kimchi jjigae és reconfortant i càlid. El servei podria ser més ràpid però la qualitat del menjar és bona.',
				fr_FR:
					'Restaurant coréen correct. Le kimchi jjigae est réconfortant et chaleureux. Le service pourrait être plus rapide mais la qualité de la nourriture est bonne.',
			},
			photos: [],
			created_at: '2024-11-15T17:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440081',
			user_id: '750e8400-e29b-41d4-a716-446655440017',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.9,
			comment: {
				en_US:
					'Exceptional Korean dining! The Korean hot pot is perfect for sharing and the flavors are incredibly authentic. Best Korean food in the city!',
				es_ES:
					'¡Experiencia gastronómica coreana excepcional! La olla caliente coreana es perfecta para compartir y los sabores son increíblemente auténticos. ¡La mejor comida coreana de la ciudad!',
				ca_ES:
					"Experiència gastronòmica coreana excepcional! L'olla calenta coreana és perfecta per compartir i els sabors són increïblement autèntics. La millor menjar coreà de la ciutat!",
				fr_FR:
					'Expérience gastronomique coréenne exceptionnelle! Le hot pot coréen est parfait pour partager et les saveurs sont incroyablement authentiques. La meilleure cuisine coréenne de la ville!',
			},
			photos: [
				'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=300',
				'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Kamsahamnida Andrea! Your words warm our hearts like our hot pot warms the soul. Thank you for calling us the best in the city!',
				es_ES:
					'¡Kamsahamnida Andrea! Tus palabras calientan nuestros corazones como nuestro hot pot calienta el alma. ¡Gracias por llamarnos los mejores de la ciudad!',
				ca_ES:
					"Kamsahamnida Andrea! Les teves paraules escalfen els nostres cors com el nostre hot pot escalfa l'ànima. Gràcies per dir-nos els millors de la ciutat!",
				fr_FR:
					"Kamsahamnida Andrea! Vos mots réchauffent nos cœurs comme notre hot pot réchauffe l'âme. Merci de nous appeler les meilleurs de la ville!",
			},
			restaurant_response_date: '2024-11-13T09:15:00Z',
			created_at: '2024-11-12T21:00:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440082',
			user_id: '750e8400-e29b-41d4-a716-446655440018',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.3,
			comment: {
				en_US:
					'Great Korean restaurant for business meetings. The atmosphere is professional and the Korean fried rice is delicious. Air conditioning keeps it comfortable.',
				es_ES:
					'Gran restaurante coreano para reuniones de negocios. El ambiente es profesional y el arroz frito coreano está delicioso. El aire acondicionado lo mantiene cómodo.',
				ca_ES:
					"Gran restaurant coreà per a reunions de negocis. L'ambient és professional i l'arròs fregit coreà està deliciós. L'aire condicionat el manté còmode.",
				fr_FR:
					"Grand restaurant coréen pour les réunions d'affaires. L'ambiance est professionnelle et le riz frit coréen est délicieux. La climatisation le maintient confortable.",
			},
			photos: [],
			created_at: '2024-11-09T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440083',
			user_id: '750e8400-e29b-41d4-a716-446655440019',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.0,
			comment: {
				en_US:
					'Solid Korean cuisine. The bulgogi beef is tender and the kimchi has good fermentation. Online booking system works well.',
				es_ES:
					'Sólida cocina coreana. La carne bulgogi está tierna y el kimchi tiene buena fermentación. El sistema de reservas online funciona bien.',
				ca_ES:
					'Sòlida cuina coreana. La carn bulgogi està tendra i el kimchi té bona fermentació. El sistema de reserves online funciona bé.',
				fr_FR:
					'Cuisine coréenne solide. Le bœuf bulgogi est tendre et le kimchi a une bonne fermentation. Le système de réservation en ligne fonctionne bien.',
			},
			photos: [],
			created_at: '2024-11-06T18:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440084',
			user_id: '750e8400-e29b-41d4-a716-446655440020',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.5,
			comment: {
				en_US:
					'Excellent Korean BBQ spot! The pork belly is fatty and delicious. Love the interactive grilling experience. Perfect for date nights.',
				es_ES:
					'¡Excelente lugar de BBQ coreano! La panceta de cerdo está grasosa y deliciosa. Me encanta la experiencia interactiva de asar. Perfecto para citas románticas.',
				ca_ES:
					"Excel·lent lloc de BBQ coreà! La panxeta de porc està greixosa i deliciosa. M'encanta l'experiència interactiva d'rostir. Perfecte per a cites romàntiques.",
				fr_FR:
					"Excellent spot de BBQ coréen! La poitrine de porc est grasse et délicieuse. J'adore l'expérience interactive de grillage. Parfait pour les rendez-vous romantiques.",
			},
			photos: [
				'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300',
			],
			created_at: '2024-11-03T20:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440085',
			user_id: '750e8400-e29b-41d4-a716-446655440021',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 3.7,
			comment: {
				en_US:
					'Good Korean food but portions could be larger for the price. The seafood pancake is crispy and tasty. Nice for trying Korean cuisine.',
				es_ES:
					'Buena comida coreana pero las porciones podrían ser más grandes por el precio. La tortita de mariscos está crujiente y sabrosa. Bueno para probar la cocina coreana.',
				ca_ES:
					'Bon menjar coreà però les porcions podrien ser més grans pel preu. La truita de marisc està cruixent i saborosa. Bé per provar la cuina coreana.',
				fr_FR:
					'Bonne cuisine coréenne mais les portions pourraient être plus grandes pour le prix. La crêpe aux fruits de mer est croustillante et savoureuse. Bien pour découvrir la cuisine coréenne.',
			},
			photos: [],
			created_at: '2024-10-31T17:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440086',
			user_id: '750e8400-e29b-41d4-a716-446655440022',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440008',
			rating: 4.8,
			comment: {
				en_US:
					'Incredible Korean dining experience! The marinated ribs are fall-off-the-bone tender. Every banchan is perfectly seasoned. Outstanding service!',
				es_ES:
					'¡Increíble experiencia gastronómica coreana! Las costillas marinadas están tan tiernas que se caen del hueso. Cada banchan está perfectamente sazonado. ¡Servicio excepcional!',
				ca_ES:
					"Increïble experiència gastronòmica coreana! Les costelles marinades estan tan tendres que es cauen de l'os. Cada banchan està perfectament sabonejat. Servei excepcional!",
				fr_FR:
					"Incroyable expérience gastronomique coréenne! Les côtes marinées sont si tendres qu'elles se détachent de l'os. Chaque banchan est parfaitement assaisonné. Service exceptionnel!",
			},
			photos: [
				'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=300',
			],
			created_at: '2024-10-28T20:45:00Z',
		},
		// Reviews para Brooklyn Diner (ID: 850e8400-e29b-41d4-a716-446655440009) - 9 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440087',
			user_id: '750e8400-e29b-41d4-a716-446655440023',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.4,
			comment: {
				en_US:
					'Great American diner experience! The burgers are juicy and the fries crispy. Perfect family spot with outdoor seating. Kids loved it!',
				es_ES:
					'¡Gran experiencia de diner americano! Las hamburguesas están jugosas y las papas crujientes. Lugar familiar perfecto con terraza. ¡A los niños les encantó!',
				ca_ES:
					'Gran experiència de diner americà! Les hamburgueses estan sucoses i les patates cruixents. Lloc familiar perfecte amb terrassa. Als nens els va encantar!',
				fr_FR:
					'Grande expérience de diner américain! Les burgers sont juteux et les frites croustillantes. Endroit familial parfait avec terrasse. Les enfants ont adoré!',
			},
			photos: [
				'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300',
				'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300',
			],
			created_at: '2024-12-01T19:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440088',
			user_id: '750e8400-e29b-41d4-a716-446655440024',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.6,
			comment: {
				en_US:
					'Fantastic American comfort food! The mac and cheese is creamy perfection and the milkshakes are thick and delicious. Love the live music nights!',
				es_ES:
					'¡Fantástica comida americana de confort! Los macarrones con queso son perfección cremosa y los batidos espesos y deliciosos. ¡Me encantan las noches de música en vivo!',
				ca_ES:
					"Fantàstic menjar americà de confort! Els macarrons amb formatge són perfecció cremosa i els batuts espessos i deliciosos. M'encanten les nits de música en viu!",
				fr_FR:
					"Fantastique comfort food américain! Les macaronis au fromage sont la perfection crémeuse et les milkshakes épais et délicieux. J'adore les soirées musique live!",
			},
			photos: [
				'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Hey there Alicia! So stoked you loved our mac and cheese! Come back Friday for our blues night - it's gonna be epic!",
				es_ES:
					'¡Hola Alicia! ¡Nos emociona que hayas amado nuestros macarrones con queso! Ven el viernes a nuestra noche de blues, ¡va a ser épica!',
				ca_ES:
					'Hola Alicia! Ens emociona que hagis estimat els nostres macarrons amb formatge! Vine divendres a la nostra nit de blues, serà èpica!',
				fr_FR:
					'Salut Alicia! On est super contents que tu aies adoré nos macaronis au fromage! Reviens vendredi pour notre soirée blues - ça va être épique!',
			},
			restaurant_response_date: '2024-11-29T11:30:00Z',
			created_at: '2024-11-28T20:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440089',
			user_id: '750e8400-e29b-41d4-a716-446655440025',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.1,
			comment: {
				en_US:
					'Good American diner with retro vibes. The chicken wings are spicy and the coleslaw is fresh. WiFi available and pet-friendly which is great!',
				es_ES:
					'Buen diner americano con vibras retro. Las alitas de pollo están picantes y la ensalada de col fresca. ¡WiFi disponible y admiten mascotas que es genial!',
				ca_ES:
					"Bon diner americà amb vibres retro. Les aletes de pollastre estan picants i l'amanida de col fresca. WiFi disponible i admeten mascotes que és genial!",
				fr_FR:
					'Bon diner américain avec des vibes rétro. Les ailes de poulet sont épicées et la salade de chou fraîche. WiFi disponible et accueillent les animaux ce qui est génial!',
			},
			photos: [],
			created_at: '2024-11-25T17:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440090',
			user_id: '750e8400-e29b-41d4-a716-446655440026',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.8,
			comment: {
				en_US:
					'Outstanding family restaurant! The portions are huge and the apple pie is homemade perfection. Kids menu has great options and outdoor seating is perfect.',
				es_ES:
					'¡Restaurante familiar excepcional! Las porciones son enormes y el pay de manzana es perfección casera. El menú infantil tiene excelentes opciones y la terraza es perfecta.',
				ca_ES:
					'Restaurant familiar excepcional! Les porcions són enormes i el pastís de poma és perfecció casolana. El menú infantil té excel·lents opcions i la terrassa és perfecta.',
				fr_FR:
					"Restaurant familial exceptionnel! Les portions sont énormes et la tarte aux pommes est la perfection maison. Le menu enfant a d'excellentes options et la terrasse est parfaite.",
			},
			photos: [
				'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300',
				'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300',
			],
			created_at: '2024-11-22T18:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440091',
			user_id: '750e8400-e29b-41d4-a716-446655440027',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 3.9,
			comment: {
				en_US:
					'Decent American food. The BBQ ribs are tender but could use more sauce. Good atmosphere for watching sports with friends.',
				es_ES:
					'Comida americana decente. Las costillas BBQ están tiernas pero podrían usar más salsa. Buen ambiente para ver deportes con amigos.',
				ca_ES:
					'Menjar americà decent. Les costelles BBQ estan tendres però podrien usar més salsa. Bon ambient per veure esports amb amics.',
				fr_FR:
					'Cuisine américaine correcte. Les côtes BBQ sont tendres mais pourraient utiliser plus de sauce. Bonne ambiance pour regarder le sport avec des amis.',
			},
			photos: [],
			created_at: '2024-11-19T19:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440092',
			user_id: '750e8400-e29b-41d4-a716-446655440028',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.3,
			comment: {
				en_US:
					'Love this place! The hot dogs are authentic NYC style and the onion rings are perfectly crispy. Great for bringing pets and the live music adds energy.',
				es_ES:
					'¡Me encanta este lugar! Los hot dogs son estilo NYC auténtico y los aros de cebolla perfectamente crujientes. Genial para traer mascotas y la música en vivo añade energía.',
				ca_ES:
					"M'encanta aquest lloc! Els hot dogs són estil NYC autèntic i els anells de ceba perfectament cruixents. Genial per portar mascotes i la música en viu afegeix energia.",
				fr_FR:
					"J'adore cet endroit! Les hot dogs sont authentiques style NYC et les rondelles d'oignon parfaitement croustillantes. Parfait pour amener les animaux et la musique live ajoute de l'énergie.",
			},
			photos: [
				'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300',
			],
			created_at: '2024-11-16T20:35:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440093',
			user_id: '750e8400-e29b-41d4-a716-446655440029',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.0,
			comment: {
				en_US:
					'Solid American diner experience. The pancakes are fluffy and the coffee is strong. Good WiFi for working and family-friendly environment.',
				es_ES:
					'Sólida experiencia de diner americano. Los pancakes están esponjosos y el café fuerte. Buen WiFi para trabajar y ambiente familiar.',
				ca_ES:
					'Sòlida experiència de diner americà. Els pancakes estan esponjosos i el cafè fort. Bon WiFi per treballar i ambient familiar.',
				fr_FR:
					'Solide expérience de diner américain. Les pancakes sont moelleux et le café fort. Bon WiFi pour travailler et environnement familial.',
			},
			photos: [],
			created_at: '2024-11-13T16:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440094',
			user_id: '750e8400-e29b-41d4-a716-446655440030',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 4.7,
			comment: {
				en_US:
					'Amazing comfort food! The meatloaf reminds me of home and the mashed potatoes are creamy perfection. Live music on weekends creates great atmosphere!',
				es_ES:
					'¡Increíble comida de confort! El pastel de carne me recuerda a casa y el puré de papas es perfección cremosa. ¡La música en vivo los fines de semana crea un ambiente genial!',
				ca_ES:
					'Increïble menjar de confort! El pastís de carn em recorda casa i el puré de patates és perfecció cremosa. La música en viu els caps de setmana crea un ambient genial!',
				fr_FR:
					'Incroyable comfort food! Le pain de viande me rappelle la maison et la purée de pommes de terre est la perfection crémeuse. La musique live le week-end crée une super ambiance!',
			},
			photos: [
				'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300',
			],
			created_at: '2024-11-10T19:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440095',
			user_id: '750e8400-e29b-41d4-a716-446655440031',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440009',
			rating: 3.6,
			comment: {
				en_US:
					'Average American diner. The club sandwich is good but nothing special. Outdoor seating is nice and they welcome pets which is a plus.',
				es_ES:
					'Diner americano promedio. El club sandwich está bien pero nada especial. La terraza es agradable y reciben mascotas que es un plus.',
				ca_ES:
					'Diner americà mitjà. El club sandwich està bé però res especial. La terrassa és agradable i reben mascotes que és un plus.',
				fr_FR:
					'Diner américain moyen. Le club sandwich est bon mais rien de spécial. La terrasse est agréable et ils accueillent les animaux ce qui est un plus.',
			},
			photos: [],
			created_at: '2024-11-07T17:25:00Z',
		},

		// Reviews para Le Petit Bistrot (ID: 850e8400-e29b-41d4-a716-446655440010) - 14 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440096',
			user_id: '750e8400-e29b-41d4-a716-446655440032',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.9,
			comment: {
				en_US:
					'Extraordinary haute cuisine experience! Every dish is a work of art and the flavors are exceptional. Perfect for special celebrations and romantic dinners.',
				es_ES:
					'¡Experiencia de alta cocina extraordinaria! Cada plato es una obra de arte y los sabores son excepcionales. Perfecto para celebraciones especiales y cenas románticas.',
				ca_ES:
					"Experiència d'alta cuina extraordinària! Cada plat és una obra d'art i els sabors són excepcionals. Perfecte per a celebracions especials i sopars romàntics.",
				fr_FR:
					"Expérience de haute cuisine extraordinaire! Chaque plat est une œuvre d'art et les saveurs sont exceptionnelles. Parfait pour les célébrations spéciales et les dîners romantiques.",
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Merci infiniment Mónica! Creating edible art is our passion. We're honored that you chose us for your special moments.",
				es_ES:
					'¡Merci infiniment Mónica! Crear arte comestible es nuestra pasión. Nos honra que nos hayas elegido para tus momentos especiales.',
				ca_ES:
					'Merci infiniment Mónica! Crear art comestible és la nostra passió. Ens honra que ens hagis triat per als teus moments especials.',
				fr_FR:
					"Merci infiniment Mónica! Créer de l'art comestible est notre passion. Nous sommes honorés que vous nous ayez choisis pour vos moments spéciaux.",
			},
			restaurant_response_date: '2024-12-01T10:15:00Z',
			created_at: '2024-11-30T21:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440097',
			user_id: '750e8400-e29b-41d4-a716-446655440033',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.6,
			comment: {
				en_US:
					'Exceptional French cuisine! The foie gras is buttery perfection and the wine pairing recommendations were spot on. Professional service throughout.',
				es_ES:
					'¡Cocina francesa excepcional! El foie gras es perfección mantequillosa y las recomendaciones de maridaje de vinos fueron acertadas. Servicio profesional en todo momento.',
				ca_ES:
					'Cuina francesa excepcional! El foie gras és perfecció mantegosa i les recomanacions de maridatge de vins van ser encertades. Servei professional en tot moment.',
				fr_FR:
					"Cuisine française exceptionnelle! Le foie gras est la perfection beurrée et les recommandations d'accord mets-vins étaient parfaites. Service professionnel tout au long.",
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
			],
			created_at: '2024-11-27T20:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440098',
			user_id: '750e8400-e29b-41d4-a716-446655440034',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 5.0,
			comment: {
				en_US:
					'Absolutely divine! The tasting menu was a culinary journey through France. Each course was perfectly executed and the presentation stunning. Worth every euro!',
				es_ES:
					'¡Absolutamente divino! El menú degustación fue un viaje culinario por Francia. Cada plato estaba perfectamente ejecutado y la presentación impresionante. ¡Vale cada euro!',
				ca_ES:
					'Absolutament diví! El menú degustació va ser un viatge culinari per França. Cada plat estava perfectament executat i la presentació impressionant. Val cada euro!',
				fr_FR:
					'Absolument divin! Le menu dégustation était un voyage culinaire à travers la France. Chaque plat était parfaitement exécuté et la présentation époustouflante. Vaut chaque euro!',
			},
			photos: [
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
			],
			created_at: '2024-11-24T22:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440099',
			user_id: '750e8400-e29b-41d4-a716-446655440035',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.3,
			comment: {
				en_US:
					'Elegant French bistrot with refined atmosphere. The duck confit is tender and flavorful. Perfect for business dinners with air conditioning and WiFi.',
				es_ES:
					'Elegante bistrot francés con ambiente refinado. El confit de pato está tierno y sabroso. Perfecto para cenas de negocios con aire acondicionado y WiFi.',
				ca_ES:
					"Elegant bistrot francès amb ambient refinat. El confit d'ànec està tendre i saborós. Perfecte per a sopars de negocis amb aire condicionat i WiFi.",
				fr_FR:
					"Élégant bistrot français avec une ambiance raffinée. Le confit de canard est tendre et savoureux. Parfait pour les dîners d'affaires avec climatisation et WiFi.",
			},
			photos: [],
			created_at: '2024-11-21T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440100',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.8,
			comment: {
				en_US:
					"Outstanding French fine dining! The bouillabaisse is authentic and rich. The sommelier's wine selections elevated every course. Impeccable service.",
				es_ES:
					'¡Excepcional alta cocina francesa! La bouillabaisse es auténtica y rica. Las selecciones de vino del sommelier elevaron cada plato. Servicio impecable.',
				ca_ES:
					'Excepcional alta cuina francesa! La bouillabaisse és autèntica i rica. Les seleccions de vi del sommelier van elevar cada plat. Servei impecable.',
				fr_FR:
					'Exceptionnelle haute cuisine française! La bouillabaisse est authentique et riche. Les sélections de vin du sommelier ont élevé chaque plat. Service impeccable.',
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Merci beaucoup María! Our bouillabaisse recipe comes from Marseille, passed down through three generations. We're delighted you appreciated it!",
				es_ES:
					'¡Merci beaucoup María! Nuestra receta de bouillabaisse viene de Marsella, transmitida a través de tres generaciones. ¡Nos alegra que la hayas apreciado!',
				ca_ES:
					"Merci beaucoup María! La nostra recepta de bouillabaisse ve de Marsella, transmesa a través de tres generacions. Ens alegra que l'hagis apreciada!",
				fr_FR:
					"Merci beaucoup María! Notre recette de bouillabaisse vient de Marseille, transmise à travers trois générations. Nous sommes ravis que vous l'ayez appréciée!",
			},
			restaurant_response_date: '2024-11-19T11:45:00Z',
			created_at: '2024-11-18T21:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440101',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.1,
			comment: {
				en_US:
					'High-end French restaurant with beautiful presentation. The prices are steep but the quality justifies it. Great for special occasions.',
				es_ES:
					'Restaurante francés de alta gama con hermosa presentación. Los precios son altos pero la calidad lo justifica. Genial para ocasiones especiales.',
				ca_ES:
					"Restaurant francès d'alta gamma amb bonica presentació. Els preus són alts però la qualitat ho justifica. Genial per a ocasions especials.",
				fr_FR:
					'Restaurant français haut de gamme avec une belle présentation. Les prix sont élevés mais la qualité le justifie. Parfait pour les occasions spéciales.',
			},
			photos: [],
			created_at: '2024-11-15T18:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440102',
			user_id: '750e8400-e29b-41d4-a716-446655440005',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.7,
			comment: {
				en_US:
					'Magnificent French cuisine! The escargot appetizer was buttery perfection and the beef bourguignon melted in my mouth. Romantic atmosphere for couples.',
				es_ES:
					'¡Magnífica cocina francesa! El aperitivo de caracoles era perfección mantequillosa y el beef bourguignon se derretía en mi boca. Ambiente romántico para parejas.',
				ca_ES:
					"Magnífica cuina francesa! L'aperitiu de cargols era perfecció mantegosa i el beef bourguignon es fonia a la boca. Ambient romàntic per a parelles.",
				fr_FR:
					"Magnifique cuisine française! L'apéritif d'escargots était la perfection beurrée et le bœuf bourguignon fondait dans ma bouche. Ambiance romantique pour les couples.",
			},
			photos: [
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			created_at: '2024-11-12T20:35:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440103',
			user_id: '750e8400-e29b-41d4-a716-446655440006',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.4,
			comment: {
				en_US:
					'Excellent French bistrot experience. The cheese selection is impressive and the dessert soufflé was light and airy. Professional service throughout.',
				es_ES:
					'Excelente experiencia de bistrot francés. La selección de quesos es impresionante y el soufflé de postre estaba ligero y aireado. Servicio profesional en todo momento.',
				ca_ES:
					'Excel·lent experiència de bistrot francès. La selecció de formatges és impressionant i el soufflé de postre estava lleuger i aerat. Servei professional en tot moment.',
				fr_FR:
					'Excellente expérience de bistrot français. La sélection de fromages est impressionnante et le soufflé dessert était léger et aéré. Service professionnel tout au long.',
			},
			photos: [],
			created_at: '2024-11-09T19:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440104',
			user_id: '750e8400-e29b-41d4-a716-446655440007',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 3.9,
			comment: {
				en_US:
					'Good French food but quite expensive. The coq au vin is well-prepared and the atmosphere is elegant. Reservations essential.',
				es_ES:
					'Buena comida francesa pero bastante cara. El coq au vin está bien preparado y el ambiente es elegante. Las reservas son esenciales.',
				ca_ES:
					"Bon menjar francès però bastant car. El coq au vin està ben preparat i l'ambient és elegant. Les reserves són essencials.",
				fr_FR:
					"Bonne cuisine française mais assez chère. Le coq au vin est bien préparé et l'ambiance est élégante. Réservations essentielles.",
			},
			photos: [],
			created_at: '2024-11-06T17:40:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440105',
			user_id: '750e8400-e29b-41d4-a716-446655440008',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.9,
			comment: {
				en_US:
					"Phenomenal haute cuisine! The lobster thermidor was the best I've ever had. Every detail from service to presentation is flawless. A true culinary temple!",
				es_ES:
					'¡Alta cocina fenomenal! El thermidor de langosta fue el mejor que he probado. Cada detalle desde el servicio hasta la presentación es impecable. ¡Un verdadero templo culinario!',
				ca_ES:
					'Alta cuina fenomenal! El thermidor de llagosta va ser el millor que he tastat. Cada detall des del servei fins a la presentació és impecable. Un veritable temple culinari!',
				fr_FR:
					"Haute cuisine phénoménale! Le thermidor de homard était le meilleur que j'aie jamais eu. Chaque détail du service à la présentation est impeccable. Un véritable temple culinaire!",
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Mon Dieu, merci Javier! Being called a culinary temple is the highest honor. Our chef will be overjoyed to hear your praise!',
				es_ES:
					'¡Mon Dieu, merci Javier! Ser llamados templo culinario es el honor más alto. ¡Nuestro chef estará lleno de alegría al escuchar tu elogio!',
				ca_ES:
					"Mon Dieu, merci Javier! Ser anomenats temple culinari és l'honor més alt. El nostre xef estarà ple d'alegria en sentir el teu elogi!",
				fr_FR:
					"Mon Dieu, merci Javier! Être appelé temple culinaire est le plus grand honneur. Notre chef sera ravi d'entendre vos éloges!",
			},
			restaurant_response_date: '2024-11-04T10:20:00Z',
			created_at: '2024-11-03T22:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440106',
			user_id: '750e8400-e29b-41d4-a716-446655440009',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.2,
			comment: {
				en_US:
					'Refined French dining experience. The onion soup is rich and comforting. WiFi available for business meetings and the air conditioning keeps it comfortable.',
				es_ES:
					'Experiencia gastronómica francesa refinada. La sopa de cebolla es rica y reconfortante. WiFi disponible para reuniones de negocios y el aire acondicionado lo mantiene cómodo.',
				ca_ES:
					"Experiència gastronòmica francesa refinada. La sopa de ceba és rica i reconfortant. WiFi disponible per a reunions de negocis i l'aire condicionat el manté còmode.",
				fr_FR:
					"Expérience gastronomique française raffinée. La soupe à l'oignon est riche et réconfortante. WiFi disponible pour les réunions d'affaires et la climatisation maintient le confort.",
			},
			photos: [],
			created_at: '2024-10-31T18:25:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440107',
			user_id: '750e8400-e29b-41d4-a716-446655440010',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.6,
			comment: {
				en_US:
					'Superb French restaurant! The ratatouille was like a symphony of flavors and the crème brûlée had the perfect caramelized crust. Unforgettable evening!',
				es_ES:
					'¡Soberbio restaurante francés! El ratatouille era como una sinfonía de sabores y la crème brûlée tenía la costra caramelizada perfecta. ¡Velada inolvidable!',
				ca_ES:
					'Soberbi restaurant francès! El ratatouille era com una simfonia de sabors i la crème brûlée tenia la crosta caramel·litzada perfecta. Vetllada inoblidable!',
				fr_FR:
					'Superbe restaurant français! La ratatouille était comme une symphonie de saveurs et la crème brûlée avait la croûte caramélisée parfaite. Soirée inoubliable!',
			},
			photos: [
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			created_at: '2024-10-28T21:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440108',
			user_id: '750e8400-e29b-41d4-a716-446655440011',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.0,
			comment: {
				en_US:
					'Solid French cuisine with elegant presentation. The wine list is extensive and the service attentive. Good for celebrating special moments.',
				es_ES:
					'Sólida cocina francesa con presentación elegante. La carta de vinos es extensa y el servicio atento. Bueno para celebrar momentos especiales.',
				ca_ES:
					'Sòlida cuina francesa amb presentació elegant. La carta de vins és extensa i el servei atent. Bé per celebrar moments especials.',
				fr_FR:
					'Cuisine française solide avec une présentation élégante. La carte des vins est extensive et le service attentionné. Bon pour célébrer des moments spéciaux.',
			},
			photos: [],
			created_at: '2024-10-25T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440109',
			user_id: '750e8400-e29b-41d4-a716-446655440012',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440010',
			rating: 4.5,
			comment: {
				en_US:
					'Exceptional French fine dining! The foie gras terrine was silky smooth and the lamb was cooked to perfection. Perfect romantic setting for anniversaries.',
				es_ES:
					'¡Excepcional alta cocina francesa! La terrina de foie gras estaba sedosa y el cordero cocinado a la perfección. Ambiente romántico perfecto para aniversarios.',
				ca_ES:
					'Excepcional alta cuina francesa! La terrina de foie gras estava sedosa i el xai cuinat a la perfecció. Ambient romàntic perfecte per a aniversaris.',
				fr_FR:
					"Exceptionnelle haute cuisine française! La terrine de foie gras était soyeuse et l'agneau cuit à la perfection. Cadre romantique parfait pour les anniversaires.",
			},
			photos: [
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
			],
			created_at: '2024-10-22T20:50:00Z',
		},
		// Reviews para La Taberna del Abuelo (ID: 850e8400-e29b-41d4-a716-446655440011) - 8 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440110',
			user_id: '750e8400-e29b-41d4-a716-446655440013',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.5,
			comment: {
				en_US:
					'Excellent homemade food and very good price. The service is very friendly and the daily menu offers great value.',
				es_ES:
					'Excelente comida casera y muy buen precio. El servicio es muy amable y el menú del día ofrece gran valor.',
				ca_ES:
					'Excel·lent menjar casolà i molt bon preu. El servei és molt amable i el menú del dia ofereix gran valor.',
				fr_FR:
					'Excellente cuisine maison et très bon prix. Le service est très aimable et le menu du jour offre une grande valeur.',
			},
			photos: [
				'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you very much Ana! We are glad to know that you enjoyed the experience. Our grandmother's recipes are our treasure!",
				es_ES:
					'¡Muchas gracias Ana! Nos alegra saber que disfrutaste de la experiencia. ¡Las recetas de nuestra abuela son nuestro tesoro!',
				ca_ES:
					"Moltes gràcies Ana! Ens alegra saber que vas gaudir de l'experiència. Les receptes de la nostra àvia són el nostre tresor!",
				fr_FR:
					"Merci beaucoup Ana! Nous sommes heureux de savoir que vous avez apprécié l'expérience. Les recettes de notre grand-mère sont notre trésor!",
			},
			restaurant_response_date: '2024-11-29T11:00:00Z',
			created_at: '2024-11-28T14:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440111',
			user_id: '750e8400-e29b-41d4-a716-446655440014',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.2,
			comment: {
				en_US:
					'Good paella and family atmosphere. The outdoor seating is perfect for sunny days. We will definitely repeat.',
				es_ES:
					'Buena paella y ambiente familiar. La terraza es perfecta para días soleados. Repetiremos seguro.',
				ca_ES:
					'Bona paella i ambient familiar. La terrassa és perfecta per a dies assolellats. Repetirem segur.',
				fr_FR:
					'Bonne paella et ambiance familiale. La terrasse est parfaite pour les jours ensoleillés. Nous répéterons certainement.',
			},
			photos: [],
			created_at: '2024-11-25T19:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440112',
			user_id: '750e8400-e29b-41d4-a716-446655440015',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.7,
			comment: {
				en_US:
					'Fantastic neighborhood gem! The mixed paella is generous and full of flavor. Great WiFi for remote work and very family-friendly.',
				es_ES:
					'¡Fantástica joya del barrio! La paella mixta es generosa y llena de sabor. Excelente WiFi para trabajo remoto y muy familiar.',
				ca_ES:
					'Fantàstica joia del barri! La paella mixta és generosa i plena de sabor. Excel·lent WiFi per a treball remot i molt familiar.',
				fr_FR:
					'Fantastique joyau de quartier! La paella mixte est généreuse et pleine de saveur. Excellent WiFi pour le travail à distance et très familial.',
			},
			photos: [
				'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=300',
				'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300',
			],
			created_at: '2024-11-22T13:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440113',
			user_id: '750e8400-e29b-41d4-a716-446655440016',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 3.8,
			comment: {
				en_US:
					'Decent traditional food with reasonable prices. The gazpacho is refreshing and the service is attentive. Good for casual dining.',
				es_ES:
					'Comida tradicional decente con precios razonables. El gazpacho es refrescante y el servicio atento. Bueno para cenas casuales.',
				ca_ES:
					'Menjar tradicional decent amb preus raonables. El gaspatxo és refrescant i el servei atent. Bé per a sopars casuals.',
				fr_FR:
					'Cuisine traditionnelle correcte avec des prix raisonnables. Le gaspacho est rafraîchissant et le service attentionné. Bon pour les dîners décontractés.',
			},
			photos: [],
			created_at: '2024-11-19T16:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440114',
			user_id: '750e8400-e29b-41d4-a716-446655440017',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.4,
			comment: {
				en_US:
					'Lovely family restaurant! The grilled chicken is perfectly seasoned and the outdoor terrace is charming. Great vegetarian options too.',
				es_ES:
					'¡Encantador restaurante familiar! El pollo a la plancha está perfectamente sazonado y la terraza es encantadora. Excelentes opciones vegetarianas también.',
				ca_ES:
					'Encantador restaurant familiar! El pollastre a la planxa està perfectament sabonejat i la terrassa és encantadora. Excel·lents opcions vegetarianes també.',
				fr_FR:
					'Charmant restaurant familial! Le poulet grillé est parfaitement assaisonné et la terrasse est charmante. Excellentes options végétariennes aussi.',
			},
			photos: [
				'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300',
			],
			created_at: '2024-11-16T18:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440115',
			user_id: '750e8400-e29b-41d4-a716-446655440018',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.0,
			comment: {
				en_US:
					'Good Mediterranean food at fair prices. The daily menu is well-balanced and includes dessert. WiFi works well for working lunches.',
				es_ES:
					'Buena comida mediterránea a precios justos. El menú del día está bien equilibrado e incluye postre. El WiFi funciona bien para almuerzos de trabajo.',
				ca_ES:
					'Bon menjar mediterrani a preus justos. El menú del dia està ben equilibrat i inclou postre. El WiFi funciona bé per a dinars de treball.',
				fr_FR:
					'Bonne cuisine méditerranéenne à prix équitables. Le menu du jour est bien équilibré et inclut le dessert. Le WiFi fonctionne bien pour les déjeuners de travail.',
			},
			photos: [],
			created_at: '2024-11-13T12:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440116',
			user_id: '750e8400-e29b-41d4-a716-446655440019',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 4.6,
			comment: {
				en_US:
					'Outstanding traditional cuisine! The seafood paella is packed with fresh ingredients. Perfect for family gatherings with outdoor seating.',
				es_ES:
					'¡Cocina tradicional excepcional! La paella de mariscos está llena de ingredientes frescos. Perfecta para reuniones familiares con terraza.',
				ca_ES:
					"Cuina tradicional excepcional! La paella de marisc està plena d'ingredients frescos. Perfecta per a reunions familiars amb terrassa.",
				fr_FR:
					"Cuisine traditionnelle exceptionnelle! La paella aux fruits de mer regorge d'ingrédients frais. Parfaite pour les réunions familiales avec terrasse.",
			},
			photos: [
				'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you so much Irene! Our paella is made with the freshest seafood from the market every morning. We're glad you enjoyed it!",
				es_ES:
					'¡Muchísimas gracias Irene! Nuestra paella se hace con el marisco más fresco del mercado cada mañana. ¡Nos alegra que la hayas disfrutado!',
				ca_ES:
					"Moltes gràcies Irene! La nostra paella es fa amb el marisc més fresc del mercat cada matí. Ens alegra que l'hagis gaudit!",
				fr_FR:
					"Merci beaucoup Irene! Notre paella est faite avec les fruits de mer les plus frais du marché chaque matin. Nous sommes ravis que vous l'ayez appréciée!",
			},
			restaurant_response_date: '2024-11-11T10:30:00Z',
			created_at: '2024-11-10T20:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440117',
			user_id: '750e8400-e29b-41d4-a716-446655440020',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440011',
			rating: 3.9,
			comment: {
				en_US:
					'Solid neighborhood restaurant. The portions are generous and the service friendly. Good for families with children and reasonable prices.',
				es_ES:
					'Sólido restaurante de barrio. Las porciones son generosas y el servicio amable. Bueno para familias con niños y precios razonables.',
				ca_ES:
					'Sòlid restaurant de barri. Les porcions són generoses i el servei amable. Bé per a famílies amb nens i preus raonables.',
				fr_FR:
					'Solide restaurant de quartier. Les portions sont généreuses et le service amical. Bon pour les familles avec enfants et prix raisonnables.',
			},
			photos: [],
			created_at: '2024-11-07T17:50:00Z',
		},

		// Reviews para Bistro Mediterráneo (ID: 850e8400-e29b-41d4-a716-446655440012) - 10 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440118',
			user_id: '750e8400-e29b-41d4-a716-446655440021',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.8,
			comment: {
				en_US:
					'Exceptional Mediterranean cuisine! Perfect for romantic dinners and business meetings. The reservation system works flawlessly and the air conditioning is perfect.',
				es_ES:
					'¡Cocina mediterránea excepcional! Perfecta para cenas románticas y reuniones de negocios. El sistema de reservas funciona perfectamente y el aire acondicionado es perfecto.',
				ca_ES:
					"Cuina mediterrània excepcional! Perfecta per a sopars romàntics i reunions de negocis. El sistema de reserves funciona perfectament i l'aire condicionat és perfecte.",
				fr_FR:
					"Cuisine méditerranéenne exceptionnelle! Parfaite pour les dîners romantiques et les réunions d'affaires. Le système de réservation fonctionne parfaitement et la climatisation est parfaite.",
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
				'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Thank you so much Fernando! We strive to create the perfect atmosphere for every occasion. Your satisfaction is our greatest reward!',
				es_ES:
					'¡Muchísimas gracias Fernando! Nos esforzamos por crear el ambiente perfecto para cada ocasión. ¡Tu satisfacción es nuestra mayor recompensa!',
				ca_ES:
					"Moltes gràcies Fernando! Ens esforcem per crear l'ambient perfecte per a cada ocasió. La teva satisfacció és la nostra major recompensa!",
				fr_FR:
					"Merci beaucoup Fernando! Nous nous efforçons de créer l'ambiance parfaite pour chaque occasion. Votre satisfaction est notre plus grande récompense!",
			},
			restaurant_response_date: '2024-12-01T11:20:00Z',
			created_at: '2024-11-30T21:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440119',
			user_id: '750e8400-e29b-41d4-a716-446655440022',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.4,
			comment: {
				en_US:
					'Excellent Mediterranean restaurant with upscale atmosphere. The grilled octopus is tender and the wine selection impressive. Perfect for special occasions.',
				es_ES:
					'Excelente restaurante mediterráneo con ambiente elegante. El pulpo a la plancha está tierno y la selección de vinos impresionante. Perfecto para ocasiones especiales.',
				ca_ES:
					'Excel·lent restaurant mediterrani amb ambient elegant. El pop a la planxa està tendre i la selecció de vins impressionant. Perfecte per a ocasions especials.',
				fr_FR:
					'Excellent restaurant méditerranéen avec une ambiance haut de gamme. Le poulpe grillé est tendre et la sélection de vins impressionnante. Parfait pour les occasions spéciales.',
			},
			photos: [
				'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300',
			],
			created_at: '2024-11-27T19:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440120',
			user_id: '750e8400-e29b-41d4-a716-446655440023',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.6,
			comment: {
				en_US:
					'Outstanding seafood and Mediterranean flavors! The paella valenciana is authentic and the service impeccable. Booking through OpenTable is very convenient.',
				es_ES:
					'¡Excepcional marisco y sabores mediterráneos! La paella valenciana es auténtica y el servicio impecable. Reservar a través de OpenTable es muy conveniente.',
				ca_ES:
					"Excepcional marisc i sabors mediterranis! La paella valenciana és autèntica i el servei impecable. Reservar a través d'OpenTable és molt convenient.",
				fr_FR:
					'Fruits de mer exceptionnels et saveurs méditerranéennes! La paella valencienne est authentique et le service impeccable. Réserver via OpenTable est très pratique.',
			},
			photos: [
				'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=300',
			],
			created_at: '2024-11-24T20:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440121',
			user_id: '750e8400-e29b-41d4-a716-446655440024',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.1,
			comment: {
				en_US:
					'Good Mediterranean cuisine with professional service. The lamb is perfectly cooked and the atmosphere is elegant for business dinners.',
				es_ES:
					'Buena cocina mediterránea con servicio profesional. El cordero está perfectamente cocinado y el ambiente es elegante para cenas de negocios.',
				ca_ES:
					"Bona cuina mediterrània amb servei professional. El xai està perfectament cuinat i l'ambient és elegant per a sopars de negocis.",
				fr_FR:
					"Bonne cuisine méditerranéenne avec un service professionnel. L'agneau est parfaitement cuit et l'ambiance est élégante pour les dîners d'affaires.",
			},
			photos: [],
			created_at: '2024-11-21T18:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440122',
			user_id: '750e8400-e29b-41d4-a716-446655440025',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.9,
			comment: {
				en_US:
					'Sublime Mediterranean experience! The sea bass with herbs is melting and the romantic atmosphere perfect for our anniversary. Exceptional wine pairing!',
				es_ES:
					'¡Experiencia mediterránea sublime! La lubina con hierbas se derrite y el ambiente romántico perfecto para nuestro aniversario. ¡Maridaje de vinos excepcional!',
				ca_ES:
					"Experiència mediterrània sublim! El llobarro amb herbes es fon i l'ambient romàntic perfecte per al nostre aniversari. Maridatge de vins excepcional!",
				fr_FR:
					"Expérience méditerranéenne sublime! Le bar aux herbes fond et l'ambiance romantique parfaite pour notre anniversaire. Accord mets-vins exceptionnel!",
			},
			photos: [
				'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300',
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Thank you Silvia for choosing us for such a special moment! We're honored to have been part of your anniversary celebration!",
				es_ES:
					'¡Gracias Silvia por elegirnos para un momento tan especial! ¡Nos honra haber sido parte de la celebración de tu aniversario!',
				ca_ES:
					'Gràcies Silvia per triar-nos per a un moment tan especial! Ens honra haver estat part de la celebració del vostre aniversari!',
				fr_FR:
					"Merci Silvia de nous avoir choisis pour un moment si spécial! Nous sommes honorés d'avoir fait partie de la célébration de votre anniversaire!",
			},
			restaurant_response_date: '2024-11-19T10:45:00Z',
			created_at: '2024-11-18T21:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440123',
			user_id: '750e8400-e29b-41d4-a716-446655440026',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 3.9,
			comment: {
				en_US:
					'Decent Mediterranean restaurant. The prices are a bit high but the quality is good. Air conditioning makes it comfortable for summer dining.',
				es_ES:
					'Restaurante mediterráneo decente. Los precios son un poco altos pero la calidad es buena. El aire acondicionado lo hace cómodo para cenar en verano.',
				ca_ES:
					"Restaurant mediterrani decent. Els preus són una mica alts però la qualitat és bona. L'aire condicionat el fa còmode per sopar a l'estiu.",
				fr_FR:
					'Restaurant méditerranéen correct. Les prix sont un peu élevés mais la qualité est bonne. La climatisation le rend confortable pour dîner en été.',
			},
			photos: [],
			created_at: '2024-11-15T17:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440124',
			user_id: '750e8400-e29b-41d4-a716-446655440027',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.5,
			comment: {
				en_US:
					'Fantastic Mediterranean cuisine! The black rice with squid ink is flavorful and the presentation elegant. Perfect for impressing clients.',
				es_ES:
					'¡Fantástica cocina mediterránea! El arroz negro con tinta de calamar es sabroso y la presentación elegante. Perfecto para impresionar clientes.',
				ca_ES:
					"Fantàstica cuina mediterrània! L'arròs negre amb tinta de calamar és saborós i la presentació elegant. Perfecte per impressionar clients.",
				fr_FR:
					"Fantastique cuisine méditerranéenne! Le riz noir à l'encre de seiche est savoureux et la présentation élégante. Parfait pour impressionner les clients.",
			},
			photos: [
				'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300',
			],
			created_at: '2024-11-12T19:40:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440125',
			user_id: '750e8400-e29b-41d4-a716-446655440028',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.2,
			comment: {
				en_US:
					'Solid Mediterranean restaurant with professional atmosphere. The grilled vegetables are fresh and the service attentive. Good for business meetings.',
				es_ES:
					'Sólido restaurante mediterráneo con ambiente profesional. Las verduras a la plancha están frescas y el servicio atento. Bueno para reuniones de negocios.',
				ca_ES:
					'Sòlid restaurant mediterrani amb ambient professional. Les verdures a la planxa estan fresques i el servei atent. Bé per a reunions de negocis.',
				fr_FR:
					"Solide restaurant méditerranéen avec une ambiance professionnelle. Les légumes grillés sont frais et le service attentionné. Bon pour les réunions d'affaires.",
			},
			photos: [],
			created_at: '2024-11-09T18:25:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440126',
			user_id: '750e8400-e29b-41d4-a716-446655440029',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.7,
			comment: {
				en_US:
					'Excellent Mediterranean dining! The seafood platter is fresh and abundant. Perfect romantic setting and the online reservation system is seamless.',
				es_ES:
					'¡Excelente experiencia mediterránea! La bandeja de mariscos está fresca y abundante. Ambiente romántico perfecto y el sistema de reservas online es perfecto.',
				ca_ES:
					'Excel·lent experiència mediterrània! La safata de marisc està fresca i abundant. Ambient romàntic perfecte i el sistema de reserves online és perfecte.',
				fr_FR:
					'Excellente expérience méditerranéenne! Le plateau de fruits de mer est frais et abondant. Cadre romantique parfait et le système de réservation en ligne est parfait.',
			},
			photos: [
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
			],
			created_at: '2024-11-06T20:10:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440127',
			user_id: '750e8400-e29b-41d4-a716-446655440030',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440012',
			rating: 4.0,
			comment: {
				en_US:
					'Good Mediterranean food with elegant presentation. The wine list is extensive and the air conditioning keeps the dining room comfortable.',
				es_ES:
					'Buena comida mediterránea con presentación elegante. La carta de vinos es extensa y el aire acondicionado mantiene el comedor cómodo.',
				ca_ES:
					"Bon menjar mediterrani amb presentació elegant. La carta de vins és extensa i l'aire condicionat manté el menjador còmode.",
				fr_FR:
					'Bonne cuisine méditerranéenne avec une présentation élégante. La carte des vins est extensive et la climatisation maintient la salle à manger confortable.',
			},
			photos: [],
			created_at: '2024-11-03T19:55:00Z',
		},
		// Reviews para Café Central (ID: 850e8400-e29b-41d4-a716-446655440013) - 6 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440128',
			user_id: '750e8400-e29b-41d4-a716-446655440031',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440013',
			rating: 3.8,
			comment: {
				en_US:
					'Nice casual café with outdoor seating. The coffee is decent and WiFi works well for remote work. Family-friendly atmosphere.',
				es_ES:
					'Bonito café casual con terraza. El café es decente y el WiFi funciona bien para trabajo remoto. Ambiente familiar.',
				ca_ES:
					'Bonic cafè casual amb terrassa. El cafè és decent i el WiFi funciona bé per a treball remot. Ambient familiar.',
				fr_FR:
					'Joli café décontracté avec terrasse. Le café est correct et le WiFi fonctionne bien pour le travail à distance. Ambiance familiale.',
			},
			photos: [
				'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300',
			],
			created_at: '2024-11-28T15:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440129',
			user_id: '750e8400-e29b-41d4-a716-446655440032',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440013',
			rating: 3.5,
			comment: {
				en_US:
					'Good neighborhood café for quick bites. The sandwiches are fresh and prices are reasonable. Outdoor terrace is pleasant.',
				es_ES:
					'Buen café de barrio para comidas rápidas. Los sándwiches están frescos y los precios son razonables. La terraza es agradable.',
				ca_ES:
					'Bon cafè de barri per a menjars ràpids. Els entrepans estan frescos i els preus són raonables. La terrassa és agradable.',
				fr_FR:
					'Bon café de quartier pour les collations rapides. Les sandwichs sont frais et les prix raisonnables. La terrasse est agréable.',
			},
			photos: [],
			created_at: '2024-11-25T12:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440130',
			user_id: '750e8400-e29b-41d4-a716-446655440033',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440013',
			rating: 4.0,
			comment: {
				en_US:
					'Comfortable café with good WiFi. The pastries are fresh and the outdoor seating perfect for people watching. Great for families with kids.',
				es_ES:
					'Café cómodo con buen WiFi. Los pasteles están frescos y la terraza perfecta para observar gente. Genial para familias con niños.',
				ca_ES:
					'Cafè còmode amb bon WiFi. Els pastissos estan frescos i la terrassa perfecta per observar gent. Genial per a famílies amb nens.',
				fr_FR:
					'Café confortable avec bon WiFi. Les pâtisseries sont fraîches et la terrasse parfaite pour observer les gens. Parfait pour les familles avec enfants.',
			},
			photos: [],
			created_at: '2024-11-22T16:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440131',
			user_id: '750e8400-e29b-41d4-a716-446655440034',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440013',
			rating: 3.2,
			comment: {
				en_US:
					'Basic American café. The burgers are okay but nothing special. Good for a quick meal with family-friendly prices.',
				es_ES:
					'Café americano básico. Las hamburguesas están bien pero nada especial. Bueno para una comida rápida con precios familiares.',
				ca_ES:
					'Cafè americà bàsic. Les hamburgueses estan bé però res especial. Bé per a un menjar ràpid amb preus familiars.',
				fr_FR:
					'Café américain basique. Les burgers sont corrects mais rien de spécial. Bon pour un repas rapide avec des prix familiaux.',
			},
			photos: [],
			created_at: '2024-11-19T14:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440132',
			user_id: '750e8400-e29b-41d4-a716-446655440035',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440013',
			rating: 3.9,
			comment: {
				en_US:
					'Nice spot for breakfast or light lunch. The coffee is good and outdoor seating is relaxing. WiFi is reliable for working.',
				es_ES:
					'Buen lugar para desayuno o almuerzo ligero. El café es bueno y la terraza relajante. El WiFi es confiable para trabajar.',
				ca_ES:
					'Bon lloc per a esmorzar o dinar lleuger. El cafè és bo i la terrassa relaxant. El WiFi és fiable per treballar.',
				fr_FR:
					'Bon endroit pour le petit-déjeuner ou le déjeuner léger. Le café est bon et la terrasse relaxante. Le WiFi est fiable pour travailler.',
			},
			photos: [
				'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300',
			],
			created_at: '2024-11-16T11:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440133',
			user_id: '750e8400-e29b-41d4-a716-446655440003',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440013',
			rating: 4.2,
			comment: {
				en_US:
					'Cozy neighborhood café. The milkshakes are thick and delicious. Perfect for families and the outdoor terrace is charming.',
				es_ES:
					'Acogedor café de barrio. Los batidos son espesos y deliciosos. Perfecto para familias y la terrassa es encantadora.',
				ca_ES:
					'Acollidor cafè de barri. Els batuts són espessos i deliciosos. Perfecte per a famílies i la terrassa és encantadora.',
				fr_FR:
					'Café de quartier confortable. Les milkshakes sont épais et délicieux. Parfait pour les familles et la terrasse est charmante.',
			},
			photos: [],
			created_at: '2024-11-13T13:45:00Z',
		},

		// Reviews para Café de Paris (ID: 850e8400-e29b-41d4-a716-446655440023) - 12 reviews
		{
			id: 'b50e8400-e29b-41d4-a716-446655440134',
			user_id: '750e8400-e29b-41d4-a716-446655440004',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.6,
			comment: {
				en_US:
					'Excellent brunch spot! The croissants are buttery and flaky, just like in Paris. Beautiful outdoor seating and perfect for dessert lovers.',
				es_ES:
					'¡Excelente lugar para brunch! Los croissants están mantequillosos y hojaldrados, justo como en París. Hermosa terraza y perfecto para amantes de los postres.',
				ca_ES:
					'Excel·lent lloc per fer brunch! Els croissants estan mantegosos i fullats, just com a París. Bonica terrassa i perfecte per a amants de les postres.',
				fr_FR:
					'Excellent endroit pour le brunch! Les croissants sont beurrés et feuilletés, tout comme à Paris. Belle terrasse et parfait pour les amateurs de desserts.',
			},
			photos: [
				'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300',
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
			],
			restaurant_response_message: {
				en_US:
					'Merci beaucoup Carlos! We import our butter from Normandy to get that authentic Parisian taste. Glad you enjoyed it!',
				es_ES:
					'¡Merci beaucoup Carlos! Importamos nuestra mantequilla de Normandía para conseguir ese auténtico sabor parisino. ¡Nos alegra que lo hayas disfrutado!',
				ca_ES:
					'Merci beaucoup Carlos! Importem la nostra mantega de Normandia per aconseguir aquest autèntic sabor parisenc. Ens alegra que ho hagis gaudit!',
				fr_FR:
					"Merci beaucoup Carlos! Nous importons notre beurre de Normandie pour obtenir ce goût parisien authentique. Ravi que vous l'ayez apprécié!",
			},
			restaurant_response_date: '2024-11-30T09:15:00Z',
			created_at: '2024-11-29T11:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440135',
			user_id: '750e8400-e29b-41d4-a716-446655440005',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.8,
			comment: {
				en_US:
					'Outstanding French café experience! The brunch menu is divine and the WiFi perfect for working. Romantic atmosphere and exceptional desserts.',
				es_ES:
					'¡Excepcional experiencia de café francés! El menú brunch es divino y el WiFi perfecto para trabajar. Ambiente romántico y postres excepcionales.',
				ca_ES:
					'Excepcional experiència de cafè francès! El menú brunch és diví i el WiFi perfecte per treballar. Ambient romàntic i postres excepcionals.',
				fr_FR:
					'Expérience de café français exceptionnelle! Le menu brunch est divin et le WiFi parfait pour travailler. Ambiance romantique et desserts exceptionnels.',
			},
			photos: [
				'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300',
			],
			created_at: '2024-11-26T10:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440136',
			user_id: '750e8400-e29b-41d4-a716-446655440006',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.3,
			comment: {
				en_US:
					'Lovely French bistrot atmosphere! The quiche lorraine is authentic and the coffee strong. Great outdoor seating for weekend brunch.',
				es_ES:
					'¡Encantador ambiente de bistrot francés! La quiche lorraine es auténtica y el café fuerte. Excelente terraza para brunch de fin de semana.',
				ca_ES:
					'Encantador ambient de bistrot francès! La quiche lorraine és autèntica i el cafè fort. Excel·lent terrassa per a brunch de cap de setmana.',
				fr_FR:
					'Charmante ambiance de bistrot français! La quiche lorraine est authentique et le café fort. Excellente terrasse pour le brunch du week-end.',
			},
			photos: [],
			created_at: '2024-11-23T12:20:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440137',
			user_id: '750e8400-e29b-41d4-a716-446655440007',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.1,
			comment: {
				en_US:
					'Good French café with decent prices. The macarons are colorful and tasty. WiFi works well and outdoor seating is pleasant.',
				es_ES:
					'Buen café francés con precios decentes. Los macarons son coloridos y sabrosos. El WiFi funciona bien y la terraza es agradable.',
				ca_ES:
					'Bon cafè francès amb preus decents. Els macarons són colorits i saborosos. El WiFi funciona bé i la terrassa és agradable.',
				fr_FR:
					'Bon café français avec des prix corrects. Les macarons sont colorés et savoureux. Le WiFi fonctionne bien et la terrasse est agréable.',
			},
			photos: [],
			created_at: '2024-11-20T15:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440138',
			user_id: '750e8400-e29b-41d4-a716-446655440008',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.7,
			comment: {
				en_US:
					'Fantastic French brunch spot! The pain au chocolat is flaky perfection and the outdoor terrace transports you to Paris. Amazing dessert selection!',
				es_ES:
					'¡Fantástico lugar francés para brunch! El pain au chocolat es perfección hojaldrada y la terraza te transporta a París. ¡Increíble selección de postres!',
				ca_ES:
					'Fantàstic lloc francès per fer brunch! El pain au chocolat és perfecció fullada i la terrassa et transporta a París. Increïble selecció de postres!',
				fr_FR:
					'Fantastique spot français pour le brunch! Le pain au chocolat est la perfection feuilletée et la terrasse vous transporte à Paris. Incroyable sélection de desserts!',
			},
			photos: [
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Merci Laura! Our pastry chef trained in Lyon and uses traditional French techniques. We're delighted you felt transported to Paris!",
				es_ES:
					'¡Merci Laura! Nuestro chef pastelero se entrenó en Lyon y usa técnicas francesas tradicionales. ¡Nos alegra que te sintieras transportada a París!',
				ca_ES:
					'Merci Laura! El nostre xef pastisser es va entrenar a Lió i usa tècniques franceses tradicionals. Ens alegra que et sentissis transportada a París!',
				fr_FR:
					"Merci Laura! Notre chef pâtissier s'est formé à Lyon et utilise des techniques françaises traditionnelles. Nous sommes ravis que vous vous soyez sentie transportée à Paris!",
			},
			restaurant_response_date: '2024-11-18T10:30:00Z',
			created_at: '2024-11-17T16:45:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440139',
			user_id: '750e8400-e29b-41d4-a716-446655440009',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.0,
			comment: {
				en_US:
					'Nice French café atmosphere. The croque monsieur is filling and the coffee properly strong. Good for romantic brunch dates.',
				es_ES:
					'Buen ambiente de café francés. El croque monsieur es abundante y el café apropiadamente fuerte. Bueno para citas románticas de brunch.',
				ca_ES:
					'Bon ambient de cafè francès. El croque monsieur és abundant i el cafè apropiadament fort. Bé per a cites romàntiques de brunch.',
				fr_FR:
					'Bonne ambiance de café français. Le croque monsieur est copieux et le café bien fort. Bon pour les rendez-vous romantiques brunch.',
			},
			photos: [],
			created_at: '2024-11-14T13:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440140',
			user_id: '750e8400-e29b-41d4-a716-446655440010',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.4,
			comment: {
				en_US:
					'Excellent French patisserie! The éclairs are perfectly filled and the outdoor seating ideal for people watching. WiFi is fast for working.',
				es_ES:
					'¡Excelente pastelería francesa! Los éclairs están perfectamente rellenos y la terraza ideal para observar gente. El WiFi es rápido para trabajar.',
				ca_ES:
					'Excel·lent pastisseria francesa! Els éclairs estan perfectament farcits i la terrassa ideal per observar gent. El WiFi és ràpid per treballar.',
				fr_FR:
					'Excellente pâtisserie française! Les éclairs sont parfaitement garnis et la terrasse idéale pour observer les gens. Le WiFi est rapide pour travailler.',
			},
			photos: [
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			created_at: '2024-11-11T14:50:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440141',
			user_id: '750e8400-e29b-41d4-a716-446655440011',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 3.8,
			comment: {
				en_US:
					'Decent French café. The prices are a bit high but the quality is good. Nice for special brunch occasions with romantic atmosphere.',
				es_ES:
					'Café francés decente. Los precios son un poco altos pero la calidad es buena. Agradable para ocasiones especiales de brunch con ambiente romántico.',
				ca_ES:
					'Cafè francès decent. Els preus són una mica alts però la qualitat és bona. Agradable per a ocasions especials de brunch amb ambient romàntic.',
				fr_FR:
					'Café français correct. Les prix sont un peu élevés mais la qualité est bonne. Agréable pour les occasions spéciales de brunch avec ambiance romantique.',
			},
			photos: [],
			created_at: '2024-11-08T11:25:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440142',
			user_id: '750e8400-e29b-41d4-a716-446655440012',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.9,
			comment: {
				en_US:
					'Phenomenal French experience! The gourmet dinner exceeded all expectations. Each dessert is a work of art and the romantic setting perfect for proposals!',
				es_ES:
					'¡Experiencia francesa fenomenal! La cena gourmet superó todas las expectativas. Cada postre es una obra de arte y el ambiente romántico perfecto para propuestas!',
				ca_ES:
					"Experiència francesa fenomenal! El sopar gourmet va superar totes les expectatives. Cada postre és una obra d'art i l'ambient romàntic perfecte per a propostes!",
				fr_FR:
					"Expérience française phénoménale! Le dîner gourmet a dépassé toutes les attentes. Chaque dessert est une œuvre d'art et le cadre romantique parfait pour les demandes!",
			},
			photos: [
				'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300',
				'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			restaurant_response_message: {
				en_US:
					"Mon Dieu Miguel! We're honored to have been part of such a special moment. Félicitations on your engagement! Love is in the air at Café de Paris!",
				es_ES:
					'¡Mon Dieu Miguel! Nos honra haber sido parte de un momento tan especial. ¡Félicitations por tu compromiso! ¡El amor está en el aire en Café de Paris!',
				ca_ES:
					"Mon Dieu Miguel! Ens honra haver estat part d'un moment tan especial. Félicitations pel teu compromís! L'amor és a l'aire al Café de Paris!",
				fr_FR:
					"Mon Dieu Miguel! Nous sommes honorés d'avoir fait partie d'un moment si spécial. Félicitations pour vos fiançailles! L'amour est dans l'air au Café de Paris!",
			},
			restaurant_response_date: '2024-11-06T09:45:00Z',
			created_at: '2024-11-05T21:30:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440143',
			user_id: '750e8400-e29b-41d4-a716-446655440013',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.2,
			comment: {
				en_US:
					'Great French café for weekend brunch. The fresh fruit tarts are beautiful and delicious. WiFi is reliable and outdoor seating charming.',
				es_ES:
					'Gran café francés para brunch de fin de semana. Las tartas de frutas frescas son hermosas y deliciosas. El WiFi es confiable y la terraza encantadora.',
				ca_ES:
					'Gran cafè francès per a brunch de cap de setmana. Les tartes de fruites fresques són boniques i delicioses. El WiFi és fiable i la terrassa encantadora.',
				fr_FR:
					'Grand café français pour le brunch du week-end. Les tartes aux fruits frais sont belles et délicieuses. Le WiFi est fiable et la terrasse charmante.',
			},
			photos: [],
			created_at: '2024-11-02T12:40:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440144',
			user_id: '750e8400-e29b-41d4-a716-446655440014',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.5,
			comment: {
				en_US:
					'Wonderful French haute cuisine experience! The gourmet dinner is refined and each course perfectly executed. Romantic setting and impeccable service.',
				es_ES:
					'¡Maravillosa experiencia de alta cocina francesa! La cena gourmet es refinada y cada plato perfectamente ejecutado. Ambiente romántico y servicio impecable.',
				ca_ES:
					"Meravellosa experiència d'alta cuina francesa! El sopar gourmet és refinat i cada plat perfectament executat. Ambient romàntic i servei impecable.",
				fr_FR:
					'Merveilleuse expérience de haute cuisine française! Le dîner gourmet est raffiné et chaque plat parfaitement exécuté. Cadre romantique et service impeccable.',
			},
			photos: [
				'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
			],
			created_at: '2024-10-30T20:15:00Z',
		},
		{
			id: 'b50e8400-e29b-41d4-a716-446655440145',
			user_id: '750e8400-e29b-41d4-a716-446655440015',
			restaurant_id: '850e8400-e29b-41d4-a716-446655440023',
			rating: 4.3,
			comment: {
				en_US:
					'Charming French bistrot! The weekend brunch is extensive and the dessert selection impressive. Perfect for celebrating special moments.',
				es_ES:
					'¡Encantador bistrot francés! El brunch de fin de semana es extenso y la selección de postres impresionante. Perfecto para celebrar momentos especiales.',
				ca_ES:
					'Encantador bistrot francès! El brunch de cap de setmana és extens i la selecció de postres impressionant. Perfecte per celebrar moments especials.',
				fr_FR:
					'Charmant bistrot français! Le brunch du week-end est étendu et la sélection de desserts impressionnante. Parfait pour célébrer des moments spéciaux.',
			},
			photos: [],
			created_at: '2024-10-27T13:55:00Z',
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
		console.log('🍽️  Seeding cuisines...');
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
