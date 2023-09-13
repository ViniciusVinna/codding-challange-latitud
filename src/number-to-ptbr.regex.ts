import { dictionary } from "./dictionary";

/**
 * Converts a number into text representation.
 *
 * @param {number} digit - The number to be converted.
 * @param {typeof dictionary} dict - The dictionary containing numeric values as text.
 * @returns {string} The text representing the number.
 * @throws {Error} Throws an error if the number is out of the valid range (0-999).
 */
export const convertToText = (digit: number, dict: typeof dictionary): string => {
  // Check if the input digit is within the valid range (0-999)
  if (digit < 0 || digit > 999) {
    throw new Error("Invalid input");
  }

  // Handle numbers less than 20 directly from the dictionary
  if (digit < 20) {
    return dict[digit];
  }

  // Ensure the number is considered as a 3-digit number
  const numberStr = digit.toString().padStart(3, '0');
  const hundreds = parseInt(numberStr[0], 10);
  const tens = parseInt(numberStr[1], 10);
  const ones = parseInt(numberStr[2], 10);

  // Initialize variables for textual representation of hundreds, tens, and ones
  let hundredsText = "";
  let tensText = "";
  let onesText = "";

  // Generate textual representation for hundreds, tens, and ones, if applicable
  if (hundreds > 0) {
    hundredsText = dict[hundreds * 100];
  }
  if (tens > 1) {
    tensText = dict[tens * 10];
  }
  if (ones > 0) {
    onesText = dict[ones];
  }

  // Handle special case for tens between 10 and 19
  if (tens === 1) {
    return hundredsText + (hundredsText ? " e " : "") + dict[tens * 10 + ones];
  }

  // Create an array of textual representations and join them with "e"
  const textArray = [hundredsText, tensText, onesText].filter(Boolean);
  return textArray.join(" e ");
};
