'use strict'
function randomProduct(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var productImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg'];

var leftPro = document.getElementById('left_product_img');
var midPro = document.getElementById('mid_product_img');
var rightPro = document.getElementById('right_product_img');
var allPro;
// = document.getElementById('mainEvent').addEventListener('click', choice);

var product = [];
var clicks = 0;

function Shopping(productId) {
  this.productId = productId;
  this.urlImage = `img/${this.productId}`;

  product.push(this);

}

function randomProductImg() {

  var leftProductImg = product[randomProduct(0, product.length - 1)];
  var midProductImg = product[randomProduct(0, product.length - 1)];
  var rightProductImg = product[randomProduct(0, product.length - 1)];

  leftPro.setAttribute('src', leftProductImg.urlImage);
  leftPro.setAttribute('alt', leftProductImg.productId);

  midPro.setAttribute('src', midProductImg.urlImage);
  midPro.setAttribute('alt', midProductImg.productId);

  rightPro.setAttribute('src', rightProductImg.urlImage);
  rightPro.setAttribute('alt', rightProductImg.productId);

  while (leftProductImg === midProductImg || midProductImg === rightProductImg || leftProductImg === rightProductImg ) {

    leftPro.setAttribute('src', leftProductImg.urlImage);
    leftPro.setAttribute('alt', leftProductImg.productId);
  
    midPro.setAttribute('src', midProductImg.urlImage);
    midPro.setAttribute('alt', midProductImg.productId);
  
    rightPro.setAttribute('src', rightProductImg.urlImage);
    rightPro.setAttribute('alt', rightProductImg.productId);
    

  }

}
for (let i = 0; i < productImg.length; i++) {
  new Shopping(productImg[i]);

}

randomProductImg();






function choice(mainEvent) {
  if (event.target.leftPro === 'left_product_img' || event.target.midPro === 'mid_product_img' || event.target.rightPro === 'right_product_img') {
    randomProductImg();
    clicks++;
    console.log(clicks);

  }
  //  if (clicks == 25) {
  //   leftPro.remove();
  //   midPro.remove();
  //   rightPro.remove();
  //   alert('you have reach to maximum number of unit your product in cart and it will shown down in the table');

  //  }
  // allPro = document.getElementById('mainEvent').addEventListener('click', choice);


}
// choice();

var list = document.getElementById('listClick');
var listOfProduct = document.createElement('ul');
var productName = document.createElement('li');
listOfProduct.appendChild(productName);
productName.textContent = productImg + randomProductImg(product);



