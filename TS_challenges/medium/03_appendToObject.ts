/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #object-keys

  ### Question

  Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

  For example

  ```ts
  type Test = { id: '1' }
  type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
  ```

  > View on GitHub: https://tsch.js.org/527
*/

/* _____________ Your Code Here _____________ */

/* 
1. 처음 작성한 코드 (Fail)
type AppendToObject<T, U extends string, V> = T & {
  [P in U]: V
}
-> type alias에서 &을 사용하면 교차타입이 되기 때문

2. 아래 코드
유니온 타입 T | U 로 key를 정의하고,
조건식을 사용하여 value를 구분
*/
type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  isMotherRussia: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, "home", boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, "home", 1>, testExpect2>>,
  Expect<
    Equal<
      AppendToObject<test3, "isMotherRussia", false | undefined>,
      testExpect3
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/527/answer
  > View solutions: https://tsch.js.org/527/solutions
  > More Challenges: https://tsch.js.org
*/
