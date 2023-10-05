#include <iostream>

void towerOfHanoi(int n, char s, char d, char a)
{
  if (n == 1)
  {
    std::cout << "Move disk 1 from " << s << " to " << d << std::endl;
    return;
  }

  towerOfHanoi(n - 1, s, a, d);
  std::cout << "Move disk " << n << " from " << s << " to " << d << std::endl;
  towerOfHanoi(n - 1, a, d, s);
}

int main()
{
  std::cout << "Enter number of disk:" << std::endl;
  int n;
  std::cin >> n;

  std::cout << "Enter source, destination and auxillary tower:" << std::endl;
  char s, d, a;
  std::cin >> s >> d >> a;

  std::cout << "The moves are:" << std::endl;
  towerOfHanoi(n, s, d, a);

  return 0;
}
