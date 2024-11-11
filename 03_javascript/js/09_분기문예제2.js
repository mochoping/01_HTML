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

  /* 배경색상지정이 완료되기 전에 
  switch -> while 문으로 변경되는 속도가 빠르게 진행되므로 
  사람눈에 보기전에 초기화가된다.*/
  while (month !== null) {
    month = prompt(
      " 원하시는 달을 선택해 주세요. \n 1 ~ 12 까지의 숫자중 하나 선택."
    );
    //봄 3~5 여름 6~8 가울 9~11 겨울 12,1,2
    switch (month) {
      case "3":
      case "4":
      case "5":
        bgc.style.backgroundColor = "lightpink";
        btn.style.backgroundColor = "lightpink";
        alert(spring);
        break;
      case "6":
      case "7":
      case "8":
        bgc.style.backgroundColor = "lightyellow";
        btn.style.backgroundColor = "lightyellow";
        alert(summer);
        break;
      case "9":
      case "10":
      case "11":
        bgc.style.backgroundColor = "sandybrown";
        btn.style.backgroundColor = "sandybrown";
        alert(fall);
        break;
      case "12":
      case "1":
      case "2":
        bgc.style.backgroundColor = "lightblue";
        btn.style.backgroundColor = "lightblue";
        alert(winter);
        break;
      case "종료":
      case null:
        bgc.style.backgroundColor = "#f5f5f5";
        btn.style.backgroundColor = "none";
        alert(termination);
        return;
      default:
        alert(fSelect);
        break;
    }
  }
}
