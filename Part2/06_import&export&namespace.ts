/* 
타입도 import, export 가능
*/

import { Name } from "./06_types";

let 변수: Name = "park";

/* 
namespace
TS 타입 변수 숨기기 문법
- import/export 가 없었던 때 사용했음
- module 과 같음
*/
/// <reference path='./06_types.ts' />

namespace 네임스페이스 {
  export type Name = string | number;
}
let 변수2: 네임스페이스.Name = "kim";

// Q1. Car 그리고 Bike 타입을 만들었는데 너무 길어요.
import { Car, Bike } from "./06_types";

let 자동차: Car = {
  wheel: 4,
  model: "Volvo",
};

let 자전거: Bike = {
  wheel: 2,
  model: "BMW",
};

/* 
Q2. 너무 자주만들어 쓰는 함수가 하나 있습니다.
이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 
아무것도 return 해주지 않아야합니다. 
함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요.
*/
import { FunctionType } from "./06_types";

let 자주쓰는함수: FunctionType = (obj) => {
  console.log(obj);
};

// Q3. 타입 중복이 너무 많이 발생합니다.
namespace BadDog {
  export type Dog = string;
}
namespace GoodDog {
  export interface Dog {
    name: string;
  }
}

let dog1: BadDog.Dog = "bark";
let dog2: GoodDog.Dog = { name: "paw" };
