import { connectDB } from "@/util/database";

export default async function handler(req,res){
  if(req.method == 'POST'){
    const data = req.body;
    const {id, password} = data;
    if(data.id == ""){
      return res.status(500).json("아이디를 입력하세요!")
    }
    if(data.password == ""){
      return res.status(500).json("비밀번호를 입력하세요!")
    }
    try{
      const db = (await connectDB).db("forum");
      await db.collection('user').insertOne({id:`${id}`, password:`${password}`})
      res.status(200).redirect("/list");   
    }catch(error){
      return res.status(500).json(error)
    }
  } 
}