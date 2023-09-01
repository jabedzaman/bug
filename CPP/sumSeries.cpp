#include <iostream>

/*
 * sum of series using recursion
 */

int seriesSum(int a, int b){
  if(a == b){
    return a;
  }
  else{
    return a + seriesSum(a + 1, b);
  }
}

int main(){
  std::cout << seriesSum(1, 10) << std::endl;
  return 0;
}
