/* 
Declare 문법
변수 재정의
- 외부 .js에 있는 변수를 .ts에서 이용할 때 사용
- ts 파일이 변환된 js에는 declare로 정의한 내용이 포함되어 있지 않음
*/
declare let abc: number;

console.log(abc + 1);

/* 
Ambient Module (글로벌 모듈)
ts 특징: 모든 ts 파일은 ambient module이 됨
-> .ts에 있는 변수를 .ts에서 이용할 때 import & export 없이도 가능
*/

// import { abcd } from "./11_data";

console.log(abcd + 1);

/* 
ts 파일을 로컬 모듈로 만드는 법
- import & export 중 하나가 있으면 로컬 모듈이 됨
- 로컬 모듈에서 글로벌 변수를 만들 때 declare global {} 사용
*/
declare global {
  type Dog = string;
}
export {};
