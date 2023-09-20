import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req,res){
  let session = await getServerSession(req,res,authOptions)
  if(req.method == 'POST'){
    try{
      const db = (await connectDB).db("forum");
      const result = await db.collection('post').findOne({_id : new ObjectId(req.body)})
      // console.log("result",result)
      console.log("session",session)
      if(session.user.role == 'admin'){
        await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
      }else{
        if(result.auth === session.user.email){
          await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
          res.status(200).json("삭제완료");
        }else{
          console.log("이메일이 맞지 않습니다.")
        }
      }
      
    }catch(error){
      return res.status(500).json(error)
    }
  }


    
  
}