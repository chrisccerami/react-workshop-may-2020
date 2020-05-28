/**
* Calculate an average rating based on an array of numbers
*/

export function calculateAverageRating(ratings) {
  const sum = ratings.reduce((prev, current) => {
    if (typeof(current) !== "number") {
      throw new Error("an element in the array passed to calculateAverageRating was not a number");
    }
    return prev + current;
  }, 0)

  if (ratings.length === 0) { return 0 }
  return sum / ratings.length
}
