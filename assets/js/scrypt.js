const priceKm = 0.21;
const seniorDiscount = 40;
const juniorDiscount = 20;
const output = document.getElementById('output');
const getTicket = document.getElementById('getTicket');

getTicket.addEventListener('click', function(){
  let username = document.getElementById('username').value;
  let distance = document.getElementById('distance').value;
  let age = document.getElementById('age').value;
  console.log(username, distance, age);

  const normalPrice = distance * priceKm;
  let discountPrice;
  let message;
  if(age === 'junior'){
    discountPrice = normalPrice * (1 - (juniorDiscount/100));
    message = `
    Ciao ${username}, il prezzo del tuo biglietto è ${discountPrice.toFixed(2)}\u20AC invece di ${normalPrice}
    `
    output.innerHTML = message
  }else if (age === 'senior'){
    discountPrice = normalPrice * (1 - (seniorDiscount/100));
    message = `
    Ciao ${username}, il prezzo del tuo biglietto è ${discountPrice.toFixed(2)}\u20AC invece di ${normalPrice}
    `
    output.innerHTML = message
  }else{
    message = `
    Ciao ${username}, il prezzo del tuo biglietto è ${normalPrice}\u20AC 
    `
    output.innerHTML = message
  }
})
