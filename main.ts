// const arr: number[] = [1, 2, 3, 4, 5];
//
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }
//

const arr2: number[] = [1, 2, 4, 5, 6, 7];

// const arr: number[] = [1, ...arr2];

const arr = [...arr2, arr2];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}
