function toggleMenu() {
  var menu = document.querySelector(".btn-collapse");
  console.log(`11`, menu);
  var hasActive = menu.classList.contains("active");
  if (hasActive) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}
