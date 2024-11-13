function readValue() {
  //채팅이 출력되는 배경 css 가져오기
  //id 를 작성하더라도 css에서 작성하는
  //아이디 표기 방법을 사용
  //
  const bg = document.querySelector("#chatting-bg");

  // 채팅입력 input css 가져오기
  const inputChat = document.querySelector("#user-input");

  //html js를 연결지을 것

  // 입력이 안됬을 경우 메세지 전송이 안되게 해야함.
  // 1. 진짜 안적었음 (input 안에 내용물이 없어요.)
  // 2. 공백만 보냄

  /***** 문자열.trim() : 문자열의 좌우 공백을 제거 ****/
  /**
   * inputChat.value.trim().length == 0
   * inputChat.value                      input 채팅내용하는 창안에 들어있는 값의
   *                .trim()               좌우 공백을 제거하고
   *                       .length == 0   총 글자수가
   *
   */

  if (inputChat.value.trim().length == 0) {
    alert("채팅 내용을 입력해주세요.");
    return; // 채팅내용을 입력 안했으면 돌려보내기
  }

  bg.innerHTML += `<p><span>${inputChat.value}</span></p>`;
  /**
   *  bg.scrollTop : 스크롤 윗부분 위치
   *  bg.scrollHeight : 채팅을 감싸고 있는 div의 전체 높이를 표현
   *
   *  bg.scrollTop = 값 : 스크롤 윗부분을 값 위치로 이동
   *  bg.scrollTop = bg.scrollHeight = 값이 너무 크면 맨 밑으로 스크롤 이동
   *
   *
   */
  bg.scrollTop = bg.scrollHeight;
  // 전체 div 높이를 가져옴으로 스크롤을 맨 아래로 내려버리는 트릭
  inputChat.value = " "; //입력창 리셋

  //키보드 이벤트
  /*
  input 아이디 값이 user-input 인 요소에서 키보드가 작동하는 상황이 감지되었을때
  올라온 키가 'enter' 키라면 readValue()함수를 불러오기

  */
  /*
 keydown  : 키가 눌러져 있을 때
 keypress : 키가 눌러지고 있을 때
 keyup    : 눌러지던 키가 떼어졌을 때

 
 
 */
}

function 키누르기(event) {
  if (event.key === "Enter") {
    readValue();
  }
}
