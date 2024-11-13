function selectCheck() {
  const hobby = document.getElementsByName("취미");
  const agreement = document.getElementsByName("약관동의");
  const result = document.getElementById("name-div");
  let count = 0;
  let total = " ";
 for( let i = 0; i < agreement.length; i++) {
        if(!agreement[i].checked){
          alert("모든 필수 약관에 동의해주세요.")
          return;
        }
    }


  for (let n = 0; n < hobby.length; n++) {
    if (hobby[n].checked) {
      total += hobby[n].value + ", ";
      count++;
    }
    result.innerHTML = `${total} <br>선택된 취미 개수 : ${count}`;
  }
}
