/**
 * Validates numeric fields of a CSV record.
 */
export const isValidNumber = (value) => {
    return !isNaN(Number(value)) && isFinite(Number(value));
};
/**
 * Converts a 24-hour format string to a more readable format.
 */
export const convertHourToReadableFormat = (hour) => {
    const hourNumber = parseInt(hour, 10);
    return `${hourNumber}:00`;
};
/**
 * Ensures the TimeStamp has a valid format (YYYYMMDDHH).
 */
export const isValidTimeStamp = (timeStamp) => {
    return /^\d{10}$/.test(timeStamp);
};
