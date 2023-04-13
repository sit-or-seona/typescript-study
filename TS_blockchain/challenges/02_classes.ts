/* 
타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

add: 단어를 추가함.
get: 단어의 정의를 리턴함.
delete: 단어를 삭제함.
update: 단어를 업데이트 함.
showAll: 사전 단어를 모두 보여줌.
count: 사전 단어들의 총 갯수를 리턴함.
upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
*/

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  add(word: WordTemp) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  get(term: string) {
    return this.words[term];
  }

  delete(term: string) {
    delete this.words[term];
  }

  update(word: WordTemp) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }

  showAll() {
    return Object.keys(this.words).forEach((term) => console.log(term));
  }

  count() {
    return Object.keys(this.words).length;
  }

  upsert(word: WordTemp) {
    this.words[word.term] = word.def;
  }

  exists(term: string) {
    return this.words[term] ? true : false;
  }

  bulkAdd(arr: WordTemp[]) {
    arr.forEach((newWords) => {
      this.add(newWords);
    });
  }

  bulkDelete(arr: string[]) {
    arr.forEach((term) => {
      this.delete(term);
    });
  }
}

class WordTemp {
  constructor(public term: string, public def: string) {}
}

// 답안
type Word = {
  term: string;
  definition: string;
};

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.get(term)) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.get(term)) {
      this.words[term] = newDef;
    }
  }
  showAll() {
    let output = "\n--- Dictionary Content ---\n";
    Object.keys(this.words).forEach(
      (term) => (output += `${term}: ${this.words[term]}\n`)
    );
    output += "--- End of Dictionary ---\n";
    console.log(output);
  }
  count() {
    return Object.keys(this.words).length;
  }
  upsert(term: string, definition: string) {
    if (this.get(term)) {
      this.update(term, definition);
    } else {
      this.add(term, definition);
    }
  }
  exists(term: string) {
    return this.get(term) ? true : false;
  }
  bulkAdd(words: Word[]) {
    words.forEach((word) => this.add(word.term, word.definition));
  }
  bulkDelete(terms: string[]) {
    terms.forEach((term) => this.delete(term));
  }
}

const dictionary = new Dict();

const KIMCHI = "김치";

// Add
dictionary.add(KIMCHI, "밋있는 한국 음식");
dictionary.showAll();

// Count
console.log(dictionary.count());

// Update
dictionary.update(KIMCHI, "밋있는 한국 음식!!!");
console.log(dictionary.get(KIMCHI));

// Delete
dictionary.delete(KIMCHI);
console.log(dictionary.count());

// Upsert
dictionary.upsert(KIMCHI, "밋있는 한국 음식!!!");
console.log(dictionary.get(KIMCHI));
dictionary.upsert(KIMCHI, "진짜 밋있는 한국 음식!!!");
console.log(dictionary.get(KIMCHI));

// Exists
console.log(dictionary.exists(KIMCHI));

// Bulk Add
dictionary.bulkAdd([
  { term: "A", definition: "B" },
  { term: "X", definition: "Y" },
]);
dictionary.showAll();

// Bulk Delete
dictionary.bulkDelete(["A", "X"]);
dictionary.showAll();
