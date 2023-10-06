#include <iostream>
using namespace std;

void quick_sort(int *arr, int left, int right) {
    if (left >= right) return;
    int i = left, j = right, pivot = arr[left];
    while (i < j) {
        while (i < j && arr[j] >= pivot) j--;
        if (i < j) arr[i++] = arr[j];
        while (i < j && arr[i] < pivot) i++;
        if (i < j) arr[j--] = arr[i];
    }
    arr[i] = pivot;
    quick_sort(arr, left, i - 1);
    quick_sort(arr, i + 1, right);
}


int main() {
    int n;
    cout << "Heyo!! 😊 Enter the number of elements in the array:" << endl;
    cin >> n;
    int arr[n];
    cout << "Enter the elements of the array:" << endl;
    for (int i = 0; i < n; i++) cin >> arr[i];
    quick_sort(arr, 0, n - 1);
    cout << "The sorted array is:" << endl;
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    cout << endl;
    return 0;
}
