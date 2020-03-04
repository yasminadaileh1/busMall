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
  this.clickTime = 0;
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

  while (leftProductImg === midProductImg || midProductImg === rightProductImg || leftProductImg === rightProductImg) {


    leftProductImg = product[randomProduct(0, product.length - 1)];
    midProductImg = product[randomProduct(0, product.length - 1)];
    rightProductImg = product[randomProduct(0, product.length - 1)];



  
  }
  leftPro.setAttribute('src', leftProductImg.urlImage);
  leftPro.setAttribute('alt', leftProductImg.productId);
  leftProductImg.appear++;

  midPro.setAttribute('src', midProductImg.urlImage);
  midPro.setAttribute('alt', midProductImg.productId);
  midProductImg.appear++;

  rightPro.setAttribute('src', rightProductImg.urlImage);
  rightPro.setAttribute('alt', rightProductImg.productId);
  rightProductImg.appear++;


}


randomProductImg();





function choice(event) {

  if (event.target.id === 'left_product_img' || event.target.id === 'mid_product_img' || event.target.id === 'right_product_img') {
    randomProductImg();
    clicks++;
    // console.log(clicks);

  }


//  randomProductImg();
// clicks++;
  if (event.target.id === "left_product_img") {
    leftProductImg.clickTime++;
    //  console.log(leftPro.clickTime);
  }

  if (event.target.id === "mid_product_img") {
    midProductImg.clickTime++;
  }

  if (event.target.id === "right_product_img") {
    rightProductImg.clickTime++;
  }






  if (clicks === 25) {
    allPro.removeEventListener('click', choice);
    alert('you have reach to maximum number of unit your product in cart and it will shown down in the table');
    listResult();
    chartPro();
  }

}
allPro.addEventListener('click', choice);
setItem();

function listResult() {


  var list = document.getElementById('listClick');
  for (var i = 0; i < product.length; i++) {
    var productName = document.createElement('li');
    list.appendChild(productName);
    productName.textContent = `${product[i].productId} had ${product[i].clickTime}  click  ${product[i].appear} appear`;
  }
}

// listResult();






function chartPro(){

  var productName = [];
  var productClick = [];
  var appearProduct = [];
  for(var i = 0 ; i < product.length ; i++){
    var productNaming = product[i].productId;
    productName.push(productNaming);
    var productClk = product[i].clickTime;
    productClick.push(productClk);
    var productAppear= product[i].appear;
    appearProduct.push(productAppear);
  }
  console.log(appearProduct);
  var ctx = document.getElementById('product').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [
        {
        label: '# of clicks',
        data: productClick,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '# of appears',
        data: appearProduct,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        
      }
    ]
    
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: true,
            maintainAspectRatio: false,
    }
  });
}

function setItem(){
  var SetProductAppearInRaounds = JSON.stringify(product);
  localStorage.setItem('timeAppeared', SetProductAppearInRaounds);
  var SetProductClickInRounds =  JSON.stringify(clicks);
  localStorage.setItem('timeclicked', SetProductClickInRounds);
}

function getItem(){
  var SetProductAppearInRaounds = localStorage.getItem('timeAppeared');
  product = JSON.parse(SetProductAppearInRaounds);
  var SetProductClickInRounds = localStorage.getItem('timeclicked');
  clicks = JSON.parse(SetProductClickInRounds);
  if(SetProductAppearInRaounds === null){
    product = JSON.parse(SetProductAppearInRaounds);
    clicks = JSON.parse(SetProductClickInRounds);
  }
  listResult();
}

getItem();