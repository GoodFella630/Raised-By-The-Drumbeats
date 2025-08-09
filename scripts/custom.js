// Scroll to Top Button
let scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.classList.add("show");
    } else {
    scrollBtn.classList.remove("show");
    }
}

scrollBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}