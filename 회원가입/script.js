//1. 가입버튼 가입이 완료되었다는 알림 이후 성공.html 이동하기
//2. addEventListener 로 변경해서 작성

function 가입하기() {
  const idRegExp = /^[a-zA-Z0-9]{5,12}$/;
  const pwRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  /*

특정 문자를 포함했는가?
(?=.*[A-Za-z]) 대소문자 영어가 있는지 탐색
(?=.*\d) 숫자가 포함되어있는가


*/

  const eRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  if (!idRegExp.test(username)) {
    alert("아이디는 5-12자의 영문자 및 숫자이어야 합니다.");
    return false;
  }
  if (!pwRegExp.test(password)) {
    alert("비밀번호는 최소 8자 이상이며 문자와 숫자를 포함해야 합니다.");
    return false;
  }
  if (!eRegExp.test(email)) {
    alert("유효한 이메일 주소를 입력하세요.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
}
