const result = document.getElementById("result");

const fruit = [, "사과", "오렌지", "바나나", "체리", "망고"];

function select() {
  const fruitNumber = document.getElementById("fruitNumber").value;

  if (
    fruitNumber == 1 ||
    fruitNumber == 2 ||
    fruitNumber == 3 ||
    fruitNumber == 4 ||
    fruitNumber == 5
  ) {
    result.innerText = `선택한 과일 : ${fruit[fruitNumber]}`;
  } else {
    result.innerText = "1-5사이 숫자를 입력해주세요!";
  }

  /* switch (fruitNumber) {
    case "1":
      result.innerText = `선택한 과일 : ${fruit[fruitNumber]}`;
      break;
    case "2":
      result.innerText = `선택한 과일 : ${fruit[fruitNumber]}`;
      break;
    case "3":
      result.innerText = `선택한 과일 : ${fruit[fruitNumber]}`;
      break;
    case "4":
      result.innerText = `선택한 과일 : ${fruit[fruitNumber]}`;
      break;
    case "5":
      result.innerText = `선택한 과일 : ${fruit[fruitNumber]}`;
      break;
    default:
      result.innerText = "1-5사이 숫자를 입력해주세요!";
      break;
  }*/
}
