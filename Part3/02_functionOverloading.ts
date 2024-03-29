/* 
Function Overloading
TypeScript는 함수 오버로딩 개념을 제공
-> 이름은 같지만 파라미터 타입과 return 타입이 다른 여러 함수를 정의할 수 있음

- 오버로드 시그니처: 선언만 한 함수
(시그니처는 보통 2개 이상)
- 구현 시그니처: 함수 구현(본문)이 작성된 함수
(직접 호출 불가)

- 마지막 함수에는 함수 구현(본문)이 있어야 함
- 모든 오버로드 시그니처와 구현 시그니처는 호환이 가능해야 함 (파라미터 타입과 return 타입)
- 함수 호출 시에는 오버로드 시그니처와 파라미터의 개수가 같아야 함

*만약 오버로드 대신 유니온 타입으로 정의 가능하다면 유니온 타입을 사용하는 것을 권장!
*/

// 오버로드 시그니처
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// 구현 시그니처
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// 함수 호출
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
// 에러 발생: 시그니처 중 파라미터의 개수가 2개인 시그니처가 존재하지 않음

/* 
유니온 타입으로 작성 가능한 경우

예시: 문자열 혹은 배열의 길이를 반환하는 함수
*/
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

function newLen(x: any[] | string) {
  return x.length;
}

/* 
Function Overloading 개념 쉽게 이해하기

오버로딩
: 함수가 여러 개의 call signatures를 가지고 있을 때 발생
*/
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") {
    return a;
  } else {
    return a + b;
  }
};

/* 
실무 예제
*/

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

/* 
call signature의 파라미터 개수가 다른 경우

c가 옵셔널이기 때문에 파라미터에 옵셔널 표시를 해줘야 함
*/
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add2(1, 2);
add2(1, 2, 3);
