import { myCoolFunction } from "./number-to-ptbr";

describe("test add function", () => {
  it("should return um if the input is 1", () => {
    expect(myCoolFunction(1)).toBe("um");
  });

  it("should return Error if number doent match the required params", () => {
    expect(() => {
      myCoolFunction(-1);
    }).toThrow("Invalid input");
  });

  it("should return um if the input is 15", () => {
    expect(myCoolFunction(15)).toBe("quinze");
  });

  it("should return um if the input is 67", () => {
    expect(myCoolFunction(67)).toBe("sessenta e sete");
  });

  it("should return um if the input is 700", () => {
    expect(myCoolFunction(700)).toBe("setessentos");
  });

  it("should return um if the input is 850", () => {
    expect(myCoolFunction(850)).toBe("oitocentos e cinquenta");
  });
});
