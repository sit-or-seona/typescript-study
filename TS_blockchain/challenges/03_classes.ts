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

/* 
Geolocation API:
overloading을 사용하세요.

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);
*/

interface GeolocationAPIType {
  getCurrentPosition(
    successFn: PositionCallback,
    errorFn: PositionErrorCallback,
    optionsObj: PositionOptions
  ): void;
  watchPosition(
    success: PositionCallback,
    error: PositionErrorCallback,
    options: PositionOptions
  ): void;
  clearWatch(id: number): void;
}

class GeolocationClass implements GeolocationAPIType {
  getCurrentPosition(successFn: PositionCallback): void;
  getCurrentPosition(
    successFn: PositionCallback,
    errorFn: PositionErrorCallback
  ): void;
  getCurrentPosition(
    successFn: PositionCallback,
    errorFn: PositionErrorCallback,
    optionsObj: PositionOptions
  ): void;
  getCurrentPosition(
    successFn: PositionCallback,
    errorFn?: PositionErrorCallback,
    optionsObj?: PositionOptions
  ) {
    if (errorFn === undefined && optionsObj === undefined) {
      navigator.geolocation.getCurrentPosition(successFn);
    } else if (optionsObj === undefined) {
      navigator.geolocation.getCurrentPosition(successFn, errorFn);
    } else {
      navigator.geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
    }
  }

  watchPosition(success: PositionCallback): void;
  watchPosition(success: PositionCallback, error: PositionErrorCallback): void;
  watchPosition(
    success: PositionCallback,
    error: PositionErrorCallback,
    options: PositionOptions
  ): void;
  watchPosition(
    success: PositionCallback,
    error?: PositionErrorCallback,
    options?: PositionOptions
  ) {
    if (error === undefined && options === undefined) {
      navigator.geolocation.watchPosition(success);
    } else if (options === undefined) {
      navigator.geolocation.watchPosition(success, error);
    } else {
      navigator.geolocation.watchPosition(success, error, options);
    }
  }

  clearWatch(id: number) {
    navigator.geolocation.clearWatch(id);
  }
}
