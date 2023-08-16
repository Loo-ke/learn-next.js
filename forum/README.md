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

### 수정삭제기능

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
