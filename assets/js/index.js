
function Phone (model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

function getPhones(amount) {
  const newPhones = [];

  for(let i = 0; i < amount; i++) {
    newPhones.push(new Phone (
      `Model ${i}`, 
      'Panasonic', 
      getRandomInt(5000, 50000),
      'black',
      Math.random() >= 0.5
    ))
  }

  return newPhones;
}

const phones = getPhones(73);

console.table(phones);


//1-------------------------------------

let j=0;
const inStockValue = phones.forEach(function (phone){
  if(phone.inStock === true){
    j++
  } else {};
});
console.log(j);

//2-------------------------------------

const inStockPhones = phones.filter(function (phone){
  return phone.inStock === true;
});

//3-------------------------------------

const inStockMapWork = inStockPhones.map(function (phone){
  if(phone.price >= 30000){
     phone.price = Math.round(phone.price*0.7)
     return phone;
  };
})

const saleInStock = inStockMapWork.filter(function (phone){
  return phone !== undefined;
})