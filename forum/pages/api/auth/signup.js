import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res){
  if(req.method == 'POST'){
    if(req.body.name == ''){
      console.log("이름을 입력하세요.")
    }else{
      if(req.body.email == ''){
        console.log("이메일을 입력하세요.")
      }else{
        if(req.body.password == ''){
          console.log("비밀번호를 입력하세요.")
        }else{
          let hashedPW = await bcrypt.hash(req.body.password, 10)
          req.body.password = hashedPW
          const db = (await connectDB).db("forum");
          await db.collection('user').insertOne(req.body)
          res.status(200).json('가입성공')
        }
      }
    }
    
  }
}