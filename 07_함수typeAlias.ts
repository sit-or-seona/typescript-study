/* 
Type Alias에 함수 타입 저장해서 쓰는 법

1. 함수 타입은 화살표 함수 형태
2. 함수 표현식에만 Type Alias 사용 가능
*/

// 파라미터: string, return값: number
type 함수타입 = (a: string) => number;

let 함수2: 함수타입 = function (a) {
  return 1;
};

// 메서드
let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

// Q1. 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

/*
다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
*/

type CutZeroType = (a: string) => string;
let cutZero: CutZeroType = function (a) {
  let answer = a.replace(/^0+/g, "");
  return answer;
};

type removeDashType = (a: string) => number;
let removeDash: removeDashType = function (a) {
  let answer = a.replace(/-/g, "");
  return parseInt(answer);
};

/* 
함수에 함수를 집어넣고 싶습니다.
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
*/

function 콜백함수(
  a: string,
  cutZero: CutZeroType,
  removeDash: removeDashType
): void {
  let result1 = cutZero(a);
  let result2 = removeDash(result1);
  console.log(result2);
}
