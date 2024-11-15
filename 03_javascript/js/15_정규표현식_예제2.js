function checkEmail() {
  const userEmail = document.getElementById("user-email").value;
  const errorMsg = document.getElementById("error-msg");
  /*
        /^                  졍규식시작표기
        [a-zA-Z0-9.-_$]     @(at) 이 작성되기 전에 영어 소문자 대문자 숫자 특수문자(.-_$) 포함 작성가능
        +@                  +@ 앞에 작성된 아이디 표기 뒤 @가 따라붙어야함
        [a-zA-Z0-9.-]       뒤에 회사명과 같은 도메인 명
        +\.                 회사명뒤 무조건.
        [a-zA-Z]            
        {2,}                2글자 이상
        $/                  정규식종료표기
        
        */
  const emailPattern = /^[a-zA-Z0-9.-_$]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(userEmail)) {
    errorMsg.style.display = "block";
  }
}
const userPhone = document.getElementById("user-phone").value;
const errMsg = document.getElementById("err-msg");

const phonePattern = /^010-[0-9]{4,}-[0-9]{4,}&/;

function checkPhone() {
  const phonePattern2 = /^010-\d{4}-\d{4}&/;

  if (!phonePattern.test(userPhone)) {
    errMsg.style.display = "block";
  }
}
