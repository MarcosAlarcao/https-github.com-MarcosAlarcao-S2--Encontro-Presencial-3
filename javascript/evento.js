//Criando a função de clicar
function clicavel(el) {
  //previnindo o bubbling
  el.stopPropagation()
  //mensagem na tela
  alert("O elemento " + this.nodeName +
    " foi clicado!")
}
function clicavel2(el) {
  //previnindo o bubbling
  el.stopPropagation()
  //mensagem na tela
  console.log("O elemento " + this.nodeName +
    " foi clicado!")
}
//Função a ser disparada quando receber o foco
function focado() {
  this.classList.add("cor-focado")
}
//função a ser disparada quando perder o foco
function retiraFoco() {
  this.classList.remove("cor-focado")
}
//função que será disparada ao carregar o formulário
function funcaoLoad() {
  console.log("Todos os elementos foram carregados" +
    " no formulário")
}

//Selecionando os elementos para colocar o evento
var ele = document.querySelectorAll(".clicavel")
//percorrendo cada elemento e colocando o evento
ele.forEach(it => {
  it.addEventListener("click", clicavel)
  it.addEventListener("click", clicavel2)
})
/* Outra forma de fazer, Vantagem: Ele termina tudo para ir
para linha de baixo do for.
for (let i=0;i<ele.length;i++){
  let it=ele[i]
  it.addEventListener("click",clicavel)
}
*/
ele = document.querySelectorAll(".focavel")
ele.forEach(it => {
  it.addEventListener("focus", focado)
  it.addEventListener("blur", retiraFoco)
})


//fonte: https://github.com/clovisdasilvaneto/fadein-fadeout-com-javascript-puro
/*
function fadeIn(element, time=1, cb=null) {
  processa(element, time, 0, 100, cb);
}

function fadeOut(element, time=1, cb=null) {
  processa(element, time, 100, 0);
}

function processa(element, time, initial, end, cb=null) {
  if (initial == 0) {
    increment = 2;
    element.style.display = "block";
  } else {
    increment = -2;
  }
  opc = initial;
  intervalo = setInterval(function () {
    if ((opc == end)) {
      if (end == 0) {
        element.style.display = "none";
      }
      clearInterval(intervalo);
      if (typeof cb==="function" && cb) cb(element)
    } else {
      opc += increment;
      element.style.opacity = opc / 100;
      element.style.filter = "alpha(opacity=" + opc + ")";
    }
  }, time * 10);
}

document.querySelector("#fadein")
  .addEventListener("click",()=>{
    fadeIn(document.querySelector("#fadeele"))
  })
  
document.querySelector("#fadeout")
  .addEventListener("click",()=>{
    fadeOut(document.querySelector("#fadeele"))
  })
*/
$("#fadein").click(()=>{$("#fadeele").fadeIn()})
$("#fadeout").click(()=>{$("#fadeele").fadeOut()})