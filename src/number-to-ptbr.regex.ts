import { dictionary } from "./dictionary";

/**
 * Converts a number into text representation.
 *
 * @param {number} digit - The number to be converted.
 * @param {Dict} dict - The dictionary containing numeric values as text.
 * @returns {string} The text representing the number.
 * @throws {Error} Throws an error if the number is out of the valid range (0-999).
 */

export const convertToText = (digit: number, dict: typeof dictionary): string => {
  if (digit < 0 || digit > 999) {
    throw new Error("Invalid input");
  }

  if (digit < 20) return dict[digit]; // Return directly for numbers less than 20

  const numberStr = digit.toString().padStart(3, '0'); // Always consider it a 3-digit number

  const hundreds = parseInt(numberStr[0], 10);
  const tens = parseInt(numberStr[1], 10);
  const ones = parseInt(numberStr[2], 10);

  const hundredsText = hundreds > 0 ? dict[hundreds * 100] : "";
  const tensText = tens > 1 ? dict[tens * 10] : "";
  const onesText = ones > 0 ? dict[ones] : "";

  // If tens is 1, consider it a special case (10 to 19)
  if (tens === 1) {
    return hundredsText + (hundredsText ? " e " : "") + dict[tens * 10 + ones];
  }

  const textArray = [hundredsText, tensText, onesText].filter(Boolean);

  return textArray.join(" e ");
};

