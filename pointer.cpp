#include <algorithm>
#include <iostream>

int main()
{
  int x = 20;
  int *p = &x;
  std::cout << p << std::endl << *p ;
  int &m=x;
  std::cout << x << std::endl;
}
