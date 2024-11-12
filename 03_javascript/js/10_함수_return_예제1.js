// function 의 위치나 순서는 코딩을 실행하는데 있어 위치 순서 무관 객체지향
//하지만 변수 선언의 경우 순서 상관이 있음. const price
// 각 차의 가격을 확인하고 반환하는 함수 만들것
function 차가격(model) {
  // 각 가격 확인

  if (model === "소나타") {
    return 1000;
  } else if (model === "아반떼") {
    return 1100;
  } else if (model === "제네시스") {
    return 1200;
  }
}

const result = document.getElementById("result");
function 차구매(model) {
  const price = 차가격(model);
  result.innerText =
    model + " 구매가 완료 되었습니다. 가격은 " + price + " 입니다.";
}
