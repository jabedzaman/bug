const haystack : number [] = [1,2,324,423,4324,6,67,-234,3243,2343];


function selectionSort( haystack : number []) : number [] {
  let j : number = 0;
  for(let i = 0 ; i < haystack.length - 1 ; i++ ){
    let min : number = i;
    for(let j = i +1 ; j <haystack.length ; j++ ){
      if (haystack[min] > haystack[j]){
        min = j;
      }
      if (min!=i){
        let temp : number = haystack[min];
        haystack[min] = haystack[j+1];
        haystack[j+1] = temp;
      }
    }
  }
  return haystack;
}

console.log(haystack);
console.log(selectionSort(haystack));


