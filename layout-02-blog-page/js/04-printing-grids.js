//    alert("hey hello,");


/*
  Its
  a
  multi
  line
  comment
*/

elem = document.getElementById('content1');
title = '<h2>My friends</h2>';
elem.innerHTML = title;
for(i=1;i<=50;i++){
  if(i%4==0){
    markup = '<div class="friend fourth"><img src="https://api.fnkr.net/testimg/200x150/8806DA/FFF/?text=friend'+ i +'"></div>'
  }else{
    markup = '<div class="friend"><img src="https://api.fnkr.net/testimg/200x150/8806DA/FFF/?text=friend'+ i +'"></div>'
  }
  elem.innerHTML += markup;
}

i = 10;
j = '10';
k = 'a';

/*
  if(i == j && j !== k){
    alert("yes it is true")
  }
*/
console.log(++i);
console.log(i);


function add_numbers (x, y) {
  console.log(x+y);
}

add_numbers(10,20);
add_numbers(10,40);
add_numbers(10,50);
add_numbers(10,60);



