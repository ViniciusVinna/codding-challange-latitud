import * as FunctionalNumberModule from "./number-to-ptbr.functional";
import { dictionary } from "./dictionary";
import * as RegexNumberModule from "./number-to-ptbr.regex";
import { NumberToTextConverter } from "./number-to-ptbr.oo-solid";
import { myCoolFunction } from "./number-to-ptbr";

describe("Number to Portuguese Conversion", () => {
  describe("Using Multiple Paradigms", () => {
    const converter = new NumberToTextConverter();

    it("should convert 1 to 'um'", () => {
      expect(myCoolFunction(1)).toBe("um");
      expect(converter.convertToText(1)).toBe("um");
      expect(FunctionalNumberModule.convertToText(1)).toBe("um");
      expect(RegexNumberModule.convertToText(1, dictionary)).toBe("um");
    });

    it("should throw an error for invalid inputs", () => {
      expect(() => myCoolFunction(-1)).toThrowError("Invalid input");
      expect(() => converter.convertToText(1000)).toThrowError("Invalid input");
      expect(() => FunctionalNumberModule.convertToText(1000)).toThrowError("Invalid input");
      expect(() => RegexNumberModule.convertToText(1000, dictionary)).toThrowError("Invalid input");
    });

    it("should convert 15 to 'quinze'", () => {
      expect(myCoolFunction(15)).toBe("quinze");
      expect(converter.convertToText(15)).toBe("quinze");
      expect(FunctionalNumberModule.convertToText(15)).toBe("quinze");
      expect(RegexNumberModule.convertToText(15, dictionary)).toBe("quinze");
    });

    it("should convert 67 to 'sessenta e sete'", () => {
      expect(myCoolFunction(67)).toBe("sessenta e sete");
      expect(converter.convertToText(67)).toBe("sessenta e sete");
      expect(FunctionalNumberModule.convertToText(67)).toBe("sessenta e sete");
      expect(RegexNumberModule.convertToText(67, dictionary)).toBe("sessenta e sete");
    });

    it("should convert 700 to 'setecentos'", () => {
      expect(myCoolFunction(700)).toBe("setecentos");
      expect(converter.convertToText(700)).toBe("setecentos");
      expect(FunctionalNumberModule.convertToText(700)).toBe("setecentos");
      expect(RegexNumberModule.convertToText(700, dictionary)).toBe("setecentos");
    });

    it("should convert 850 to 'oitocentos e cinquenta'", () => {
      expect(myCoolFunction(850)).toBe("oitocentos e cinquenta");
      expect(converter.convertToText(850)).toBe("oitocentos e cinquenta");
      expect(FunctionalNumberModule.convertToText(850)).toBe("oitocentos e cinquenta");
      expect(RegexNumberModule.convertToText(850, dictionary)).toBe("oitocentos e cinquenta");
    });
  });
});
