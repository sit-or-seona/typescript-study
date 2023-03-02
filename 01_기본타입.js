// String 타입
var 이름 = "kim";
// Number 타입
var 나이 = 20;
// Boolean 타입
var 결혼했니 = false;
// Array 타입
// 문자만 담긴 Array만 가능
var 회원들 = ["kim", "park"];
// Object 타입
var 내정보 = { age: 20 };
/*
Tip
변수 생성시 타입스크립트가 타입을 자동으로 부여함
(변수명에 마우스를 올려보면 확인 가능)
-> 간단한 변수들은 타입 지정 문법 생략
*/
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var myName = "seona";
var myAge = 26;
var myHometown = "대구";
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오
var myFavorite = {
    song: "Memories",
    artist: "Conan Gray",
};
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
