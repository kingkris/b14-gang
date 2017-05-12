//    alert("hey hello,");


/*
  Its
  a
  multi
  line
  comment
*/


elem =document.getElementById('win-status');

max = 1;
min = 0;
wincounter = 0;
lostcounter = 0;
numberofgames = 17;


for(i=0;i<numberofgames;i++){
  random = randomNumber();
  console.log(random);
  if (random) {
    elem.innerHTML += '<span class="won">won</span>';
    wincounter++;
  } else{
    elem.innerHTML += '<span class="lost">lost</span>';
    lostcounter++;
  }
}

elem.innerHTML += '<h2>I won ' + wincounter + ' times</h2>';
elem.innerHTML += '<h2>I lost ' + lostcounter + ' times</h2>';
elem.innerHTML += '<h2>winning percentage is  ' + ((wincounter / numberofgames) * 100) + '%</h2>';

function randomNumber() {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
