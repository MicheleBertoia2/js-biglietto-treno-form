const priceKm = 0.21;
const getTicket = document.getElementById('getTicket');

getTicket.addEventListener('click', function(){
  let username = document.getElementById('username').value;
  let distance = document.getElementById('distance').value;
  let age = document.getElementById('age').value;
  console.log(username, distance, age);

  const totalPrice = distance * priceKm;
  console.log(totalPrice);
})