## Next.js 개발환경 셋팅

- Node.js 설치(LTS버전, 18버전 이상)
- 에디터 설치(vscode)
- 코드 짤 작업 폴더 생성(이름 아무거나)
- 만든 파일 오픈
- 터미널 열고 명령어 입력

```
npx create-next-app@latest
```

- 프로젝트 이름 만들라고 하면 아무거나 입력
- 타입스크립트 사용? N / Y
- ESLint 사용? N / Y
- src/directory 사용? N / Y
- App router 선택하라고 하면 Y

### 다 만들어 지면?!

page.js에다가 작업하면 됨!!!

### 내 사이트를 브라우저로 미리 보고 싶다면

- 터미널에 명령어 입력

```
npm run dev
```

- 브라우저에서 localhost:3000에 접속
- 확인

## 프로젝트 파일들 설명

app 폴더 : 님들이 코드짤 폴더

page.js : 메인페이지

layout.js : 메인페이지 감싸는 용도의 페이지

public 폴더 : 이미지나 static 파일 보관용

api 폴더 : 서버기능 만드는 곳

next.config.js : nextjs 설정 파일

node_modules 폴더 : 설치한 라이브러리 보관용 폴더

package.json : 설치한 라이브러리 버전 기록용 파일

## page.js를 보여줄 때

- 옆에 layout.js 있으면 그걸로 page.js를 싸맴
- 상위 폴더에 layout.js 있으면 그걸로 1번 싸맴
- 즉, 상위에 있는 모든 layout.js 합쳐서 보여줌!!!!
- 페이지 변경과 상관없이 계속 보여줄 UI는 layout.js를 사용하는게 편하다.(예 : navbar)

## HTML 반복을 줄이고 싶으면 map

```
let arr = [2,3,4];
  arr.map((a, i)=>{
  // a = arr의 값
  // i = 반복 될 때마다 0부터 1씩 커지는 정수
  // return = 새로운 배열을 배열의 길이만큼 담아줌 /reture = 10 -> [10, 10, 10]
  })
```

## 이미지 넣기

### 최적화 된 이미지 넣기

**왜 이 방법을 사용할까?**

- lazy loading
- 사이즈 최적화
- layout shift 방지 (이미지 로딩이 느려서 사이트가 밀려나는 현상)

### 최적화된 이미지를 넣으려면?

1. `import Image from "next/Image"`
2. `<Image />` 사용
3. 이미지를 import 해서 경로에 넣어야함
   `<Image src={img1} />`

## component 만들기

1. `function 이름 (){}`
2. `return (반복할 html)`
3. `<이름 />`사용

### 컴포넌트 단점 = 데이터 공유가 귀찮음

### 왜 사용?

- 더러운 코드 한 단어로 축약
- 같은 코드 재사용

## Next.js에서의 컴포넌트

### 1. server component

- 대충 아무데나 만든 컴포넌트 = **server component**
- html에 자바스크립트 기능 넣기 **불가능**
- useState, useEffect 등 사용 불가
- 장점

1. 로딩 속도 빠름
2. 검색 엔진 노출 유리

### 2. client component

- 파일 맨 위에 'use client'를 넣고 만든 컴포넌트 = **client component**
  (무조건 맨 위에 'use client')
- html에 자바스크립트 기능 넣기 **가능**
- useState, useEffect 등 사용 가능
- 단점

1. 로딩 속도 느림(자바스크립트 많이 필요)
2. 로딩 속도 느림(hydration 필요)

#### 큰 페이지는 server component, JS 기능 필요한 곳에만 client component 사용하자~!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
