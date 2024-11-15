function check() {
  const uId = document.getElementById("userId").value;
  const uPw = document.getElementById("userPw").value;
  const uEmail = document.getElementById("userEmail").value;

  const uIdRegExp = /^[a-zA-Z0-9]{5,12}$/;
  const uPwRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const uEmailRegExp = /^[a-zA-Z.-_]+@\w+\.\w{2,}$/;
  if (!uIdRegExp.test(uId)) {
    alert("아이디는 5-12자의 영문자 및 숫자여야 합니다.");
    return;
  }
  if (!uPwRegExp.test(uPw)) {
    alert("비밀번호는 8자이상의 영문자 및 숫자여야 합니다.");
    return;
  }
  if (!uEmailRegExp.test(uEmail)) {
    alert("이메일 주소가 올바르지 않습니다.");
    return;
  }
}
