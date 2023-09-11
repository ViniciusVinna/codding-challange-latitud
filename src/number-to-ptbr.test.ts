// I've namespaced the functions as Elixir's modules, because I like it, and its a good way to switch between functional and oo-solid paradigms. I've also created a function that uses both paradigms, just to show that it's possible to use both in the same project.
import * as numberModule from "./number-to-ptbr.functional";

// Object Oriented with SOLID principles
import { NumberToTextConverter } from "./number-to-ptbr.oo-solid";

// My cool function personal and reasanable way of thinking under pressure :D
import { myCoolFunction } from "./number-to-ptbr";

describe("numberToPortuguese", () => {
  describe("multiple paradigm assertions", () => {
    const converter = new NumberToTextConverter();

    it("should return um if the input is 1", () => {
      expect(myCoolFunction(1)).toBe("um");
      expect(converter.convertToText(1)).toBe("um");
      expect(numberModule.convertToText(1)).toBe("um");
    });

    it("should return Error if number doent match the required params", () => {
      expect(() => {
        myCoolFunction(-1);
      }).toThrow("Invalid input");

      expect(() => {
        converter.convertToText(1000);
      }).toThrow("Invalid input");

      expect(() => {
        numberModule.convertToText(1000);
      }).toThrow("Invalid input");
    });

    it("should return um if the input is 15", () => {
      expect(myCoolFunction(15)).toBe("quinze");
      expect(converter.convertToText(15)).toBe("quinze");
      expect(numberModule.convertToText(15)).toBe("quinze");
    });

    it("should return um if the input is 67", () => {
      expect(myCoolFunction(67)).toBe("sessenta e sete");
      expect(converter.convertToText(67)).toBe("sessenta e sete");
      expect(numberModule.convertToText(67)).toBe("sessenta e sete");
    });

    it("should return um if the input is 700", () => {
      expect(myCoolFunction(700)).toBe("setecentos");
      expect(converter.convertToText(700)).toBe("setecentos");
      expect(numberModule.convertToText(700)).toBe("setecentos");
    });

    it("should return um if the input is 850", () => {
      expect(myCoolFunction(850)).toBe("oitocentos e cinquenta");
      expect(converter.convertToText(850)).toBe("oitocentos e cinquenta");
      expect(numberModule.convertToText(850)).toBe("oitocentos e cinquenta");
    });
  });
});
