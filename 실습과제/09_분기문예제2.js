function selectMonth() {
  let month;
  const result = document.getElementById("result");
  const bgc = document.getElementById("seasonColor");
  const btn = document.getElementById("btn");
  const spring = "봄을 선택하셨습니다.";
  const summer = "여름을 선택하셨습니다.";
  const fall = "가을을 선택하셨습니다.";
  const winter = "겨울을 선택하셨습니다.";
  const fSelect = "잘못된 선택입니다. 다시 입력해주세요.";
  const termination = "선택이 종료되었습니다.";

  while (month !== null) {
    month = prompt(
      " 원하시는 달을 숫자로 입력해 주세요. \n 봄(3 ~ 5) 여름( 6 ~ 8 ) 가을( 9 ~ 11 ) 겨울( 12, 1, 2)\n 종료를 원하신다면 취소나 종료입력."
    );
    //봄 3~5 여름 6~8 가울 9~11 겨울 12,1,2
    switch (month) {
      case "3":
      case "4":
      case "5":
        result.innerText = spring;
        bgc.style.backgroundColor = "lightpink";
        btn.style.backgroundColor = "lightpink";
        return;
      case "6":
      case "7":
      case "8":
        result.innerText = summer;
        bgc.style.backgroundColor = "lightyellow";
        btn.style.backgroundColor = "lightyellow";
        return;
      case "9":
      case "10":
      case "11":
        result.innerText = fall;
        bgc.style.backgroundColor = "sandybrown";
        btn.style.backgroundColor = "sandybrown";
        return;
      case "12":
      case "1":
      case "2":
        result.innerText = winter;
        bgc.style.backgroundColor = "lightblue";
        btn.style.backgroundColor = "lightblue";
        return;
      case "종료":
      case null:
        result.innerText = termination;
        bgc.style.backgroundColor = "#f5f5f5";
        btn.style.backgroundColor = "#f5f5f5";
        return;
      default:
        alert(fSelect);
        break;
    }
  }
}
