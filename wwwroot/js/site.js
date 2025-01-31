
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    //Visa knappen när användaren scrollat ner 100px
    if (window.scrollY > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});