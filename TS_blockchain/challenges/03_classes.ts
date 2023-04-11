/* 
Challenge goals:
classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.

LocalStorage API
Geolocation API
*/

/* 
LocalStorage API:
Use abstract classes and generics.
추상화 클래스와 제네릭을 사용하세요.

localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()
*/
interface LocalStorageAPIType<T> {
  [key: string]: T;
}

abstract class LocalStorage2<T> {
  protected storage: LocalStorageAPIType<T> = {};
  public abstract setItem(key: string, value: T): void;
  public abstract getItem(key: string): T;
  public abstract clearItem(key: string): void;
  public abstract clear(): void;
}

class LocalStorageAPI<T> extends LocalStorage2<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string) {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
