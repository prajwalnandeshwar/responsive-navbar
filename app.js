const $burger = document.querySelector(".burger");
const $links = document.querySelector(".links");
const $navlinks = document.querySelectorAll(".links li");

$burger.onclick =() =>{
    $links.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");
    $navlinks.forEach((link,index) =>{
        if(link.style.animation) {
            link.style.animation ="";
        }
        else{
            link.style.animation = `linkAnimation 0.5s ease forwards ${index/5 + 0.5}s`;
        }
    });
}