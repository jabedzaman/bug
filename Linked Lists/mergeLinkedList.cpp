#include <iostream>

template <typename T>
class Node {
  public:
    T data;
    Node<T> *next;
    Node(T data) {
      this->data = data;
      next = NULL;
    }
};

template <typename T>
class LinkedList{
  public:
    Node<T> *head;
  public:
    LinkedList<T>() {
      head = NULL;
    }

    void add(T value){
      Node<T> *newNode = new Node<T>(value);
      if(head == NULL){
        head = newNode;
      } else {
        Node<T> *temp = head;
        while(temp->next != NULL){
          temp = temp->next;
        }
        temp->next = newNode;
      }
    }
};

template <typename T>
void merge(Node<T>* end, Node<T>* start) {
  Node<T> *temp = end;
  while(temp->next != NULL){
    temp = temp->next;
  }
  temp->next = start;
}

int main()
{
  LinkedList<int> *list1 = new LinkedList<int>();
  list1->add(1);
  list1->add(2);
  list1->add(3);
  list1->add(4);
  list1->add(5);
  list1->add(6);
  list1->add(7);
  list1->add(8);
  list1->add(9);
  list1->add(10);

  LinkedList<int> *list2 = new LinkedList<int>();
  list2->add(11);
  list2->add(12);
  list2->add(13);
  list2->add(14);
  list2->add(15);
  list2->add(16);
  list2->add(17);
  list2->add(18);
  list2->add(19);
  list2->add(20);

  merge(list1->head, list2->head);

  Node<int> *temp = list1->head;
  while(temp != NULL){
    std::cout << temp->data << " ";
    temp = temp->next;
  }
  std::cout << std::endl;
  return 0;
}
