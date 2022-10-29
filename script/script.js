const menuBt = document.getElementById("menuhb");
const nav = document.querySelector(".nav")

function toogleMenu(){
  const ativo = nav.classList.contains("show")
  if(!ativo){
    nav.classList.add("show")
    menuBt.setAttribute("src","./assets/images/icon-menu-close.svg")
    document.body.style.overflow = "hidden"

  }
  else{
    nav.classList.remove("show")
    menuBt.setAttribute("src","./assets/images/icon-menu.svg")
    document.body.style.overflow = "visible"
  }
}


menuBt.addEventListener("click",toogleMenu)