import { dictionary } from "./dictionary";

export class NumberToTextConverter {
  private readonly dictionary: Record<number, string> = dictionary;
  private readonly MIN_RANGE: number = 0;
  private readonly MAX_RANGE: number = 999;
  private readonly SINGLE_DIGIT_UPPER_BOUND: number = 20;
  private readonly TEN: number = 10;
  private readonly HUNDRED: number = 100;

  private isInRange(digit: number): boolean {
    return digit >= this.MIN_RANGE && digit <= this.MAX_RANGE;
  }

  private isSingleDigit(digit: number): boolean {
    return digit <= this.SINGLE_DIGIT_UPPER_BOUND || (digit <= this.MAX_RANGE - this.TEN && digit % this.TEN === 0);
  }

  private convertDoubleDigit(digit: number): string {
    const tensDigit = Math.floor(digit / this.TEN) * this.TEN;
    const onesDigit = digit % this.TEN;
    return this.dictionary[tensDigit] + (onesDigit > this.MIN_RANGE ? ` e ${this.dictionary[onesDigit]}` : "");
  }

  private convertTripleDigit(digit: number): string {
    const hundredsDigit = Math.floor(digit / this.HUNDRED) * this.HUNDRED;
    const remainingDigits = digit % this.HUNDRED;

    if (remainingDigits === this.MIN_RANGE) {
      return this.dictionary[hundredsDigit];
    }

    return this.dictionary[hundredsDigit] + " e " + this.convertDoubleDigit(remainingDigits);
  }

  public convertToText(digit: number): string {
    if (!this.isInRange(digit)) {
      throw new Error("Invalid input");
    }

    if (this.isSingleDigit(digit)) {
      return this.dictionary[digit];
    }

    if (digit <= this.MAX_RANGE - this.TEN) {
      return this.convertDoubleDigit(digit);
    }

    return this.convertTripleDigit(digit);
  }
}
