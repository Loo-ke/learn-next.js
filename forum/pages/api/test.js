export default function handler(req,res){
  if(req.method == 'POST'){

  }
  if(req.method == 'GET'){
    return res.status(200).json("안녕하세요.")
  }
}