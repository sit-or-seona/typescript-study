/* 
Utility Types
TypeScript는 일반적인 타입 변환을 쉽게 하기 위해서 유틸리티 타입을 제공
전역으로 사용 가능
*/

/* 
1. Partial<Type>
<Type>의 모든 속성을 옵션으로 변경한 새로운 타입을 반환

-> 모든 속성을 옵셔널로 만드는 건 좋지 않기 때문에 PICK 이나 OMIT 유틸리티 타입을 활용하는 것을 권장하는 편
*/
interface Todo {
  title: number;
  description: string;
}

type Partial_Todo = Partial<Todo>;
/* 
아래와 같음
type Partial_Todo = {
  title?: number | undefined;
  description?: string | undefined;
}
*/
let today: Partial_Todo = {
  title: 230310,
};
// 모두 옵션이 되었기 때문에 description 속성을 작성하지 않아도 에러가 발생하지 않음

/* 
2. Required<Type>
<Type>의 모든 속성을 필수로 설정한 새로운 타입을 반환
Partial의 반대
*/
interface Props {
  a?: number;
  b?: string;
}

type Required_Props = Required<Props>;
/* 
type Required_Props = {
  a: number;
  b: string;
}
*/

const obj5: Props = { a: 5 };
// const obj6: Required_Props = { a: 5 };
//에러 발생

/* 
3. Readonly<Type>
<Type>의 모든 속성을 읽기 전용(readonly)로 변경한 새로운 타입을 반환
*/
interface Todo {
  title: number;
  description: string;
}

type Readonly_Todo = Readonly<Todo>;
/* 
type Readonly_Todo = {
  readonly title: number;
  readonly description: string;
}
*/
let tomorrow: Readonly_Todo = {
  title: 230311,
  description: "TS 학습",
};

// tomorrow.description = "TS 학습과 새 프로젝트 기획";
// 에러 발생

/* 
4. Record<Keys,Type>
<Keys>의 속성을 <Type>의 타입값으로 지정한 새로운 타입을 반환
타입의 속성을 다른 타입에 매핑(Object를 다른 타입으로 변환)시키는 데 사용 가능
*/
type Page = "home" | "about" | "contact";

type Record_Page = Record<Page, string>;
/* 
type Record_Page = {
  home: string,
  about: string,
  contact: string
}
*/
const nav: Record_Page = {
  about: "about입니다.",
  contact: "contact입니다.",
  home: "home입니다.",
};

/* 
5. Pick<Type, Keys>
<Type> 중 <Keys> 속성만 모아 새로운 타입을 반환
*/
interface UserInfo {
  name: string;
  age: number;
  email: string;
  isValid: boolean;
}

type Key = "name" | "email";

type Pick_UserInfo = Pick<UserInfo, Key>;
/*
type Pick_User = {
   name: string;
   email: string;
}
*/

const userInfo: Pick<UserInfo, Key> = {
  name: "Seona",
  email: "sit.or.seona@gmail.com",
};

/* 
6. Omit<Type, Keys>
<Type>에서 <Keys> 속성만 제거한 새로운 타입을 반환
Pick의 반대
*/
interface UserInfo {
  name: string;
  age: number;
  email: string;
  isValid: boolean;
}

type Keys = "name" | "email";

type Omit_User = Omit<UserInfo, Keys>;
/*
type Omit_User = {
    age: number;
    isValid: boolean;
}
*/

const userInfo2: Omit<UserInfo, Keys> = {
  age: 44,
  isValid: true,
};

/* 
7. Exclude<Type1, Type2>
유니언 타입인 Type1에서 Type2를 제외한 나머지 타입을 반환
*/
type Type = string | number | boolean;

type Exclude_Type = Exclude<Type, number>;
/* 
type Exclude_Type = string | boolean
*/

const str: Exclude_Type = "string";

// const num: Exclude_Type = 123;
// 에러 발생

type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number

/* 
8. Extract<Type1, Type2>
유니언 타입인 Type1에서 유니언 타입인 Type2와 겹치는 부분을 추출
*/
type Type1 = string | number | object | null;
type Type2 = number | boolean;

type Extract_Type = Extract<Type1, Type2>;
/*
type Extract_Type = number
*/
type T3 = Extract<"a" | "b" | "c", "a" | "f">;
// type T3 = "a"
type T4 = Extract<string | number | (() => void), Function>;
// type T4 = () => void

/* 
9. NonNullable<Type>
유니온 타입인 <Type>에서 null과 undefined를 제외한 타입을 반환
*/
type Type3 = string | number | object | null;

type NonNullable_Type1 = NonNullable<Type3>;
/* 
type NonNullable_Type = string | number | object
*/

/* 
10. Parameters<Type>
함수를 <Type>으로 받아, 함수의 매개변수 타입을 튜플 타입으로 반환
*/
type Zip = { x: number; y: string; z: boolean };
function zip(x: number, y: string, z: boolean): Zip {
  return { x, y, z };
}

type ZipType = typeof zip;
// type ZipType = (x: number, y: string, z: boolean) => Zip

type Params = Parameters<typeof zip>;
// type Params = [x: number, y: string, z: boolean]

type Frist = Params[0]; // number
type Second = Params[0]; // string
type Third = Params[0]; // boolean

function fn(a: string | number, b: boolean) {
  return `[${a}, ${b}]`;
}

type Parameters_Key = Parameters<typeof fn>; // 함수의 매개변수를 타입으로 변환
/*
type Parameters_Key = [a: string | number, b: boolean]
*/

const aaaa: Parameters<typeof fn> = ["Hello", true];
const bb: Parameters<typeof fn> = [123, false];

/* 
11. ConstructorParameters<Type>
생성자 함수 타입인 <Type>을 받아, 생성자의 매개변수 타입을 새로운 튜플 타입으로 반환
-> <Type>이 함수가 아닌 경우 never를 생성
*/
class UserClass {
  static father = "홍길동";
  readonly mother = "귀부인";

  constructor(public name: string, private age: number) {}

  add() {}
}
const neo = new UserClass("Neo", 12);

type ConstructorParameters_Type = ConstructorParameters<typeof UserClass>;
/*
type ConstructorParameters_Type = [name: string, age: number]
*/

const ab: ConstructorParameters<typeof UserClass> = ["Neo", 12];

type ErrorType = ConstructorParameters<ErrorConstructor>;

/* 
12. ReturnType<Type>
함수의 타입 <Type>을 받아 함수의 return 타입을 반환
*/
function fn2(str: string): number {
  return +str;
}

type ReturnType_Type = ReturnType<typeof fn2>;
/*
type ReturnType_Type = number
*/

const bbb: ReturnType<typeof fn2> = 1234;

/* 
13. InstanceType<Type>
생성자 함수의 타입 <Type>을 받아 함수의 인스턴스 타입을 반환
*/
class C {
  x = 0;
  y = 0;
}

type InstanceType_Type = InstanceType<typeof C>;
/*
type InstanceType_Type = C
type InstanceType_Type = { x: number, y: number }
*/

const tt: InstanceType_Type = {
  x: 100,
  y: 200,
};
