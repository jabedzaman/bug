#include <iomanip>
#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
  cout << setfill('x') << setw(10);
  cout << 24 << endl;
  return 0;
}
