/*
        변수 선언해서 기능 만들기
        파일안에서 얻기
        
        */
const 숫자1 = document.getElementById("input1");
const 숫자2 = document.getElementById("input2");
const 결과 = document.getElementById("계산결과");

function 더하기() {
  숫자1.value;
  숫자2.value;
  //input 태그에 작성된 값 = value
  결과.innerText = Number(숫자1.value) + Number(숫자2.value);

  /*const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = Number(숫자1) + Number(숫자2); 왜안되 */
}
function 빼기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = value1 - value2;
}
function 곱하기() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = value1 * value2;
}
function 몫() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = value1 / value2;
}
function 나머지() {
  const value1 = 숫자1.value;
  const value2 = 숫자2.value;
  결과.innerText = value1 % value2;
}
