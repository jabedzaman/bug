#include <iostream>
using namespace std;

class B1 {
  public:
    void show_data(){
      cout<<"\nin the base class 1";
    }
};

class B2{
  public:
    void show_data(){
      cout << "\nin the class b2";
    }
};


class D:public B1, B2{
  public:
};

int main()
{
  D obj;
  obj.B1::show_data();
}
