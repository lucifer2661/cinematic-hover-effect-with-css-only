const overlay = document.querySelector(".bg-overlay");
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        const rect = box.getBoundingClientRect();

        overlay.style.top = rect.top + rect.height/2 + "px";
        overlay.style.left = rect.left + rect.width/2 + "px";
        overlay.style.opacity = "1";
    });

    box.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
    });
});
