/*
Function 타입
파라미터, return 값에 타입 지정

void 타입: return 값이 없을 경우 지정

함수 정의시 파라미터를 지정했을 경우, 호출할 때 무조건 파라미터를 넣어야 함

파라미터가 옵션일 경우 ? 사용
x?: number
-> x: number | undefined
*/
function 함수(x) {
    return x * 2;
}
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
function sayHi(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log("\uC774\uB984\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
}
// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function 자릿수(x) {
    return x.toString().length;
}
/* Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
*/
function 결혼가능할까(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true)
        score += 500;
    if (charm === "상")
        score += 100;
    if (score >= 600)
        return "결혼가능";
}
