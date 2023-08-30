const arr: number[] = [10, 3, 48, 34, 65, 12];

function quick_sort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((item) => item < pivot);
  const middle = arr.filter((item) => item === pivot);
  const right = arr.filter((item) => item > pivot);

  return [...quick_sort(left), ...middle, ...quick_sort(right)];
}

console.log(arr);
console.log(quick_sort(arr));
