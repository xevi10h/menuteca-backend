export type Language = 'en_US' | 'es_ES' | 'ca_ES' | 'fr_FR';

export enum Languages {
	EN_US = 'en_US',
	ES_ES = 'es_ES',
	CA_ES = 'ca_ES',
	FR_FR = 'fr_FR',
}

export enum Days {
	MONDAY = 'monday',
	TUESDAY = 'tuesday',
	WEDNESDAY = 'wednesday',
	THURSDAY = 'thursday',
	FRIDAY = 'friday',
	SATURDAY = 'saturday',
	SUNDAY = 'sunday',
}

export enum DishCategory {
	APPETIZERS = 'appetizers',
	FIRST_COURSES = 'firstCourses',
	SECOND_COURSES = 'secondCourses',
	MAIN_COURSES = 'mainCourses',
	SIDES = 'sides',
	DESSERTS = 'desserts',
	DRINKS = 'drinks',
}

export enum RestaurantTag {
	VEGETARIAN = 'vegetarian',
	VEGAN = 'vegan',
	GLUTEN_FREE = 'glutenFree',
	HALAL = 'halal',
	KOSHER = 'kosher',
	SPICY = 'spicy',
	OUTDOOR_SEATING = 'outdoorSeating',
	WIFI = 'wifi',
	RESERVATIONS = 'reservations',
	LIVE_MUSIC = 'liveMusic',
	PET_FRIENDLY = 'petFriendly',
	AIR_CONDITIONING = 'airConditioning',
	FAMILY_FRIENDLY = 'familyFriendly',
	ROMANTIC = 'romantic',
	BUSINESS_FRIENDLY = 'businessFriendly',
}

export enum DrinkType {
	WATER = 'water',
	WINE = 'wine',
	SOFT_DRINKS = 'softDrinks',
	BEER = 'beer',
}

// Base interfaces for internationalization
export interface TranslatedText {
	en_US: string;
	es_ES: string;
	ca_ES: string;
	fr_FR: string;
}

// API Response types
export interface ApiResponse<T = any> {
	success: boolean;
	data?: T;
	message?: string;
	error?: string;
	errors?: Record<string, string>;
}

export interface PaginationParams {
	page?: number;
	limit?: number;
	sortBy?: string;
	sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
		hasNext: boolean;
		hasPrev: boolean;
	};
}

// Database coordinate type
export interface Coordinates {
	latitude: number;
	longitude: number;
}

// Auth types
export interface JwtPayload {
	userId: string;
	email: string;
	language: Language;
	iat?: number;
	exp?: number;
}
