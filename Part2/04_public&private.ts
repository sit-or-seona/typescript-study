/* 
Class 안에서 사용 가능한 public, private 키워드

public 키워드
- public이 붙으면 모든 자식들이 이용 가능 (default값 - 생략 가능)

private 키워드
 - private이 붙으면 class 안에서만 수정, 이용 가능
 - 만약 수정하고 싶다면 class 안에 수정함수를 추가
*/
class User2 {
  public name: string;
  private familyName: string = "Bang";

  constructor(a: string) {
    this.name = a + this.familyName;
  }

  이름변경함수() {
    this.familyName = "Park";
  }
}

let 유저1 = new User2("Seona");
console.log(유저1);
유저1.이름변경함수();
console.log(유저1);

// public 키워드를 쓰면 this.name = name 생략 가능 (축약 가능)
class User3 {
  constructor(public name: string) {}
}
let 자식 = new User3("kim");
