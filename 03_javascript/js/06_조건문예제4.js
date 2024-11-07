/* 
90 a
80 b
70 c
60 d
60 미만은 f
*/
function checkGrade() {
  const score = document.getElementById("inputScore").value;
  const msg = document.getElementById("gradeMsg");
  msg.innerText = "성적 :  ";

  if (score > 100) {
    alert("잘못된점수입니다.");
  } else if (score >= 90) {
    msg.innerText += " A 입니다.";
    msg.className = "A";
  } else if (score >= 80) {
    msg.innerText += " B 입니다.";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText += " C 입니다.";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText += " D 입니다.";
    msg.className = "D";
  } else if (score < 0) {
    alert("잘못된점수입니다.");
  } else {
    msg.innerText += " F 입니다.";
    msg.className = "F";
  }
}
