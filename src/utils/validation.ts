import { z } from 'zod';
import { Days, DishCategory, RestaurantTag } from '@/types/common';

// Custom Zod schemas for enums
const languageSchema = z.enum(['en_US', 'es_ES', 'ca_ES', 'fr_FR']);

// Translated text schema with custom validation
const translatedTextSchema = z
	.object({
		en_US: z.string(),
		es_ES: z.string(),
		ca_ES: z.string(),
		fr_FR: z.string(),
	})
	.refine(
		(data) => {
			// At least one translation must be provided and not empty
			return Object.values(data).some((text) => text && text.trim().length > 0);
		},
		{
			message: 'At least one translation is required',
		},
	);

// Coordinates schema
const coordinatesSchema = z.object({
	latitude: z.number().min(-90).max(90),
	longitude: z.number().min(-180).max(180),
});

// Drink inclusion schema
const drinkInclusionSchema = z.object({
	water: z.boolean().default(false),
	wine: z.boolean().default(false),
	soft_drinks: z.boolean().default(false),
	beer: z.boolean().default(false),
});

// User schemas
export const createUserSchema = z.object({
	email: z.string().email('Invalid email format'),
	username: z
		.string()
		.min(3, 'Username must be at least 3 characters')
		.max(30, 'Username must be at most 30 characters')
		.regex(
			/^[a-zA-Z0-9_]+$/,
			'Username can only contain letters, numbers, and underscores',
		),
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(100, 'Name must be at most 100 characters'),
	photo: z.string().url('Invalid photo URL').optional(),
	google_id: z.string().optional(),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one lowercase letter, one uppercase letter, and one number',
		)
		.optional(),
	language: languageSchema,
});

export const updateUserSchema = z.object({
	username: z
		.string()
		.min(3, 'Username must be at least 3 characters')
		.max(30, 'Username must be at most 30 characters')
		.regex(
			/^[a-zA-Z0-9_]+$/,
			'Username can only contain letters, numbers, and underscores',
		)
		.optional(),
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(100, 'Name must be at most 100 characters')
		.optional(),
	photo: z.string().url('Invalid photo URL').optional(),
	language: languageSchema.optional(),
});

export const loginSchema = z.object({
	email: z.string().email('Invalid email format'),
	password: z.string().min(1, 'Password is required'),
});

// Address schemas
export const createAddressSchema = z.object({
	street: translatedTextSchema,
	number: z.string().max(20, 'Number must be at most 20 characters'),
	additional_information: z
		.string()
		.max(100, 'Additional information must be at most 100 characters')
		.optional(),
	postal_code: z.string().max(20, 'Postal code must be at most 20 characters'),
	city: translatedTextSchema,
	country: translatedTextSchema,
	coordinates: coordinatesSchema,
	formatted_address: z
		.string()
		.max(500, 'Formatted address must be at most 500 characters')
		.optional(),
});

export const updateAddressSchema = z.object({
	street: translatedTextSchema.optional(),
	number: z.string().max(20, 'Number must be at most 20 characters').optional(),
	additional_information: z
		.string()
		.max(100, 'Additional information must be at most 100 characters')
		.optional(),
	postal_code: z
		.string()
		.max(20, 'Postal code must be at most 20 characters')
		.optional(),
	city: translatedTextSchema.optional(),
	country: translatedTextSchema.optional(),
	coordinates: coordinatesSchema.optional(),
	formatted_address: z
		.string()
		.max(500, 'Formatted address must be at most 500 characters')
		.optional(),
});

// Cuisine schemas
export const createCuisineSchema = z.object({
	name: translatedTextSchema,
	image: z.string().url('Invalid image URL'),
});

export const updateCuisineSchema = z.object({
	name: translatedTextSchema.optional(),
	image: z.string().url('Invalid image URL').optional(),
});

// Restaurant schemas
export const createRestaurantSchema = z.object({
	name: z
		.string()
		.min(2, 'Restaurant name must be at least 2 characters')
		.max(255, 'Restaurant name must be at most 255 characters'),
	minimum_price: z
		.number()
		.min(0, 'Minimum price must be at least 0')
		.multipleOf(0.01, 'Minimum price must have at most 2 decimal places'),
	cuisine_id: z.string().uuid('Invalid cuisine ID'),
	main_image: z.string().url('Invalid main image URL'),
	profile_image: z.string().url('Invalid profile image URL').optional(),
	images: z.array(z.string().url('Invalid image URL')).default([]),
	address_id: z.string().uuid('Invalid address ID'),
	tags: z
		.array(z.enum(Object.values(RestaurantTag) as [string, ...string[]]))
		.default([]),
	phone: z.string().max(50, 'Phone must be at most 50 characters').optional(),
	reservation_link: z.string().url('Invalid reservation link URL').optional(),
});

export const updateRestaurantSchema = z.object({
	name: z
		.string()
		.min(2, 'Restaurant name must be at least 2 characters')
		.max(255, 'Restaurant name must be at most 255 characters')
		.optional(),
	minimum_price: z
		.number()
		.min(0, 'Minimum price must be at least 0')
		.multipleOf(0.01, 'Minimum price must have at most 2 decimal places')
		.optional(),
	cuisine_id: z.string().uuid('Invalid cuisine ID').optional(),
	main_image: z.string().url('Invalid main image URL').optional(),
	profile_image: z.string().url('Invalid profile image URL').optional(),
	images: z.array(z.string().url('Invalid image URL')).optional(),
	address_id: z.string().uuid('Invalid address ID').optional(),
	tags: z
		.array(z.enum(Object.values(RestaurantTag) as [string, ...string[]]))
		.optional(),
	phone: z.string().max(50, 'Phone must be at most 50 characters').optional(),
	reservation_link: z.string().url('Invalid reservation link URL').optional(),
	is_active: z.boolean().optional(),
});

// Menu schemas
export const createMenuSchema = z.object({
	restaurant_id: z.string().uuid('Invalid restaurant ID'),
	name: z
		.string()
		.min(2, 'Menu name must be at least 2 characters')
		.max(255, 'Menu name must be at most 255 characters'),
	days: z
		.array(z.enum(Object.values(Days) as [string, ...string[]]))
		.min(1, 'At least one day must be selected'),
	start_time: z
		.string()
		.regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
	end_time: z
		.string()
		.regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
	price: z
		.number()
		.min(0, 'Price must be at least 0')
		.multipleOf(0.01, 'Price must have at most 2 decimal places'),
	first_courses_to_share: z.boolean().default(false),
	second_courses_to_share: z.boolean().default(false),
	desserts_to_share: z.boolean().default(false),
	includes_bread: z.boolean().default(false),
	drinks: drinkInclusionSchema.default({}),
	includes_coffee_and_dessert: z
		.enum(['none', 'coffee', 'dessert', 'both'])
		.default('none'),
	minimum_people: z
		.number()
		.int()
		.min(1, 'Minimum people must be at least 1')
		.default(1),
	has_minimum_people: z.boolean().default(false),
});

export const updateMenuSchema = z.object({
	name: z
		.string()
		.min(2, 'Menu name must be at least 2 characters')
		.max(255, 'Menu name must be at most 255 characters')
		.optional(),
	days: z
		.array(z.enum(Object.values(Days) as [string, ...string[]]))
		.min(1, 'At least one day must be selected')
		.optional(),
	start_time: z
		.string()
		.regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)')
		.optional(),
	end_time: z
		.string()
		.regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)')
		.optional(),
	price: z
		.number()
		.min(0, 'Price must be at least 0')
		.multipleOf(0.01, 'Price must have at most 2 decimal places')
		.optional(),
	first_courses_to_share: z.boolean().optional(),
	second_courses_to_share: z.boolean().optional(),
	desserts_to_share: z.boolean().optional(),
	includes_bread: z.boolean().optional(),
	drinks: drinkInclusionSchema.optional(),
	includes_coffee_and_dessert: z
		.enum(['none', 'coffee', 'dessert', 'both'])
		.optional(),
	minimum_people: z
		.number()
		.int()
		.min(1, 'Minimum people must be at least 1')
		.optional(),
	has_minimum_people: z.boolean().optional(),
	is_active: z.boolean().optional(),
});

// Dish schemas
export const createDishSchema = z.object({
	menu_id: z.string().uuid('Invalid menu ID'),
	name: z
		.string()
		.min(2, 'Dish name must be at least 2 characters')
		.max(255, 'Dish name must be at most 255 characters'),
	description: z
		.string()
		.min(10, 'Description must be at least 10 characters')
		.max(1000, 'Description must be at most 1000 characters'),
	extra_price: z
		.number()
		.min(0, 'Extra price must be at least 0')
		.multipleOf(0.01, 'Extra price must have at most 2 decimal places')
		.default(0),
	category: z.enum(Object.values(DishCategory) as [string, ...string[]]),
	is_vegetarian: z.boolean().default(false),
	is_lactose_free: z.boolean().default(false),
	is_spicy: z.boolean().default(false),
	is_gluten_free: z.boolean().default(false),
	is_vegan: z.boolean().default(false),
});

export const updateDishSchema = z.object({
	name: z
		.string()
		.min(2, 'Dish name must be at least 2 characters')
		.max(255, 'Dish name must be at most 255 characters')
		.optional(),
	description: z
		.string()
		.min(10, 'Description must be at least 10 characters')
		.max(1000, 'Description must be at most 1000 characters')
		.optional(),
	extra_price: z
		.number()
		.min(0, 'Extra price must be at least 0')
		.multipleOf(0.01, 'Extra price must have at most 2 decimal places')
		.optional(),
	category: z
		.enum(Object.values(DishCategory) as [string, ...string[]])
		.optional(),
	is_vegetarian: z.boolean().optional(),
	is_lactose_free: z.boolean().optional(),
	is_spicy: z.boolean().optional(),
	is_gluten_free: z.boolean().optional(),
	is_vegan: z.boolean().optional(),
	is_active: z.boolean().optional(),
});

// Review schemas
export const createReviewSchema = z.object({
	restaurant_id: z.string().uuid('Invalid restaurant ID'),
	rating: z
		.number()
		.min(0, 'Rating must be at least 0')
		.max(5, 'Rating must be at most 5')
		.multipleOf(0.1, 'Rating must have at most 1 decimal place'),
	comment: z
		.string()
		.min(10, 'Comment must be at least 10 characters')
		.max(1000, 'Comment must be at most 1000 characters'),
	photos: z
		.array(z.string().url('Invalid photo URL'))
		.max(10, 'Maximum 10 photos allowed')
		.default([]),
});

export const updateReviewSchema = z.object({
	rating: z
		.number()
		.min(0, 'Rating must be at least 0')
		.max(5, 'Rating must be at most 5')
		.multipleOf(0.1, 'Rating must have at most 1 decimal place')
		.optional(),
	comment: z
		.string()
		.min(10, 'Comment must be at least 10 characters')
		.max(1000, 'Comment must be at most 1000 characters')
		.optional(),
	photos: z
		.array(z.string().url('Invalid photo URL'))
		.max(10, 'Maximum 10 photos allowed')
		.optional(),
});

export const createRestaurantResponseSchema = z.object({
	review_id: z.string().uuid('Invalid review ID'),
	message: z
		.string()
		.min(10, 'Response message must be at least 10 characters')
		.max(500, 'Response message must be at most 500 characters'),
});

// Change password schema
export const changePasswordSchema = z.object({
	currentPassword: z.string().min(1, 'Current password is required'),
	newPassword: z
		.string()
		.min(8, 'New password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'New password must contain at least one lowercase letter, one uppercase letter, and one number',
		),
});

export const setPasswordSchema = z.object({
	newPassword: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one lowercase letter, one uppercase letter, and one number',
		),
});

// Google auth schema
export const googleAuthSchema = z.object({
	google_id: z.string().min(1, 'Google ID is required'),
	email: z.string().email('Invalid email format'),
	name: z.string().min(1, 'Name is required'),
	photo: z.string().url('Invalid photo URL').optional(),
	language: languageSchema.default('es_ES'),
});

/**
 * Validates data against a Zod schema and returns formatted errors
 */
export const validateData = <T>(
	schema: z.ZodSchema<T>,
	data: any,
): { isValid: boolean; data?: T; errors?: Record<string, string> } => {
	try {
		const validatedData = schema.parse(data);
		return { isValid: true, data: validatedData };
	} catch (error) {
		if (error instanceof z.ZodError) {
			const errors: Record<string, string> = {};
			error.errors.forEach((err) => {
				const path = err.path.join('.');
				errors[path] = err.message;
			});
			return { isValid: false, errors };
		}

		// Unexpected error
		return {
			isValid: false,
			errors: { general: 'Validation failed' },
		};
	}
};

/**
 * Validates query parameters against a Zod schema (with automatic transformations)
 */
export const validateQuery = <T>(
	schema: z.ZodSchema<T>,
	data: any,
): { isValid: boolean; data?: T; errors?: Record<string, string> } => {
	try {
		const validatedData = schema.parse(data);
		return { isValid: true, data: validatedData };
	} catch (error) {
		if (error instanceof z.ZodError) {
			const errors: Record<string, string> = {};
			error.errors.forEach((err) => {
				const path = err.path.join('.');
				errors[path] = err.message;
			});
			return { isValid: false, errors };
		}

		return {
			isValid: false,
			errors: { general: 'Query validation failed' },
		};
	}
};

// Type inference helpers
export type CreateUserData = z.infer<typeof createUserSchema>;
export type UpdateUserData = z.infer<typeof updateUserSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type CreateAddressData = z.infer<typeof createAddressSchema>;
export type UpdateAddressData = z.infer<typeof updateAddressSchema>;
export type CreateCuisineData = z.infer<typeof createCuisineSchema>;
export type UpdateCuisineData = z.infer<typeof updateCuisineSchema>;
export type CreateRestaurantData = z.infer<typeof createRestaurantSchema>;
export type UpdateRestaurantData = z.infer<typeof updateRestaurantSchema>;
export type CreateMenuData = z.infer<typeof createMenuSchema>;
export type UpdateMenuData = z.infer<typeof updateMenuSchema>;
export type CreateDishData = z.infer<typeof createDishSchema>;
export type UpdateDishData = z.infer<typeof updateDishSchema>;
export type CreateReviewData = z.infer<typeof createReviewSchema>;
export type UpdateReviewData = z.infer<typeof updateReviewSchema>;
export type GoogleAuthData = z.infer<typeof googleAuthSchema>;
