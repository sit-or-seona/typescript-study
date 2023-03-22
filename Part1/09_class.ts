/* 
constructor 타입 지정
- 미리 필드값으로 정의되어야 함
- 파라미터 타입 지정 가능
- return 타입 지정할 필요 없음 (인스턴스가 항상 Object이기 때문)

필드값 vs constructor
-> new Person2() 사용할 때 파라미터로 뭔가 집어넣고 싶으면 constructor로 만들어야 함
*/

class Person2 {
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  함수(a: string) {
    console.log("안녕" + a);
  }
}

let 사람1 = new Person2("kim");
let 사람2 = new Person2("Bang");

사람1.함수("Seona");

/* 
Q1. Car 클래스를 만들고 싶습니다.

1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.

2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 

3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
*/
class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

/* 
Q2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.

1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 

2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 

3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.

4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 
*/
class Word {
  num: number[];
  str: string[];

  constructor(...param: (number | string)[]) {
    let nums: number[] = [];
    let strs: string[] = [];

    param.forEach((i) => {
      if (typeof i === "number") {
        nums.push(i);
      } else {
        strs.push(i);
      }
    });

    this.num = nums;
    this.str = strs;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

/* 
Class를 사용하여 사전 만들기
*/
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  // 파라미터가 Word2 클래스의 인스턴스
  add(word: Word2) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  delete(word: string | Word2) {
    if (typeof word === "string" && this.words[word]) {
      delete this.words[word];
    } else if (typeof word === "object" && this.words[word.term]) {
      delete this.words[word.term];
    }
  }

  update(word: Word2) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
}

class Word2 {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word2("kimchi", "한국의 음식");
const bread = new Word2("bread", "?");
const newBread = new Word2("bread", "빵");

const dict = new Dict();

dict.add(kimchi);
dict.add(bread);
dict.delete("kimchi");
dict.update(newBread);
