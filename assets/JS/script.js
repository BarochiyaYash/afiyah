document.querySelectorAll(".question-header").forEach((item) => {
  item.addEventListener("click", (event) => {
    const parentDiv = item.parentElement;

    document.querySelectorAll(".question-div").forEach((div) => {
      if (div !== parentDiv) {
        div.classList.remove("active");
      }
    });
    parentDiv.classList.toggle("active");
  });
});


document.getElementById('menu-toggle').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('active');
});
