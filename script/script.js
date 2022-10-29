const menuBt = document.getElementById("menuhb");
const nav = document.querySelector(".nav")
function toogleMenu(){
  const ativo = nav.classList.contains("show")
  if(!ativo){
    nav.classList.add("show")
    menuBt.setAttribute("src","./assets/images/icon-menu-close.svg")
  }
  else{
    nav.classList.remove("show")
    menuBt.setAttribute("src","./assets/images/icon-menu.svg")
  }
}


menuBt.addEventListener("click",toogleMenu)