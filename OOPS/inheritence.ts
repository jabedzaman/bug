class Parent {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
}

class Child extends Parent {
  constructor(name: string) {
    super(name);
  }
}

const child = new Child("John");
console.log(child.name);


