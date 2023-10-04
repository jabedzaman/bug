#include <iostream>
#include <vector>

class PriorityQueue {
private:
    std::vector<int> queue;
public:
    PriorityQueue(int size) {
        queue.reserve(size);
    }

    void enqueue(int value) {
        if (queue.size() == queue.capacity()) {
            std::cout << "Queue is full\n";
            return;
        }
        queue.push_back(value);
        int index = queue.size() - 1;
        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            if (queue[parentIndex] < queue[index]) {
                int temp = queue[parentIndex];
                queue[parentIndex] = queue[index];
                queue[index] = temp;
                index = parentIndex;
            }
            else {
                break;
            }
        }
    }

    int dequeue() {
        if (queue.size() == 0) {
            return -1;
        }
        int value = queue[0];
        queue[0] = queue[queue.size() - 1];
        queue.pop_back();
        int index = 0;
        while (index < queue.size()) {
            int leftChildIndex = 2 * index + 1;
            int rightChildIndex = 2 * index + 2;
            int maxIndex = index;
            if (leftChildIndex < queue.size() && queue[leftChildIndex] > queue[maxIndex]) {
                maxIndex = leftChildIndex;
            }
            if (rightChildIndex < queue.size() && queue[rightChildIndex] > queue[maxIndex]) {
                maxIndex = rightChildIndex;
            }
            if (maxIndex == index) {
                break;
            }
            int temp = queue[maxIndex];
            queue[maxIndex] = queue[index];
            queue[index] = temp;
            index = maxIndex;
        }
        return value;
    }

    void print() {
        for (int i = 0; i < queue.size(); i++) {
            std::cout << queue[i] << " ";
        }
        std::cout << "\n";
    }
};


void menu()
{
    std::cout << "1. Insert\n";
    std::cout << "2. Delete\n";
    std::cout << "3. Print\n";
    std::cout << "4. Exit\n";
}

int main()
{
    int n, choice, input;
    std::cout << "Enter the number of elements to be inserted\n";
    std::cin >> n;
    PriorityQueue pq(n);
    while (true) {
        /* clear screen */
        // std::cout << "\033[2J\033[1;1H";
        menu();
        std::cout << "😁 Enter your choice "<<std::endl;
        std::cin >> choice;
        switch (choice) {
        case 1:
            std::cin >> input;
            pq.enqueue(input);
            break;
        case 2:
            std::cout << pq.dequeue() << "\n";
            break;
        case 3:
            pq.print();
            break;
        default:
            return 0;
        }
    }
}
