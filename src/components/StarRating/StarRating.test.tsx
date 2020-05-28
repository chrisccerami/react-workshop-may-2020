import { StarRating } from '.'
import React from 'react';
import { render } from '../../tests/test-utils';

describe("StarRating", () => {
  describe("with no rating", () => {
    it("shows empty stars", async () => {
      const { findAllByTestId, queryAllByTestId } = render(<StarRating maxStars={5} rating={0}/>);
      const emptyStars = await findAllByTestId("empty-star");
      const halfStars = queryAllByTestId("half-star");
      const fullStars = queryAllByTestId("full-star");

      expect(emptyStars.length).toEqual(5);
      expect(halfStars.length).toEqual(0);
      expect(fullStars.length).toEqual(0);
    });
  });

  describe("with a rating", () => {
    it("shows stars matching the rating", async () => {
      const { findAllByTestId, queryAllByTestId } = render(<StarRating maxStars={5} rating={3}/>);
      const emptyStars = await findAllByTestId("empty-star");
      const halfStars = queryAllByTestId("half-star");
      const fullStars = await findAllByTestId("full-star");

      expect(emptyStars.length).toEqual(2);
      expect(halfStars.length).toEqual(0);
      expect(fullStars.length).toEqual(3);
    });
  });

  describe("with a half rating", () => {
    it("shows a half-star rating", async () => {
      const { findAllByTestId, queryAllByTestId } = render(<StarRating maxStars={5} rating={2.5}/>);
      const emptyStars = await findAllByTestId("empty-star");
      const halfStars = await findAllByTestId("half-star");
      const fullStars = await findAllByTestId("full-star");

      expect(emptyStars.length).toEqual(2);
      expect(halfStars.length).toEqual(1);
      expect(fullStars.length).toEqual(2);
    });
  });
});
