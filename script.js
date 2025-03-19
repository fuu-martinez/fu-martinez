document.addEventListener("DOMContentLoaded", function() {
    const projectes = document.querySelectorAll(".projecte");

    projectes.forEach(proj => {
        proj.addEventListener("mouseover", () => {
            proj.style.backgroundColor = "lightblue";
        });

        proj.addEventListener("mouseleave", () => {
            proj.style.backgroundColor = "lightgray";
        });
    });
});
