


// let count =0; 초기 카운트 할 값을 설정( 누적에 대한 결과를 저장하는 함수)

let count = 0;
// 변경이 되는 숫자를 담는 공간 
// 변경될 숫자를 사용시 const가 아니라 let 사용
// const는 값의 변화를 좋아하지 않음
// new  새로운변수명 = 들어올 값;
// const  새로운변수명 = 들어올 값;
// let  새로운변수명 = 들어올 값;
// 처음에만 선언후 이후 다시 붙이지 않음
function minus() {
    // result = document.getElementById("result1").innerText = 5; 이걸 나눈것
    const result = document.getElementById("result1");
    const input = document.getElementById("input1").value ;
    //Number 문자를 숫자로 변경할시 Value 라 적힌 문자열을 감싸 주는것이 좋음
    count -= input;
    result.innerText = count;
    // input에 작성한 값은 value 라는  속성으로 값 가져오기를 할 수 있음
    //자바스크립트에서 가져오기 기능을 value 라는 이름으로 작성한것 
}


function plus() {
    const result = document.getElementById("result1");
    const input = Number(document.getElementById("input1").value) ; 
    count += input; //누적 처리가 끝난 상태
    result.innerText = count; // 숫자만 가져오기
    
}

function multi() {
    const result = document.getElementById("result1");
    const input = document.getElementById("input1").value;
    count *= input;
    result.innerText = count;
}