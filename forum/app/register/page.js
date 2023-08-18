export default function Register(){
return (
  <div>
    <h4>회원가입</h4>
    <form action="/api/register" method="POST">
    <input type="text" name="id" placeholder="아이디를 입력하세요."></input>
    <input type="password" name="password" placeholder="비밀번호를 입력하세요."></input>
    <button type="submit">회원가입</button>
    </form>
  </div>
  )
}