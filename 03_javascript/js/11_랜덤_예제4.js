const result = document.getElementById("result");

function pickFruit() {
  const fruit = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "블루베리",
    "복숭아",
  ];
  const randomIndex = Math.floor(Math.random() * fruit.length);
  const randomFruit = fruit[randomIndex];

  result.innerText = `랜덤으로 뽑힌 과일 : ${randomFruit}`;
  //result.innerText = "랜덤으로 뽑힌 과일 : " + randomFruit;

  console.log("총 과일 갯수 : " + fruit.length);
  console.log("인덱스 5번 값 : " + fruit[5]);
}
// 큰 따옴표와 작은 따음포료 문자열과 변수명을 구분짓지 않고 한번에 작성하는 방법
/*
변수명에는 ${변수명}으로 표기.
 result.innerText = `랜덤으로 뽑힌 과일 : ${randomFruit}`




*/
