#include <iostream>
#include <vector>

int main() {
  int size;
  std::cout << "Enter the size of the array: ";
  std::cin >> size;

  std::vector<int> myArray(size);

  for (int i = 0; i < size; ++i) {
    std::cout << "Enter " << size << " values for the array:" << std::endl;
    std::cin >> myArray[i];
  }

  std::cout << "Array values: ";
  for (int num : myArray) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  return 0;
}
