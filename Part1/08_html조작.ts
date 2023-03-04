/*
타입스크립트로 HTML조작
셀렉터로 html을 찾으면 타입이 Element | null

-> Narrowing이 필요

1. if(제목 !== null)
2. instanceof: if(제목 instanceof Element)
3. as: let 제목 = document.querySelector("#title") as Element
4. ?.(옵셔널체이닝): if(제목?.innerHTML !== undefined)
*/

let 제목 = document.querySelector("#title");
// if (제목 !== null) {
// if (제목 instanceof Element) {
if (제목?.innerHTML !== undefined) {
  제목.innerHTML = "반가워요";
}

/*
<a> 태그의 href 속성 바꾸기

instanceof Element 입력시 에러 발생
-> Element의 타입을 명확히 지정해야 함!
*/
let 링크 = document.querySelector(".link");
// 에러 if (링크 instanceof Element) {
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

/* 
Event Listener 부착
-> Narrowing이 필요 (?. 옵셔널체이닝)
*/
let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});

// Q1. 버튼을 누르면 이미지를 바꿔봅시다.
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

// Q2. 바꾸고 싶은 html 요소가 많습니다.
// 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다.
let 링크들 = document.querySelectorAll(".naver");
링크들.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
