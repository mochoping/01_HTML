const bgc = document.getElementById("bgc");
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");
const bt4 = document.getElementById("bt4");
const bt5 = document.getElementById("bt5");

function 색상변경(color) {
  switch (color) {
    case "lightblue":
      bgc.style.backgroundColor = "lightblue";
      bt1.style.backgroundColor = "lightblue";
      break;
    case "lightcoral":
      bgc.style.backgroundColor = "lightcoral";
      bt2.style.backgroundColor = "lightcoral";
      break;
    case "lightyellow":
      bgc.style.backgroundColor = "lightyellow";
      bt3.style.backgroundColor = "lightyellow";
      break;
    case "lightgreen":
      bgc.style.backgroundColor = "lightgreen";
      bt4.style.backgroundColor = "lightgreen";
      break;
    case "lightgray":
      bgc.style.backgroundColor = "lightgray";
      bt5.style.backgroundColor = "lightgray";
      break;
  }

  //bgc.style.backgroundColor = color;
}

function 버튼색상원복() {}
