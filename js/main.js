window.addEventListener("scroll", bringmenu);

function bringmenu() {
  if (document.documentElement.scrollTop > 450) {
    document.getElementById("header-menu").classList.add("header__top_show");
    document.getElementById("header-space").style.display = "block";
  } else {
    document.getElementById("header-menu").classList.remove("header__top_show");
    document.getElementById("header-space").style.display = "none";
  }
}
