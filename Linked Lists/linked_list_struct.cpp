#include <iostream>

struct Node {
  int data;
  struct Node *next;
};

struct Node *temp, *head;

int main()
{
  Node *one = new Node();
  Node *two = new Node();
  Node *three = new Node();


  one -> next = two;
  two -> next = three;
  three -> next = NULL;
  head = NULL;

  one -> data = 20;
  two -> data = 21;
  three -> data = 19;
  head = one;
  temp = one;

  while (temp != NULL) {
  std::cout << temp -> data << std::endl;
  temp =  temp -> next;
  }
  return 0;
}
