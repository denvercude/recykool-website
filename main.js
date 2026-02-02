const title = document.querySelector(".title");

title.style.transform = "translateY(-150px)";
title.style.opacity = "0";

requestAnimationFrame(() => {
  title.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease";
  title.style.transform = "translateY(0)";
  title.style.opacity = "1";
});