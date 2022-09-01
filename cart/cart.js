let add = document.querySelector('.plus .add');
let minus = document.querySelector ('.plus .minus');
let count = 1 ;
let number = document.querySelector ('.plus button');
let price = document.querySelector('span');



add.addEventListener ('click', function () {
    count ++;
    number.textContent = count ;
let amount = Number ('250') * count;
    price.textContent = amount;


});
minus.addEventListener ('click', function () {
    count--;
  number.textContent = count ;

  let amount = price.textContent;
  price.textContent = amount - 250 ;

   if (count <= 1){
    number.textContent = 1;
    count = number.textContent = 1;

    price.textContent = 250;
    amount = price.textContent = 250;
   }
});
