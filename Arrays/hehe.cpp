#include <iostream>
using namespace std;

class Stu {
public:
  int id;
  int age;
  char name[20];

  void readdata();
  void getdata();
};

void Stu::readdata() {
  cout << "enter age and name and id" << endl;
  cin >> name >> age >> id;
}

void Stu::getdata() { cout << name << endl; }

int main(int argc, char *argv[]) {
  Stu s;
  s.readdata();
  s.getdata();
  return 0;
}
