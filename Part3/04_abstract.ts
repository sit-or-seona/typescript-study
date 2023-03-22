/* 
Abstract Class 추상 클래스

추상 메서드
- 추상 클래스를 상속받는 모든 것들이 구현해야 하는 메서드를 의미
- 추상 메서드는 정의만 있을 뿐 몸체가 구현되어 있지 않음
-> 추상 클래스를 상속하는 클래스에서 해당 추상 메서드를 통해 반드시 구현해야 함

추상 클래스
- 추상 메서드 뿐 아니라 실제 메서드도 정의 가능
- 인스턴스를 생성하지 않음
- 추상 클래스를 상속하는 클래스를 통해 생성된 인스턴스는 이 메서드를 사용 가능
*/
abstract class Project {
  public name: string | null = null;
  private budget: number = 2000000;

  // 추상 메서드 정의
  public abstract changeProjectName(name: string): void;

  // 실 메서드 정의
  public calcBudget(): number {
    return this.budget * 2;
  }
}

// let new_project = new Project();
// 에러 발생: 추상 클래스의 생성 구문을 사용하면 오류가 발생

class WebProject extends Project {
  changeProjectName(name: string): void {
    this.name = name;
  }
}
let new_project = new WebProject();
