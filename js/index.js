let menuBtn = document.querySelectorAll(".header__menu");

menuBtn.forEach((e) => {
  e.addEventListener("click", function () {
    e.addEventListener("click", function () {
      e.classList.toggle("active");
      var modal = document
        .querySelector(".hero__modal")
        .classList.toggle("hero__modal--left");
    });
  });
});

var count = 0;

function plus() {
  count++;
  $(".text").innerHTML = count;
}
function minus() {
  if (!count == 0) {
    count--;
    $(".text").innerHTML = count;
  }
}
