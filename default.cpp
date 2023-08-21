// copyright 2023 jabezaman

#include <iostream>
#include <string>

struct Emp {
  std::string name;
};

enum days { sun, mon, tue, wed, thurs, fri, sat };

int main() {
  Emp e[5];

  for (int i = 0; i < 5; ++i) {
    std::cout << "Enter the " << i + 1 << "th name:" << std::endl;
    std::cin >> e[i].name;
    std::cout << "The name entererd for " << i + 1 << " is: " << e[i].name
              << std::endl;
  }

  std::cout << std::endl << std::endl << std::endl;
  std::cout << "The names are:" << std::endl;
  for (int i = 0; i < 5; ++i) {
    std::cout << i + 1 << ": " << e[i].name << std::endl;
  }

  days day1, day2;
  day1 = sun;
  day2 = fri;

  std::cout << day1 << "\t" << day2 << std::endl;

  if (day1 > day2) {
    std::cout << "day 1 comes after day2" << std::endl;
  } else {
    std::cout << "day 2 comes after day1" << std::endl;
  }

  return 0;
}
