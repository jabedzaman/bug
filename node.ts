class Node<T> {
  data : T;
  next : Node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

function main(){
const newNode = new Node<Number>(100);
  console.log(newNode.data);
}

main()
