// soal 1
class Container<T> {
  constructor(public value: T) {}
  getValue(): T {
    return this.value;
  }
  setValue(value: T): void {
    this.value = value;
  }
}

const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue()); // Output: 42

numberContainer.setValue(100);
console.log(numberContainer.getValue()); // Output: 100

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getValue()); // Output: Hello

// soal 2
function identity<T>(params: T) {
  return params;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<boolean>(true)); // Output: true
console.log(identity([1, 2, 3])); // Output: [1, 2, 3]

// soal 3
function getFirstElement<T>(params: T[]) {
  return params[0];
}

console.log(getFirstElement<number>([1, 2, 3])); // Output: 1
console.log(getFirstElement<string>(["a", "b", "c"])); // Output: a
console.log(getFirstElement<number>([])); // Output: undefined

// soal 4
class Pair<K, V> {
  constructor(
    public key: K,
    public value: V,
  ) {}
  getKey(): K {
    return this.key;
  }
  getValue(): V {
    return this.value;
  }
  setPair(key: K, value: V): void {
    this.key = key;
    this.value = value;
  }
}

const pair = new Pair<string, number>("age", 25);
console.log(pair.getKey()); // Output: age
console.log(pair.getValue()); // Output: 25

pair.setPair("name", 42); // ❌ Type error: 42 bukan string

const pair2 = new Pair<string, string>("color", "red");
console.log(pair2.getValue()); // Output: red

// soal 5
function swap<T, U>(second: T, first: U): object {
  return {
    first,
    second,
  };
}

const result1 = swap<number, string>(42, "Hello");
console.log(result1); // Output: { first: "Hello", second: 42 }

const result2 = swap<boolean, number>(true, 100);
console.log(result2); // Output: { first: 100, second: true }

// soal 6
class Optional<T> {
  constructor(public value: T) {}
  isSome(): boolean {
    return true;
  }
  isNone(): boolean {
    return true;
  }
}

const opt1 = new Optional(42); // TypeScript auto-detect: Optional<number>
console.log(opt1.isSome()); // Output: true

const opt2 = new Optional(null); // Optional<null>
console.log(opt2.isNone()); // Output: true

const opt3 = new Optional("test"); // Optional<string>
console.log(opt3.isSome()); // Output: true

// soal 7
class Box<T = string> {
  constructor(public content: T) {}
  getContent(): T {
    return this.content;
  }
}

const box1 = new Box("Hello"); // Box<string> (default)
console.log(box1.getContent()); // Output: Hello

const box2 = new Box<number>(42); // Explicit type
console.log(box2.getContent()); // Output: 42

// const box3 = new Box();  // TypeScript error atau empty

// soal 8
function reverseArray<T>(params: Array<T>) {
  let a: Array<T> = [];
  for (let i = params.length - 1; i >= 0; i--) {
    a.push(params[i]);
  }
  return a;
}

console.log(reverseArray<number>([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Output: ["c", "b", "a"]
console.log(reverseArray<boolean>([true, false])); // Output: [false, true]

// soal 9
function convertArrayToSet<T>(params: T[]): Set<T> {
  let array: Set<T> = new Set();
  for (let j: number = 0; j < params.length; j++) {
    if (params[j] !== params[j - 1]) {
      array.add(params[j]);
    }
  }
  return array;
}

const array1 = [1, 2, 2, 3, 3, 3];
const set1 = convertArrayToSet<number>(array1);
console.log(set1.size); // Output: 3

const array2 = ["a", "b", "b", "c"];
const set2 = convertArrayToSet<string>(array2);
console.log(Array.from(set2)); // Output: ["a", "b", "c"]

// soal 10
function createMapFromArray<T>(params: T[]): Map<number, T> {
  let array: Map<number, T> = new Map();
  for (let i: number = 0; i < params.length; i++) {
    array.set(i, params[i]);
  }
  return array;
}

const items = ["apple", "banana", "cherry"];
const map = createMapFromArray<string>(items);

console.log(map.get(0)); // Output: apple
console.log(map.get(1)); // Output: banana
console.log(map.size); // Output: 3

// soal 11
function getLength<T extends { length: number }>(params: T): number {
  return params.length;
}

console.log(getLength("hello")); // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3
console.log(getLength({ length: 10 })); // Output: 10

// getLength(42);  // ❌ Error: number tidak memiliki length

// soal 12
class Animal {
  public name: string = "";
}

class Dog extends Animal {
  public name: string = "";
  constructor(name: string) {
    super();
    this.name = name;
  }
}

function processAnimal<T extends Animal>(value: Animal): string {
  if (value instanceof Animal) {
    return `Processing animal...`;
  } else {
    return `Not An Animal`;
  }
}

const dog = new Dog("Buddy");
console.log(processAnimal(dog)); // Output: Processing animal...

const animal = new Animal();
console.log(processAnimal(animal)); // Output: Processing animal...

// processAnimal("not an animal");  // ❌ Error: string bukan Animal

// soal 13
class Repository<T>{
  public array: Array<T> = [];
  add(item: T): void{
    this.array.push(item);
  }
  getAll(): T[]{
    return this.array;
  }
  getById(id: number): T[] | undefined {
    for(let i: number = 0; i < this.array.length; i++){
      if(this.array[i+ 1] == id){
        return this.array;
      }
    }
  }
  update(id: number, item: T): boolean{
    return true;
  }
  delete(id: number): boolean {
    let status: boolean = false;
    for(let i: number = 0; i < this.array.length; i++){
      if(this.array[i+ 1] == id){
        status = true;
      }
    }
    return status;
  }
}

interface User {
  id: number;
  name: string;
}

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

console.log(userRepo.getAll().length);  // Output: 2
console.log(userRepo.getById(1)?.name); // Output: Alice

userRepo.update(1, { id: 1, name: "Alice Updated" });
console.log(userRepo.getById(1)?.name); // Output: Alice Updated

userRepo.delete(2);
console.log(userRepo.getAll().length);  // Output: 1

// soal 14
function getPropertyValue<T, K extends keyof T>(object: T, name: K): string{
  
}

const user = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(getPropertyValue(user, "name"));   // Output: Alice
console.log(getPropertyValue(user, "age"));    // Output: 25
console.log(getPropertyValue(user, "email"));  // Output: alice@example.com

// getPropertyValue(user, "invalid");  // ❌ Error: invalid bukan property dari user