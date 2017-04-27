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
winningstreak = 0;
numberofgames = 0;

hattrick = 6;

do{
  random = Math.floor(Math.random() * (max - min +1)) + min;
  console.log(random);
  numberofgames++;
  if (random) {
    elem.innerHTML += '<span class="won">won</span>';
    wincounter++;
    winningstreak++;
  } else{
    elem.innerHTML += '<span class="lost">lost</span>';
    lostcounter++;
    winningstreak = 0;
  }
}while(winningstreak<hattrick)

elem.innerHTML += '<h2>I played ' + numberofgames + ' times to win continuosly ' + hattrick + ' times </h2>';
elem.innerHTML += '<h2>I won ' + wincounter + ' times</h2>';
elem.innerHTML += '<h2>I lost ' + lostcounter + ' times</h2>';
elem.innerHTML += '<h2>winning percentage is  ' + ((wincounter / numberofgames) * 100) + '%</h2>';


