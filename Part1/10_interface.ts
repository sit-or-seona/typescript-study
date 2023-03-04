/* 
interface 문법
Object 타입 지정시 사용 가능
class 문법과 유사
,와 ; 모두 가능
*/

interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

/* 
interface 장점
extends로 상속 가능
-> 상속할 때 중복 속성을 정의하면 에러로 잡아줌
*/
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

/* 
Type Alias에선 &기호(intersection type)으로 가능
-> 상속이 아닌 두 타입 전부 만족하는 교차 타입이라는 뜻
-> 중복 속성을 정의해도 에러가 나지 않기 때문에 주의해야 함! (never type 발생)
*/
type Animal2 = { name: string };
type Cat = { age: number } & Animal2;

/* 
type vs interface

-> interface는 중복선언 가능(자동 extends), type은 중복선언 불가능
*/
interface Student2 {
  name: string;
}
interface Student2 {
  score: number;
}

// Q1. interface 이용해서 간단하게 타입을 만들어봅시다.
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// Q2. array 안에 object 여러개가 필요합니다.
interface Cart {
  product: string;
  price: number;
}
let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// Q3. 위에서 만든 타입을 extends 해봅시다.
interface NewCart extends Cart {
  card: boolean;
}

/* 
object 안에 함수를 2개 넣고 싶은데요 

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오. 
*/
interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let obj2: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
