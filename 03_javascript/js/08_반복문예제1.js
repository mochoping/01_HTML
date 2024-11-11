function check1() {
  let val; // undefined = 값이 없는 상태
  //변수 선언만 진행후, 이후 값을 담기위한것.

  //while 문을 이용해서 취소를 누르기 전까지 반복하고
  //== 취소를 누르면 반복하지 않겠다 설정
  //prompt 취소 = null 값이 버튼 안에 들어가 있음

  while (val !== null) {
    // val에 값이 들어왔을때,
    /* 
    !== 값과 자료형이 모두 다른 경우 true
    === 값과 자료형이 모두 같을 경우 true
    
    */
    val = prompt("입력 후 확인하기"); // 변수에 prompt 값 대입
    //확인 -> 입력한 값
    //취소 -> null

    alert(val + " 값을 확인했습니다. ");
  }
}
function check2() {
  let age; // 값이 없음

  while (age !== null) {
    age = prompt("나이를 입력하세요.");
    //else if 13 세 이상은 청소년, 나머지는 어린이
    if (age >= 18) {
      alert("삑, 성인입니다.");
    } else if (age >= 13) {
      alert("삐빅, 청소년입니다.");
    } else if (age == null) {
      alert("나이가 입력되지 않았습니다.");
    } else {
      alert("삐쀼, 어린이입니다.");
    }
  }
}

function check3() {
  let gender;
  while (gender !== null) {
    gender = prompt("성별을 입력하세요.");
    if (gender == "남성" || gender == "남자") {
      alert("남성 확인되었습니다.");
    } else if (gender == "여성" || gender == "여자") {
      alert("여성 확인되었습니다.");
    } else if (gender == null) {
      alert("미입력 되었습니다.");
    } else {
      alert(gender + " 확인되었습니다.");
    }
  }
}
