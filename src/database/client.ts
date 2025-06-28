import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = 'https://xuoyhbavkonivkplomjy.supabase.co';
const supabaseServiceKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1b3loYmF2a29uaXZrcGxvbWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3ODAwNzYsImV4cCI6MjA2NjM1NjA3Nn0.mTfASXJcJ-ekqBRb8gvQul4i97KrrTil6U98AEvMwRc';

if (!supabaseUrl || !supabaseServiceKey) {
	throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with service role key for server-side operations
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
	auth: {
		autoRefreshToken: false,
		persistSession: false,
	},
});

// Database schema types
export interface Database {
	public: {
		Tables: {
			users: {
				Row: {
					id: string;
					email: string;
					username: string;
					name: string;
					photo: string | null;
					google_id: string | null;
					password_hash: string | null;
					language: string;
					has_password: boolean;
					created_at: string;
					updated_at: string;
					deleted_at: string | null;
				};
				Insert: {
					id?: string;
					email: string;
					username: string;
					name: string;
					photo?: string | null;
					google_id?: string | null;
					password_hash?: string | null;
					language: string;
					has_password?: boolean;
					created_at?: string;
					updated_at?: string;
					deleted_at?: string | null;
				};
				Update: {
					id?: string;
					email?: string;
					username?: string;
					name?: string;
					photo?: string | null;
					google_id?: string | null;
					password_hash?: string | null;
					language?: string;
					has_password?: boolean;
					updated_at?: string;
					deleted_at?: string | null;
				};
			};
			addresses: {
				Row: {
					id: string;
					street: any; // JSONB
					number: string;
					additional_information: string | null;
					postal_code: string;
					city: any; // JSONB
					country: any; // JSONB
					coordinates: any; // JSONB
					formatted_address: string | null;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					street: any;
					number: string;
					additional_information?: string | null;
					postal_code: string;
					city: any;
					country: any;
					coordinates: any;
					formatted_address?: string | null;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					street?: any;
					number?: string;
					additional_information?: string | null;
					postal_code?: string;
					city?: any;
					country?: any;
					coordinates?: any;
					formatted_address?: string | null;
					updated_at?: string;
				};
			};
			cuisines: {
				Row: {
					id: string;
					name: any; // JSONB
					image: string;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					name: any;
					image: string;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					name?: any;
					image?: string;
					updated_at?: string;
				};
			};
			restaurants: {
				Row: {
					id: string;
					name: string;
					minimum_price: number;
					cuisine_id: string;
					rating: number | null;
					main_image: string;
					profile_image: string | null;
					images: string[];
					address_id: string;
					tags: string[];
					phone: string | null;
					reservation_link: string | null;
					owner_id: string;
					is_active: boolean;
					created_at: string;
					updated_at: string;
					deleted_at: string | null;
				};
				Insert: {
					id?: string;
					name: string;
					minimum_price: number;
					cuisine_id: string;
					rating?: number | null;
					main_image: string;
					profile_image?: string | null;
					images?: string[];
					address_id: string;
					tags?: string[];
					phone?: string | null;
					reservation_link?: string | null;
					owner_id: string;
					is_active?: boolean;
					created_at?: string;
					updated_at?: string;
					deleted_at?: string | null;
				};
				Update: {
					id?: string;
					name?: string;
					minimum_price?: number;
					cuisine_id?: string;
					rating?: number | null;
					main_image?: string;
					profile_image?: string | null;
					images?: string[];
					address_id?: string;
					tags?: string[];
					phone?: string | null;
					reservation_link?: string | null;
					is_active?: boolean;
					updated_at?: string;
					deleted_at?: string | null;
				};
			};
			menus: {
				Row: {
					id: string;
					restaurant_id: string;
					name: any; // JSONB
					days: string[];
					start_time: string;
					end_time: string;
					price: number;
					first_courses_to_share: boolean;
					second_courses_to_share: boolean;
					desserts_to_share: boolean;
					includes_bread: boolean;
					drinks: any; // JSONB
					includes_coffee_and_dessert: string;
					minimum_people: number;
					has_minimum_people: boolean;
					is_active: boolean;
					created_at: string;
					updated_at: string;
					deleted_at: string | null;
				};
				Insert: {
					id?: string;
					restaurant_id: string;
					name: any;
					days?: string[];
					start_time: string;
					end_time: string;
					price: number;
					first_courses_to_share?: boolean;
					second_courses_to_share?: boolean;
					desserts_to_share?: boolean;
					includes_bread?: boolean;
					drinks?: any;
					includes_coffee_and_dessert?: string;
					minimum_people?: number;
					has_minimum_people?: boolean;
					is_active?: boolean;
					created_at?: string;
					updated_at?: string;
					deleted_at?: string | null;
				};
				Update: {
					id?: string;
					name?: any;
					days?: string[];
					start_time?: string;
					end_time?: string;
					price?: number;
					first_courses_to_share?: boolean;
					second_courses_to_share?: boolean;
					desserts_to_share?: boolean;
					includes_bread?: boolean;
					drinks?: any;
					includes_coffee_and_dessert?: string;
					minimum_people?: number;
					has_minimum_people?: boolean;
					is_active?: boolean;
					updated_at?: string;
					deleted_at?: string | null;
				};
			};
			dishes: {
				Row: {
					id: string;
					menu_id: string;
					name: any; // JSONB
					description: any; // JSONB
					extra_price: number;
					category: string;
					is_vegetarian: boolean;
					is_lactose_free: boolean;
					is_spicy: boolean;
					is_gluten_free: boolean;
					is_vegan: boolean;
					is_active: boolean;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					menu_id: string;
					name: any;
					description: any;
					extra_price?: number;
					category: string;
					is_vegetarian?: boolean;
					is_lactose_free?: boolean;
					is_spicy?: boolean;
					is_gluten_free?: boolean;
					is_vegan?: boolean;
					is_active?: boolean;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					name?: any;
					description?: any;
					extra_price?: number;
					category?: string;
					is_vegetarian?: boolean;
					is_lactose_free?: boolean;
					is_spicy?: boolean;
					is_gluten_free?: boolean;
					is_vegan?: boolean;
					is_active?: boolean;
					updated_at?: string;
				};
			};
			reviews: {
				Row: {
					id: string;
					user_id: string;
					restaurant_id: string;
					rating: number;
					comment: any; // JSONB
					photos: string[];
					restaurant_response_message: any | null; // JSONB
					restaurant_response_date: string | null;
					created_at: string;
					updated_at: string;
					deleted_at: string | null;
				};
				Insert: {
					id?: string;
					user_id: string;
					restaurant_id: string;
					rating: number;
					comment: any;
					photos?: string[];
					restaurant_response_message?: any | null;
					restaurant_response_date?: string | null;
					created_at?: string;
					updated_at?: string;
					deleted_at?: string | null;
				};
				Update: {
					id?: string;
					rating?: number;
					comment?: any;
					photos?: string[];
					restaurant_response_message?: any | null;
					restaurant_response_date?: string | null;
					updated_at?: string;
					deleted_at?: string | null;
				};
			};
		};
	};
}
