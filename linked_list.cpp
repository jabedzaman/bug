#include <iostream>

template <typename T>
class Node {
  public:
    T data;
    Node* next;

    Node(T value) : data(value), next(nullptr) {}
};

template <typename T>
class LinkedList {
  private:
    Node<T>* head;

  public:
    LinkedList() : head(nullptr) {}

    void append(T value) {
      Node<T>* newNode = new Node<T>(value);
      if (!head) {
        head = newNode;
        return;
      }

      Node<T>* current = head;
      while (current->next != nullptr) {
        current = current->next;
      }
      current->next = newNode;
    }

    void display() {
      if (!this->head) {
        std::cout << "Empty" << std::endl;
        return;
      }

      Node<T>* current = head;
      while (current != nullptr) {
        std::cout << current->data << " ";
        current = current->next;
      }
      std::cout << std::endl;
    }

    void insertAtIndex(int value, int index) {
        Node<T>* newNode = new Node(value);

        if (index == 0) {
            newNode->next = head;
            head = newNode;
            return;
        }

        Node<T>* prevNode = head;
        for (int i = 0; i < index - 1 && prevNode != nullptr; ++i) {
            prevNode = prevNode->next;
        }

        if (prevNode == nullptr) {
            std::cout << "Index out of bounds." << std::endl;
            return;
        }

        newNode->next = prevNode->next;
        prevNode->next = newNode;
    }

    ~LinkedList() {
      Node<T>* current = head;
      while (current) {
        Node<T>* nextNode = current->next;
        delete current;
        current = nextNode;
      }
    }
};

int main() {
  int length;
  std::cout << "Enter the length you want" << std::endl;
  std::cin >> length; 
  LinkedList<int> myList;


  for (int i = 0; i < length; ++i) {
    int j;
    std::cin >> j;
    myList.append(j);
  }

  myList.display();
  myList.insertAtIndex(int 10, int 3);


  return 0;
}
