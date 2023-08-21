const arr: number[] = [1, 2, 5, 6, 7, 8];

interface Iinsert {
  index: number;
  value: number;
}

const insert: Iinsert = {
  index: 3,
  value: 10,
};

function insertion(arr: number[], values: Iinsert): number[] {
  if (arr.length < values.index) {
    throw new Error("Out of range");
  }

  for (let i = arr.length - 1; i > values.index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[values.index] = values.value;

  return arr;
}

console.log(arr);
console.log(insertion(arr, insert));
