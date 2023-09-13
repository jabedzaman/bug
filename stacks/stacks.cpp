#include <iostream>

template <typename T>
class Node {
public:
  T data;
  Node<T> *next;
  Node(T data) {
    this->data = data;
    next = nullptr;
  }
};

template <typename T>
class Stack {
private:
  Node<T> *top;
  int size;
public:
  Stack() {
    top = nullptr;
    size = 0;
  }
  void push(T value){
    Node<T> *newNode = new Node<T>(value);
    newNode->next = top;
    top = newNode;
    size++;
  }
  void pop(){
    if (top == nullptr) {
      std::cout << "Stack is empty" << std::endl;
      return;
    }
    Node<T> *temp = top;
    top = top->next;
    delete temp;
    size--;
  }
  void print(){
    Node<T> *temp = top;
    while (temp != nullptr) {
      std::cout << temp->data << " ";
      temp = temp->next;
    }
    std::cout << std::endl;
  }
};


int main(){
  int n;
  std::cout << "Enter the number of elements: ";
  std::cin >> n;
  Stack<int> stack;
  for (int i = 0; i < n; i++) {
    int value;
    std::cout << "Enter the " << i + 1 << " element: ";
    std::cin >> value;
    stack.push(value);
  }
  std::cout << "\nStack: ";
  stack.print();
  return 0;
}
