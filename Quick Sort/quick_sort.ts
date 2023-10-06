const arr: number[] = [10, 3, 48, 34, 65, 12];

function quick_sort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  // console.log(pivot);
  const left = arr.filter((item) => item < pivot);
  // console.log(left);
  const middle = arr.filter((item) => item === pivot);
  // console.log(middle);
  const right = arr.filter((item) => item > pivot);
  // console.log(right);

  // console.log([...quick_sort(left), ...middle, ...quick_sort(right)]);

  return [...quick_sort(left), ...middle, ...quick_sort(right)];
}

console.log(arr);
console.log(quick_sort(arr));
