/* 
함수에 사용하는 never 타입
-> 사용한다기보다 등장했을 때 이해할 것!

never 타입을 붙이는 조건
1. return 값이 없어야 함
2. endpoint가 없어야 함

조건을 만족하는 예시
- throw new Error(): 함수 실행 중단
- while(true){}: 무한 반복
*/
function 함수7(): never {
  throw new Error("에러메세지");
}

/* 
return 값이 없을 경우
- 함수 선언문: void 타입이 자동으로 할당
- 함수 표현식: never 타입이 자동으로 할당
*/
function 함수8() {
  throw new Error();
}

let 함수9 = function () {
  throw new Error();
};
