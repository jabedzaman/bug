#include <iostream>

template <typename T>
class Node {
public:
    T data;
    Node* next;
    Node* prev;

    Node(T data) {
        this->data = data;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

template <typename T>
class DoubleLinkedList {
private:
    Node<T>* head;
    Node<T>* tail;
    int size;
public:
    DoubleLinkedList<T>(){
      head = nullptr;
      tail = nullptr;
      size = 0;
    }

    void push_back(T data){
      Node<T>* newNode = new Node<T>(data);
      if(head == nullptr){
        head = newNode;
        tail = newNode;
      }
      else{
        tail->next = newNode;
        newNode->prev = tail;
        tail = newNode;
      }
      size++;
    }

    void display(){
      Node<T>* temp = head;
      while(temp != nullptr){
        std::cout << temp->data << " ";
        temp = temp->next;
      }
      std::cout << std::endl;
    }

    void insertAtHead(T data){
      Node<T>* newNode = new Node<T>(data);
      if(head == nullptr){
        head = newNode;
        tail = newNode;
      }
      else{
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
      } 
      size++;
    }

    void insert(int index, T value){
      Node<T>* newNode = new Node<T>(value);
      if(index == 0){
        insertAtHead(value);
      }
      else if(index == size){
        push_back(value);
      }
      else{
        Node<T>* temp = head;
        for(int i = 0; i < index - 1; i++){
          temp = temp->next;
        }
        newNode->next = temp->next;
        temp->next->prev = newNode;
        temp->next = newNode;
        newNode->prev = temp;
        size++;
      }
    }

    ~DoubleLinkedList<T>(){
      Node<T>* temp = head;
      while(temp != nullptr){
        Node<T>* next = temp->next;
        delete temp;
        temp = next;
      }
    }
};

int main()
{
  std::cout << "Enter the number of elements: ";
  int n;
  std::cin >> n;
  DoubleLinkedList<int> list;
  std::cout << "Enter the elements: ";
  for(int i = 0; i < n; i++){
    int x;
    std::cin >> x;
    list.push_back(x);
  }
  list.display();
  std::cout << "Enter the index and value to insert: ";
  int index, value;
  std::cin >> index >> value;
  list.insert(index, value);
  list.insertAtHead(10);
  list.display();
}
