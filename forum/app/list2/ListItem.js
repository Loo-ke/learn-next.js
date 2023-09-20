'use client'
import Link from "next/link"

export default function ListItem({result}){
    
  return (
    <div>
      {
        result.map((a,i)=>{
          const data = {
            _id: result[i]._id.toString(),
            title: result[i].title,
            content: result[i].content,
          };
          return(
            <div className="list-item" key={i}>
              <Link href={`/detail/${data._id}`}><h4>{data.title}</h4></Link>
              <Link href={`/edit/${data._id}`} className="edit">수정</Link>
              <span style={{cursor:'pointer', border:'1px solid black', borderRadius:"10px", padding:'0 6px', marginLeft:'3px'}} onClick={()=>{
                fetch('/api/delete' , {
                  method : "POST", body:data._id
                })
                .then((r)=>{
                  if(r.status == 200){
                    return r.json()
                  }else{
                    console.log("서버오류!")
                  }
                })
                .then((result)=>{
                  console.log(result)
                })
                .catch((error)=>{
                  console.log(error)
                })
              }}>삭제</span>
              {/* <DetailLink></DetailLink> */}
              <p>{result[i].content}</p>
            </div>
          )
        })  
      }
    </div>
  )
}