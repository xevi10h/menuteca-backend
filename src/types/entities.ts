import {
	Language,
	TranslatedText,
	Coordinates,
	DishCategory,
	RestaurantTag,
	DrinkType,
} from './common';

// User types
export interface User {
	id: string;
	email: string;
	username: string;
	name: string;
	photo?: string;
	google_id?: string;
	password_hash?: string;
	language: Language;
	has_password: boolean;
	created_at: string;
	updated_at: string;
}

export interface CreateUserInput {
	email: string;
	username: string;
	name: string;
	photo?: string;
	google_id?: string;
	password?: string;
	language: Language;
}

export interface UpdateUserInput {
	username?: string;
	name?: string;
	photo?: string;
	language?: Language;
}

// Address types
export interface Address {
	id: string;
	street: TranslatedText;
	number: string;
	additional_information?: string;
	postal_code: string;
	city: TranslatedText;
	country: TranslatedText;
	coordinates: Coordinates;
	formatted_address?: string;
	created_at: string;
	updated_at: string;
}

export interface CreateAddressInput {
	street: TranslatedText;
	number: string;
	additional_information?: string;
	postal_code: string;
	city: TranslatedText;
	country: TranslatedText;
	coordinates: Coordinates;
	formatted_address?: string;
}

export interface UpdateAddressInput {
	street?: TranslatedText;
	number?: string;
	additional_information?: string;
	postal_code?: string;
	city?: TranslatedText;
	country?: TranslatedText;
	coordinates?: Coordinates;
	formatted_address?: string;
}

// Cuisine types
export interface Cuisine {
	id: string;
	name: TranslatedText;
	image: string;
	created_at: string;
	updated_at: string;
}

export interface CreateCuisineInput {
	name: TranslatedText;
	image: string;
}

export interface UpdateCuisineInput {
	name?: TranslatedText;
	image?: string;
}

// Restaurant types
export interface Restaurant {
	id: string;
	name: string;
	minimum_price: number;
	cuisine_id: string;
	rating?: number;
	main_image: string;
	profile_image?: string;
	images: string[];
	distance?: number;
	address_id: string;
	tags: RestaurantTag[];
	phone?: string;
	reservation_link?: string;
	owner_id: string;
	is_active: boolean;
	created_at: string;
	updated_at: string;
}

export interface CreateRestaurantInput {
	name: string;
	minimum_price: number;
	cuisine_id: string;
	main_image: string;
	profile_image?: string;
	images: string[];
	address_id: string;
	tags?: RestaurantTag[];
	phone?: string;
	reservation_link?: string;
}

export interface UpdateRestaurantInput {
	name?: string;
	minimum_price?: number;
	cuisine_id?: string;
	main_image?: string;
	profile_image?: string;
	images?: string[];
	address_id?: string;
	tags?: RestaurantTag[];
	phone?: string;
	reservation_link?: string;
	is_active?: boolean;
}

// Menu types
export interface DrinkInclusion {
	water: boolean;
	wine: boolean;
	soft_drinks: boolean;
	beer: boolean;
}

export interface Menu {
	id: string;
	restaurant_id: string;
	name: TranslatedText;
	days: string[];
	start_time: string;
	end_time: string;
	price: number;
	first_courses_to_share: boolean;
	second_courses_to_share: boolean;
	desserts_to_share: boolean;
	includes_bread: boolean;
	drinks: DrinkInclusion;
	includes_coffee_and_dessert: 'none' | 'coffee' | 'dessert' | 'both';
	minimum_people: number;
	has_minimum_people: boolean;
	is_active: boolean;
	created_at: string;
	updated_at: string;
}

export interface CreateMenuInput {
	restaurant_id: string;
	name: TranslatedText;
	days: string[];
	start_time: string;
	end_time: string;
	price: number;
	first_courses_to_share?: boolean;
	second_courses_to_share?: boolean;
	desserts_to_share?: boolean;
	includes_bread?: boolean;
	drinks?: DrinkInclusion;
	includes_coffee_and_dessert?: 'none' | 'coffee' | 'dessert' | 'both';
	minimum_people?: number;
	has_minimum_people?: boolean;
}

export interface UpdateMenuInput {
	name?: TranslatedText;
	days?: string[];
	start_time?: string;
	end_time?: string;
	price?: number;
	first_courses_to_share?: boolean;
	second_courses_to_share?: boolean;
	desserts_to_share?: boolean;
	includes_bread?: boolean;
	drinks?: DrinkInclusion;
	includes_coffee_and_dessert?: 'none' | 'coffee' | 'dessert' | 'both';
	minimum_people?: number;
	has_minimum_people?: boolean;
	is_active?: boolean;
}

// Dish types
export interface Dish {
	id: string;
	menu_id: string;
	name: TranslatedText;
	description: TranslatedText;
	extra_price: number;
	category: DishCategory;
	is_vegetarian: boolean;
	is_lactose_free: boolean;
	is_spicy: boolean;
	is_gluten_free: boolean;
	is_vegan: boolean;
	is_active: boolean;
	created_at: string;
	updated_at: string;
}

export interface CreateDishInput {
	menu_id: string;
	name: TranslatedText;
	description: TranslatedText;
	extra_price?: number;
	category: DishCategory;
	is_vegetarian?: boolean;
	is_lactose_free?: boolean;
	is_spicy?: boolean;
	is_gluten_free?: boolean;
	is_vegan?: boolean;
}

export interface UpdateDishInput {
	name?: TranslatedText;
	description?: TranslatedText;
	extra_price?: number;
	category?: DishCategory;
	is_vegetarian?: boolean;
	is_lactose_free?: boolean;
	is_spicy?: boolean;
	is_gluten_free?: boolean;
	is_vegan?: boolean;
	is_active?: boolean;
}

// Review types
export interface Review {
	id: string;
	user_id: string;
	restaurant_id: string;
	rating: number;
	comment: TranslatedText;
	photos: string[];
	restaurant_response_message?: TranslatedText;
	restaurant_response_date?: string;
	created_at: string;
	updated_at: string;
}

export interface CreateReviewInput {
	restaurant_id: string;
	rating: number;
	comment: string; // Will be stored in user's language
	photos?: string[];
}

export interface UpdateReviewInput {
	rating?: number;
	comment?: string; // Will be stored in user's language
	photos?: string[];
}

export interface CreateRestaurantResponseInput {
	review_id: string;
	message: string; // Will be stored in restaurant owner's language
}

// Response types for API (localized)
export interface LocalizedAddress {
	id: string;
	street: string;
	number: string;
	additional_information?: string;
	postal_code: string;
	city: string;
	country: string;
	coordinates: Coordinates;
	formatted_address?: string;
}

export interface LocalizedCuisine {
	id: string;
	name: string;
	image: string;
}

export interface LocalizedMenu {
	id: string;
	restaurant_id: string;
	name: string;
	days: string[];
	start_time: string;
	end_time: string;
	price: number;
	first_courses_to_share: boolean;
	second_courses_to_share: boolean;
	desserts_to_share: boolean;
	includes_bread: boolean;
	drinks: DrinkInclusion;
	includes_coffee_and_dessert: 'none' | 'coffee' | 'dessert' | 'both';
	minimum_people: number;
	has_minimum_people: boolean;
	dishes?: LocalizedDish[];
}

export interface LocalizedDish {
	id: string;
	menu_id: string;
	name: string;
	description: string;
	extra_price: number;
	category: DishCategory;
	is_vegetarian: boolean;
	is_lactose_free: boolean;
	is_spicy: boolean;
	is_gluten_free: boolean;
	is_vegan: boolean;
}

export interface LocalizedReview {
	id: string;
	user_id: string;
	user_name: string;
	user_avatar?: string;
	restaurant_id: string;
	restaurant_name: string;
	restaurant_image: string;
	rating: number;
	comment: string;
	photos: string[];
	restaurant_response?: {
		message: string;
		date: string;
	};
	date: string;
}

export interface RestaurantWithDetails extends Restaurant {
	cuisine: LocalizedCuisine;
	address: LocalizedAddress;
	menus: LocalizedMenu[];
	reviews: LocalizedReview[];
}
