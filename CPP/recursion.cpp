#include <iostream>

int factorial(int n){
  return n == 0 ? 1 : n * factorial(n - 1);
}


int main(){
  std::cout << factorial(5) << std::endl;
  return 0;
}
