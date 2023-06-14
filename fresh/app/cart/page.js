// export defualt 를 import 할 때 중괄호 안써도 됨
// import age from "./date.js"

// export {}를 import 할 때 중괄호 사용해야함
import {age,name ,test} from "./date.js"

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {test}
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]}/>
      <Banner card={"현대"} />
      <Banner card={"롯데"} />
      <CustomButton color={"red"}/>
      <CustomButton color={"blue"}/>
    </div>
  )
} 

function Banner(props){
  return <h4 style={{textAlign:'center'}}>{props.card}카드 결제 행사중</h4>
}

function CustomButton(props){
  return <button style={{backgroundColor:props.color}}>버튼</button>
}
// 컴포넌트
function CartItem(props){
  return(
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
      {/* <p>{age}</p> */}
    </div>
  )
}