#include <iostream>
using namespace std;

void merge_sort(int arr[], int l, int r){
      if (l >= r) {
        return;
    }

    int mid = (l + r) / 2;

    merge_sort(arr, l, mid);
    merge_sort(arr, mid + 1, r);

    int temp[r - l + 1];

    int i = l, j = mid + 1, k = 0;

    while (i <= mid && j <= r) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        }
        else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= r) {
        temp[k++] = arr[j++];
    }

    for (int i = l; i <= r; i++) {
        arr[i] = temp[i - l];
    }
}

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) {
        int temp;
        cin >> temp;
        arr[i] = temp;
    }

    merge_sort(arr, 0, n - 1);

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
