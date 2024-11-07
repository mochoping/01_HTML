/* if - 양수인지 검사하기 */
const input1 = document.getElementById("input1");

function check() {
  //input1 으로 입력받은 값 가져오기
  const v1 = Number(input1.value);

  // v1이 0 보다 클 경우
  // if (true인지 확인하고자 하는 조건) 조건이 true가 맞다면 실행하기
  // 조건 미 충족시 미실행
  if (0 < v1) {
    alert("0보다 큰 양수입니다.");
  }

  // v1 값 0이랑 같거나 0보다 작을때는
  // alert 0 과 같거나 0보다 작은수입니다.

  // =조합(!=, <=, >= 등)은 무조건 = 이 오른쪽
  if (0 >= v1) {
    alert("0 과 같거나 0보다 작은수입니다.");
  }
}
