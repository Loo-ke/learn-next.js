// export defualt 를 import 할 때 중괄호 안써도 됨
// import age from "./date.js"

// export {}를 import 할 때 중괄호 사용해야함
import {age,name} from "./date.js"

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
} 

// 컴포넌트
function CartItem(){
  return(
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
      <p>{age}</p>
    </div>
  )
}