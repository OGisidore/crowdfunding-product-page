// recup all element of menu

var menuBars = document.querySelector(".menuBars")
var nav = document.querySelector(".navlist")
var closeMenuIcon = document.querySelector(".closeMenu") 




const handleEvent ={

    //  display menu
    displayMenu: () => {
        nav.classList.add("active")
        menuBars.classList.remove("menu")
        closeMenuIcon.classList.remove("none")


    },
    // close Menu
    closeMenu: () => {
        nav.classList.remove("active")
        menuBars.classList.add("menu")
        closeMenuIcon.classList.add("none")
    }

}



// event setter
 const setEvent = ()=>{
    menuBars.onclick = handleEvent.displayMenu
    closeMenuIcon.onclick = handleEvent.closeMenu
}