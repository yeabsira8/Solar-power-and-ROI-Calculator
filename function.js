
function myFunction() {
  var x = document.getElementById("map");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var x = document.getElementById("calculated-map");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("calculated-area");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var cb_edit=document.getElementById("area10");

  if(cb_edit.checked) {
    document.getElementById("area").disabled = true;

  } else {
    document.getElementById("area").disabled = false;

  }
}




