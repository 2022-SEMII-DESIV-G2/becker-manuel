const button = document.getElementById("form");
button.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
}
function size() {
  let size = document.getElementById("floors").value;
  return size;
}
function cuadro() {
  let cuadrito = document.getElementById("data").value;
  console.log(cuadrito);
  return cuadrito;
}
function numbers() {
  let number = size();
  let c = 0;
  let n = " ";
  for (let index = 0; index < number; index++) {
    c += index + 1;
  }
  for (let jindex = 0; jindex < c; jindex++) {
    n += Math.floor(Math.random() * 99) + 1;
    if (jindex < c - 1) {
      n += " ";
    }
  }
  console.log(n);
  document.getElementById("data").value = n;
  return n;
}
function arr() {
  let tam = Number(size());
  let araay = cuadro()
    .split(" ")
    .map((x) => Number(x));
  console.log(araay);
  let pyramid = [];
  for (let index = 0; index < tam; index++) {
    for (let jindex = 0; jindex < index; jindex++) {
      araay.shift();
    }
    pyramid.push(araay.slice(0, index + 1));
  }
  console.log(pyramid);
  return pyramid;
}
function reccorrido() {
  let recor = arr();

  let output = "";
  let i, j;
  for (i = 0; i < recor.length; i++) {
    output += `<div class="level ${i}">`;
    for (j = 0; j < recor[i].length; j++) {
      output += `<span class="item${i}-level${j}">${recor[i][j]}</span>`;
    }
    output += "</div>";
  }
  document.getElementById("pyramid").innerHTML = output;
  document.querySelector(`.item${0}-level${0}`).style.background = "#c3dbf2";
  let output2 = "";
  let aux = recor[0][0];
  let aux2 = 0;
  for (let i = 1; i <= recor.length; i++) {
    let max = aux2;

    if (recor[i][aux2 + 1]) {
      max = aux2;
      console.log(max);
    }
    if (recor[i][aux2 + 1]) {
      if (recor[i][max] < recor[i][aux2 + 1]) {
        max = aux2 + 1;
        console.log(max);
      }
    }
    aux += recor[i][max];
    aux2 = max;
    let element = document.querySelector(`.item${i}-level${aux2}`);
    if (element) {
      element.style.background = "#c3dbf2";
    }
  }
  output2 += `<p> aux is: ${aux} </p><br>`;
  document.getElementById("sum").innerHTML = output2;
  return aux;
}