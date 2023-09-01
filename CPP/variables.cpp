#include <iostream>

/*
 * types of variables:
 * 1. local variables
 * 2. global variables
 * 3. static variables
 * 4. extern variables
 */

// global variables
int globalVariable = 10;

int main()
{
  // local variables
  int localVariable = 20;

  // static variables
  static int staticVariable = 30;

  std::cout << "localVariable: " << localVariable << std::endl;
  std::cout << "staticVariable: " << staticVariable << std::endl;
  std::cout << "globalVariable: " << globalVariable << std::endl;

  return 0;
}
