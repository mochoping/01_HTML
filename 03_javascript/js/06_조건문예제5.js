function checkSeason() {
  const Month = document.getElementById("month").value;
  const msg = document.getElementById("seasonMsg");

  if (Month == 12 || Month == 1 || Month == 2) {
    msg.innerText = "겨울 입니다.";
    msg.className = "winter";
  } else if (Month == 3 || Month == 4 || Month == 5) {
    msg.innerText = "봄 입니다..";
    msg.className = "spring";
  } else if (Month == 6 || Month == 7 || Month == 8) {
    msg.innerText = "여름 입니다.";
    msg.className = "summer";
  } else if (Month == 9 || Month == 10 || Month == 11) {
    msg.innerText = "가을 입니다.";
    msg.className = "fall";
  } else {
    alert("1에서 12 사이의 숫자를 입력하세요");
    msg.innerText = "";
    msg.className = "";
  }
}
