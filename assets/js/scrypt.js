const priceKm = 0.21;
const seniorDiscount = 40;
const juniorDiscount = 20;
const output = document.getElementById('output');
const getTicket = document.getElementById('getTicket');
const reset = document.getElementById('reset');
const name = document.getElementById('username');
const trip = document.getElementById('distance');
const fascia = document.getElementById('age');
const enterName = document.getElementById('enterName');
const carrozza = document.getElementById('carrozza');
const tipoSconto = document.getElementById('tipoSconto');
const cpCode = document.getElementById('cpCode');
const showPrice = document.getElementById('showPrice');

getTicket.addEventListener('click', function(){
  
  let username = name.value;
  let distance = trip.value;
  let age = fascia.value;
  const normalPrice = distance * priceKm;
  let discountPrice;
  const numCarrozza = Math.floor(Math.random() * 10) + 1;
  const numCpCode = Math.floor(Math.random() * 10000) + 1;

  document.querySelector('.ticket').classList.remove('d-none');

  enterName.innerHTML = username
  if(age === 'junior'){
    discountPrice = normalPrice * (1 - (juniorDiscount/100));
  }else if (age === 'senior'){
    discountPrice = normalPrice * (1 - (seniorDiscount/100));    
  }else {
    showPrice.innerHTML = normalPrice.toFixed(2);
    tipoSconto.innerHTML = age
    carrozza.innerHTML = numCarrozza;
    cpCode.innerHTML = numCpCode;
  }
  showPrice.innerHTML = discountPrice.toFixed(2) + '\u20AC'
  tipoSconto.innerHTML = age
  carrozza.innerHTML = numCarrozza;
  cpCode.innerHTML = numCpCode;
  
})

reset.addEventListener('click', function(){
  username.value = '';
  distance.value = '';
  document.querySelector('.ticket').classList.add('d-none');
})
