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
