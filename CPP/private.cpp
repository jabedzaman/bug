#include <iostream>
using namespace std;

class student {
  private:
    int roll_no;
  protected:
    char section[10];
  public:
    void get_roll_no(int);
    void put_roll_no(void);
};

void student :: get_roll_no(int x) {
  roll_no = x;
}

void student :: put_roll_no(void) {
  cout << "Roll No: " << roll_no << endl;
}



int main()
{
  student s1;
  s1.get_roll_no(10);
  s1.put_roll_no();
  return 0;
}
