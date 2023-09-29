#include <iostream>

class Node {
  public:
    int data;
    Node *next;
};

class Queue {
  private:
    Node *front;
    Node *rear;
  public:
    int size;
    Queue() {
      front = NULL;
      rear = NULL;
    }

    void enqueue(int x) {
      Node *t = new Node;
      if (t == NULL) {
        std::cout << "Queue is full" << std::endl;
      } else {
        t->data = x;
        t->next = NULL;
        if (front == NULL) {
          front = rear = t;
        } else {
          rear->next = t;
          rear = t;
        }
      }
    }

    int dequeue() {
      int x = -1;
      Node *t;
      if (front == NULL) {
        std::cout << "Queue is empty" << std::endl;
      } else {
        x = front->data;
        t = front;
        front = front->next;
        delete t;
      }
      return x;
    }

    void display() {
      Node *p = front;
      while (p) {
        std::cout << p->data << " ";
        p = p->next;
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

int main() {
  int size;
  std::cout << "Enter size of queue: ";
  std::cin >> size;
  Queue q;
  q.size = size;
  int choice;
  int value;
  while (true) {
    showMenu();
    std::cout << "Enter your choice: ";
    std::cin >> choice;
    switch (choice) {
      case 1:
        std::cout << "Enter value to enqueue: ";
        std::cin >> value;
        q.enqueue(value);
        break;
      case 2:
        std::cout << "Dequeued value: " << q.dequeue() << std::endl;
        break;
      case 3:
        q.display();
        break;
      case 4:
        exit(0);
      default:
        std::cout << "Invalid choice" << std::endl;
    }
  }
  return 0;
}


