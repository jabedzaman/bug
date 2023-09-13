#include <iostream>
#include <string>
#include <vector>

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

    // ~Student() {
      // std::cout << "Destructor called" << std::endl;
    // };
};

int main(){
  int n;
  std::cout << "Enter number of students: " << std::endl;
  std::cin >> n;

  std::vector<Student> students;

  for(int i = 0; i < n; i++) {
    std::string name;
    int age;

    std::cout << "Enter name: " << std::endl;
    std::cin >> name;

    std::cout << "Enter age: " << std::endl;
    std::cin >> age;

    Student student(name, age);
    students.push_back(student);
  }

  std::cout << "Students: " << std::endl;
  
  for(int i = 0; i < n; i++) {
    students[i].print();
  }
  return 0;
}
