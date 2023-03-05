/* 
rest parameter 타입 지정
- 파라미터의 개수가 불분명한 경우 사용
- Array에 담겨 있음

spread operator와 다른 문법임!
*/

function 함수3(...a: number[]) {
  console.log(a);
}
함수3(1, 2, 3, 4, 5);

/* 
destructuring 구조분해할당
- object destructuring할 땐 변수이름을 속성이름과 맞춰주는게 편리
-> 같을 경우 생략 가능
*/
// let { student: student, address: address } = { student: true, address: "서울" };
let { student, address } = { student: true, address: "서울" };

function 함수4({ student, address }: { student: boolean; address: string }) {
  console.log(student, address);
}
함수4({ student: true, address: "서울" });

// Q1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
function mathMax(...param: number[]): number {
  let answer: number = 0;
  for (let i of param) {
    if (i > answer) {
      answer = i;
    }
  }
  return answer;
}

// Q2. object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
type ObjectType2 = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 오브젝트출력({ user, comment, admin }: ObjectType2): void {
  console.log(user, comment, admin);
}

// Q3. array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
type ProductCheckType = [number, string, boolean];
function productCheck([count, product, soldout]: ProductCheckType): void {
  console.log(count, product, soldout);
}
