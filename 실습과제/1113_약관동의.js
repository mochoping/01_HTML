function selectCheck() {
  const hobby = document.getElementsByName("취미");
  const agreement = document.getElementsByName("약관동의");
  const result = document.getElementById("name-div");
  let count = 0;
  let check = 0;
  let total = " ";
  /*  for( let i = 0; i < agreement.length; i++) {
        if(agreement[i].checked)
    }
*/

  for (let n = 0; n < hobby.length; n++) {
    if (hobby[n].checked) {
      total += hobby[n].value + ", ";
      count++;
    }
    result.innerHTML = `${total} <br>선택된 취미 개수 : ${count}`;
  }
}
