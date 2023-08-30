#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Enter the size of the array: ";
  cin >> n;
  int arr[n];
  cout << "Enter the elements of the array: ";
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
  int m;
  cout << "Enter the size of the second array: ";
  cin >> m;
  int arr2[m];
  cout << "Enter the elements of the second array: ";
  for (int i = 0; i < m; i++) {
    cin >> arr2[i];
  }
  int arr3[n + m];
  int i = 0, j = 0, k = 0;
  while (i < n && j < m) {
    if (arr[i] < arr2[j]) {
      arr3[k] = arr[i];
      i++;
    } else {
      arr3[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < n) {
    arr3[k] = arr[i];
    i++;
    k++;
  }
  while (j < m) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }
  cout << "The merged array is: ";
  for (int i = 0; i < n + m; i++) {
    cout << arr3[i] << " ";
  }
  return 0;
}

// #include <iostream>
// using namespace std;
//
// int main(int argc, char *argv[]) {
//   int arr1[2] = {1, 2};
//   int arr2[2] = {4, 5};
//   int arr3[5];
//   arr3 = arr1 + arr2;
//   std::cout << arr3[1] << std::endl;
//   return 0;
// }
