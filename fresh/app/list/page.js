// blahblah/list로 접속하면 상품목록 페이지를 보여주도록 만들어보자!
// URL로 페이지를 나누는 것이 라우팅
export default function List() {
  return (
    <div>
      <h2 className="title">상품목록</h2>

      <div className="food">
        <h4>상품1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $40</h4>
      </div>

    </div>
  )
}