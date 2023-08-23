// class Node <T> {
//
//   data: T;
//   next: Node<T> | null;
//   
//   constructor(data : T) {
//     this.data = data;
//     this.next = null;
//   }
// }
//
// class Linked_List<T> {
//
//   head: Node<T> | null;
//
//   constructor() {
//     this.head = null;
//   }
//
//   append(data : T ) : void {
//
//     const newNode = new Node(data);
//     if(!this.head){
//       this.head = newNode;
//       return;
//     }
//
//     let current = this.head;
//     while(current.next){
//       current = current.next;
//     }
//
//     current.next = newNode;
//   }
//
//   print(): void {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }
//
// const list = new Linked_List<Number>()
// list.append(3);
// list.append(200);
//
// list.print();


class Node <T>{
  data : T;
  next : Node<T> | null;
  constructor(data : T) {
 
    this.data =  data;
    this.next =  null;
  }
}

class LinkedList <T> {
  private head : Node<T> | null;
  constructor() {
    this.head = null;
  }

  public append(data : T) : void {
    const newNode = new Node<T>(data);

    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
  }

  /**
   * print
   */
  public print() : void {
   let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

  /**
   * find
   */
  public find(key: T): boolean {
    let current = this.head;
    while(current){
      if (current.data === key) {
        return true;
      } 
      current = current.next;
    } 
    return false;
  }


  /**
   * delete
   */
 public deleteAtIndex(index: number): void {
        if (index < 0 || !this.head) {
            return; // Invalid index or empty list
        }

        if (index === 0) {
            this.head = this.head.next;
            return; // Delete the first node
        }

        let current = this.head;
        let prev = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            prev = current;
            current = current.next;
            currentIndex++;
        }

        if (current) {
            prev.next = current.next; // Delete the node at the specified index
        }
    }
}

const list = new LinkedList();
list.print();
list.append(10);
list.print();
list.append(200);
list.print();
list.deleteAtIndex(1)
list.print()
console.log(list.find(200));

