'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations= ['seattle','tokyo','dubai','paris','lima'];
let minCust_h=[23,3,11,20,2];
let maxCust_h=[65,24,38,38,16];
let avgCookie_cus=[6.3,1.2,3.7,2.3,4.6];
//////////////////////////////////////Constructer Function//////////////////////////////
function Salmoncookies(location, minCust_h, maxCust_h, avgCookie_cus) {

  this.location = location;
  this.minCust_h = minCust_h;
  this.maxCust_h = maxCust_h;
  this.avgCookie_cus = avgCookie_cus;
  this.dailySalesArr =[];
  this.total = 0;
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
    let cookiesSold_h = Math.ceil(this.avgCookie_cus * this.custNum_h());
    console.log(this.avgCookie_cus);
    this.dailySalesArr.push(cookiesSold_h);
    this.total += cookiesSold_h;
    // console.log(this.custNum_h());
  }
};

Salmoncookies.prototype.render= function() {

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

////////////////////////////////////////////////Location Objects///////////////////////////////////////

let table = document.getElementById('location_table');
headerTable();

for (let j=0;j<locations.length;j++){
  new Salmoncookies(locations[j],minCust_h[j], maxCust_h[j], avgCookie_cus[j]);
  Salmoncookies.branchLocation[j].dailySales();
  Salmoncookies.branchLocation[j].render();
}

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






///////////////////////////////////////////////////////Table Footer Function///////////////////////
let footerRaw =document.createElement('tr');

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

footerTable();

/////////////////////////////////// adding new branch information//////////////////////////
let branchForm = document.getElementById('newbranch');

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
  Salmoncookies.branchLocation.push(newBranch);
  newBranch.render();
  table.removeChild(footerRaw);
  footerRaw =document.createElement('tr');
  footerTable();
}

