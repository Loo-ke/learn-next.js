import { connectDB } from "@/util/database";
import Link from 'next/link'
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

// 60초동안 페이지 캐싱
export const revalidate = 20;

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()

  // // 캐싱
  // await fetch('/URL', {cache:'force-cache'})
  // // 캐싱된 결과 ㄴㄴ 코드가 실행될 때마다 요청
  // await fetch('/URL', {cache:'no-store'})
  // // 60초마다 캐싱된 데이터 갱신
  // await fetch('/URL', {next : {revalidate : 60}})

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
    </div>
  )
} 