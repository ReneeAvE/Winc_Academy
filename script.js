const toggleNavBar = document.querySelector(".btn-toggle-nav");
toggleNavBar.addEventListener("click", () => { toggleNav();});

let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

const body = document.body;
const par = document.querySelector(".text");

const changeGeel = document.querySelector(".geel");
function changeBackgroundGeel() {
    body.removeAttribute("class")
    body.classList.add("geel");
    par.innerHTML = "";
    par.innerHTML += "Geel";
    toggleNav();
}
changeGeel.addEventListener("click", changeBackgroundGeel);

const changeBlauw = document.querySelector(".blauw");
function changeBackgroundBlauw() {
    body.removeAttribute("class")
    body.classList.add("blauw");  
    par.innerHTML = "";
    par.innerHTML += "Blauw";
    toggleNav();
}
changeBlauw.addEventListener("click", changeBackgroundBlauw);

const changeRood = document.querySelector(".rood");
function changeBackgroundRood() {
    body.removeAttribute("class")
    body.classList.add("rood");
    par.innerHTML = "";
    par.innerHTML += "Rood";
    toggleNav();
}
changeRood.addEventListener("click", changeBackgroundRood);

const changeGroen = document.querySelector(".groen");
function changeBackgroundGroen() {
    body.removeAttribute("class")
    body.classList.add("groen");
    par.innerHTML = "";
    par.innerHTML += "Groen";
    toggleNav();
}
changeGroen.addEventListener("click", changeBackgroundGroen);

const changeHome = document.querySelector(".home");
changeHome.addEventListener("click", changeBackgroundHome);
function changeBackgroundHome() {
    body.removeAttribute("class")
    body.classList.add("home");
    par.innerHTML = "";
    toggleNav();
}
