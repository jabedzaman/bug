const haystack: number[] = [1, 3, 5, 7, 8, 9, 10];
const needle: number = 10;

function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; ++i) {
    if (i === needle) {
      return true;
    }
  }
  return false;
}

linear_search(haystack, needle)
  ? console.log("found")
  : console.log("not found");
