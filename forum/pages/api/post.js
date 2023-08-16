import { connectDB } from "@/util/database";

export default async function handler(req,res){
  if(req.method == 'POST'){
    const data = req.body;
    const {title, content} = data;
    const db = (await connectDB).db("forum");
    await db.collection('post').insertOne({title:`${title}`, content:`${content}`})
    res.status(200).json("등록에 성공하였습니다.");
  } 
}