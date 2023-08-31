#include <iostream>

template <typename T>
class Node
{
public:
    T data;
    Node<T> *next;
    Node(T data)
    {
        this->data = data;
        this->next = NULL;
    }
};

template <typename T>
class GroundedHeaderLinkedList
{
private:
    Node<T> *head;
    Node<T> *tail;
    int size; void set(int index, T data)
    {
        if (index < 0 || index >= this->size)
        {
            throw "Index out of bounds";
        }
        Node<T> *temp = this->head->next;
        for (int i = 0; i < index; i++)
        {
            temp = temp->next;
        }
        temp->data = data;
    }

public:
    GroundedHeaderLinkedList()
    {
        this->head = new Node<T>(0);
        this->tail = this->head;
        this->size = 0;
    }

    void add(T data)
    {
        Node<T> *newNode = new Node<T>(data);
        this->tail->next = newNode;
        this->tail = newNode;
        this->size++;
    }

    int getSize()
    {
        return this->size;
    }
};

int main()
{
    GroundedHeaderLinkedList<int> *list = new GroundedHeaderLinkedList<int>();
    list->add(1);
    list->add(2);
    list->add(3);
    list->add(4);
    list->add(5); 
    list->getSize();
    std::cout << list->getSize() << std::endl;
    return 0;
}