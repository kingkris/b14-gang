document.body.onload = printnumber;


function addnumbers(x,y) {
  return x + y;
}

function printnumber(){
  document.getElementById('content1').innerHTML = addnumbers(455,20);
}

