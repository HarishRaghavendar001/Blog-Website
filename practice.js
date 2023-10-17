const button=document.querySelector(".bar-btn");
const list=document.querySelector(".list");

button.addEventListener("click", () => {
    button.classList.toggle("active");
    list.classList.toggle("act");
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () => {
    button.classList.remove("active");
    list.classList.remove("act");
}))