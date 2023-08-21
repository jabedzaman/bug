// copyright 2023 jabedzaman

#include <iostream>
#include <vector>

int main() {
  int size;
  std::cout << "Enter size of array:" << std::endl;
  std::cin >> size;

  std::vector<int> arr(size);

  for (int i = 0; i < size; i++) {
    std::cout << "Enter the " << i + 1 << "th value" << std::endl;
    std::cin >> arr[i];
  }

  std::cout << "enter search term" << std::endl;
  int search;
  std::cin >> search;

  int status = 0;

  for (int i = 0; i < size; i++) {
    if (search == arr[i]) {
      status++;
    }
  }

  if (status > 0) {
    std::cout << "found" << std::endl;
  } else {
    std::cout << "not found" << std::endl;
  }
}
