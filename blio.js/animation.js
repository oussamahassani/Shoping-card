

window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.top = "30px";
   document.getElementById("navbar").fadeOut('slow');
  } else {
    document.getElementById("navbar").style.top = "0";
 document.getElementById("navbar").fadeIn('slow');
  }
}
