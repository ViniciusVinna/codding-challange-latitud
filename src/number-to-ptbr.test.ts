import { myCoolFunction } from "./number-to-ptbr";
import { NumberToTextConverter } from "./number-to-ptbr.oo-solid";

describe("Number to PTBR - Cases", () => {
  const converter = new NumberToTextConverter();

  it("should return um if the input is 1", () => {
    expect(myCoolFunction(1)).toBe("um");
    expect(converter.convertToText(1)).toBe("um");
  });

  it("should return Error if number doent match the required params", () => {
    expect(() => {
      myCoolFunction(-1);
    }).toThrow("Invalid input");

    expect(() => {
      converter.convertToText(1000);
    }).toThrow("Invalid input");
  });

  it("should return um if the input is 15", () => {
    expect(myCoolFunction(15)).toBe("quinze");
    expect(converter.convertToText(15)).toBe("quinze");
  });

  it("should return um if the input is 67", () => {
    expect(myCoolFunction(67)).toBe("sessenta e sete");
    expect(converter.convertToText(67)).toBe("sessenta e sete");
  });

  it("should return um if the input is 700", () => {
    expect(myCoolFunction(700)).toBe("setessentos");
    expect(converter.convertToText(700)).toBe("setessentos");
  });

  it("should return um if the input is 850", () => {
    expect(myCoolFunction(850)).toBe("oitocentos e cinquenta");
    expect(converter.convertToText(850)).toBe("oitocentos e cinquenta");
  });
});
