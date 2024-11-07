const v1 = document.getElementById("n1");
const v2 = document.getElementById("n2");
const r0 = document.getElementById("res");

function 계산함수() {
  const r1 = v1.value + v2.value;
  const r2 = v1.value * v2.value;
  const r3 = v1.value - v2.value;

  r0.innerText = r1.value + r2.value + r3.value;
}
