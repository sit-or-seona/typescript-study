/* 
Tuple Type
- Array에 붙일 수 있는 타입
- 자료의 위치까지 정확히 지정
- [] 괄호 안에 작성하면 tuple type이 됨
- ?: 옵션 표시 가능, 맨 마지막에만 작성 가능, 2개 이상 타입에 작성 가능
*/

let 멍멍: [string, boolean?, number?] = ["dog", true];

/* 
Tuple 응용: rest parameter

일반 파라미터 2개 넣는 것과 기능이 같지만
rest parameter를 쓰면 파라미터가 Array에 담김 
*/
function 함수12(...x: [string, number]) {
  console.log(x);
}
함수12("kim", 123);

/* 
Spread Operator를 사용했을 때 타입지정
-> tuple 타입에 점 3개 붙이면 됨
-> rest parameter처럼 활용 가능
*/
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
let arr3: [number, number, ...number[]] = [4, 5, 6, 7, 8, 9, 10];

// Q1. 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
let 최근먹은음식: [string, number, boolean] = ["치킨&맥주", 40000, true];

// Q2. 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
let arr4: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

/*
Q3. 함수에 타입지정을 해보도록 합시다.
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
*/
function 함수13(a: string, b: boolean, ...c: (string | number)[]): void {}
// 풀이: function 함수(...rest: [string, boolean, ...(string | number)[]])

함수13("a", true, 6, 3, "1", 4);

/* 
Q4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 
*/

function 분류기(...rest: (string | number)[]) {
  const answer: [string[], number[]] = [[], []];

  rest.forEach((v) => {
    typeof v === "string" ? answer[0].push(v) : answer[1].push(v);
  });

  return answer;
}

분류기("b", 5, 6, 8, "a");
