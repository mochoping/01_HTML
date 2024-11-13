/* 클래스 접근 테스트*/
function clstest() {
  /*
        NodeList = 유사배열 = 배열과 비슷하지만 배열이 아님
        배열처럼 index,length 는 가지고 있으나 
        배열 전용기능 (매서드)를 제공하지 않음
        
        index = [] 0번째부터 length-1번까지 번로 매기는것
                    자동으로 번호가 매겨짐
        length =[] 안에 값이 얼마나 들어있는지 1부터 갯수를 세는 것

        
        */
  const divs = document.getElementsByClassName("cls");
  // 유사배열( = HTMLCollection = html 묶음들)

  //1. divs =cls 중에서 0 번째로 작성된 div 요소 배경색 변경
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "lightblue";
  /*for 문으로 각 div 안에 innerText로
    ``사용해서 ~ 번째 div입니다 가 들어가게 하기

    dics.length = 3;
    */
  for (let i = 0; i < 3; i++) {
    divs[i].innerText = `${i}번째 div 입니다.`;
  }
}

function clsSpn() {
  const spns = document.getElementsByClassName("spn");

  spns[0].style.backgroundColor = "red";
  spns[1].style.backgroundColor = "orange";
  spns[2].style.backgroundColor = "yellow";
  spns[3].style.backgroundColor = "green";
  spns[4].style.backgroundColor = "blue";
}
