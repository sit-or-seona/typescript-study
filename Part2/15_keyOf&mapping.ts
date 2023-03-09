/* 
Key of 연산자
Object의 key를 뽑아서 새로운 타입을 만들고 싶을 때 사용
Object 타입이 가지고 있는 모든 key값을 union type으로 합쳐서 내보내줌

index signature의 경우 string | number 타입이 됨
-> 숫자를 key값에 넣어도 문자로 치환되기 때문
*/
interface Person2 {
  age: number;
  name: string;
}
type PersonKeys = keyof Person2;
//"age" | "name" -> literl type

let aa: PersonKeys = "age";
// let bb: PersonKeys = "ageeee"; // 에러 발생

/* 
Mapped Types

Mapping
= Object를 다른 타입으로 변환

타입 변환기 만들기
[ 자유작명 in keyof 타입파라미터 ] : 원하는 타입
*/

type CarType2 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<CarType2>;

// Q1. 다음 타입을 변환기를 돌려보십시오.
type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger2<T> = {
  [key in keyof T]: string | number;
};

type NewBus = TypeChanger2<Bus>;

/* 
Q2. 이런 변환기는 어떻게 만들어야할까요?
object안에 들어있는 모든 속성을
string, number 이렇게 고정된 타입으로 변환해주는게 아니라
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
*/
type TypeChanger3<T, NewT> = {
  [key in keyof T]: NewT;
};
