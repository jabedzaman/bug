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
        this->next = nullptr;
    }
};

template <typename T>
class LinkedList {
    private:
        Node<T> *head;
    public:
        LinkedList(){
            head = nullptr;
        }
        void append(T data){
            Node<T> *newNode = new Node<T>(data);
            if(head == nullptr){
                head = newNode;
                return;
            }
            Node<T> *temp = head;
            while(temp->next != nullptr){
                temp = temp->next;
            }
            temp->next = newNode;
        }

        void display(){
            Node<T> *temp = head;
            while(temp != nullptr){
                std::cout << temp->data << " ";
                temp = temp->next;
            }
            std::cout << std::endl;
        }
};

int main(){
    LinkedList<int> *list = new LinkedList<int>();
    list->append(1);
    list->append(2);
    list->append(3);
    list->append(4);
    list->display();
    return 0;
}