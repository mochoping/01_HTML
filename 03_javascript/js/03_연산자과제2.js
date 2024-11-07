const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const Mp = document.getElementById("inputMp");
const Tp = document.getElementById("inputTp");
const msg = document.getElementById("msg");

function singup() {
  const pn = Mp.value;
  const tn = Tp.value;

  pn || tn ? (msg.style.display = "none") : (msg.style.display = "block");
}

function login() {
  const id = inputId.value;
  const pw = inputPw.value;

  id == "khtzzang" && pw == "kht1004"
    ? alert("로그인성공!")
    : alert("로그인실패!");
}

//기능별 로그인과 성공 실패여부 확인

//전화/휴대폰 가입 확인후 문구 표시하기
// khtzzang / kht1004
