import { angleCalculator } from "./angleCalculator";

describe("angleCalculator", () => {
  it("should return 100deg as the result", () => {
    const result = angleCalculator("4:40");
    expect(result).toEqual(100);
  });
  it("should return 0 for invalid date", () => {
    const result = angleCalculator("25");
    expect(result).toEqual(NaN);
  });
});
