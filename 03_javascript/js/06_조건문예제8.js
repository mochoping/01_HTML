function gender() {
  let gdr = prompt("성별을 입력해주세요.(남성/ 여성만 입력가능");

  switch (gdr) {
    case "남성":
      break;
      alert("남성을 입력했네요!"); // 브레이커가 없으면 뒤쪽 css 들이 의미가 사라짐.
    case "여성":
      alert("여성을 입력했네요!");
      break;
    default:
      alert("올바른 성별을 입력해주세요. 남성/여성");
      break;
  }
}
function order() {
  let menu; // 아래 menu 는 위 변수명에 들어간 값을 사용한다는 의미
  menu = prompt(
    "원하는 메뉴를 선택해주세요.\n 삼겹상 부대찌게, 김치찌개 \n만 입력가능"
  );
  switch (menu) {
    case "삼겹살":
      alert("삼겹살을 선택하였습니다. \n 가격은 12,000원 입니다");
      break; // switch 까지만 나가는 제어문
    case "부대찌개":
      alert("부대찌개를 선택하였습니다. \n 가격은 10,000원 입니다");
      break;
    case "김치찌개":
      alert("김치찌개를 선택하였습니다. \n 가격은 9,000원 입니다");
    case "종료":
      alert("주문이 종료되었습니다.");
      return; // break 대신에 return 작성 , while까지 종료하는 구문
    default:
      alert("잘못입력하셨습니다.");
  }
}
