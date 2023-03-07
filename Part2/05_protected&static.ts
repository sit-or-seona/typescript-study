/* 
Class 안에서 사용 가능한 protected, static 키워드

protected 키워드
- protected가 붙으면 class 안 + extends된 class 안에서만 사용 가능
- private은 extends된 class 안에서 사용 불가능

static 키워드
- static이 붙으면 부모 class에서만 사용 가능
- 해당 속성을 인스턴스에 물려주지 않음
- public / private / protected + static 가능
*/
class User4 {
  protected x = 10;
}

class NewUser extends User4 {
  doThis() {
    this.x = 20;
  }
}

/* 
static 활용 예시

- this.skill 이 아닌 User5.skill 로 작성해야 함
- skill의 값 변경 가능 
-> private, protected를 사용하는 것이 안전
*/
class User5 {
  static skill = "js";
  intro = User5.skill + "전문가입니다";
}

let 치열 = new User5();
console.log(치열);

User5.skill = "ts";
let 행선 = new User5();
console.log(행선);

// Q1. 다음 x, y, z 속성의 특징을 설명해보십시오.
class User6 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}
/* 
x: 해당 class 내부, 외부에서 모두 수정이 가능, 인스턴스에 물려주지 않는 속성
y: 해당 class에서만 사용이 가능하며 외부에서 수정 가능, 인스턴스에 물려주지 않는 속성
z: 해당 class와 extends 된 class에서만 사용 및 수정 가능
*/

// Q2. x 속성에 숫자를 더해주는 함수가 필요합니다.
// 클래스명.속성명으로 출력 -> class에 직접 부여되는 static 속성
class User7 {
  private static x = 10;
  public static y = 20;

  static addOne(a: number): number {
    return User7.x + a;
  }

  static printX(): void {
    console.log(User7.x);
  }
}
User7.addOne(3); //이렇게 하면 x가 3 더해져야함
User7.addOne(4); //이렇게 하면 x가 4 더해져야함
User7.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

/* 
Q3. 이런거 어떻게 만들게요 

웹 요소 애니메이팅하는거 이런 것의 기초 격인데 
네모.draw()를 할 때마다
index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
*/
class Square2 {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}

  draw() {
    let box = `<div style="position:relative;
    top: ${Math.random() * 400}px;
    left: ${Math.random() * 400}px;
    width: ${this.width}px;
    height: ${this.height}px;
    background: ${this.color}"></div>`;

    const section = document.getElementById("section");
    if (section instanceof HTMLElement) {
      section.innerHTML += box;
    }
    // 풀이: document.body.insertAdjacentHTML( 'beforeend', box );
  }
}

let 스퀘어 = new Square2(30, 30, "red");
스퀘어.draw();
스퀘어.draw();
스퀘어.draw();
스퀘어.draw();
