/*
JS 파일인 myPackage의 타입을 정의하는 파일
-> JS 파일을 사용할 때 타입을 필수로 정의해야 함
*/
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
