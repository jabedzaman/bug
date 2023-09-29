import java.util.Scanner;

public class Queue {
  public class Node {
    int data;
    Node next;
    public Node(int data) {
      this.data = data;
    }
  }

  private Node first;
  private Node last;
  public  int capacity;

  public Queue(int capacity) {
    this.capacity = capacity;
  } 

  public boolean isEmpty() {
    return first == null;
  }

  public boolean isFull() {
    return size() == capacity;
  }

  public int size() {
    int count = 0;
    Node current = first;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  public void enqueue(int data) {
    if (isFull()) {
      System.out.println("Queue is full");
      return;
    }
    Node newNode = new Node(data);
    if (isEmpty()) {
      first = newNode;
      last = newNode;
    } else {
      last.next = newNode;
      last = newNode;
    }
  }

  public int dequeue() {
    if (isEmpty()) {
      System.out.println("Queue is empty");
      return -1;
    }
    int data = first.data;
    first = first.next;
    return data;
  }

  public void display() {
    Node current = first;
    while (current != null) {
      System.out.print(current.data + " ");
      current = current.next;
    }
  }

  public void showMenu() {
    System.out.println("1. Enqueue");
    System.out.println("2. Dequeue");
    System.out.println("3. Display");
    System.out.println("4. Exit");
  }

  public static void main(String[] args) {
 
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter size of queue");
    int size = sc.nextInt();
    Queue queue = new Queue(size);


    while (true) {
      queue.showMenu();
      int choice = sc.nextInt();
      switch (choice) {
        case 1:
          System.out.println("Enter data");
          int data = sc.nextInt();
          queue.enqueue(data);
          break;
        case 2:
          System.out.println("Dequeued data is " + queue.dequeue());
          break;
        case 3:
          queue.display();
          break;
        case 4:
          System.exit(0);
          break;
        default:
          System.out.println("Invalid choice");
      }
    }
  }
}
