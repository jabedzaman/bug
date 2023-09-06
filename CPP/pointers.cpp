#include <iostream>
using namespace std;

int main (int argc, char *argv[]) {
  /*
   * example of null pointer  
   * p is pointing to a memory location that is not allocated
   */
  int *p = NULL;
  cout << "p = " << p << endl;
  /*
   * example of dangling pointer
   * p is pointing to a memory location that is not allocated
   */
  int *q = new int;
  delete q;
  cout << "q = " << q << endl;
  /*
   * example of wild pointer
   * p is pointing to a memory location that is not allocated
   * the difference between wild and dangling pointer is that
   * dangling pointer was pointing to a memory location that was
   * allocated but it was deallocated later
   * wild pointer is pointing to a memory location that was never
   * allocated
   */
  int *r;
  cout << "r = " << r << endl;
  
  /*
   * example of when int pointer points to a char variable
   */
  // char c = 'a';
  // int *s = &c;
  // cout << "s = " << s << endl;

  

  return 0;

}
