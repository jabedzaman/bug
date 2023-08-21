const arr: number[] = [5, 1, 4, 7, 2, 8, 3];

function bubble_sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(arr);

console.log(bubble_sort(arr));
