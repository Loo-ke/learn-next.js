import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'

export default async function Edit(props){
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.postId)})
  console.log(result._id)
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/edit" method="POST">
        <input name="title" placeholder="글제목"  defaultValue={result.title}/>
        <input name="content" placeholder="글내용" defaultValue={result.content}/>
        <input name="_id" defaultValue={result._id.toString()} style={{display:'none'}}/>
        <button type="submit">전송</button>
      </form>
    </div>
  )
}