/*
Type Alias (타입 변수)
대문자로 시작
재정의 불가
*/

type Animal = string | number | undefined;
let 동물: Animal = "Bear";

type 사람 = {
  name: string;
  age: number;
};
let teacher: 사람 = { name: "john", age: 20 };

/*
readonly로 잠그기
Object 자료 수정도 막을 수 있음
*/
type Boyfriend = {
  readonly name: string;
};

let 애인: Boyfriend = {
  name: "티모시",
};

// 애인.name = "경호";
/*
에러 발생
변환된 js파일에는 에러가 없음
-> TS 에러는 에디터 & 터미널에서만 존재
*/

/* 
Type Alias 합치기
| 연산자, &연산자
*/
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;

// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type A = { wow: string };
type B = { wow: number };
type AB = A & B;

// let typeAB: AB = { wow: "wow~!" };
// never 타입 발생: 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미

/* 
다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다. 
*/
type ObjectType = {
  color?: string;
  size: number;
  readonly position: number[];
};

/* 
다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/
type 정보 = {
  name: string;
  phone: number;
  email: string;
};

/* 
다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
*/
type 미성년자여부 = {
  teenager: boolean;
};
type User = 정보 & 미성년자여부;
