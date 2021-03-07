'use strict';
//////////////////////////////////seattle branch/////////////////////////
let seattle={
    minCust_h:23,
    maxCust_h: 65,
    avgCookie_h:6.3,
    
    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.floor(Math.random()*(max-min+1)+min);
    },
    simulatedAmount_h: function(){
        let custNum=this.custNum_h(); 
        //console.log(this.avgCookie_h,custNum);
     return Math.floor(this.avgCookie_h*custNum); 
    },
    
    workingHours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
     
    dailySales: function(){
         let dailySalesArr=[];
         for(let i=0;i<14;i++){
            dailySalesArr.push(this.simulatedAmount_h());
         } 
         return dailySalesArr;
     },

    totalAmount_d: function(){
        let total=0;
        for (let i=0;i<14;i++){
            total+=this.dailySales()[i];
        };
        return total;
    },
};
// console.log(seattle.simulatedAmount_h(),seattle.dailySales(),seattle.totalAmount_d());

function seattlebranch(){
    let list=document.getElementById('seattlesales');
    let unorderedlist= document.createElement('ul');
    for (let i=0;i<14;i++){

    let listItem= document.createElement('li');
    listItem.innerText = seattle.workingHours[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);

    listItem= document.createElement('li');
    listItem.innerText = seattle.dailySales()[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
};
}
seattlebranch();

/////////////////////////////////////////////////tokyo branch///////////////////////////////////////
let tokyo={
    minCust_h:3,
    maxCust_h: 24,
    avgCookie_h:1.2,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.floor(Math.random()*(max-min+1)+min);
    },
    simulatedAmount_h: function(){
        let custNum=this.custNum_h(); 
        //console.log(this.avgCookie_h,custNum);
     return Math.floor(this.avgCookie_h*custNum); 
    },
    
    workingHours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
     
    dailySales: function(){
         let dailySalesArr=[];
         for(let i=0;i<14;i++){
            dailySalesArr.push(this.simulatedAmount_h());
         } 
         return dailySalesArr;
     },

    totalAmount_d: function(){
        let total=0;
        for (let i=0;i<14;i++){
            total+=this.dailySales()[i];
        };
        return total;
    },
};
 
function tokyobranch(){
    let list=document.getElementById('tokyosales');
    let unorderedlist= document.createElement('ul');
    for (let i=0;i<14;i++){

    let listItem= document.createElement('li');
    listItem.innerText = tokyo.workingHours[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);

    listItem= document.createElement('li');
    listItem.innerText = tokyo.dailySales()[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
};
}
tokyobranch();

// //////////////////////////////////////////////////dubai branch////////////////////////////////////
let dubai={
    minCust_h:11,
    maxCust_h: 38,
    avgCookie_h:3.7,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.floor(Math.random()*(max-min+1)+min);
    },
    simulatedAmount_h: function(){
        let custNum=this.custNum_h(); 
        //console.log(this.avgCookie_h,custNum);
     return Math.floor(this.avgCookie_h*custNum); 
    },
    
    workingHours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
     
    dailySales: function(){
         let dailySalesArr=[];
         for(let i=0;i<14;i++){
            dailySalesArr.push(this.simulatedAmount_h());
         } 
         return dailySalesArr;
     },

    totalAmount_d: function(){
        let total=0;
        for (let i=0;i<14;i++){
            total+=this.dailySales()[i];
        };
        return total;
    },
};

function dubaibranch(){
    let list=document.getElementById('dubaisales');
    let unorderedlist= document.createElement('ul');
    for (let i=0;i<14;i++){

    let listItem= document.createElement('li');
    listItem.innerText = dubai.workingHours[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);

    listItem= document.createElement('li');
    listItem.innerText = dubai.dailySales()[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
};
}
dubaibranch();
////////////////////////////////////////////////paris branch////////////////////////////////
let paris={ 
    minCust_h:20,
    maxCust_h: 38,
    avgCookie_h:2.3,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.floor(Math.random()*(max-min+1)+min);
    },
    simulatedAmount_h: function(){
        let custNum=this.custNum_h(); 
        //console.log(this.avgCookie_h,custNum);
     return Math.floor(this.avgCookie_h*custNum); 
    },
    
    workingHours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
     
    dailySales: function(){
         let dailySalesArr=[];
         for(let i=0;i<14;i++){
            dailySalesArr.push(this.simulatedAmount_h());
         } 
         return dailySalesArr;
     },

    totalAmount_d: function(){
        let total=0;
        for (let i=0;i<14;i++){
            total+=this.dailySales()[i];
        };
        return total;
    },
};

function parisbranch(){
    let list=document.getElementById('parissales');
    let unorderedlist= document.createElement('ul');
    for (let i=0;i<14;i++){

    let listItem= document.createElement('li');
    listItem.innerText = paris.workingHours[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);

    listItem= document.createElement('li');
    listItem.innerText = paris.dailySales()[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
};
}
parisbranch();

///////////////////////////////////////////////lima branch/////////////////////////////////////
let Lima={
    minCust_h:2,
    maxCust_h:16,
    avgCookie_h:4.6,

    custNum_h: function(){
        let max=this.maxCust_h;
        let min= this.minCust_h;
     return  Math.floor(Math.random()*(max-min+1)+min);
    },
    simulatedAmount_h: function(){
        let custNum=this.custNum_h(); 
        //console.log(this.avgCookie_h,custNum);
     return Math.floor(this.avgCookie_h*custNum); 
    },
    
    workingHours:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
     
    dailySales: function(){
         let dailySalesArr=[];
         for(let i=0;i<14;i++){
            dailySalesArr.push(this.simulatedAmount_h());
         } 
         return dailySalesArr;
     },

    totalAmount_d: function(){
        let total=0;
        for (let i=0;i<14;i++){
            total+=this.dailySales()[i];
        };
        return total;
    },
};

function limabrabch(){
    let list=document.getElementById('limasales');
    let unorderedlist= document.createElement('ul');
    for (let i=0;i<14;i++){

    let listItem= document.createElement('li');
    listItem.innerText = Lima.workingHours[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);

    listItem= document.createElement('li');
    listItem.innerText = Lima.dailySales()[i];
    unorderedlist.appendChild(listItem);
    list.appendChild(unorderedlist);
};
}
limabrabch();


