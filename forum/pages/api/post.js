import { connectDB } from "@/util/database";

export default async function handler(req,res){
  const data = req.body;
  const {_id, title, content} = data;
  if(req.method == 'POST'){
    if(data.title == "" || data.content == ""){
      return res.status(500).json("문구를 입력하세요!")
    }
    try{
      const db = (await connectDB).db("forum");
      await db.collection('post').insertOne({title:`${title}`, content:`${content}`})
      res.status(200).redirect("/list");   
    }catch(error){
      return res.status(500).json(error)
    }
  } 

}