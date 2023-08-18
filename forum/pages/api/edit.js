import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'
export default async function handler(req,res){
  const data = req.body;
  const {title, content, _id} = data;

  if(req.method == 'POST'){
    if(data.title == "" || data.content == ""){
      return res.status(500).json("문구를 입력하세요!")
    }
    try{
      const db = (await connectDB).db("forum");
      await db.collection('post').updateOne({_id : new ObjectId(_id)},{$set : {title:`${title}`, content:`${content}`}})
      // res.status(200).json("성공~");   
      res.status(200).redirect(302,"/list");   
    }catch(error){
      return res.status(500).json(error)
    }
  } 
}