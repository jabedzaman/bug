const arr: number[] = [1, 2, 3, 4, 5, 6];

function deletion(arr: number[], key: number): number[] {
  for (let i = key; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  // arr.length -= 1;
  return arr;
}

console.log(arr);
console.log(deletion(arr, 2));
