let count = 0;

const BGC = document.getElementById("bd"); // 해당 아이디 가져오기

function 증가() {
    count += 1; // 1씩 증가
    document.getElementById("count").innerText = count;
    BGC.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}

function 감소() {
    count -= 1;
    const cnt = document.getElementById("count");
    cnt.innerText = count;
    cnt.style.color = count % 2 == 0 ? "orange" : "black";
    //document.getElementById("count").innerText = count;
}

// 삼항연산자를 이용해서 count 값에 따라 배경색 변경
//2의 배수면 #f0f0f0 ffd1dc

function 초기화() {
    count = 0;
    document.getElementById("count").innerText = 0;
}
