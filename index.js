const langGb = document.getElementById('langgb');
const langUa = document.getElementById('langua');
const textUa = document.getElementById('ua');
const textEn = document.getElementById('en');


langGb.addEventListener("click", () => {
    langGb.classList.add("selected");
    langUa.classList.remove("selected");
    textUa.style.display = "none";
    textEn.style.display = "block";
});

langUa.addEventListener("click", () => {
    langGb.classList.remove("selected");
    langUa.classList.add("selected");
    textUa.style.display = "block";
    textEn.style.display = "none";
});