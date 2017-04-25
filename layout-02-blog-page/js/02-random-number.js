//    alert("hey hello,");


/*
  Its
  a
  multi
  line
  comment
*/


elem =document.getElementById('random-number');
value =elem.textContent;
markup =elem.innerHTML;

console.log(elem);
console.log(value);
console.log(markup);

x = Math.random();
elem.innerHTML = markup + ' - ' + x;

y = Math.floor(x);
elem.innerHTML += ' - ' + y;

y = Math.ceil(x);
elem.innerHTML += ' - ' + y;

y = Math.round(x);
elem.innerHTML += ' - ' + y;

max = 1;
min = 0;

random = Math.floor(x * (max - min)) + min;
elem.innerHTML += ' - ' + random;
