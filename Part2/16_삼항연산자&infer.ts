/* 
Type 조건문
- 주로 삼항 연산자를 사용
- 조건식은 extends를 써야 함
*/
type Age2<T> = T extends string ? string : unknown;

let aaa: Age2<string>;
let aab: Age2<number>; // unknown 타입이 됨

// Q. 그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고, array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

/* 
Infer 키워드
조건문에서 사용할 수 있으며 타입을 왼쪽에서 추출함

왼쪽에서 타입을 추출해 R 변수에 담음 (변수명을 주로 R / Return을 사용)
*/
type Person4<T> = T extends infer R ? R : unknown;

// 예제 1: 배열 내 원소 타입 뽑기
type 타입추출<T> = T extends (infer R)[] ? R : unknown;

type a = 타입추출<string[]>;
// R에는 string이 들어감

// 예제 2: 함수의 return 타입 뽑기
type 타입추출2<T> = T extends () => infer R ? R : unknown;

type b = 타입추출2<() => void>;

// -> ReturnType 이라는 기본 함수로 대체 가능
type b2 = ReturnType<() => void>;

/* 
Q1. 타입 파라미터로 
1. array 타입을 입력하면
2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
*/

type AgeType<T> = T extends [string, ...any] ? string : unknown;

let age3: AgeType<[string, number]>;
let age4: AgeType<[boolean, number]>;

// Q2. 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오.
type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
