// copyright 2023 jabedzaman

#include <iostream>
#include <vector>

int main() {
  int size;
  std::cout << "Enter the size of the array:" << std::endl;
  std::cin >> size;

  std::vector<int> arr(size);
  for (int i = 0; i < size; ++i) {
    std::cout << "Enter the " << i + 1 << "th value:" << std::endl;
    std::cin >> arr[i];
  }

  std::cout << "The array before sorting is:" << std::endl;
  for (int i = 0; i < size; i++) {
    std::cout << arr[i];
    if (i == size) {
      std::cout << "." << std::endl;
    } else {
      std::cout << ", ";
    }
  }

  for (int i = 0; i < size; ++i) {
    for (int j = 0; j < size - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  std::cout << "The array after sorting is:" << std::endl;
  for (int i = 0; i < size; i++) {
    std::cout << arr[i];
    if (i == size) {
      std::cout << "." << std::endl;
    } else {
      std::cout << ", ";
    }
  }
}
