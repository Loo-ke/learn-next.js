
export default function Register(){
return (
  // <div>
  //   <h4>회원가입</h4>
  //   <form action="/api/register" method="POST">
  //   <input type="text" name="id" placeholder="아이디를 입력하세요."></input>
  //   <input type="password" name="password" placeholder="비밀번호를 입력하세요."></input>
  //   <button type="submit">회원가입</button>
  //   </form>
  // </div>
  <div>
  <form method="POST" action="/api/auth/signup">
    <input name="name" type="text" placeholder="이름" /> 
    <input name="email" type="text" placeholder="이메일" />
    <input name="password" type="password" placeholder="비번" />
    <button type="submit">id/pw 가입요청</button>
  </form>
</div>
  )
}