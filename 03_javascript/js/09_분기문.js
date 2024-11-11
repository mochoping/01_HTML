/* break 확인 */
let result = 0;

function check1() {
  //1부터 10까지 1씩 증가하다가
  //5가 되면 멈춤

  //1. for 문을 이용해서
  // 1 부터 5까지의 합을 출력
  // alert으로

  for (let n = 1; n <= 10; n++) {
    result += n;
    if (n == 5) {
      break;
      // 조건수식 만족시 for문을 모두 중단. 중단하기전 저장된 값을 가진상태로 종료
    }
  }
  alert(result);
}
// 1-20 for문
//15 에서 멈춤

function check2() {
  for (let n = 1; n <= 20; n++) {
    result += n;
    if (n == 15) {
      break;
    }
  }
  alert("총 더한값은  [ " + result + " ] 입니다.");
}

// 1부터 20까지 출력
// 만약 3의 배수인 경우 멈추고 탈출하기

function check3() {
  for (let n = 1; n <= 20; n++) {
    console.log("n의 값 :" + n);
    if (n % 3 == 0) {
      break;
    }
  }
  console.log("n의 값 [ " + n + "]");
  alert(result);
}
/*
while  문 기본 구조
while(조건){
//반복할 코드
}

*/
// 기능 버튼을 누르면 1~5까지 숫자 더한값 출력
function while1() {
  let num = 1;

  while (num <= 5) {
    alert("숫자 값은 " + num + " 입니다.");
    num++;
  }
}

function while2() {
  let abc = 0;
  let n = 1;
  while (n <= 10) {
    abc += n;
    n++;
    console.log(abc);
  }
}
function while3() {
  let abc = 0;
  let n = 1;
  while (n <= 10) {
    abc += n;
    n = n + 1;
    console.log(abc);
    if (n == 6) {
      break;
    }
  }
}

function while4() {
  let xyz = 0;
  while (xyz <= 20) {
    xyz++;
    console.log(xyz);
  }
}
// html과 js 반복문 코드에 function while 5 버튼생성.
// 시작숫자 5, 20으로 끝나는, while 조건
// 중간에 15라는 숫자를 만나면 중단
