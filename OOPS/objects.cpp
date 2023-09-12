#include <iostream>
#include <string>

class Student {
  public:
    std::string name;
    int age;

    Student(std::string name, int age) {
      this->name = name;
      this->age = age;
    };

    void print() {
      std::cout << "Name: " << name << std::endl;
      std::cout << "Age: " << age << std::endl;
    };

    ~Student() {
      std::cout << "Destructor called" << std::endl;
    };
};

int main(){
  Student student("John", 20);
  Student student2 = student;
  student.print();
  student2.print();
  return 0;
}
