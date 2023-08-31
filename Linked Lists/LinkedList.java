public class LinkedList {
  class Node{
    int data;
    Node next;
    public Node(int data){
      this.data = data;
      this.next = null;
    }
  }
  Node head;

  public void append( int value){
    Node newNode = new Node(value);
    if(head == null){
      head = newNode;
      return;
    }
    Node current = head;
    while(current.next != null){
      current = current.next;
    }
    current.next = newNode;    
  }

  public void prepend(int value){
    Node newNode = new Node(value);
    newNode.next = head;
    head = newNode;
  }
  public void display(){
    Node current = head;
    while(current != null){
      System.out.print(current.data + " -> ");
      current = current.next;
    }
    System.out.println("null");
  }
  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(0);
    list.display();
  }
}
