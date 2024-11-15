const divBtn = document.getElementById("divBtn");

/** 이벤트 모델 작성 방법
 * 요소.addEventListener("이벤트종류", 이벤트 핸들러(함수));
 *
 *
 *
 */
// 클릭했을 때, 어떤 기능을 발휘할 것인지 설정
divBtn.addEventListener("click", function () {
  alert("클릭되었습니다.");
});
