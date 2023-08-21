// copyright 2023 jabedzaman

#include <bits/stdc++.h>
#include <cmath>
#include <iostream>
#include <vector>

int main() {

  int size;
  std::cout << "Enter size of array" << std::endl;
  std::cin >> size;

  std::vector<int> arr(size);

  for (int i = 0; i < size; i++) {
    std::cout << "Enter the " << i + 1 << "th value:" << std::endl;
    std::cin >> arr[i];
  }

  sort(arr.begin(), arr.end());

  int term;
  std::cout << "Enter search term:" << std::endl;
  std::cin >> term;

  int lo = 0;
  int hi = size - 1;
  int status = 0;

  do {
    int mid = std::floor(lo + (hi - lo) / 2);
    int value = arr[mid];

    if (value == term) {
      status++;
      break;
    } else if (value > term) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  } while (lo <= hi);

  if (status > 0) {
    std::cout << "found" << std::endl;
  } else {
    std::cout << "not found" << std::endl;
  }

  return 0;
}
