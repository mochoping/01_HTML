function checkAge() {
  const age = document.getElementById("age").value;
  const msg = document.getElementById("ageMsg");

  if (18 > age) {
    msg.innerText = "18세 이상만 관람가능합니다.";
    msg.className = "fail";
    //msg.style.color = "red";
    //msg.style.backgroundColor = "orange";
  } else {
    msg.innerText = "관람가능합니다.";
    msg.className = "success"; //p 태그 내에 success 라는 표기가 추가된다
    // msg.style.color = "green";
    // msg.style.backgroundColor = "lightpink";
  }
}
/******className과 style JS 속성 차이점 ******/
/*
변수명.className = 스타일 4순위
                   css 스타일 태그안에 작성된 css클래스 속성명 불러오기 실행
                   불러온 스타일을 추가

변수명style.속성(배경색,글자색,폰트크기 등) = 스타일 2순위
    변수명.className 보다 스타일 적용 우선순위가 높기 때문에 사용자제 필요
    한번 조건에 따라 설정된 스타일이 변경 안되는 경우가 많음

*/
