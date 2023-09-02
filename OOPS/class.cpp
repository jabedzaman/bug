// "Copyright 2023 jabedzaman"

#include <iostream>
#include <string>
using namespace std;

class Books {
public:
  int id;
  string name;
  void readdata(int id, string name){
    this->id = id;
    this->name = name;
  };

  void displaydata(){
    cout << "id: " << id << endl;
    cout << "name: " << name << endl;
  };
};

int main(){
  Books book1;
  book1.readdata(1, "C++");
  book1.displaydata();
  return 0;
}
