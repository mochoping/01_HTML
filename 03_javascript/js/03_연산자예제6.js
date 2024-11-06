const pw = document.getElementById("inputPW");
const pwConfirm = document.getElementById("inputPWConfirm");

function checkPw() {

const suc = "일치합니다.";
const fail ="일치하지 않습니다.";


pw.value == pwConfirm.value  ? alert("일치합니다.") : alert("일치하지 않습니다.");
  


}