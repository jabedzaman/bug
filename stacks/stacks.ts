class Node<T> {
    data: T;
    next: Node<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Stack<T> {
    private head: Node<T>;
    constructor() {
        this.head = null;
    }

    public push(value: T) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    public pop() {
        if (this.head === null) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        return data;
    }

    public print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();