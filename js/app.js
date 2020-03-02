'use strict'
function randomProduct(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var productImg = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];
var leftPro = document.getElementById('left_product_img');
var midPro = document.getElementById('mid_product_img');
var rightPro = document.getElementById('right_product_img');
var allPro = document.getElementById('mainEvent')

var product = [];
var clicks = 0;

// var clickTime = 0 ;


function Shopping(productId) {
  this.productId = productId.split('.')[0];
  this.urlImage = `img/${productId}`;
  this.appear = 0;
  this.clickTime = 0
  product.push(this);
}

for (let i = 0; i < productImg.length; i++) {
  new Shopping(productImg[i]);

}

var leftProductImg = product[randomProduct(0, product.length - 1)];
  var midProductImg = product[randomProduct(0, product.length - 1)];
  var rightProductImg = product[randomProduct(0, product.length - 1)];




  function randomProductImg() {

  
    leftProductImg = product[randomProduct(0, product.length - 1)];
    midProductImg = product[randomProduct(0, product.length - 1)];
    rightProductImg = product[randomProduct(0, product.length - 1)];

    while (leftProductImg === midProductImg || midProductImg === rightProductImg || leftProductImg === rightProductImg ) {

 
      leftProductImg = product[randomProduct(0, product.length - 1)];
      midProductImg = product[randomProduct(0, product.length - 1)];
      rightProductImg = product[randomProduct(0, product.length - 1)];
  
      
  
    }

  leftPro.setAttribute('src', leftProductImg.urlImage);
  leftPro.setAttribute('alt', leftProductImg.productId);

  midPro.setAttribute('src', midProductImg.urlImage);
  midPro.setAttribute('alt', midProductImg.productId);

  rightPro.setAttribute('src', rightProductImg.urlImage);
  rightPro.setAttribute('alt', rightProductImg.productId);

  

}


for (var i = 0; i < productImg.length; i++) {
  new Shopping(productImg[i]);
}

randomProductImg();




 
  function choice(event){

    if (event.target.id === 'left_product_img' || event.target.id === 'mid_product_img' || event.target.id === 'right_product_img') {
      randomProductImg();
      clicks++;
      leftPro.appear++ ;
      midPro.appear++ ;
      rightPro.appear++ ;
      // console.log(clicks);
  
    }

     
    //  for (let i = 0; i < product.length; i++) {
     
      if (event.target.id ==="left_product_img") {
       leftPro.clickTime++ ;
      }
     
      if (event.target.id ==="mid_product_img") {
        midPro.clickTime ++ ;
       }
       if (event.target.id ==="right_product_img") {
        rightPro.clickTime++ ;
       }
    
    
    
    


if (clicks == 25) {
  allPro.removeEventListener('click', choice);
  alert('you have reach to maximum number of unit your product in cart and it will shown down in the table');
  listResult();
}

}
allPro.addEventListener('click', choice);

function listResult(){

  var list = document.getElementById('listClick');
  for (var l=0; i<productImg.length;l++){
  var productName = document.createElement('li');
  list.appendChild(productName);
  productName.textContent = `${product[i].productId} had ${product[i].clickTime}  click  ${product[i].appear} appear`;
}}

  





