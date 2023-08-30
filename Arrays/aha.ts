class Node<T>{
  data: T;
  next: Node<T> | null;
  
  constructor(data: T){
    this.data = data;
    this.next = null;
  }
}


class LinkedList<T>{
  private head : Node<T> | null;

  constructor(){
    this.head = null;
  }

  /**
   * append
   */
  public append(data : T) {
    if (!this.head){
      this.head = data;
    }

    let current = this.
    while()
  }
}
