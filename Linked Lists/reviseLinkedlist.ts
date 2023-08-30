class Node<T>{
    data: T;
    next: Node<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T>{
    private head: Node<T>;
    constructor() {
        this.head = null;
    }
    /**
     * append
     */
    public append(value : T) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    /**
     * print
     */
    public print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }    
    }
}

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();
