/*
Union 타입
타입 2개 이상 합친 새로운 타입
*/
let 회원: number | string = "kim";
let 회원번호: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

/*
변수의 타입이 확실해야 연산을 수행하기 때문에 아래 코드는 에러가 발생
let age: string | number;
age + 1;
*/

/*
any 타입
모든 자료형 허용 -> 타입실드 해제 문법
*/
let 별명: any = "lala";
별명 = 123;
별명 = undefined;
별명 = [];

/*
unknow 타입
어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어 넣어야 할 경우 사용
any보다 안전 -> unknown 타입을 다른 곳에 넣으려고 하면 에러 발생
 */
let 별명2: unknown = "lala";
별명2 = 123;
별명2 = undefined;
별명2 = [];

/*
아래는 에러가 발생
1. let 변수: string = 별명2;
2. 별명2 - 1
*/

// Q1. 다음 변수 4개에 타입을 지정해봅시다.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// Q2. 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
