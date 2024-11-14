/**
 * /^[a-zA-Z0-9]{6,16}$/
 *
 * /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/
 *
 * /^[가-힣]{2,15}$/
 *
 */
function join() {
  //입력
  const rId = document.getElementById("resultId");
  const rPw = document.getElementById("resultPw");
  const rPwCheck = document.getElementById("resultPwcheck");
  const rName = document.getElementById("resultName");
  const rGender = document.getElementById("resultGender");
  //출력메세지

  const uId = document.getElementById("userId").value;
  const uPw = document.getElementById("userPw").value;
  const uPw2 = document.getElementById("userPw2").value;
  const uName = document.getElementById("userName").value;
  const uM = document.getElementById("male").value;
  const uFm = document.getElementById("female").value;
  //유효확인

  const uIdRegExp = /^[a-zA-Z0-9]{6,16}$/;
  const uPwRegExp =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const uNameRegExp = /^[가-힣]{2,15}$/;

  //아이디유효
  if (uIdRegExp.test(uId)) {
    rId.innerText = "유효한 아이디 형식입니다.";
  } else {
    rId.innerText = "유효하지 않은 아이디 형식입니다.";
  }
  //비번유효
  if (uPwRegExp.test(uPw)) {
    rPw.innerText = "유효한 비밀번호 형식입니다.";
    // 비밀번호확인
    if (uPw === uPw2) {
      rPwCheck.innerText = "비밀번호 확인되었습니다.";
    } else {
      rPwCheck.innerText = "동일하지 않은 비밀번호 입니다.";
    }
  } else {
    rPw.innerText = "유효하지 않은 비밀번호 형식입니다.";
  }
  //이름확인
  if (uNameRegExp.test(uName)) {
    rName.innerText = "유효한 아이디 형식입니다.";
  } else {
    rName.innerText = "유효하지 않은 아이디 형식입니다.";
  }
  //성별필수체크
  if (uM.checked) {
    rGender.innerText = "성별은 필수 선택 사항입니다.";
  }
}
