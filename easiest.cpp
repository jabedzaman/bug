#include <iostream>
#include <string>

int main (int argc, char *argv[]) {
  std::string food  = "Pasta";
  std::string &meal = food;
  std::cout << "food: " << food << std::endl;
  std::cout << "meal: " << meal << std::endl;
  return 0;
}
