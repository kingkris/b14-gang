

var grocerylist = ['coffee', 'tea', 'sugar'];

console.log(grocerylist);
console.log(grocerylist[0]);
console.log(grocerylist.length);

function print_array (list) {
  markup = '<ol>';
  list.forEach( function(item, index) {
    markup += '<li>' + item + '</li>';
  });
  markup += '</ol>';
  return markup;
}

document.getElementById('content1').innerHTML = print_array(grocerylist);


function add_item (list, item) {
  list.push(item);
}

grocerylist.push('Buscuits')

add_item(grocerylist, 'Almonds');

document.getElementById('content1').innerHTML += print_array(grocerylist);

grocerylist.sort();
document.getElementById('content1').innerHTML += print_array(grocerylist);

grocerylist.pop();
document.getElementById('content1').innerHTML += print_array(grocerylist);



