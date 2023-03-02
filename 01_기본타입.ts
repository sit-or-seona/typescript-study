// String 타입
let 이름: string = "kim";

// Number 타입
let 나이: number = 20;

// Boolean 타입
let 결혼했니: boolean = false;

// Array 타입
// 문자만 담긴 Array만 가능
let 회원들: string[] = ["kim", "park"];

// Object 타입
let 내정보: { age: number } = { age: 20 };

/*
Tip
변수 생성시 타입스크립트가 타입을 자동으로 부여함
(변수명에 마우스를 올려보면 확인 가능)
-> 간단한 변수들은 타입 지정 문법 생략
*/

// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let myName: string = "seona";
let myAge: number = 26;
let myHometown: string = "대구";

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오
let myFavorite: { song: string; artist: string } = {
  song: "Memories",
  artist: "Conan Gray",
};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
