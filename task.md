# UJIAN AKHIR KELULUSAN
## Mata Kuliah: TypeScript Generic
### Dosen: Eko Kurniawan Khannedy
**Nama Peserta:** Jordan Theovandy  
**Tanggal:** 5 Februari 2026  
**Waktu:** -  
**Passing Grade:** 70%

---

## BAGIAN I: EASY TO MEDIUM (10 Soal)
**Bobot: 30 Poin (3 poin per soal)**

### Soal 1: Generic Class Dasar
**Kesulitan:** Easy (3 poin)

Buatlah sebuah Generic Class `Container<T>` yang memiliki:
- Property `value: T`
- Constructor yang menerima parameter nilai
- Method `getValue(): T` yang mengembalikan nilai
- Method `setValue(value: T): void` yang mengubah nilai

**Test Case:**
```typescript
const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue());  // Output: 42

numberContainer.setValue(100);
console.log(numberContainer.getValue());  // Output: 100

const stringContainer = new Container<string>("Hello");
console.log(stringContainer.getValue());  // Output: Hello
```

**Poin:** 3

---

### Soal 2: Generic Function Dasar
**Kesulitan:** Easy (3 poin)

Buatlah sebuah Generic Function `identity<T>` yang menerima parameter bertipe T dan mengembalikan nilai yang sama dengan tipe yang sama.

**Test Case:**
```typescript
console.log(identity<number>(42));           // Output: 42
console.log(identity<string>("Hello"));      // Output: Hello
console.log(identity<boolean>(true));        // Output: true
console.log(identity([1, 2, 3]));           // Output: [1, 2, 3]
```

**Poin:** 3

---

### Soal 3: Generic Array Function
**Kesulitan:** Easy (3 poin)

Buatlah Generic Function `getFirstElement<T>` yang menerima array bertipe `T[]` dan mengembalikan elemen pertama. Jika array kosong, return `undefined`.

**Test Case:**
```typescript
console.log(getFirstElement<number>([1, 2, 3]));           // Output: 1
console.log(getFirstElement<string>(["a", "b", "c"]));     // Output: a
console.log(getFirstElement<number>([]));                  // Output: undefined
```

**Poin:** 3

---

### Soal 4: Multiple Generic Type
**Kesulitan:** Medium (3 poin)

Buatlah sebuah Generic Class `Pair<K, V>` dengan:
- Property `key: K` dan `value: V`
- Constructor yang menerima kedua parameter
- Method `getKey(): K` dan `getValue(): V`
- Method `setPair(key: K, value: V): void`

**Test Case:**
```typescript
const pair = new Pair<string, number>("age", 25);
console.log(pair.getKey());    // Output: age
console.log(pair.getValue());  // Output: 25

pair.setPair("name", 42);  // ❌ Type error: 42 bukan string

const pair2 = new Pair<string, string>("color", "red");
console.log(pair2.getValue()); // Output: red
```

**Poin:** 3

---

### Soal 5: Generic Function dengan Multiple Type
**Kesulitan:** Medium (3 poin)

Buatlah Generic Function `swap<T, U>` yang menerima dua parameter dengan tipe berbeda dan mengembalikan object dengan properti `first` (tipe U) dan `second` (tipe T).

**Test Case:**
```typescript
const result1 = swap<number, string>(42, "Hello");
console.log(result1);  // Output: { first: "Hello", second: 42 }

const result2 = swap<boolean, number>(true, 100);
console.log(result2);  // Output: { first: 100, second: true }
```

**Poin:** 3

---

### Soal 6: Optional Generic Type
**Kesulitan:** Medium (3 poin)

Buatlah Generic Class `Optional<T>` yang TypeScript bisa auto-detect tipe dari constructor parameter tanpa perlu explicit type annotation. Class harus memiliki:
- Property `value: T`
- Method `isSome(): boolean` yang return true jika ada nilai
- Method `isNone(): boolean` yang return true jika tidak ada nilai

**Test Case:**
```typescript
const opt1 = new Optional(42);  // TypeScript auto-detect: Optional<number>
console.log(opt1.isSome());     // Output: true

const opt2 = new Optional(null);  // Optional<null>
console.log(opt2.isNone());     // Output: true

const opt3 = new Optional("test");  // Optional<string>
console.log(opt3.isSome());     // Output: true
```

**Poin:** 3

---

### Soal 7: Generic Parameter Default
**Kesulitan:** Medium (3 poin)

Buatlah Generic Class `Box<T = string>` dengan default type `string`. Class ini harus memiliki:
- Property `content: T`
- Constructor yang menerima content
- Method `getContent(): T`

**Test Case:**
```typescript
const box1 = new Box("Hello");  // Box<string> (default)
console.log(box1.getContent()); // Output: Hello

const box2 = new Box<number>(42);  // Explicit type
console.log(box2.getContent());    // Output: 42

const box3 = new Box();  // TypeScript error atau empty
```

**Poin:** 3

---

### Soal 8: Generic dengan Array Collection
**Kesulitan:** Medium (3 poin)

Buatlah Generic Function `reverseArray<T>` yang menerima `Array<T>` dan mengembalikan array yang di-reverse (terbalik).

**Test Case:**
```typescript
console.log(reverseArray<number>([1, 2, 3, 4, 5]));     // Output: [5, 4, 3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"]));    // Output: ["c", "b", "a"]
console.log(reverseArray<boolean>([true, false]));     // Output: [false, true]
```

**Poin:** 3

---

### Soal 9: Generic dengan Set Collection
**Kesulitan:** Medium (3 poin)

Buatlah Generic Function `convertArrayToSet<T>` yang menerima `T[]` dan mengembalikan `Set<T>`. Function ini harus menghilangkan duplikat.

**Test Case:**
```typescript
const array1 = [1, 2, 2, 3, 3, 3];
const set1 = convertArrayToSet<number>(array1);
console.log(set1.size);  // Output: 3

const array2 = ["a", "b", "b", "c"];
const set2 = convertArrayToSet<string>(array2);
console.log(Array.from(set2));  // Output: ["a", "b", "c"]
```

**Poin:** 3

---

### Soal 10: Generic dengan Map Collection
**Kesulitan:** Medium (3 poin)

Buatlah Generic Function `createMapFromArray<T>` yang menerima array object `T[]` dan mengembalikan `Map<number, T>` dengan key adalah index.

**Test Case:**
```typescript
const items = ["apple", "banana", "cherry"];
const map = createMapFromArray<string>(items);

console.log(map.get(0));  // Output: apple
console.log(map.get(1));  // Output: banana
console.log(map.size);    // Output: 3
```

**Poin:** 3

---

## BAGIAN II: MEDIUM TO HARD (10 Soal)
**Bobot: 35 Poin (3.5 poin per soal)**

### Soal 11: Generic Constraint dengan Extends
**Kesulitan:** Medium (3.5 poin)

Buatlah Generic Function `getLength<T extends { length: number }>` yang hanya menerima tipe data yang memiliki property `length`. Function mengembalikan panjang dari property tersebut.

**Test Case:**
```typescript
console.log(getLength("hello"));        // Output: 5
console.log(getLength([1, 2, 3]));     // Output: 3
console.log(getLength({ length: 10 })); // Output: 10

// getLength(42);  // ❌ Error: number tidak memiliki length
```

**Poin:** 3.5

---

### Soal 12: Generic Constraint dengan Class Inheritance
**Kesulitan:** Medium (3.5 poin)

Buatlah class `Animal` dan class `Dog` extends `Animal`. Kemudian buatlah Generic Function `processAnimal<T extends Animal>` yang hanya menerima instance dari `Animal` atau turunannya. Function menampilkan informasi tentang animal tersebut.

**Test Case:**
```typescript
const dog = new Dog("Buddy");
console.log(processAnimal(dog));  // Output: Processing animal...

const animal = new Animal();
console.log(processAnimal(animal));  // Output: Processing animal...

// processAnimal("not an animal");  // ❌ Error: string bukan Animal
```

**Poin:** 3.5

---

### Soal 13: Generic Repository Pattern
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Class `Repository<T>` dengan:
- Array internal untuk menyimpan data
- Method `add(item: T): void` untuk menambah item
- Method `getAll(): T[]` untuk mendapatkan semua item
- Method `getById(id: number): T | undefined` (assume item punya property id)
- Method `update(id: number, item: T): boolean`
- Method `delete(id: number): boolean`

**Test Case:**
```typescript
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
```

**Poin:** 3.5

---

### Soal 14: Generic Function dengan Keyof Constraint
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `getPropertyValue<T, K extends keyof T>` yang menerima object bertipe T dan property name K, kemudian mengembalikan nilai dari property tersebut.

**Test Case:**
```typescript
const user = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(getPropertyValue(user, "name"));   // Output: Alice
console.log(getPropertyValue(user, "age"));    // Output: 25
console.log(getPropertyValue(user, "email"));  // Output: alice@example.com

// getPropertyValue(user, "invalid");  // ❌ Error: invalid bukan property dari user
```

**Poin:** 3.5

---

### Soal 15: Multiple Generic Constraint
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `merge<T extends { id: number }, U extends { id: number }>` yang menerima dua object dengan property `id`, dan merge keduanya. Return object yang berisi semua property dari kedua parameter.

**Test Case:**
```typescript
const obj1 = { id: 1, name: "Alice" };
const obj2 = { id: 1, age: 25 };

const merged = merge(obj1, obj2);
console.log(merged);  // Output: { id: 1, name: "Alice", age: 25 }

// merge({ name: "Bob" }, { age: 30 });  // ❌ Error: kedua tidak punya id
```

**Poin:** 3.5

---

### Soal 16: Generic Class dengan Constraint
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Class `Cache<T extends { id: number }>` yang menyimpan data dalam Map dengan key adalah `id` dari object. Class ini harus memiliki:
- Method `set(item: T): void` yang menyimpan berdasarkan id
- Method `get(id: number): T | undefined` yang mengambil berdasarkan id
- Method `getAll(): T[]` yang mengembalikan semua item
- Method `clear(): void` yang menghapus semua

**Test Case:**
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

const cache = new Cache<Product>();
cache.set({ id: 1, name: "Laptop", price: 15000000 });
cache.set({ id: 2, name: "Mouse", price: 500000 });

console.log(cache.get(1)?.name);   // Output: Laptop
console.log(cache.getAll().length); // Output: 2

cache.clear();
console.log(cache.getAll().length); // Output: 0
```

**Poin:** 3.5

---

### Soal 17: Generic Promise dengan Async Function
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `fetchData<T>` yang mengembalikan `Promise<T>`. Function ini melakukan mock fetch yang mengembalikan data setelah 1 detik delay.

**Test Case:**
```typescript
interface User {
  id: number;
  name: string;
}

const result = await fetchData<User>({ id: 1, name: "Alice" });
console.log(result.name);  // Output: Alice (setelah 1 detik)

const numbers = await fetchData<number[]>([1, 2, 3]);
console.log(numbers.length);  // Output: 3
```

**Poin:** 3.5

---

### Soal 18: Generic Function dengan Type Guard
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `isOfType<T>(value: unknown, type: string): value is T` yang melakukan type guard untuk mengecek apakah value adalah tipe yang diharapkan.

**Test Case:**
```typescript
const value: unknown = "hello";

if (isOfType<string>(value, "string")) {
  console.log(value.toUpperCase());  // Output: HELLO
}

const number: unknown = 42;
if (isOfType<number>(number, "number")) {
  console.log(number * 2);  // Output: 84
}
```

**Poin:** 3.5

---

### Soal 19: Generic Array Filter dan Map
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `filterAndMap<T, U>` yang menerima array `T[]`, filter function, dan map function, kemudian mengembalikan array `U[]` yang sudah di-filter dan di-map.

**Test Case:**
```typescript
const numbers = [1, 2, 3, 4, 5, 6];

const result = filterAndMap<number, number>(
  numbers,
  (n) => n > 2,        // Filter: hanya > 2
  (n) => n * 2         // Map: kalikan 2
);

console.log(result);  // Output: [6, 8, 10, 12]
```

**Poin:** 3.5

---

### Soal 20: Generic Readonly Collection
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `createReadonlyArray<T>` yang menerima array `T[]` dan mengembalikan readonly array yang tidak bisa dimodifikasi.

**Test Case:**
```typescript
const original = [1, 2, 3];
const readonly = createReadonlyArray<number>(original);

console.log(readonly[0]);  // Output: 1

// readonly[0] = 999;  // ❌ Error: readonly array

// readonly.push(4);  // ❌ Error: readonly tidak punya method push
```

**Poin:** 3.5

---

## BAGIAN III: HARD TO ADVANCED (10 Soal)
**Bobot: 35 Poin (3.5 poin per soal)**

### Soal 21: Generic Class dengan Method Chaining
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Class `Builder<T>` yang support method chaining:
- Method `add(key: string, value: any): this` untuk menambah property
- Method `remove(key: string): this` untuk menghapus property
- Method `build(): T` untuk menghasilkan object final

**Test Case:**
```typescript
interface User {
  name: string;
  email: string;
  age: number;
}

const user = new Builder<User>()
  .add("name", "Alice")
  .add("email", "alice@example.com")
  .add("age", 25)
  .build();

console.log(user.name);   // Output: Alice
console.log(user.age);    // Output: 25
```

**Poin:** 3.5

---

### Soal 22: Conditional Generic Type
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `getPropertyType<T, K extends keyof T>` yang mengembalikan tipe dari property T[K] sebagai string ("string", "number", "boolean", etc).

**Test Case:**
```typescript
const user = { name: "Alice", age: 25, active: true };

console.log(getPropertyType(user, "name"));    // Output: "string"
console.log(getPropertyType(user, "age"));     // Output: "number"
console.log(getPropertyType(user, "active"));  // Output: "boolean"
```

**Poin:** 3.5

---

### Soal 23: Generic with Record Type
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `createRecord<T extends string, U>` yang membuat object `Record<T, U>` dari array key dan nilai.

**Test Case:**
```typescript
const keys: ("name" | "email" | "phone")[] = ["name", "email", "phone"];
const values = ["Alice", "alice@example.com", "081234567890"];

const record = createRecord<"name" | "email" | "phone", string>(keys, values);

console.log(record.name);   // Output: Alice
console.log(record.email);  // Output: alice@example.com
```

**Poin:** 3.5

---

### Soal 24: Generic Pipeline/Chain Processing
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Function `pipe<T>` yang menerima nilai awal dan array of transformation functions, kemudian menjalankan transformasi secara berurutan.

**Test Case:**
```typescript
const result = pipe<number>(
  5,
  (n) => n * 2,      // 5 * 2 = 10
  (n) => n + 5,      // 10 + 5 = 15
  (n) => n / 3       // 15 / 3 = 5
);

console.log(result);  // Output: 5

const stringResult = pipe<string>(
  "hello",
  (s) => s.toUpperCase(),   // HELLO
  (s) => s + "!",           // HELLO!
  (s) => s.repeat(2)        // HELLO!HELLO!
);

console.log(stringResult);  // Output: HELLO!HELLO!
```

**Poin:** 3.5

---

### Soal 25: Generic Iterator Pattern
**Kesulitan:** Hard (3.5 poin)

Buatlah Generic Class `Iterator<T>` yang wrap array `T[]` dan support:
- Method `hasNext(): boolean`
- Method `next(): T` (throw error jika tidak ada next)
- Method `reset(): void` untuk reset ke awal
- Method `current(): T` untuk get current item

**Test Case:**
```typescript
const items = ["a", "b", "c"];
const iterator = new Iterator<string>(items);

console.log(iterator.current());  // Output: a
console.log(iterator.hasNext());  // Output: true

iterator.next();
console.log(iterator.current());  // Output: b

iterator.reset();
console.log(iterator.current());  // Output: a
```

**Poin:** 3.5

---

### Soal 26: Generic with Partial and Pick
**Kesulitan:** Advanced (3.5 poin)

Buatlah Generic Function `updatePartial<T>` yang menerima object `T` dan partial update object, kemudian merge keduanya.

**Test Case:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com", age: 25 };

const updated = updatePartial<User>(user, { name: "Alice Updated", age: 26 });

console.log(updated.name);   // Output: Alice Updated
console.log(updated.email);  // Output: alice@example.com
console.log(updated.age);    // Output: 26
```

**Poin:** 3.5

---

### Soal 27: Generic Tree Structure
**Kesulitan:** Advanced (3.5 poin)

Buatlah Generic Class `TreeNode<T>` dengan:
- Property `value: T` dan `children: TreeNode<T>[]`
- Method `add(value: T): TreeNode<T>` untuk menambah child
- Method `flatten(): T[]` untuk flatten ke array
- Method `search(predicate: (value: T) => boolean): TreeNode<T> | null` untuk search

**Test Case:**
```typescript
const root = new TreeNode<number>(1);
root.add(2);
root.add(3);

console.log(root.flatten());  // Output: [1, 2, 3]
console.log(root.search((v) => v === 2) !== null);  // Output: true

const stringRoot = new TreeNode<string>("root");
stringRoot.add("child1");
stringRoot.add("child2");

console.log(stringRoot.flatten().length);  // Output: 3
```

**Poin:** 3.5

---

### Soal 28: Generic Lazy Evaluation
**Kesulitan:** Advanced (3.5 poin)

Buatlah Generic Class `Lazy<T>` yang melakukan lazy evaluation - value hanya dihitung ketika dibutuhkan:
- Constructor menerima function yang mengembalikan T
- Method `get(): T` yang evaluate dan cache hasilnya
- Method `isEvaluated(): boolean` untuk check sudah evaluate atau belum

**Test Case:**
```typescript
let callCount = 0;
const lazy = new Lazy<number>(() => {
  callCount++;
  return 42;
});

console.log(lazy.isEvaluated());  // Output: false

const value1 = lazy.get();
console.log(value1);              // Output: 42
console.log(callCount);           // Output: 1
console.log(lazy.isEvaluated());  // Output: true

const value2 = lazy.get();
console.log(callCount);           // Output: 1 (tidak di-evaluate ulang)
```

**Poin:** 3.5

---

### Soal 29: Generic Event Emitter
**Kesulitan:** Advanced (3.5 poin)

Buatlah Generic Class `EventEmitter<T>` dengan:
- Method `on(event: string, callback: (data: T) => void): void`
- Method `emit(event: string, data: T): void`
- Method `off(event: string): void` untuk unsubscribe
- Method `once(event: string, callback: (data: T) => void): void` untuk one-time subscription

**Test Case:**
```typescript
interface UserEvent {
  userId: number;
  action: string;
}

const emitter = new EventEmitter<UserEvent>();

let callCount = 0;
emitter.on("login", (event) => {
  console.log(`User ${event.userId} logged in`);
  callCount++;
});

emitter.emit("login", { userId: 1, action: "login" });
emitter.emit("login", { userId: 2, action: "login" });

console.log(callCount);  // Output: 2

emitter.once("logout", (event) => {
  console.log(`User ${event.userId} logged out`);
});

emitter.emit("logout", { userId: 1, action: "logout" });
emitter.emit("logout", { userId: 2, action: "logout" });  // Tidak akan trigger
```

**Poin:** 3.5

---

### Soal 30: BONUS COMPREHENSIVE - Advanced Generic System
**Kesulitan:** Advanced (3.5 poin)

**FINAL COMPREHENSIVE EXAM**

Buatlah sebuah sistem data management yang comprehensive dengan generic:

1. **Generic Interface `Entity<ID>`** dengan:
   ```typescript
   interface Entity<ID> {
     id: ID;
   }
   ```

2. **Generic Class `Repository<T extends Entity<ID>, ID>`** dengan:
   - `add(entity: T): void`
   - `getById(id: ID): T | undefined`
   - `getAll(): T[]`
   - `update(id: ID, entity: Partial<T>): boolean`
   - `delete(id: ID): boolean`
   - `findMany(predicate: (entity: T) => boolean): T[]`

3. **Generic Class `Cache<K, V>`** dengan LRU logic:
   - `set(key: K, value: V): void`
   - `get(key: K): V | undefined`
   - `size(): number`
   - `clear(): void`

4. **Generic Class `DatabaseConnection<T extends Entity<any>>`** dengan:
   - `query(sql: string): Promise<T[]>`
   - `execute(sql: string): Promise<boolean>`
   - Method chaining untuk build query

5. **Generic Types:**
   - `Mapper<T, U>` untuk konversi tipe
   - `Validator<T>` untuk validasi tipe
   - `Transformer<T, U>` untuk transformasi

**Test Case:**
```typescript
interface User extends Entity<number> {
  id: number;
  name: string;
  email: string;
}

interface Product extends Entity<string> {
  id: string;
  name: string;
  price: number;
}

// Repository testing
const userRepo = new Repository<User, number>();
userRepo.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepo.add({ id: 2, name: "Bob", email: "bob@example.com" });

console.log(userRepo.getAll().length);  // Output: 2
console.log(userRepo.getById(1)?.name); // Output: Alice

// Cache testing
const cache = new Cache<number, User>();
cache.set(1, { id: 1, name: "Alice", email: "alice@example.com" });
console.log(cache.get(1)?.name);        // Output: Alice
console.log(cache.size());              // Output: 1

// Product repository dengan different ID type
const productRepo = new Repository<Product, string>();
productRepo.add({ id: "P001", name: "Laptop", price: 15000000 });
productRepo.add({ id: "P002", name: "Mouse", price: 500000 });

console.log(productRepo.getAll().length);        // Output: 2
console.log(productRepo.getById("P001")?.price); // Output: 15000000

// FindMany testing
const results = userRepo.findMany((user) => user.name.includes("A"));
console.log(results.length);  // Output: 1

// Update testing
userRepo.update(1, { name: "Alice Updated" });
console.log(userRepo.getById(1)?.name);  // Output: Alice Updated

// Promise/Async testing
const dbConn = new DatabaseConnection<User>();
const users = await dbConn.query("SELECT * FROM users");
console.log(users.length);  // Output: > 0

// Multiple repositories dengan different types
const multiCache = new Cache<string, User | Product>();
multiCache.set("user:1", { id: 1, name: "Alice", email: "alice@example.com" });
multiCache.set("product:1", { id: "P001", name: "Laptop", price: 15000000 });

console.log(multiCache.size());  // Output: 2
```

**Requirement Detail:**
- Semua class harus generic dengan proper type parameters
- Implement generic constraint dimana diperlukan
- Support multiple type parameters untuk repository dan cache
- Implement proper error handling
- Semua method harus memiliki return type yang clear
- Support polymorphism untuk entity yang berbeda
- Cache harus support berbagai tipe key dan value

**Poin:** 3.5

---

## KRITERIA PENILAIAN

| Rentang Nilai | Grade | Keterangan |
|--------------|-------|-----------|
| 90 - 100 | A | Excellent - Siap ke TypeScript Validation |
| 80 - 89 | B+ | Very Good - Siap ke TypeScript Validation |
| 70 - 79 | B | Good - Siap ke TypeScript Validation |
| 60 - 69 | C+ | Satisfactory - Review beberapa materi |
| 50 - 59 | C | Fair - Butuh review lebih mendalam |
| < 50 | D | Poor - Butuh remedial |

---

## CATATAN PENTING UNTUK PESERTA

1. **Generic Type Parameter:** Selalu gunakan `<T>` atau nama yang descriptive untuk generic type
2. **Constraint:** Gunakan `extends` untuk membatasi tipe yang diperbolehkan
3. **Multiple Type:** Gunakan multiple parameter dengan koma: `<T, U, K>`
4. **Default Type:** Gunakan `= Type` untuk set default value
5. **Collections:** Pahami perbedaan `Array<T>`, `Set<T>`, dan `Map<K, V>`
6. **Promise:** Generic Promise adalah `Promise<T>` untuk return type async function
7. **Type Safety:** Generic harus maintain type safety - hindari `any` penggunaan
8. **Method Chaining:** Return `this` untuk enable method chaining

---

## DAFTAR MATERI YANG DIUJI

✅ Generic Class dengan Type Parameter  
✅ Generic Function  
✅ Multiple Generic Type  
✅ Optional Generic Type dengan Auto-Detection  
✅ Generic Parameter Default Value  
✅ Generic Constraint dengan extends  
✅ Generic Constraint dengan keyof  
✅ Generic dengan Inheritance  
✅ Array<T> Collection  
✅ Set<T> Collection  
✅ Map<K, V> Collection  
✅ Generic Promise untuk Async  
✅ Type Guard dengan Generic  
✅ Generic with Partial dan Pick  
✅ Record Type dengan Generic  
✅ Method Chaining dengan Generic  
✅ Pipeline/Composition Pattern  
✅ Iterator Pattern dengan Generic  
✅ Tree Structure dengan Generic  
✅ Lazy Evaluation dengan Generic  
✅ Event Emitter Pattern  
✅ Repository Pattern  
✅ Cache Pattern dengan Generic  
✅ Database Connection Pattern  
✅ Mapper, Validator, Transformer Generic Types  

---

**Selamat mengerjakan! Semoga berhasil dan siap untuk mempelajari TypeScript Validation!** 🚀