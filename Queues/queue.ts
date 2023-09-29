type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

export default class Queue<T> {
  public length: number;
  private head: QNode<T>;
  private tail: QNode<T>;
  constructor() { }

  enqueue(item: T): void { }

  deque(): T | undefined { }

  peek(): T | undefined { }
}
