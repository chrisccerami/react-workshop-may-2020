import {calculateAverageRating} from '.'

describe("calculateAverageRating", () => {
  describe("with an array of ratings", () => {
    it("returns the average", () => {
      const ratings = [1, 3, 5];
      const result = calculateAverageRating(ratings);

      expect(result).toEqual(3);
    });
  });

  describe("with an array of non-numbers", () => {
    it("raises an error", () => {
      const ratings = ["foo", 2, {a: 1}];

      expect(() => {
        calculateAverageRating(ratings as any)
      }).toThrow("an element in the array passed to calculateAverageRating was not a number");
    });
  });

  describe("with an empty array", () => {
    it("returns 0", () => {
      const ratings = [];
      const result = calculateAverageRating(ratings);

      expect(result).toEqual(0);
    });
  });
});
