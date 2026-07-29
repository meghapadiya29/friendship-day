const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function () { 
                        window.location.href = "gallery.html";});
noBtn.addEventListener("mouseover", function () {
  noBtn.style.position = "absolute";
noBtn.style.left = 
Math.random() * 80 + "%";
noBtn.style.top = 
Math.random() * 80 + "%";
});
