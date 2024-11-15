function agreeCheck() {
  const agree1 = document.getElementById("약관동의1").checked;
  const agree2 = document.getElementById("약관동의2").checked;
  const agree3 = document.getElementById("약관동의3").checked;

  const AGA = agree1 && agree2 && agree3;
  if (!AGA == true) {
    alert("모든 필수 약관에 동의해야 합니다.");
    return;
  } else {
    //alert("제출이 완료되었습니다.");
  }
  setTimeout(() => {
    window.location.href = "1115_회원가입.html";
  }, 300);
}
