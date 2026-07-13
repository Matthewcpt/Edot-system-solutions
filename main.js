// =====================================
// EDOT SYSTEM SOLUTIONS
// MAIN JAVASCRIPT
// =====================================

// Fade Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll('.card').forEach(el => {
el.classList.add("fade-in");
observer.observe(el);
});

document.querySelectorAll('.feature').forEach(el => {
el.classList.add("fade-in");
observer.observe(el);
});

document.querySelectorAll('.value-box').forEach(el => {
el.classList.add("fade-in");
observer.observe(el);
});

// Navbar Background

window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#081A30";

}
else{

header.style.background = "#0A2342";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior:'smooth'
});

});

});

