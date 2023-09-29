#include <iostream>
template <typename T>
class CircularQueue {
private:
    int front;
    int rear;
    int size;
    T* queue;
public:
    CircularQueue(int size) {
        this->size = size;
        front = -1;
        rear = -1;
        queue = new T[size];
    }
    ~CircularQueue() {
        delete[] queue;
    }
    bool isFull() {
        if ((rear + 1) % size == front) {
            return true;
        }
        return false;
    }
    bool isEmpty() {
        if (front == -1 && rear == -1) {
            return true;
        }
        return false;
    }
    void enqueue(T data) {
        if (isFull()) {
            std::cout << "Queue is full" << std::endl;
            return;
        }
        else if (isEmpty()) {
            front = 0;
            rear = 0;
        }
        else {
            rear = (rear + 1) % size;
        }
        queue[rear] = data;
    }
    T dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty" << std::endl;
            return -1;
        }
        else if (front == rear) {
            int temp = front;
            front = -1;
            rear = -1;
            return queue[temp];
        }
        else {
            int temp = front;
            front = (front + 1) % size;
            return queue[temp];
        }
    }
    void display() {
        if (isEmpty()) {
            std::cout << "Queue is empty" << std::endl;
            return;
        }
        else {
            int i = front;
            while (i != rear) {
                std::cout << queue[i] << " ";
                i = (i + 1) % size;
            }
            std::cout << queue[i] << std::endl;
        }
    }
};

void showMenu(){
  std::cout << "1. Enqueue" << std::endl;
  std::cout << "2. Dequeue" << std::endl;
  std::cout << "3. Display" << std::endl;
  std::cout << "4. Exit" << std::endl;
}
int main() {
  int size, choice; 
  std::cout << "Enter the size of the queue: ";
  std::cin >> size;
  CircularQueue<int> queue(size);
  while (true) {
    showMenu();
    std::cout << "Enter your choice: ";
    std::cin >> choice;
    switch (choice) {
      case 1: {
        int data;
        std::cout << "Enter the data: ";
        std::cin >> data;
        queue.enqueue(data);
        break;
      }
      case 2: {
        std::cout << "Dequeued element: " << queue.dequeue() << std::endl;
        break;
      }
      case 3: {
        queue.display();
        break;
      }
      case 4: {
        exit(0);
      }
      default: {
        std::cout << "Invalid choice" << std::endl;
      }
    }
  }
  return 0;
}

