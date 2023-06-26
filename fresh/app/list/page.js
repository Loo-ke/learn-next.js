'use client'
// import Image from 'next/image'
// import img1 from "/public/food0.png"
// import img2 from "/public/food1.png"
// import img3 from "/public/food2.png"
import {useState} from 'react'

// blahblah/list로 접속하면 상품목록 페이지를 보여주도록 만들어보자!
// URL로 페이지를 나누는 것이 라우팅
export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  //map 사용법
  let arr = [2,3,4];
  arr.map((a, i)=>{
  // a = arr의 값  
  // i = 반복 될 때마다 0부터 1씩 커지는 정수
  // return = 새로운 배열을 배열의 길이만큼 담아줌 /reture = 10 -> [10, 10, 10]

  })
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {
        상품.map((a, i)=>{
          return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{상품[i]} $40</h4>
            <span> {count[i]} </span>
            <button onClick={()=>{
              let copy =  [...count]
              copy[i]++
              setCount(copy)
            }}>+</button>
          </div>
          )
        })    
      }
    </div>
  )
}