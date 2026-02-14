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
class Repository<T extends User> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
  getById(id: number): T | undefined {
    return this.items.find((items) => items.id === id);
  }
  update(id: number, item: T): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = item;
      return true;
    } else {
      return false;
    }
  }
  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}

interface User {
  id: number;
  name: string;
}

const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Alice" });
userRepo.add({ id: 2, name: "Bob" });

console.log(userRepo.getAll().length); // Output: 2
console.log(userRepo.getById(1)?.name); // Output: Alice

userRepo.update(1, { id: 1, name: "Alice Updated" });
console.log(userRepo.getById(1)?.name); // Output: Alice Updated

userRepo.delete(2);
console.log(userRepo.getAll().length); // Output: 1

// soal 14
function getPropertyValue<T, K extends keyof T>(object: T, name: K): T[K] {
  return object[name];
}

const user = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(getPropertyValue(user, "name")); // Output: Alice
console.log(getPropertyValue(user, "age")); // Output: 25
console.log(getPropertyValue(user, "email")); // Output: alice@example.com

// getPropertyValue(user, "invalid");  // ❌ Error: invalid bukan property dari user

// soal 15
function merge<T extends { id: number }, U extends { id: number }>(
  obj1: T,
  obj2: U,
) {
  return { ...obj1, ...obj2 };
}

const obj1 = { id: 1, name: "Alice" };
const obj2 = { id: 1, age: 25 };

const merged = merge(obj1, obj2);
console.log(merged); // Output: { id: 1, name: "Alice", age: 25 }

// merge({ name: "Bob" }, { age: 30 });  // ❌ Error: kedua tidak punya id

// soal 16
class Cachee<T extends { id: number }> {
  public storage: Map<number, T> = new Map();
  set(item: T): void {
    this.storage.set(item.id, item);
  }
  get(id: number): T | undefined {
    return this.storage.get(id);
  }
  getAll(): T[] {
    return Array.from(this.storage.values());
  }
  clear(): void {
    this.storage.clear();
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const cache = new Cachee<Product>();
cache.set({ id: 1, name: "Laptop", price: 15000000 });
cache.set({ id: 2, name: "Mouse", price: 500000 });

console.log(cache.get(1)?.name); // Output: Laptop
console.log(cache.getAll().length); // Output: 2

cache.clear();
console.log(cache.getAll().length); // Output: 0

// soal 17
export function fetchData<T>(value: T): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject(value);
      }
    }, 1000);
  });
}

interface Userr {
  id: number;
  name: string;
}

const result = await fetchData<Userr>({ id: 1, name: "Alice" });
console.log(result.name); // Output: Alice (setelah 1 detik)

const numbers = await fetchData<number[]>([1, 2, 3]);
console.log(numbers.length); // Output: 3

// soal 18
function isOfType<T>(value: unknown, type: string): value is T {
  if (typeof value === "string") {
    return true;
  } else if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

const value: unknown = "hello";

if (isOfType<string>(value, "string")) {
  console.log(value.toUpperCase()); // Output: HELLO
}

const number: unknown = 42;
if (isOfType<number>(number, "number")) {
  console.log(number * 2); // Output: 84
}

// soal 19
function filterAndMap<T, U>(
  value: T[],
  filter: (value: T) => boolean,
  map: (value: T) => U,
): U[] {
  let array: U[] = [];
  for (let i = 0; i < value.length; i++) {
    if (filter(value[i])) {
      let result = map(value[i]);
      array.push(result);
    }
  }
  return array;
}

const numberss = [1, 2, 3, 4, 5, 6];

const resultt = filterAndMap<number, number>(
  numberss,
  (n) => n > 2, // Filter: only > 2
  (n) => n * 2, // Map: multiply by 2
);

console.log(resultt); // Output: [6, 8, 10, 12]

// soal 20
function createReadonlyArray<T>(param: T[]): ReadonlyArray<T> {
  return param;
}

const original = [1, 2, 3];
const readonly = createReadonlyArray<number>(original);

console.log(readonly[0]); // Output: 1

// readonly[0] = 999;  // ❌ Error: readonly array cannot be modified

// readonly.push(4);  // ❌ Error: readonly array has no push method

// soal 21
class Builder<T> {
  private result: Partial<T> = {};
  add(key: string, value: any): this {
    (this.result as any)[key] = value;
    return this;
  }
  remove(key: string): this {
    delete (this.result as any)[key];
    return this;
  }
  build(): T {
    return this.result as T;
  }
}

interface Users {
  name: string;
  email: string;
  age: number;
}

const pengguna = new Builder<Users>()
  .add("name", "Alice")
  .add("email", "alice@example.com")
  .add("age", 25)
  .build();

console.log(pengguna.name); // Output: Alice
console.log(pengguna.age); // Output: 25

// soal 22
function getPropertyType<T, K extends keyof T>(value: T, params: K) {
  return typeof value[params];
}

const jow = { name: "Alice", age: 25, active: true };

console.log(getPropertyType(jow, "name")); // Output: "string"
console.log(getPropertyType(jow, "age")); // Output: "number"
console.log(getPropertyType(jow, "active")); // Output: "boolean"

// soal 23
function createRecord<T extends string, U>(
  value: T[],
  params: U[],
): Record<T, U> {
  const result = {} as Record<T, U>;
  for (let i = 0; i < value.length; i++) {
    result[value[i]] = params[i];
  }
  return result;
}

const keys: ("name" | "email" | "phone")[] = ["name", "email", "phone"];
const values = ["Alice", "alice@example.com", "081234567890"];

const record = createRecord<"name" | "email" | "phone", string>(keys, values);

console.log(record.name); // Output: Alice
console.log(record.email); // Output: alice@example.com

console.log("-----");

// soal 24
function pipe<T>(
  value: T,
  function1: (value: T) => void,
  function2: (value: T) => void,
  function3: (value: T) => void,
) {
  let fungsi1 = function1(value);
  let fungsi2 = function2(fungsi1);
  let fungsi3 = function2(value);
  let result = 
}

const result3 = pipe<number>(
  5,
  (n) => n * 2, // 5 * 2 = 10
  (n) => n + 5, // 10 + 5 = 15
  (n) => n / 3, // 15 / 3 = 5
);

console.log(result3); // Output: 5

const stringResult = pipe<string>(
  "hello",
  (s) => s.toUpperCase(), // HELLO
  (s) => s + "!", // HELLO!
  (s) => s.repeat(2), // HELLO!HELLO!
);

console.log(stringResult); // Output: HELLO!HELLO!

// soal 25
function Iterator<T>(value: T){
  function hasNext(): boolean {
    return true;
  }
  function next(): T {
    throw new Error();
  }
  function reset(): void {

  }
  function current(): T {

  }
}

const itemss = ["a", "b", "c"];
const iterator = new Iterator<string>(itemss);

console.log(iterator.current());  // Output: a
console.log(iterator.hasNext());  // Output: true

iterator.next();
console.log(iterator.current());  // Output: b

iterator.reset();
console.log(iterator.current());  // Output: a

function updatePartial<T>(value: T, updated: T[]){

}

interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
}

const iuser: IUser = { id: 1, name: "Alice", email: "alice@example.com", age: 25 };

const updated2 = updatePartial<IUser>(iuser, { name: "Alice Updated", age: 26 });

console.log(updated2.name);   // Output: Alice Updated
console.log(updated2.email);  // Output: alice@example.com
console.log(updated2.age);    // Output: 26