'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations= ['seattle','tokyo','dubai','paris','lima'];
let minCust_h=[23,3,11,20,2];
let maxCust_h=[65,24,38,38,16];
let avgCookie_cus=[6.3,1.2,3.7,2.3,4.6];
let traffic=[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4];
let customersServed_tosser=20;
let table = document.getElementById('location_table');
let footerRaw =document.createElement('tr');
let branchForm = document.getElementById('newbranch');
let tosser_table=document.getElementById('tosser_table');
//////////////////////////////////////Constructer Function//////////////////////////////
function Salmoncookies(location, minCust_h, maxCust_h, avgCookie_cus) {

  this.location = location;
  this.minCust_h = minCust_h;
  this.maxCust_h = maxCust_h;
  this.avgCookie_cus = avgCookie_cus;
  this.dailySalesArr =[];
  this.randomCust_h=[];
  this.tosser=[];
  this.total = 0;
  this.totalTossers=0;
  Salmoncookies.branchLocation.push(this);

}
Salmoncookies.branchLocation=[];

///////////////////////////////////////Constructer Methods/////////////////////////////
Salmoncookies.prototype.custNum_h = function () {
  let max = this.maxCust_h;
  let min = this.minCust_h;
  return Math.ceil(Math.random() * (max - min + 1) + min);
};

Salmoncookies.prototype.dailySales = function () {
  for (let i = 0; i < workingHours.length; i++){
    let custNum=Math.ceil(this.custNum_h()*traffic[i]);
    let cookiesSold_h = Math.ceil(this.avgCookie_cus *custNum);
    this.dailySalesArr.push(cookiesSold_h);
    this.total += cookiesSold_h;
    this.randomCust_h.push(custNum);
  }
};

Salmoncookies.prototype.tossers=function () {
  for (let i = 0; i < workingHours.length; i++){
    let tosserNum=Math.ceil(this.randomCust_h[i]/customersServed_tosser);
    if(tosserNum<2){
      tosserNum=2;
    }
    this.tosser.push(tosserNum);
    this.totalTossers+=tosserNum;
  }
};

Salmoncookies.prototype.render= function () {

  let raw = document.createElement('tr');
  table.appendChild(raw);
  let rawHeader = document.createElement('th');
  raw.appendChild(rawHeader);
  rawHeader.innerText=this.location;
  for(let i=0;i<=this.dailySalesArr.length;i++){
    let rawData = document.createElement('td');
    raw.appendChild(rawData);
    rawData.innerText=this.dailySalesArr[i];
    if(i===this.dailySalesArr.length){
      rawData.innerText=this.total;
    }
  }
};

////////////////////////////////////////////////Location Table///////////////////////////////////////
function locationTable(){
  headerTable();
  for (let j=0;j<locations.length;j++){
    new Salmoncookies(locations[j],minCust_h[j], maxCust_h[j], avgCookie_cus[j]);
    Salmoncookies.branchLocation[j].dailySales();
    Salmoncookies.branchLocation[j].render();
  }
  footerTable();
}

locationTable();

////////////////////////////////////////////////Tosser Table///////////////////////////////////////
function tosserTable(){
  tosserHeaderTable();
  for(let i=0;i<Salmoncookies.branchLocation.length;i++){
    let raw=document.createElement('tr');
    tosser_table.appendChild(raw);
    let rawHeader=document.createElement('th');
    raw.appendChild(rawHeader);
    rawHeader.textContent=Salmoncookies.branchLocation[i].location;
    Salmoncookies.branchLocation[i].tossers();
    for(let j=0;j<=workingHours.length;j++){
      let rawData=document.createElement('td');
      raw.appendChild(rawData);
      rawData.innerText=Salmoncookies.branchLocation[i].tosser[j];
      if(j===workingHours.length){
        rawData.innerText=Salmoncookies.branchLocation[i].totalTossers;
      }
    }
  }
  tosserTableFooter();
}

tosserTable();

///////////////////////////////////////// Table Header Function///////////////////////////////////////////
function headerTable() {

  let raw = document.createElement('tr');
  table.appendChild(raw);
  let tableHeader = document.createElement('th');
  raw.appendChild(tableHeader);
  for (let i = 0; i < workingHours.length; i++) {
    let tableHeader = document.createElement('th');
    raw.appendChild(tableHeader);
    tableHeader.innerText = workingHours[i];
  }
  tableHeader = document.createElement('th');
  raw.appendChild(tableHeader);
  tableHeader.innerText = 'Daily Location Total';
}

function tosserHeaderTable(){
  let raw = document.createElement('tr');
  tosser_table.appendChild(raw);
  let tableHeader = document.createElement('th');
  raw.appendChild(tableHeader);
  for (let i = 0; i < workingHours.length; i++) {
    let tableHeader = document.createElement('th');
    raw.appendChild(tableHeader);
    tableHeader.innerText = workingHours[i];
  }
  tableHeader = document.createElement('th');
  raw.appendChild(tableHeader);
  tableHeader.innerText = 'Daily Tossers Total';
}

///////////////////////////////////////////////////////Table Footer Function///////////////////////
function footerTable(){

  let tableFooter = document.createElement('th');
  footerRaw.appendChild(tableFooter);
  tableFooter.innerText = 'Total';
  let sum=0;
  for (let i = 0; i <workingHours.length; i++){
    for ( let j=0;j<Salmoncookies.branchLocation.length;j++){
      sum+=Salmoncookies.branchLocation[j].dailySalesArr[i];
    }
    let footerData = document.createElement('th');
    footerRaw.appendChild(footerData);
    footerData.innerText=sum;
    sum=0;
  }
  for(let y=0;y<Salmoncookies.branchLocation.length;y++){
    sum+=Salmoncookies.branchLocation[y].total;
  }
  let footerData = document.createElement('th');
  footerRaw.appendChild(footerData);
  footerData.innerText=sum;
  table.appendChild(footerRaw);
}

function tosserTableFooter(){

  let footerRaw =document.createElement('tr');
  tosser_table.appendChild(footerRaw);
  let tableFooter = document.createElement('th');
  footerRaw.appendChild(tableFooter);
  tableFooter.innerText = 'Total';
  let sum=0;
  for (let i = 0; i <workingHours.length; i++){
    for ( let j=0;j<Salmoncookies.branchLocation.length;j++){
      sum+=Salmoncookies.branchLocation[j].tosser[i];
    }
    let footerData = document.createElement('th');
    footerRaw.appendChild(footerData);
    footerData.innerText=sum;
    sum=0;
  }
  for(let y=0;y<Salmoncookies.branchLocation.length;y++){
    sum+=Salmoncookies.branchLocation[y].totalTossers;
  }
  let footerData = document.createElement('th');
  footerRaw.appendChild(footerData);
  footerData.innerText=sum;
}
/////////////////////////////////// adding new branch information//////////////////////////
branchForm.addEventListener('submit',addBranch);

function addBranch(event){
  event.preventDefault();
  let newLocation = event.target.location.value;
  let newavgCookies = parseInt(event.target.avgCookies.value);
  let newmaxCus= parseInt(event.target.maxCus_h.value);
  let newminCus= parseInt(event.target.minCus_h.value);
  let newBranch =new Salmoncookies(newLocation,newavgCookies,newmaxCus,newminCus);
  newBranch.dailySales();
  console.log(newBranch.custNum_h());
  newBranch.render();
  table.removeChild(footerRaw);
  footerRaw =document.createElement('tr');
  footerTable();
  tosser_table.innerHTML='';
  tosserTable();
}
////////////////////////////////// Change Display //////////////////////////
