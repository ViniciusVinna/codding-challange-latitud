import { dictionary } from "./dictionary";

export class NumberToTextConverter {
  private readonly dictionary: Record<number, string> = dictionary;

  convertToText(digit: number): string {
    if (digit < 0 || digit > 999) {
      throw new Error("Invalid input");
    }

    if (digit <= 20 || (digit <= 99 && digit % 10 === 0)) {
      return this.dictionary[digit];
    }

    if (digit <= 99) {
      const tensDigit = Math.floor(digit / 10) * 10;
      const onesDigit = digit % 10;

      return this.dictionary[tensDigit] + " e " + this.dictionary[onesDigit];
    }

    if (digit % 100 === 0) {
      return this.dictionary[digit];
    }

    const hundredsDigit = Math.floor(digit / 100) * 100;
    const remainingDigits = digit % 100;

    if (remainingDigits <= 20 || (remainingDigits <= 99 && remainingDigits % 10 === 0)) {
      return this.dictionary[hundredsDigit] + " e " + this.dictionary[remainingDigits];
    } else {
      const tensDigit = Math.floor(remainingDigits / 10) * 10;
      const onesDigit = remainingDigits % 10;

      return this.dictionary[hundredsDigit] + " e " + this.dictionary[tensDigit] + " e " + this.dictionary[onesDigit];
    }
  }
}