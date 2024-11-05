//버튼 클릭시 body 태그 안에 있는 글자색과 배경색 변경
/*
CSS에서는 자바스크립트 기능을 작성할 수 없지만
자바스크립트에서는 CSS기능을 작성할 수 있음 (사용 권장 x)

*/
const body = document.getElementById("cssStyle");

// 다크 모드 버튼을 클릭하면 darkmode() 기능이 실행
function darkmode() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
}

function lightmode() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}
