const priceKm = 0.21;
const seniorDiscount = 40;
const juniorDiscount = 20;
const output = document.getElementById('output');
const getTicket = document.getElementById('getTicket');
const reset = document.getElementById('reset');
let username = document.getElementById('username');
let distance = document.getElementById('distance');
let age = document.getElementById('age');

getTicket.addEventListener('click', function(){
  
  username = username.value;
  distance = distance.value;
  age = age.value;
  const normalPrice = distance * priceKm;
  let discountPrice;
  let message;
  if(age === 'junior'){
    discountPrice = normalPrice * (1 - (juniorDiscount/100));
    message = `
    Ciao ${username}, il prezzo del tuo biglietto è ${discountPrice.toFixed(2)}\u20AC invece di ${normalPrice.toFixed(2)}\u20AC
    `
    output.innerHTML = message
  }else if (age === 'senior'){
    discountPrice = normalPrice * (1 - (seniorDiscount/100));
    message = `
    Ciao ${username}, il prezzo del tuo biglietto è ${discountPrice.toFixed(2)}\u20AC invece di ${normalPrice.toFixed(2)}\u20AC
    `
    output.innerHTML = message
  }else{
    message = `
    Ciao ${username}, il prezzo del tuo biglietto è ${normalPrice.toFixed(2)}\u20AC 
    `
    output.innerHTML = message
  }
 
})

reset.addEventListener('click', function(){
  username.value = '';
  distance.value = '';
})
