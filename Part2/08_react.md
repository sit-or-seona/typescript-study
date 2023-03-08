# React + TS

### 1. 일반 변수, 함수 타입지정

### 2. JSX 타입지정

JSX.Element 타입 지정

```tsx
let 박스: JSX.Element = <div></div>;
let 버튼: JSX.Element = <button></button>;
```

### 3. function component 타입지정

```tsx
function Profile(): JSX.Element {
  return <div>프로필입니다.</div>;
}
```

### 4. props 타입지정

```tsx
function App() {
  return <Profile name="선아" age=20 />;
}

function Profile(props:{name: string, age: number}): JSX.Element {
  return <div>{props.name} 프로필입니다.</div>;
}
```

### 5. useState 타입지정

State 만들 땐 자동으로 타입이 할당됨
타입이 변화할 수 있다면 Generic 문법을 사용해 미리 지정

```tsx
function App() {
  let [user, setUser] = useState<string | null>("kim");

  return <></>;
}
```
