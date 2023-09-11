import { dictionary } from "./dictionary";

/**
 * Checks if a number is within a specified range.
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {(num: number) => boolean} A function that checks if the number is within the range.
 */
const isWithinRange = (min: number, max: number) => (num: number) => num >= min && num <= max;

/**
 * Checks if a number is a multiple of 10.
 *
 * @param {number} num - The number to be checked.
 * @returns {boolean} True if the number is a multiple of 10, otherwise false.
 */
const isMultipleOfTen = (num: number) => num % 10 === 0;

/**
 * Checks if a number is in the hundreds range (between 100 and 999).
 *
 * @type {(num: number) => boolean}
 */
const isHundred = isWithinRange(100, 999);

/**
 * Converts a number to text, up to 99.
 *
 * @param {number} num - The number to be converted.
 * @returns {string} The text representing the number.
 */
export const convertUpTo99 = (num: number): string =>
  num <= 20 || isMultipleOfTen(num)
    ? dictionary[num]
    : `${dictionary[Math.floor(num / 10) * 10]} e ${dictionary[num % 10]}`;

/**
 * Converts the hundreds of a number to text.
 *
 * @param {number} digit - The number to be converted.
 * @returns {string} The text representing the hundreds of the number.
 */
export const convertHundreds = (digit: number): string => {
  const hundredsDigit = Math.floor(digit / 100) * 100;
  const remainingDigits = digit % 100;

  if (remainingDigits === 0) {
    return `${dictionary[hundredsDigit]}`;
  }

  return `${dictionary[hundredsDigit]} e ${convertUpTo99(remainingDigits)}`;
};


/**
 * Converts a number to text.
 *
 * @param {number} digit - The number to be converted.
 * @returns {string} The text representing the number.
 * @throws {Error} Throws an error if the number is out of the valid range (0-999).
 */
export const convertToText = (digit: number): string => {
  if (!isWithinRange(0, 999)(digit)) throw new Error("Invalid input");

  if (isWithinRange(0, 99)(digit)) return convertUpTo99(digit);

  return convertHundreds(digit);
};
