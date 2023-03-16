// Navbar Toggle Button
const toggleButton = document.getElementsByClassName("toogle")[0];
const navbarItem = document.getElementsByClassName("navbar-item");
toggleButton.addEventListener("click", function () {
  // transition navbar item
  for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].classList.toggle("active");
  }
});


// const hamburger = document.querySelector(".toogle");
// const navBar = document.querySelector(".navbar-item");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active")
//   navBar.classList.toggle("active")
// }); 