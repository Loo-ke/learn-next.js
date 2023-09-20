import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req,res){
  let session = await getServerSession(req, res, authOptions);
  const data = req.body;
  const {_id, title, content} = data;
  if(session){
    data.auth = session.user.email;
    if(req.method == 'POST'){
      if(data.title == "" || data.content == ""){
        return res.status(500).json("문구를 입력하세요!")
      }
      try{
        const db = (await connectDB).db("forum");
        await db.collection('post').insertOne(data)
        // await db.collection('post').insertOne({title:`${title}`, content:`${content}`})
        res.status(200).json("글 작성 성공!");
        
      }catch(error){
        return res.status(500).json(error)
      }
    } 
  }
  
  

}