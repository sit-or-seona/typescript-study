/* 
Generic 함수
파라미터로 타입을 입력하는 함수
<>에 작성 (<MyType> 또는 <T> 로 많이 사용)
-> 함수 return 값의 타입이 애매하면 narrowing 또는 Generic을 사용할 수 있음
-> class에도 사용 가능

장점
- 확장성
*/

// 함수10( x : number[] ) :number { }과 같음
function 함수10<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = 함수10<number>([4, 2]);
let b = 함수10<string>(["kim", "park"]);
console.log(a);
console.log(b);

/* 
타입파라미터 제한두기

function 함수<MyType>(x: MyType) {
  return x - 1
}
위 코드는 에러 발생
-> <MyType>에 number 외의 타입이 올 수 있기 때문!

-> extends 키워드로 Generic함수 타입 제한하기
커스텀 타입도 사용 가능!
*/
function 함수11<MyType extends number>(x: MyType) {
  return x - 1;
}

let c = 함수11<number>(100);

// Q1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
function 갯수출력<MyType extends string | string[]>(a: MyType): void {
  console.log(a.length);
}
console.log(갯수출력<string>("hello"));
console.log(갯수출력<string[]>(["kim", "park"]));

/* 
Q2. Animal 이라는 타입이 있습니다.
그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 
data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
오늘 배운 Generic을 이용해서 구현해보도록 합시다.  
*/
interface Animal3 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function JSONtoObj<MyType>(data: string): MyType {
  return JSON.parse(data);
}

JSONtoObj<Animal3>(data);

/* 
Q3. class 를 수정해봅시다.
 
지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
이게 싫어서 파라미터에 string을 집어넣으면 string 타입
number를 집어넣으면 number 타입
string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
오늘 배운 Generic을 이용해봅시다. 
*/
class Person3<MyType> {
  name;
  constructor(a: MyType) {
    this.name = a;
  }
}
let d = new Person3<string>("어쩌구");
d.name;
