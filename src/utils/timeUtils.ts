/**
 * Converts a time string (HH:mm) into minutes from midnight.
 * @param timeStr e.g., "14:30"
 * @returns 870
 */
export const timeToMinutes = (timeStr: string): number => {
	const [hours, minutes] = timeStr.split(':').map(Number);
	return hours * 60 + minutes;
};

/**
 * Checks if a menu's active time range [menuStart, menuEnd]
 * overlaps with a desired query range [queryStart, queryEnd].
 */
export const hasTimeOverlap = (
	menuStartTime: string,
	menuEndTime: string,
	queryStartTime: string,
	queryEndTime: string,
): boolean => {
	const menuStart = timeToMinutes(menuStartTime);
	const menuEnd = timeToMinutes(menuEndTime);
	const queryStart = timeToMinutes(queryStartTime);
	const queryEnd = timeToMinutes(queryEndTime);

	// The overlap condition is that the start of one range is before the end of the other,
	// and the end of the first range is after the start of the second.
	return menuStart < queryEnd && menuEnd > queryStart;
};
