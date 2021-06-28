const menuBars = document.getElementById("menuBars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}
function toggleNav() {
  //Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Items
    // nav1.classList.replace("slide-out-1", "slide-in-1");
    // nav2.classList.replace("slide-out-2", "slide-in-2");
    // nav3.classList.replace("slide-out-3", "slide-in-3");
    // nav4.classList.replace("slide-out-4", "slide-in-4");
    // nav5.classList.replace("slide-out-5", "slide-in-5");
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}
// Event Listeners
menuBars.addEventListener("click", toggleNav);
// nav1.addEventListener("click", toggleNav);
// nav2.addEventListener("click", toggleNav);
// nav3.addEventListener("click", toggleNav);
// nav4.addEventListener("click", toggleNav);
// nav5.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
