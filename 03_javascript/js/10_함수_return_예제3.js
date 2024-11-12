const result = document.getElementById("result");
function 메뉴(soul) {
  const price = 메뉴가격(soul);
  if (price > 0) {
    result.innerText =
      soul + " 주문이 완료되었습니다. 가격은 " + price + " 입니다.";
  } else {
    result.innerText = "재료가 모두 소진되어 주문이 불가능 합니다.";
  }
}
function 메뉴가격(soul) {
  switch (soul) {
    case "비빔밥":
      return 8000;
    case "김치찌개":
      return 7000;
    case "된장지개":
      return 7000;
    default:
      return 0;
  }

  /* if (soul === "비빔밥") {
    return 8000;
  } else if (soul === "김치찌개") {
    return 7000;
  } else if (soul === "된장지개") {
    return 7000;
  } else {
    return 0;
  }*/
}
