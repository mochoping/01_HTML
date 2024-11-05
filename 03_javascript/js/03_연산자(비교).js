/*두 수가 같은지 비교*/

const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");
/*
 자바스크립트의 꽃 3항 연산자.
    (두개의 값 비교)   ?  "t일때 출력  "  
                      :  "f일때 출력  " ;
*/
function 비교하기1() {
  r1.innerText = v1.value == v2.value ? "같습니다." : "같지 않습니다.";
  r1.style.color = v1.value == v2.value ? "orange" : "cyan"; // 결과값에 따라서 색상이 달라짐
  r1.style.backgroundColor = v1.value == v2.value ? "black" : "white"; // 결과값에 따라서 색상이 달라짐
}

const v3 = document.getElementById("input3");
const v4 = document.getElementById("input4");
const r2 = document.getElementById("result2");

function 비교하기2() {
  r2.innerText =
    v3.value > v4.value
      ? "좌측 숫자 값이 더 큽니다."
      : "우측 숫자값이 더 크거나 같습니다";
  r2.style.color = v3.value > v4.value ? "yellowgreen" : "lightblue";
}
