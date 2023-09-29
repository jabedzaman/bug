#include <iostream>

template <typename T>
class Queue {
private:
    T* data;
    int front;
    int rear;
    int capacity;
    int size;
public:
    Queue(int capacity) {
        this->capacity = capacity;
        data = new T[capacity];
        front = 0;
        rear = 0;
        size = 0;
    }
    ~Queue() {
        delete[] data;
    }
    void enqueue(T value) {
        if (size == capacity) {
            std::cout << "Queue is full" << std::endl;
            return;
        }
        data[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
    }
    T dequeue() {
        if (size == 0) {
            std::cout << "Queue is empty" << std::endl;
            return -1;
        }
        T value = data[front];
        front = (front + 1) % capacity;
        size--;
        return value;
    }
    void Display() {
        if (size == 0) {
            std::cout << "Queue is empty" << std::endl;
            return;
        }
        std::cout << "Queue: ";
        for (int i = front; i < front + size; i++) {
            std::cout << data[i % capacity] << " ";
        }
        std::cout << std::endl;
    } 
};


void showMenu(){
    std::cout << "1. Enqueue" << std::endl;
    std::cout << "2. Dequeue" << std::endl;
    std::cout << "3. Display" << std::endl; 
    std::cout << "4. Exit" << std::endl;
}

int main()
{
  int choice;
  int value;
  int size;
  std::cout << "Enter size of queue: ";
  std::cin >> size;
  Queue<int> queue(size);
  while (1) {
    showMenu();
    std::cout << "Enter your choice: ";
    std::cin >> choice;
    switch (choice) {
      case 1:
        std::cout << "Enter value to enqueue: ";
        std::cin >> value;
        queue.enqueue(value);
        break;
      case 2:
        std::cout << "Dequeued value: " << queue.dequeue() << std::endl;
        break;
      case 3:
        queue.Display();
        break;
      case 4:
        exit(0);
      default:
        std::cout << "Invalid choice" << std::endl;
    }
  }
}

