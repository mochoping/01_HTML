/* 어린이 청소년 성인 판별 */
function check4() {
  // 입력한 나이값 가져오기
  const age = document.getElementById("inputAge").value;

  // 13세이하 어린이
  if (age >= 0 && age <= 13) {
    alert("어린이 입니다.");
  } else if (age >= 19 && age <= 120) {
    //19세 이상이면 성인
    alert("성인 입니다.");
  } else if (age >= 14 && age <= 18) {
    alert("청소년 입니다.");
  } else {
    alert("잘못입력하셨습니다.");
  }
}
