// input must be between 0 and 999
// i must identify total digits
// 1 digit: 0-9
// 2 digits: 10-99
// -- add different threatment for 10-19
// 3 digits: 100-999
// -- 3 digits, break into 2 digits, then 1 digit
// consulting my dicttionary

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
  700: "setessentos",
  800: "oitocentos",
  900: "novecentos",
};

export function myCoolFunction(digit: number): string {
  if (digit < 0 || digit > 999) {
    throw new Error("Invalid input");
  }

  if (digit <= 20 || (digit <= 99 && digit % 10 === 0)) {
    return dictionary[digit];
  }

  if (digit <= 99) {
    const tensDigit = Math.floor(digit / 10) * 10;
    const onesDigit = digit % 10;

    return dictionary[tensDigit] + " e " + dictionary[onesDigit];
  }

  if (digit % 100 === 0) {
    return dictionary[digit];
  }

  const hundredsDigit = Math.floor(digit / 100) * 100;
  const remainingDigits = digit % 100;

  if (remainingDigits <= 20 || (remainingDigits <= 99 && remainingDigits % 10 === 0)) {
    return dictionary[hundredsDigit] + " e " + dictionary[remainingDigits];

  }

  else {
    const tensDigit = Math.floor(remainingDigits / 10) * 10;
    const onesDigit = remainingDigits % 10;

    return dictionary[hundredsDigit] + " e " + dictionary[tensDigit] + " e " + dictionary[onesDigit];
  }
}