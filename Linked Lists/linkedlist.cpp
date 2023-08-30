#include <iostream>

template <typename T>
class Node {
  T data;
  Node* next;

  Node(T value) : data(value), next(nullptr){}
};

template <typename T>
class LinkedList {
  private:
    Node<T>* head;


  public:
    LinkedList() : head(nullptr){};


    void append(T value){
      Node<T>* newNode = new Node<T>(value);

      if(head == nullptr){
        head = newNode;
        return;
      }

      Node<T>* current = head;
      while (current -> next != nullptr) {
        current = current->next;
      }
      current->next = newNode;
    }

    void display(){
      Node<T>* current = head;
        while (current != nullptr) {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }


    ~LinkedList() {
    Node<T>* current = head;
    while (current != nullptr) {
        Node<T>* next = current->next;
        delete current;
        current = next;
    }
};

int main(){
  LinkedList<int> intList;
    intList.append(10);
    intList.append(20);
    intList.append(30);
    intList.display(); // Output: 10 20 30

    LinkedList<std::string> strList;
    strList.append("Hello");
    strList.append("World");
    strList.display(); // Output: Hello World
};
