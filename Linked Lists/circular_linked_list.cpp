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
class CircularLinkedList
{
private:
    Node<T> *head;
    Node<T> *tail;
    int size;

public:
    void add(T value){
        Node<T> *newNode = new Node<T>(value);
        if (this->size == 0)
        {
            this->head = newNode;
            this->tail = newNode;
            this->tail->next = this->head;
        }
        else
        {
            this->tail->next = newNode;
            this->tail = newNode;
            this->tail->next = this->head;
        }
        this->size++;
    };
    void display()
    {
        Node<T> *temp = this->head->next;
        for (int i = 0; i < this->size; i++)
        {
            std::cout << temp->data << " ";
            temp = temp->next;
        }
        std::cout << std::endl;
    };

    bool search(T value){
        Node<T> *temp = this->head->next;
        for (int i = 0; i < this->size; i++)
        {
            if (temp->data == value)
            {
                return true;
            }
            temp = temp->next;
        }
        return false;
    };
};

int main()
{
    CircularLinkedList<int> *list = new CircularLinkedList<int>();
    list->add(0);
    list->add(1);
    list->add(2);
    list->add(3);
    list->display();
    std::cout << list->search(2) << std::endl;
    return 0;
}