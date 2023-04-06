function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu ul");
  if (navMenu.style.maxHeight) {
      navMenu.style.maxHeight = null;
  } else {
      navMenu.style.maxHeight = navMenu.scrollHeight + "px";
  }
}
