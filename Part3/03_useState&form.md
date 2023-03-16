## React + TS

### 1. useState

- useState를 사용할 때, 타입 정의를 안 해도 자동으로 정의됨
  -> 상태가 null 일 수도 있다면 타입 지정

```ts
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);
```

### 2. Form

- onSubmit의 타입을 지정해서 컴포넌트에 내려줘야 함
- handleSubmit, onChange와 같은 이벤트의 e 객체 타입을 지정해야 함
  (마우스 커서를 올리면 어떤 타입인지 확인 가능)

```ts
import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
```
