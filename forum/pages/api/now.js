export default function handler(req,res){
  const now = new Date()
  return res.status(200).json(now)
}