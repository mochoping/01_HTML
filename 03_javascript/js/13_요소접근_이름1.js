/*name으로 요소 접근하기 */

function 체크박스로벨류체크속성확인() {
  //name 속성이 취미인 요소를 모두 얻어와 hobbys 에 저장
  // name 최소 2가지 이상을 가져와서 사용
  // 각 input 을 묶어주는 역활을 함
  const hobbys = document.getElementsByName("취미");

  // 요소접근

  //alert("1번 hobbys 만작성 " + hobbys);
  //alert("2번 hobbys[0] 만작성 " + hobbys[0]);
  //alert("1번 hobbys[0].value 만작성 " + hobbys[0].value);
  for (let n = 0; n < hobbys.length; n++) {
    console.log(hobbys[n].value);
  }
  //선택한 모든 취미를 확인하는 작업을 진행할것

  // input요소.checked -> 요소가 체크되어있으면 true, 아니라면 false
  //  input요소.checked -> true 요소체크
  //  input요소.checked -> false 요소체크 안되어 있음.

  console.log("***************************************");
  console.log("input 게임요소 checked로 체크 확인하기");
  console.log(hobbys[0].checked);

  console.log("***************************************");
  console.log("input 음악감상 checked로 체크 확인하기");
  console.log(hobbys[1].checked);
}

/*checked를 이용해서 취미 몇개 선택했는지 확인하기 */
function nameBtn() {
  const hobbylist = document.getElementsByName("취미");

  let str = " "; //체크된 값 누적
  let count = 0; // 체크된 수 총 계산 카운트

  for (let i = 0; i < hobbylist.length; i++) {
    if (hobbylist[i].checked) {
      str += hobbylist[i].value + ", ";
      count++;
    }
    // document.getElementById("result").innerText = `${str} <br>선택된 취미의 갯수 총 ${count} 개`
    // Text 와 HTML 의 차이.
    document.getElementById(
      "result"
    ).innerHTML = `${str} <br>선택된 취미의 갯수 총 ${count} 개`;
  }
}
