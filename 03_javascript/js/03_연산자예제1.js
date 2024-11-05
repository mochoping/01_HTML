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
