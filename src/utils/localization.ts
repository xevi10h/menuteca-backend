import { Language, TranslatedText } from '@/types/common';

/**
 * Creates a TranslatedText object with empty strings for all languages
 */
export const createEmptyTranslatedText = (): TranslatedText => ({
	en_US: '',
	es_ES: '',
	ca_ES: '',
	fr_FR: '',
});

/**
 * Creates a TranslatedText object from a single text in a specific language
 */
export const createTranslatedText = (
	text: string,
	language: Language,
	fallbackText?: string,
): TranslatedText => {
	const fallback = fallbackText || text;

	return {
		en_US: language === 'en_US' ? text : fallback,
		es_ES: language === 'es_ES' ? text : fallback,
		ca_ES: language === 'ca_ES' ? text : fallback,
		fr_FR: language === 'fr_FR' ? text : fallback,
	};
};

/**
 * Extracts text from TranslatedText object based on user's language
 */
export const getLocalizedText = (
	translatedText: TranslatedText | null | undefined,
	userLanguage: Language,
	fallbackLanguage: Language = 'es_ES',
): string => {
	if (!translatedText) return '';

	// Try to get text in user's language
	let text = translatedText[userLanguage];

	// If empty or undefined, try fallback language
	if (!text && fallbackLanguage !== userLanguage) {
		text = translatedText[fallbackLanguage];
	}

	// If still empty, try to find any non-empty text
	if (!text) {
		text =
			translatedText.es_ES ||
			translatedText.en_US ||
			translatedText.ca_ES ||
			translatedText.fr_FR ||
			'';
	}

	return text;
};

/**
 * Updates a specific language in a TranslatedText object
 */
export const updateTranslatedText = (
	existingText: TranslatedText,
	newText: string,
	language: Language,
): TranslatedText => {
	return {
		...existingText,
		[language]: newText,
	};
};

/**
 * Validates that a TranslatedText object has at least one non-empty translation
 */
export const hasValidTranslation = (
	translatedText: TranslatedText,
): boolean => {
	return Object.values(translatedText).some(
		(text) => text && text.trim().length > 0,
	);
};

/**
 * Validates that a TranslatedText object has all required translations
 */
export const hasAllTranslations = (translatedText: TranslatedText): boolean => {
	return Object.values(translatedText).every(
		(text) => text && text.trim().length > 0,
	);
};

/**
 * Creates a translated text object from user input, storing in user's language
 */
export const createUserTranslatedText = (
	text: string,
	userLanguage: Language,
): TranslatedText => {
	const result = createEmptyTranslatedText();
	result[userLanguage] = text;
	return result;
};

/**
 * Merges existing translated text with new text in specific language
 */
export const mergeTranslatedText = (
	existing: TranslatedText,
	newText: string,
	language: Language,
): TranslatedText => {
	return {
		...existing,
		[language]: newText,
	};
};

/**
 * Gets all available languages from a TranslatedText object
 */
export const getAvailableLanguages = (
	translatedText: TranslatedText,
): Language[] => {
	return Object.entries(translatedText)
		.filter(([_, text]) => text && text.trim().length > 0)
		.map(([lang, _]) => lang as Language);
};

/**
 * Converts a simple string to TranslatedText with the same text in all languages
 */
export const stringToTranslatedText = (text: string): TranslatedText => ({
	en_US: text,
	es_ES: text,
	ca_ES: text,
	fr_FR: text,
});

/**
 * Validates language code
 */
export const isValidLanguage = (lang: string): lang is Language => {
	return ['en_US', 'es_ES', 'ca_ES', 'fr_FR'].includes(lang);
};

/**
 * Gets default language
 */
export const getDefaultLanguage = (): Language => 'es_ES';

/**
 * Gets language name in its own language
 */
export const getLanguageName = (language: Language): string => {
	const names: Record<Language, string> = {
		en_US: 'English',
		es_ES: 'Español',
		ca_ES: 'Català',
		fr_FR: 'Français',
	};

	return names[language];
};
