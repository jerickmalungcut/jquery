$("h1").addClass("big-title");

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", () => {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(() => {
//   $("h1").css("color", "purple");
// });

// $(document).keypress((e) => {
//   $("h1").text(e.key);
// });

// $("h1").on("mouseover", () => {
//   $("h1").css("color", "yellow");
// });

// $("button").on("click", () => {
//   $("h1").fadeOut().fadeIn();
// });

$("button").on("click", () => {
  $("h1").slideUp().slideDown();
});
