'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//////////////////////////////////////Constructer Function//////////////////////////////
function Salmoncookies(location, minCust_h, maxCust_h, avgCookie_cus) {
   
    this.location = location;
    this.minCust_h = minCust_h;
    this.maxCust_h = maxCust_h;
    this.avgCookie_cus = avgCookie_cus;
    this.dailySalesArr = [];
    this.total = 0;
}

///////////////////////////////////////Constructer Methods/////////////////////////////
Salmoncookies.prototype.custNum_h = function () {
   
    let max = this.maxCust_h;
    let min = this.minCust_h;
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

Salmoncookies.prototype.dailySales = function () {
    
    for (let i = 0; i < workingHours.length; i++) {
        let cookiesSold_h = Math.ceil(this.avgCookie_cus * this.custNum_h());
        this.dailySalesArr.push(cookiesSold_h);
        this.total += this.dailySalesArr[i];
        console.log(this.custNum_h());
    }
}

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
        if(i==this.dailySalesArr.length){
            rawData.innerText=this.total;
        }
    }
} 

////////////////////////////////////////////////Location Objects///////////////////////////////////////
let seattle = new Salmoncookies('seattle', 23, 65, 6.3);
    seattle.dailySales();
let tokyo = new Salmoncookies('tokyo', 3, 24, 1.2);
    tokyo.dailySales();
let dubai = new Salmoncookies('dubai', 11, 38, 3.7);
    dubai.dailySales();
let paris = new Salmoncookies('paris', 20, 38, 2.3);
    paris.dailySales();
let lima = new Salmoncookies('lima', 2, 16, 4.6);
    lima.dailySales();

let branchLocation= [seattle,tokyo,dubai,paris,lima];

///////////////////////////////////////// Table Header Function///////////////////////////////////////////
let table = document.getElementById('location_table');

function headerTable() {

    let raw = document.createElement('tr');
    table.appendChild(raw);
    let tableHeader = document.createElement('th');
        raw.appendChild(tableHeader)
    for (let i = 0; i < workingHours.length; i++) {
        let tableHeader = document.createElement('th');
        raw.appendChild(tableHeader);
        tableHeader.innerText = workingHours[i];
    }
    tableHeader = document.createElement('th');
        raw.appendChild(tableHeader)
        tableHeader.innerText = 'Daily Location Total';
}

headerTable();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

///////////////////////////////////////////////////////Table Footer Function///////////////////////
let footerRaw =document.createElement('tr');

function footerTable(){

    let tableFooter = document.createElement('th');
        footerRaw.appendChild(tableFooter);
        tableFooter.innerText = 'Total';
    let sum=0;
    for (let i = 0; i <workingHours.length; i++){
        for ( let j=0;j<branchLocation.length;j++){
            sum+=branchLocation[j].dailySalesArr[i];
        }
    let footerData = document.createElement('th');
      footerRaw.appendChild(footerData);
        footerData.innerText=sum;
        sum=0;  
    }
    for(let y=0; y<branchLocation.length;y++){
        sum+=branchLocation[y].total;
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
    branchLocation.push(newBranch);
    newBranch.render();
    table.removeChild(footerRaw);
    footerRaw =document.createElement('tr');
    footerTable();
}

