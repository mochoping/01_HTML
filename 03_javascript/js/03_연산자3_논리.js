// document.get ~ 등 가져오는 값은 먼져 설정후 함수작성이 규칙
// value 제외

const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {
  // ID , PW input에 작성된 값 가져오기
  // 가져오기 할때 값 형식 확인
  const id = inputId.value; // 소비자가 작성한 아이디값 최종적으로 가져오기
  const PW = inputPw.value; // 소비자가 작성한 비밀번호값

  // member01
  // pass01

  // 알림 문구가 길어지는 경우
  const suc = "로그인 성공";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";
  "member01" == id && "pass01" == PW ? alert(suc) : alert(fail);
}

function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg")(pn || tn)
    ? (msg.style.display = "none")
    : (msg.style.display = "block");
}
