/* 
1. null & undefined 체크
&& 연산자 사용
*/
function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(strs);
  }
}

/* 
2. in 연산자로 object자료 narrowing
- 속성명이 다를 경우 사용 가능
*/
type Fish = { swim: string };
type Bird = { fly: string };
function 함수5(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}

/* 
3. instanceof 연산자로 class로부터 생산된 object자료 narrowing
*/
let 날짜 = new Date();
if (날짜 instanceof Date) {
  console.log("참이에요");
}

/* 
4. object 타입마다 literal type 만들어두기
model 같은 속성을 추가해도 괜찮음
*/
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};
function 함수6(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log("the car is " + x.color);
  } else {
    console.log("the bike is " + x.color);
  }
}

// => 논리적으로 이 타입인지 특정 지을 수 있다면 narrowing 인정
