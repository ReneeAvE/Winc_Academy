// const button = document.getElementById("mybutton");

// button.addEventListener("click", function(){alert("button clicked")});


// const changeBody = document.querySelector(".blue-background");
// const button2 = document.querySelector(".change-background");

// const changeBackground = () => {
//     changeBody.classList.add("red-background");
//     changeBody.classList.remove("blue-background");
// }

// button2.addEventListener("click", changeBackground);

const changeBody = document.querySelector(".blue-background");
const button2 = document.querySelector(".change-background");

const toggleBackground = () => {
    changeBody.classList.toggle("red-background");
}

button2.addEventListener("click", toggleBackground);
