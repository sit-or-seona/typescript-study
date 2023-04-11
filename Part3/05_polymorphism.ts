/* 
Polymorphism 다형성
다른 형태의 코드를 작성할 수 있는 것
-> 제네릭

제네릭
- 다른 타입에 상속할 수 있음
  - Class와 interface 간의 상속도 가능
- placeholder 타입을 concrete 타입으로 만들어 줌
*/

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();

stringStorage.get("ket");

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get("xxx");
