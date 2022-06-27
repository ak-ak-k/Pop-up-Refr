function myFunction() {
  var x = document.getElementById("myDIV");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}
function closeForm() {
  document.getElementById("myDIV").style.display = "none";
}
