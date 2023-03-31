/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array

  ### Question

  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

  For example:

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > View on GitHub: https://tsch.js.org/898
*/

/* _____________ Your Code Here _____________ */

/* 
1. 처음 접근한 방식
T[number]로 배열의 원소에 접근해 U가 포함돼 있는지 확인하는 조건부 타입
-> U가 T에 포함되면 true가 되기 때문에 테스트케이스 여러 개가 Fail
-> 예를 들어, <Includes<[{}], { a: 'A' }> 는 false여야 하지만 true가 됨
*/
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;

/* 
2. Mapped Type(인덱스 시그니처 문법)을 사용
*/
// type Includes<T extends readonly any[], U> =
//   {
//     [i in keyof T]: Equal<T[i], U> extends true
//       ? true
//       : false
//   } extends { [key: number]: false }
//     ? false
//     : true

/* 
3. infer와 rest 파라미터 사용
*/
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

/* _____________ Further Steps _____________ */
/*
> Share your solutions: https://tsch.js.org/898/answer
> View solutions: https://tsch.js.org/898/solutions
> More Challenges: https://tsch.js.org
*/
