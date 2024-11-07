/* 60 이상이면 합격, 미만이면 불합격 추가 클래스 지정*/

function checkScore() {
  const score100 = document.getElementById("score").value;
  const msg = document.getElementById("scoreMsg");

  if (60 > score100) {
    msg.innerText = "불합격입니다.";
    msg.className = "fail";
  } else {
    msg.innerText = "합격입니다.";
    msg.className = "success";
  }
}
