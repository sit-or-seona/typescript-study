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
  protected storage: LocalStorageAPIType<T>;
  constructor() {
    this.storage = {};
  }
  public abstract setItem(key: string, value: T): void;
  public abstract getItem(key: string): T;
  public abstract clearItem(key: string): void;
  public abstract clear(): void;
}

class LocalStorageAPI<T> extends LocalStorage2<string> {
  constructor() {
    super();
  }
  setItem(key: string, value: string) {
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
/* 
답안 및 풀이
GeoLocation API
- overloading을 활용하는 챌린지였습니다. overloading은 글자 그대로 이름은 동일하되 서로 다른 타입들을 덧붙이는 것이라고 이해하면 쉽습니다.
- 먼저 GeolocationCoordinates의 타입을 설정해주겠습니다. GeoLocation은 사용자의 로컬 컴퓨터의 위치를 좌표 형식으로 나타내줍니다. 사용법에 있는 메소드로 전달된 파라미터들 중에 각각 optionsObj, errors, option 등은 전부 객체 형태인 것을 유추할 수 있습니다. 그렇기 때문에 각각 GeoOptions, GeoError, GeolocationCoords 그리고 Position이라는 타입을 각각 만들어서 필요한 필드들이 담긴 타입을 만들었습니다.
- 다음으로 successFn, errorFn의 콜백 함수에 대한 타입을 설정할 차례입니다. 앞서 만든 GeoOptions, GeoError, GeolocationCoords 그리고 Position을 successFn과 errorFn의 파라미터에 적용시킬 타입으로 사용합니다. 그렇게 SuccessFunction과 ErrorFunction이라는 타입을 만들었습니다.
- 이후, 사용법에 제시된 getCurrentPosition()과 watchPosition() 메소드의 전체 타입을 지정하도록 하겠습니다. 앞서 만든 SuccessFunction 타입과 ErrorFunction을 연결 지을 수 있도록 GetCurrentPosition과 WatchCurrentPosition 타입을 만든 후, return되는 타입을 설정해주고, 이를 하나로 묶은 GeolocationAPI라는 interface를 만들었습니다. 추후에 상속을 해야하니까요.
- 마지막으로 Geolocator라는 클래스를 만들었습니다. 이것이 실제로 API로 사용될 클래스이며 GeolocationAPI 타입을 연결합니다. getCurrentPosition()과 watchPosition() 메소드에서 전달되는 error와 options는 없을 수도 있기 때문에 ? 연산자를 통해 필수가 아닌 선택적인 요소로 바꾸었습니다.
*/
type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};
type Position = {
  coords: GeolocationCoords;
};
type GeoError = {
  code: number;
  message: string;
};
type SuccessFunction = (position: Position) => void;
type ErrorFunction = (error: GeoError) => void;
type GeoOptions = {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
};

type GetCurrentPosition = {
  (success: SuccessFunction): void;
  (success: SuccessFunction, error: ErrorFunction): void;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): void;
};

type WatchCurrentPosition = {
  (success: SuccessFunction): number;
  (success: SuccessFunction, error: ErrorFunction): number;
  (success: SuccessFunction, error: ErrorFunction, options: GeoOptions): number;
};

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchCurrentPosition;
  clearWatch: (id: number) => void;
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return; // Implementation goes here :)
  };
  watchPosition: WatchCurrentPosition = (
    success: SuccessFunction,
    error?: ErrorFunction,
    options?: GeoOptions
  ) => {
    return 1; // Implementation goes here :)
  };
  clearWatch = (id: number) => {};
}

// 나의 풀이
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
