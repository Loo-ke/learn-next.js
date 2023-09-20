# 게시판 기능 만들기!

## MongoDB

### 몽고디비 Database 만들고 연결!

1. `npm install mongdb`
2. util/database.js에

```
import { MongoClient } from 'mongodb'
const url = 'DB접속URL~~'
<!-- .env파일에 url을 넣을 시 -->
<!-- const url = process.env.MONGODB_URL; -->
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
```

3. 깃허브에 url 노출되는게 싫어서 .gitignore파일에 .env 추가하고
4. .env파일에 `MONGODB_URL='mongodb+srv://jonguk:<PASSWORD></PASSWORD>@forum.6bewhkc.mongodb.net/?retryWrites=true&w=majority'`추가함

## 게시판 기능

### 글목록 조회기능

#### 1. HTML 페이지 만들기

- HTML 코드 작성
- CSS 코드 작성

#### 2. MongoDB에 있는 데이터 출력

```
const client = await connectDB;
const db = client.db("forum")
let result = await db.collection('post').find().toArray()
```

#### 3. HTML에 출력

```
import { connectDB } from "@/util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  return(
    <div className="list-item">
      <h4>{result[i].title}</h4>
      <p>{result[i].content}</p>
    </div>
  )
}
```

### 상세페이지

#### 다이나믹 라우트

- /list/detail/어쩌구저쩌구
  디테일은 동일한데 디테일 뒤에 붙는 url이 계속 달라질땐 다이나믹라우터를 사용해보자
- url이 달라도 보이는 내용이 똑같은데..?
  - 컴포넌트에 props를 입력하면 부모요소에서 가져온 값 뿐만 아니라 url에 입력된 정보도 가져올 수 있다!

#### list 페이지에서 list 클릭 시 이동하게 만들어보자

#### useRouter

'use client' 환경에서만 사용 가능
`import {useRouter} from "next/navigation"`
`useRouter().push('이동할 경로')`

#### 왜 사용?

- 뒤로 가기, 앞으로 가기 등 다양한 기능 지원

```
const router = useRouter()
router.back() //뒤로 가기
router.forward() //앞으로 가기
router.refresh() //바뀐 내용만 새로고침
router.prefetch() //
```

```
usePathname() // 현재 URL 출력
useSertchParams() // 쿼리스트링 출력
useparams() // 유저가 [다이나믹 라우트]에 입력한 내용 출력
```

### 글발행기능

#### 기능 개요

1. 글 작성페이지 필요
2. 버튼 누르면 서버에 저장
3. 서버는 글을 검사하고 괜찮으면 DB에 저장

### 수정삭제기능

#### 기능 만들기

1. 글마다 수정버튼, 누르면 수정페이지 이동
2. 수정페이지 만듬(글 가져와서 채워야함)
3. 등록 누르면 DB에 글 수정

#### 배포?

1. 터미널에서 'npm run build'

- 코드 짠거를 html, css, js로 만들어줌
- 동그라미기호 = static rendering
- 람다 기호 = dynamic rendering (유저가 페이지 접속때마다 html을 새로 만들어서 보내줌)

2. npm run start

#### static rendering에서 dynamic rendering으로 바꾸기

- 해당 페이지 코드에 접속해 `export const dynamic = 'force-dynamic` 작성
  - 서버나 DB 부담이 심해질 수 있음
  - 캐싱기능을 사용하면 괜찮(캐싱 = 결과를 잠깐 저장해두고 재사용) / (페이지 캐싱 = 페이지 완성본을 잠깐 저장하고 재사용)
    - GET 요청 결과를 캐싱할 수 있음
- 반대로 static은 `export const static = 'force-static`

### 로그인 기능

#### OAUTH

- 구글 등에서 로그인 계정 정보를 빌려옴

#### next-auth

- `npm install next-auth`

##### next-auth 세팅

1. api 폴더 안에 auth 폴더 생성
2. [...nextauth].js 파일 생성
3. 코드 작성

#### session 방식

- DB adapter
  1. 첫 로그인 시 자동 회원가입(DB에 보관)
  2. 로그인 시 DB에 세션정보 보관
  3. 현재 로그인된 유저정보 DB에서 조회

#### DBadapter

- 세팅

1. `npm install @next-auth/mongodb-adapter`
2. `npm run dev`
3. [...nextauth].js 파일에 authOptions 안에 `adapter : MongoDBAdapter(connectDB)`추가

- 다른 DB 쓰려면 다른 DB adapter 찾아서 사용

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
