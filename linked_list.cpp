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

     bool search(T value){
      if (!this->head) {
        return false;
      }

      Node<T>* current = head;
      int status;
      while (current != nullptr) {
        if (current-> data == value){
          return true;
        }
      }
      return false;
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

  std::cout << "Do you want to search anything brother? [Y/n]" << std::endl;
  char ans;
  std::cin >> ans;
  if (ans != 'Y'){
    return 0;
  }

  int value;
  std::cout << "Which one then?" << std::endl;

  std::cin >> value;

  std::cout << myList.search(value);
  return 0;
}

