#include <iostream>
#include <vector>

using namespace std;

/*
 *
 * A double ended queue is a queue that can be enqueued and dequeued from both ends.
 * It has fixed capacity.
*/

class DoubleEndedQueue {
private:
    vector<int> queue;
public:
    DoubleEndedQueue (int size) {
        queue.reserve(size);
    }

    void enqueueFront(int value) {
        if (queue.size() == queue.capacity()) {
            cout << "Queue is full\n";
            return;
        }
        queue.insert(queue.begin(), value);
    }

    void enqueueRear(int value) {
        if (queue.size() == queue.capacity()) {
            cout << "Queue is full\n";
            return;
        }
        queue.push_back(value);
    }

    int dequeueFront() {
        if (queue.size() == 0) {
            return -1;
        }
        int value = queue[0];
        queue.erase(queue.begin());
        return value;
    }

    int dequeueRear() {
        if (queue.size() == 0) {
            return -1;
        }
        int value = queue[queue.size() - 1];
        queue.pop_back();
        return value;
    }

    void print() {
        for (int i = 0; i < queue.size(); i++) {
            cout << queue[i] << " ";
        }
        cout << "\n";
    }

};

void menu(){
    cout << "1. Enqueue Front\n";
    cout << "2. Enqueue Rear\n";
    cout << "3. Dequeue Front\n";
    cout << "4. Dequeue Rear\n";
    cout << "5. Print\n";
    cout << "6. Exit\n";
}

int main()
{
  int n;
  cout << "🏃Enter the size of the queue: ";
  cin >> n;
  DoubleEndedQueue queue(n);
  while (true) {
    menu();
    int choice;
    cin >> choice;
    switch (choice) {
      case 1:
        cout << "Enter the value to be inserted: ";
        cin >> n;
        queue.enqueueFront(n);
        break;
      case 2:
        cout << "Enter the value to be inserted: ";
        cin >> n;
        queue.enqueueRear(n);
        break;
      case 3:
        n = queue.dequeueFront();
        if (n == -1) {
          cout << "Queue is empty\n";
        }
        else {
          cout << "The value dequeued is " << n << "\n";
        }
        break;
      case 4:
        n = queue.dequeueRear();
        if (n == -1) {
          cout << "Queue is empty\n";
        }
        else {
          cout << "The value dequeued is " << n << "\n";
        }
        break;
      case 5:
        queue.print();
        break;
      case 6:
        exit(0);
      default:
        cout << "Invalid choice\n";
    }
  }
}
