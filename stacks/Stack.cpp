#include <bits/stdc++.h>
#include <cstdlib>

class Stack {
private:
    int *stack;
    int top;
    int capacity;
public:
    Stack(int capacity) {
        this->capacity = capacity;
        stack = new int[capacity];
        top = -1;
    }
    ~Stack() {
        delete[] stack;
    }
    void push(int data) {
        if (isFull()) {
            std::cout << "Stack is full" << std::endl;
            std::cin.ignore();
            std::cin.get();
            return;
        }
        stack[++top] = data;
    }
    int pop() {
        if (isEmpty()) {
            std::cout << "Stack is empty" << std::endl;
            std::cin.ignore();
            std::cin.get();
            return -1;
        }
        return stack[top--];
    }
    int peek() {
        if (isEmpty()) {
            std::cout << "Stack is empty" << std::endl;
            std::cin.ignore();
            std::cin.get();
            return -1;
        }
        return stack[top];
    }
    bool isEmpty() {
        return top == -1;
    }
    bool isFull() {
        return top == capacity - 1;
    }
    void print(){
      for (int i = 0; i <= top; i++) {
        std::cout << stack[i] << " ";
      }
      std::cout << std::endl;
    }

    int getMax(){
      int max;
      for( int i = 0; i <= top; i++){
        if ( stack[i] < max){
          max = stack[i];
        }
      }
      return max;
    }
    int getMin(){
      int min;
      for( int i = 0; i <= top; i++){
        if ( stack[i] > min){
          min = stack[i];
        }
      }
      return min;
    }

    void rprint()
    {
      for (int i = this->capacity - 1 ; i >= 0 ; i--) {
        std::cout << stack[i] << " ";
      }
      std::cout << std::endl;
    }

};

void menu(){
  std::cout << "1. Push" << std::endl;
  std::cout << "2. Pop" << std::endl;
  std::cout << "3. Peek" << std::endl;
  std::cout << "4. Print" << std::endl;
  std::cout << "5. Get Max" << std::endl;
  std::cout << "6. Get Min" << std::endl;
  std::cout << "7. Reverse Print" << std::endl;
  std::cout << "8. Exit" << std::endl;
}

int main(){
  int choice, data;
  Stack stack(5);
  while (true) {
    std::cout << "\033[2J\033[1;1H";
    menu();
    std::cout << "Enter your choice: ";
    std::cin >> choice;
    switch (choice) {
      case 1:
        std::cout << "Enter data: ";
        std::cin >> data;
        stack.push(data);
        break;
      case 2:
        std::cout << "Poped data: " << stack.pop() << std::endl;
        break;
      case 3:
        std::cout << "Peeked data: " << stack.peek() << std::endl;
        break;
      case 4:
        std::cout << "Stack:" << std::endl;
        stack.print();
        std::cin.ignore();
        std::cin.get();
        break;
      case 5:
        std::cout << "The Maximum Value is: " << stack.getMax() << std::endl;
        std::cin.ignore();
        std::cin.get();
        break;
      case 6:
        std::cout << "The Minimim Value is: " << stack.getMin() << std::endl;
        std::cin.ignore();
        std::cin.get();
        break;
      case 7:
        std::cout << "Stack:" << std::endl;
        stack.rprint();
        std::cin.ignore();
        std::cin.get();
        break;
      case 8:
        exit(0);
      default:
        std::cout << "Invalid choice" << std::endl;
    }
  }
}
