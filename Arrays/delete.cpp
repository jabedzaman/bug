// #include <iostream>

// int main() {
//   int n;
//   std::cout << "Enter the size of the array: ";
//   std::cin >> n;

//   int arr[n];

//   for (int i = 0; i < n; ++i) {
//     std::cout << "Enter value for element " << i << ": ";
//     std::cin >> arr[i];
//   }

//   int key;
//   std::cout << "Enter the key of the value you want to delete: ";
//   std::cin >> key;

//   int index = -1;
//   for (int i = 0; i < n; ++i) {
//     if (arr[i] == key) {
//       index = i;
//       break;
//     }
//   }

//   if (index != -1) {
//     int newArr[n - 1];
//     for (int i = 0; i < index; ++i) {
//       newArr[i] = arr[i];
//     }
//     for (int i = index + 1; i < n; ++i) {
//       newArr[i - 1] = arr[i];
//     }
//     arr = newArr;
//     std::cout << "Value deleted successfully!\n";
//     n--;
//   } else {
//     std::cout << "Key not found in the array.\n";
//   }

//   std::cout << "Updated Array:\n";
//   for (int i = 0; i < n; ++i) {
//     std::cout << arr[i] << " ";
//   }
//   std::cout << "\n";

//   return 0;
// }

#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Enter the size of the array: ";
  cin >> n;

  int arr[n];

  for (int i = 0; i < n; i++) {
    cout << "Enter value for element " << i << ": ";
    cin >> arr[i];
  }

  int key;

  cout << "Enter the key of the value you want to delete: ";

  cin >> key;

  int index = -1;

  for (int i = 0; i < n; i++) {
    if (arr[i] == key) {
      index = i;
      break;
    }
  }

  if (index != -1) {
    int newArr[n - 1];
    for (int i = 0; i < index; i++) {
      newArr[i] = arr[i];
    }
    for (int i = index + 1; i < n; i++) {
      newArr[i - 1] = arr[i];
    }
    for (int i = 0; i < n - 1; i++) {
      arr[i] = newArr[i];
    }
    cout << "Value deleted successfully!\n";
    n--;
  } else {
    cout << "Key not found in the array.\n";
  }

  cout << "Updated Array:\n";

  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
}
