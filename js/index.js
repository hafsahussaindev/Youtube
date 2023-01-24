let openMenu = document.getElementById("open-menu")
let toggleMenu = document.querySelector("#show")
let sideMenu =  document.querySelector(".nav-menu")
let main = document.querySelector(".main")
let navBar = document.querySelector(".nav")

function showMenu() {
    sideMenu.classList.add("active")
    main.classList.add("side-effect")
}

function hideMenu(){
    sideMenu.classList.remove("active")
    main.classList.remove("side-effect")

}

function submit(){
        window.location.href="http://programminghead.com";  
}