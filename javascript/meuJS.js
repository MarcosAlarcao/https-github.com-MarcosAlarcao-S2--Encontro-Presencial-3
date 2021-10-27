$('#menu-mobile').click(()=>{
  console.log("Disparado o evento")
  $('#menu-slide').toggleClass("slide-menu-show")
})
/* Mesmo efeito do codigo acima 
document.querySelector("#menu-mobile")
.addEventListener("click",()=>{
  var ele=document.querySelector("#menu-slide")
  if (ele.classList.contains("slide-menu-show")){
    ele.classList.remove("slide-menu-show")
  } else {
    ele.classList.add("slide-menu-show")
  }
})
*/