const haystack: number[] = [1, 2, 4, 5, 6, 7, 8, 9];
const needle: number = 76;

function binary_search(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}

binary_search(haystack, needle)
  ? console.log("found")
  : console.log("not found");
