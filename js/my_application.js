function animatecontact() {
  console.log("CLICKED");
  $(".information-box").toggleClass("fadeOutLeftBig");
}

$(document).ready(function(){
  console.log("doc is ready");
  $(".nav li a").on('click', animatecontact);
});
