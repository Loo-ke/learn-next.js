import { connectDB } from "@/util/database";
import Link from 'next/link'
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  async function moveToDetail(id){

  }
  return (
    <div className="list-bg">
      {
        result.map((a,i)=>{
          return(
            <div className="list-item" key={i}>
              <Link href={`/detail/${result[i]._id}`}><h4>{result[i].title}</h4></Link>
              <DetailLink></DetailLink>
              <p>{result[i].content}</p>
            </div>
          )
        })  
      }
    </div>
  )
} 