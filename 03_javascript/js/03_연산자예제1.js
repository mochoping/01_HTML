const Number1 = document.getElementById("input1");
const Number2 = document.getElementById("input2");
const Number3 = document.getElementById("input3");
const result = document.getElementById("calcResult");

function plus() {
  const v1 = Number1.value;
  const v2 = Number2.value;
  const v3 = Number3.value;
  result.innerText = Number(v1) + Number(v2) + Number(v3);
}
function multi() {
  const v1 = Number1.value;
  const v2 = Number2.value;
  const v3 = Number3.value;
  result.innerText = Number(v1) * Number(v2) * Number(v3);
}
/*   
  const v1 = Number1.value;
  const v2 = Number2.value;
  const v3 = Number3.value;
    javascript 로 설정한 값을 확인하는 방법 : console.log(확인하고자 하는 변수명)

    const 변수명 = 들어온 값;


  함수들 기능 시작전에 해당값은 무조건 0

  함수안에서 다시 선언되면 값을 다시 가져온다
  */
