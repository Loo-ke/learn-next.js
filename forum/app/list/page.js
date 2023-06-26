import { connectDB } from "@/util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      <div className="list-item">
        <h4>{result[0].title}</h4>
        <p>{result[0].content}</p>
      </div>
      <div className="list-item">
      <h4>{result[1].title}</h4>
        <p>{result[1].content}</p>
      </div>
    </div>
  )
} 