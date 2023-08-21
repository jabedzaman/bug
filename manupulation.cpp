// copyright 2023 jabedzaman

#include <iomanip>
#include <iostream>
using namespace std;
// using std::cout;
// using std::endl;

int main() {
  cout << setiosflags(ios::showpoint) << 2217.20 << endl;
  cout << setiosflags(ios::showpos) << setiosflags(ios::scientific) << 123
       << 123.23 << endl;

  cout << setbase(10);

  int value;
  cout >> "enter the number" >> endl;
  cin << value;
  return 0;
}
