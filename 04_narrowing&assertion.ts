/*
Type Narrowing
Type이 아직 하나로 확정되지 않았을 경우 사용 ex) 유니온타입
-> 어떤 변수가 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능

Narrowing으로 판정해주는 문법들
- typeof 변수
- 속성명 in 오브젝트자료
- 인스턴스 instanceof 부모
*/
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + 1;
  }
}

/*
Type Assertion
타입 덮어쓰기

Assertion 문법의 용도
1. Narrowing
2. 무슨 타입이 들어올지 100% 확실할 때
-> 타입 체크 기능을 안 쓰겠다는 뜻이기 때문에 디버깅용&비상용으로만 사용을 권장
*/
function 내함수2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

/*
Q1. 숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다. 
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
*/
function cleaning(x: (string | number)[]): number[] {
  // return x.map((v) => Number(v));

  let answer: number[] = [];

  x.forEach((v) => {
    if (typeof v === "string") {
      answer.push(parseInt(v));
    } else {
      answer.push(v);
    }
  });

  return answer;
}

/*
Q2. 다음과 같은 함수를 만들어보십시오.

지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
철수쌤같은 선생님 object 자료를 집어넣으면 
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다. 
 */
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function subject(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (typeof Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없음!!";
  }
}
