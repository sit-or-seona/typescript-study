/* 
Literal Type
특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
(const 변수 업그레이드버전)
- 변수에 뭐가 들어올지 더 엄격하게 관리 가능
- 자동완성
*/
let john: "대머리";
let kim: "솔로";

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
가위바위보("가위");

/* 
Literal Type 문제
value 가 아닌 type이기 때문에 value만 같을 경우 에러 발생
*/
var 자료 = {
  name: "kim",
};

function 내함수3(a: "kim") {}
// 내함수3(자료.name); // 에러

/*
해결방법 1: object 만들 때 타입 지정
var 자료: { name: "kim" } = {
  name: "kim",
};
*/

/*
해결방법 2: as 문법
내함수3(자료.name as "kim")
*/

/*
해결방법 3: as const 문법
var 자료 = {
  name: "kim",
} as const;

as const 효과 -> 잠그기
- 타입을 object의 value로 바꿔줌(위에선 'kim')
- object 안에 있는 모든 속성을 readonly로 바꿔줌
*/
