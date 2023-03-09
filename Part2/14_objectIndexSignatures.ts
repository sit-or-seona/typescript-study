/* 
Index Signature
Object 타입지정을 한번에 가능
key 값이 숫자여도 문자화가 되기 때문에 [key: string] 가능

용도
1. object 자료에 어떤 속성들이 들어올 수 있는지 아직 모르는 경우
2. 타입지정할 속성이 너무 많은 경우
*/
interface StringOnly {
  [key: string]: string;
}

let obj3: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

// 불가능한 형태
interface StringOnly2 {
  // age: number; 에러 발생
  [key: string]: string;
}

// 가능한 형태
interface StringOnly3 {
  age: number;
  [key: string]: string | number;
}

/* 
Recursive Index Signatures 타입
Object 자료가 중첩되어 있을 때 재귀로 지정 가능
*/
let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// interface MyType {
//   "font-size": {
//     "font-size": {
//       "font-size": number;
//     };
//   };
// }

interface MyType {
  "font-size": MyType | number;
}

// Q1. 다음 자료의 타입을 지정해보십시오.
let obj4: Obj4Type = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

interface Obj4Type {
  price: number;
  year: number;
  [key: string]: string | number;
}

// Q2. 다음 object 자료의 타입을 interface 써서 만들어보십시오.
let css2: Css2Type = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};

interface Css2Type {
  "font-size": number;
  [key: string]: Css2Type | number;
}
