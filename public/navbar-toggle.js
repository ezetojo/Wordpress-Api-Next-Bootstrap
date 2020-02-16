function toggle() {
  var nav = document.getElementById("mainNav");
  if (nav.className === "collapse navbar-collapse") {
    nav.className += " show";
  } else {
    nav.className = "collapse navbar-collapse";
  }
}
