function check1() {
  //onclick = function
  /*
for([1]초기식 ;  [2]조건식;  [4]증감식){
    [3]조건식이 true 일때 반복.

}*/

  //for() 안에서 공간을 구붓짓는 기준은; 로 표시한다
  //for 문 안에는 상수대신 변수 (Lat젼수)를 사용함
  let 결과 = "";
  // 빈 문자 제공
  /**
   * 숫자 ++ ===> 숫자 = 숫자 + 1
   *
   */

  for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
    결과 += 숫자;
    console.log("결과 :" + 결과);
  }

  console.log("====================");
  console.log("최종으로 철력되는 결과 값은");
  console.log(결과 + " 입니다.");
}
/* 1부터 10까지 연속 출력 숫자 표기*/
function check2() {
  let 결과 = 0;
  for (let a = 1; a <= 10; a++) {
    결과 += a;
    console.log("1 ~10:" + a);
  }
  alert(결과);
}

/* 1부터 20까지 */

function check3() {
  let 결과 = 0;
  for (let a = 1; a <= 20; a++) {
    결과 += a;
    console.log("1 ~20:" + a);
  }
  alert(결과);
}
/* 5부터 15까지 */

function check4() {
  let 결과 = 0;

  for (let a = 5; a <= 15; a++) {
    결과 += a;
    console.log("5 ~15:" + a);
  }
  alert(결과);
  // 지역변수는 지역 종료후 초기화
}

function while5() {
  let n = 5;
  while (n <= 20) {
    console.log(n);
    n++;

    if (n == 15) {
      break;
    }
  }
}
