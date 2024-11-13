function titleColor() {
  const titleColor = document.getElementById("title");
  titleColor.style.color = "green";
}

function textHighlight() {
  const h2s = document.getElementsByClassName("text");
  h2s[0].style.backgroundColor = "yellow";
  h2s[1].style.backgroundColor = "orange";
  h2s[2].style.backgroundColor = "red";
}

function Name() {
  const name = document.getElementsByName("userName");
  document.getElementById("nameOutput").innerText = name[0].value;

  //const name = document.getElementsByName("userName").value;
  // .value의 순서만 바뀌었는데, 이러면 값이 undefined 라고 에러가 납니다. 배열이라서 그런걸까요?
  //document.getElementById("nameOutput").innerText = name[0];
}
