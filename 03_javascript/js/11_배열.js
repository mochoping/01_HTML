/* 배열 선언 및 기초 사용법 */
function check1() {
  //배열 선언방법 확인
  const arr1 = new Array(); //배열생성
  const arr2 = [];
  //arr1 과 arr2 둘 다 빈 배열을 생성
  //자바스크립트에서는 [] 을 더 선호 . 직관적이고 더 간단해서
  const arr3 = new Array(3);
  //           [        ,        ,        ]
  const arr4 = ["홍길동", "박철수", "강영식"];
  // 자리까지 고정
  // 배열명.length : 배열의 길이(저장된 칸수 혹은 데이터수 확인 가능)
  alert(arr4.length + " 입니다.");

  /*
주의할점 !!!!

const 변수명 = 배열값을 세팅할때
              []를 작성하면 왼쪽에 new 를 붙이지 않음.
              대괄호 미사용시, new Array  사용해여 배열이라는 표기 진행.



*/

  // 배열의 index(색인,번호)
  /* 
- 배열의 각 칸을 구분하는 번호로
0부터 시작, 중간 번호를 건너뛰거나 생략할수 없다.(항상 연속적)
마지막 index는 항상 배열길이 -1

*/
  const arr5 = ["A", "B", "C", "D", "E"];
  //     index   0    1    2    3    4       length = 5
  // index 사용 방법
  //"A" = index 0 번재를 표현하는 방법
  //
  console.log("arr5 의 0번째 값은 : " + arr5[0]);
  console.log("arr5 의 1번째 값은 : " + arr5[1]);
  console.log("arr5 의 2번째 값은 : " + arr5[2]);
  console.log("arr5 의 3번째 값은 : " + arr5[3]);
  console.log("arr5 의 4번째 값은 : " + arr5[4]);
  console.log("arr5 의 5번째 값은 : " + arr5[5]); //undefined
}
const arr6 = []; //빈공간생성, 빈공간에 값집어넣기
arr6[0] = 100;
arr6[1] = "낙엽이 떨어진다.";
arr6[2] = true;
//자바는 안되고 자바스크립트만 가능함

const arr7 = [];
arr7[1] = 200;
//0 에 빈공간 생성.
//arr7 = [   , 200];
arr7[3] = "하늘색";
//지정해주지 않은 앞쪽 공간은 빈공간으로 남아있음.
