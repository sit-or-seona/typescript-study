/* 
d.ts 파일
타입만 저장할 수 있는 파일형식(definition의 약자)
항상 로컬 모듈
-> 글로벌하게 사용하고 싶다면 types/common 폴더 생성 후 tsconfig.json에 "typeRoots": ["./types"] 추가
-> 위험할 수 있기 때문에 import & export 해서 사용하는 걸 권장
유명 자바스크립트 라이브러리들은 d.ts 제공
-> 라이브러리를 가져와 써도 타입 정의 안 해도 됨 https://www.typescriptlang.org/dt/search?search=

용도
- 타입 정의를 다른 파일로 구분할 경우
- 타입 레퍼런스를 생성할 경우 (tsconfig.json에 "declaration": false 추가)
*/

import * as a from "./12_test";
import { Age } from "./12_test";

let age: Age;
