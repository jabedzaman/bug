#include <iostream>

/*
 * Function overloading is a feature in C++ where two or more functions can have the same name but different parameters.
 */

int add(int a, int b){
  return a + b;
}

double add(double a, double b){
  return a + b;
}

int main(){
  std::cout << add(1, 2) << std::endl;
  std::cout << add(1.0, 2.0) << std::endl;
  return 0;
}
