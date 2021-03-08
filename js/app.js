'use strict';
//////////////////////////////////seattle branch/////////////////////////
let seattle={
    location:'seattle',
    minCust_h:23,
    maxCust_h: 65,
    avgCookie_cus:6.3,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    dailySalesArr:[],
    total:0,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.ceil(Math.random()*(max-min+1)+min);
    },
  
    dailySales: function(){
         for(let i=0;i<this.workingHours.length;i++){
            let cookiesSold_h= Math.ceil(this.avgCookie_cus*this.custNum_h()); 
            this.dailySalesArr.push(cookiesSold_h);
            this.total+=this.dailySalesArr[i];
         } 
     },
    };
console.log(seattle.dailySales(),seattle.dailySalesArr,seattle.total);
   

function seattlebranch(){
    let list=document.getElementById('seattlesales');
    let branchName=document.createElement('h1');
    branchName.innerText=seattle.location;
    let unorderedlist= document.createElement('ul');
    unorderedlist.appendChild(branchName);
   
    for (let i=0;i<14;i++){
    let listItem= document.createElement('li');
    listItem.innerText= seattle.workingHours[i]+': '+seattle.dailySalesArr[i]+' cookies';
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
    };
    let total=document.createElement('li');
    total.innerText='Total:'+seattle.total+' cookies';
    unorderedlist.appendChild(total);
}
seattlebranch();

// /////////////////////////////////////////////////tokyo branch///////////////////////////////////////
let tokyo={
    location:'tokyo',
    minCust_h:3,
    maxCust_h:24,
    avgCookie_cus:1.2,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    dailySalesArr:[],
    total:0,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.ceil(Math.random()*(max-min+1)+min);
    },
  
    dailySales: function(){
         for(let i=0;i<this.workingHours.length;i++){
            let cookiesSold_h= Math.ceil(this.avgCookie_cus*this.custNum_h()); 
            this.dailySalesArr.push(cookiesSold_h);
            this.total+=this.dailySalesArr[i];
         } 
     },
    };
console.log(tokyo.dailySales(),tokyo.dailySalesArr,tokyo.total);
   

function tokyobranch(){
    let list=document.getElementById('tokyosales');
    let branchName=document.createElement('h1');
    branchName.innerText=tokyo.location;
    let unorderedlist= document.createElement('ul');
    unorderedlist.appendChild(branchName);
   
    for (let i=0;i<14;i++){
    let listItem= document.createElement('li');
    listItem.innerText= tokyo.workingHours[i]+': '+tokyo.dailySalesArr[i]+' cookies';
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
    };
    let total=document.createElement('li');
    total.innerText='Total:'+tokyo.total+' cookies';
    unorderedlist.appendChild(total);
}
tokyobranch();


// // //////////////////////////////////////////////////dubai branch////////////////////////////////////
 let dubai={
    location:'dubai',
    minCust_h:11,
    maxCust_h: 38,
    avgCookie_cus:3.7,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    dailySalesArr:[],
    total:0,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.ceil(Math.random()*(max-min+1)+min);
    },
  
    dailySales: function(){
         for(let i=0;i<this.workingHours.length;i++){
            let cookiesSold_h= Math.ceil(this.avgCookie_cus*this.custNum_h()); 
            this.dailySalesArr.push(cookiesSold_h);
            this.total+=this.dailySalesArr[i];
         } 
     },
    };
console.log(dubai.dailySales(),dubai.dailySalesArr,dubai.total);
   

function dubaibranch(){
    let list=document.getElementById('dubaisales');
    let branchName=document.createElement('h1');
    branchName.innerText=dubai.location;
    let unorderedlist= document.createElement('ul');
    unorderedlist.appendChild(branchName);
   
    for (let i=0;i<14;i++){
    let listItem= document.createElement('li');
    listItem.innerText= dubai.workingHours[i]+': '+dubai.dailySalesArr[i]+' cookies';
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
    };
    let total=document.createElement('li');
    total.innerText='Total:'+dubai.total+' cookies';
    unorderedlist.appendChild(total);
}
dubaibranch();

// ////////////////////////////////////////////////paris branch////////////////////////////////
let paris={
    location:'paris',
    minCust_h:20,
    maxCust_h: 38,
    avgCookie_cus:2.3,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    dailySalesArr:[],
    total:0,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.ceil(Math.random()*(max-min+1)+min);
    },
  
    dailySales: function(){
         for(let i=0;i<this.workingHours.length;i++){
            let cookiesSold_h= Math.ceil(this.avgCookie_cus*this.custNum_h()); 
            this.dailySalesArr.push(cookiesSold_h);
            this.total+=this.dailySalesArr[i];
         } 
     },
    };
console.log(paris.dailySales(),paris.dailySalesArr,paris.total);
   

function parisbranch(){
    let list=document.getElementById('parissales');
    let branchName=document.createElement('h1');
    branchName.innerText=paris.location;
    let unorderedlist= document.createElement('ul');
    unorderedlist.appendChild(branchName);
   
    for (let i=0;i<14;i++){
    let listItem= document.createElement('li');
    listItem.innerText= paris.workingHours[i]+': '+paris.dailySalesArr[i]+' cookies';
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
    };
    let total=document.createElement('li');
    total.innerText='Total:'+paris.total+' cookies';
    unorderedlist.appendChild(total);
}
parisbranch();


// ///////////////////////////////////////////////lima branch/////////////////////////////////////
let lima={
    location:'lima',
    minCust_h:2,
    maxCust_h:16,
    avgCookie_cus:4.6,
    workingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    dailySalesArr:[],
    total:0,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.ceil(Math.random()*(max-min+1)+min);
    },
  
    dailySales: function(){
         for(let i=0;i<this.workingHours.length;i++){
            let cookiesSold_h= Math.ceil(this.avgCookie_cus*this.custNum_h()); 
            this.dailySalesArr.push(cookiesSold_h);
            this.total+=this.dailySalesArr[i];
         } 
     },
    };
console.log(lima.dailySales(),lima.dailySalesArr,lima.total);
   

function limabranch(){
    let list=document.getElementById('limasales');
    let branchName=document.createElement('h1');
    branchName.innerText=lima.location;
    let unorderedlist= document.createElement('ul');
    unorderedlist.appendChild(branchName);
   
    for (let i=0;i<14;i++){
    let listItem= document.createElement('li');
    listItem.innerText= lima.workingHours[i]+': '+lima.dailySalesArr[i]+' cookies';
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
    };
    let total=document.createElement('li');
    total.innerText='Total:'+lima.total+' cookies';
    unorderedlist.appendChild(total);
}
limabranch();

