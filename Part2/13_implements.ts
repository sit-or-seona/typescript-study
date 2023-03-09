/* 
Implements 키워드
Class 타입을 확인하고 싶을 때 interface 와 함께 필요한 키워드

- 해당 타입이 맞지 않을 경우 에러 발생
- Class의 타입을 할당하고 변형시키진 않음
*/
interface CarType {
  model: string;
  price: number;
}

class Car3 implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car3("morning");
