'use strict';
let form=document.getElementById('form');

function Order(userName,phone,product,quantity,paymentMethod,cardNum,month,year,country,city,zipCode,street){
  this.userName=userName;
  this.phone=phone;
  this.product=product;
  this.quantity=quantity;
  this.paymentMethod=paymentMethod;
  this.cardNum=cardNum;
  this.month=month;
  this.year=year;
  this.country=country;
  this.city=city;
  this.zipCode=zipCode;
  this.street=street;
  this.orderId=0;
  Order.orderData.push(this);
}
Order.orderData=[];
if(JSON.parse(localStorage.getItem('orderData'))){
  Order.orderData=JSON.parse(localStorage.getItem('orderData'));
}

Order.prototype.randomId=function(){
  this.orderId=Math.floor(Math.random()*(200-100)+100);
  for(let i=0;i<Order.orderData.length-1;i++){
    if(this.orderId===Order.orderData[i].orderId){
      this.orderId=Math.floor(Math.random()*(200-100)+100);
      i=0;
    }
  }
};

form.addEventListener('submit',orderFun);

function orderFun(event){
  event.preventDefault();
  let userName=event.target.name.value;
  let phone=event.target.phone.value;
  let product=event.target.product.value;
  let quantity=event.target.quantity.value;
  let paymentMethod=event.target.payment.value;
  let cardNum=event.target.cardNum.value;
  let month=event.target.month.value;
  let year=event.target.year.value;
  let country=event.target.country.value;
  let city=event.target.city.value;
  let zipCode=event.target.zipCode.value;
  let street=event.target.street.value;
  orderObject(userName,phone,product,quantity,paymentMethod,cardNum,month,year,country,city,zipCode,street);
  localStorage.setItem('orderData',JSON.stringify(Order.orderData));
  console.log(Order.orderData);
}

function orderObject(userName,phone,product,quantity,paymentMethod,cardNum,month,year,country,city,zipCode,street){
  let newOrder= new Order(userName,phone,product,quantity,paymentMethod,cardNum,month,year,country,city,zipCode,street);
  newOrder.randomId();
}

