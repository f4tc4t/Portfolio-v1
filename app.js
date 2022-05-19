window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("open-button").style.display="none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open-button").style.display="block";
}