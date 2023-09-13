type Dict = Record<number, string>;

const dictionary: Dict = {
  0: "zero",
  1: "um",
  2: "dois",
  3: "três",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove",
  10: "dez",
  11: "onze",
  12: "doze",
  13: "treze",
  14: "quatorze",
  15: "quinze",
  16: "dezesseis",
  17: "dezessete",
  18: "dezoito",
  19: "dezenove",
  20: "vinte",
  30: "trinta",
  40: "quarenta",
  50: "cinquenta",
  60: "sessenta",
  70: "setenta",
  80: "oitenta",
  90: "noventa",
  100: "cem",
  200: "duzentos",
  300: "trezentos",
  400: "quatrocentos",
  500: "quinhentos",
  600: "seiscentos",
  700: "setecentos",
  800: "oitocentos",
  900: "novecentos",
};

export function myCoolFunction(digit: number): string {
  if (!isValidInput(digit)) {
    throw new Error("Invalid input");
  }

  if (isSingleDigit(digit) || isSpecialCaseBetweenTenAndTwenty(digit)) {
    return dictionary[digit];
  }

  if (isDoubleDigit(digit)) {
    const tensDigit = getTensDigit(digit);
    const onesDigit = getOnesDigit(digit);

    return joinWords(dictionary[tensDigit], dictionary[onesDigit]);
  }

  if (isTripleDigit(digit)) {
    const hundredsDigit = getHundredsDigit(digit);
    const remainingDigits = getRemainingDigits(digit);

    if (remainingDigits <= 20 || isDoubleDigit(remainingDigits)) {
      return joinWords(dictionary[hundredsDigit], dictionary[remainingDigits]);
    } else {
      const tensDigit = getTensDigit(remainingDigits);
      const onesDigit = getOnesDigit(remainingDigits);

      return joinWords(
        dictionary[hundredsDigit],
        dictionary[tensDigit],
        dictionary[onesDigit]
      );
    }
  }

  throw new Error("Invalid input"); // This should not happen
}

function isValidInput(digit: number): boolean {
  return digit >= 0 && digit <= 999;
}

function isSingleDigit(digit: number): boolean {
  return digit >= 0 && digit <= 9;
}

function isSpecialCaseBetweenTenAndTwenty(digit: number): boolean {
  return digit >= 10 && digit <= 19;
}

function isDoubleDigit(digit: number): boolean {
  return digit >= 20 && digit <= 99;
}

function isTripleDigit(digit: number): boolean {
  return digit >= 100 && digit <= 999;
}

function getTensDigit(digit: number): number {
  return Math.floor(digit / 10) * 10;
}

function getOnesDigit(digit: number): number {
  return digit % 10;
}

function getHundredsDigit(digit: number): number {
  return Math.floor(digit / 100) * 100;
}

function getRemainingDigits(digit: number): number {
  return digit % 100;
}

function joinWords(...words: string[]): string {
  return words.filter(Boolean).join(" e ");
}
