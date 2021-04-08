'use strict';
let list=document.getElementById('list');
let filledList=document.getElementById('filledList');
let tableHeader=['ID','Name','Phone','Product','Quantity','Payment Method','Card Number','Month','Year','Country','City','Zip Code','Street Name','Mark as Filled'];
let pendingOrders=JSON.parse(localStorage.getItem('orderData'));
let filledData=[];

if(JSON.parse(localStorage.getItem('filledData'))){
  filledData=JSON.parse(localStorage.getItem('filledData'));
}

function orderList(){
  let title=document.createElement('li');
  list.appendChild(title);
  title.textContent='Pending Orders:';
  for(let i=0;i<pendingOrders.length;i++){
    let item=document.createElement('li');
    list.appendChild(item);
    item.id=[i];
    item.innerHTML= 'Order ID: '+pendingOrders[i].orderId;
    let button=document.createElement('button');
    item.appendChild(button);
    button.textContent='Details';
    button.id=[i];
    button.addEventListener('click',details);
  }
}

orderList();


function filled(){
  let filledTitle=document.createElement('li');
  filledList.appendChild(filledTitle);
  filledTitle.textContent='Filled Orders:';
  for(let i=0;i<filledData.length;i++){
    let item=document.createElement('li');
    filledList.appendChild(item);
    item.id=[i];
    item.innerHTML= 'Order ID: '+filledData[i].orderId;
    let button=document.createElement('button');
    item.appendChild(button);
    button.textContent='Details';
    button.id=[i];
    button.addEventListener('click',filledDetails);
  }
}

filled();


function details(event){
  if(list.lastChild.id === ''){
    list.removeChild(list.lastChild);
  }
  let table=document.createElement('table');
  list.appendChild(table);
  let header=document.createElement('tr');
  table.appendChild(header);
  let raw=document.createElement('tr');
  table.appendChild(raw);
  for(let i=0;i<tableHeader.length;i++){
    header.innerHTML+='<th>'+tableHeader[i]+'</th>';
  }
  raw.innerHTML='<td>'+pendingOrders[event.target.id].orderId+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].userName+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].phone+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].product+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].quantity+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].paymentMethod+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].cardNum+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].month+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].year+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].country+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].city+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].zipCode+'</td>';
  raw.innerHTML+='<td>'+pendingOrders[event.target.id].street+'</td>';
  let rawdata=document.createElement('td');
  raw.appendChild(rawdata);
  let moveButton=document.createElement('button');
  rawdata.appendChild(moveButton);
  moveButton.textContent='Move';
  moveButton.id= event.target.id;
  moveButton.addEventListener('click',move);
}


function move(event){
  filledData.push(pendingOrders[event.target.id]);
  localStorage.setItem('filledData',JSON.stringify(filledData));
  pendingOrders.splice(event.target.id,1);
  localStorage.setItem('orderData',JSON.stringify(pendingOrders));
  list.innerHTML='';
  orderList();
  filledList.innerHTML='';
  filled();
}


function filledDetails(event){
  if(filledList.lastChild.id === ''){
    filledList.removeChild(filledList.lastChild);
  }
  let table=document.createElement('table');
  filledList.appendChild(table);
  let header=document.createElement('tr');
  table.appendChild(header);
  let raw=document.createElement('tr');
  table.appendChild(raw);
  for(let i=0;i<tableHeader.length;i++){
    if(i===tableHeader.length-1){
      header.innerHTML+='<th>'+'Mark as Pended'+'</th>';
    }else{
      header.innerHTML+='<th>'+tableHeader[i]+'</th>';
    }
  }
  raw.innerHTML='<td>'+filledData[event.target.id].orderId+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].userName+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].phone+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].product+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].quantity+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].paymentMethod+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].cardNum+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].month+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].year+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].country+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].city+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].zipCode+'</td>';
  raw.innerHTML+='<td>'+filledData[event.target.id].street+'</td>';
  let rawdata=document.createElement('td');
  raw.appendChild(rawdata);
  let moveButton=document.createElement('button');
  rawdata.appendChild(moveButton);
  moveButton.textContent='Move';
  moveButton.id= event.target.id;
  moveButton.addEventListener('click',moveBack);
}


function moveBack(event){
  pendingOrders.push(filledData[event.target.id]);
  localStorage.setItem('orderData',JSON.stringify(pendingOrders));
  filledData.splice(event.target.id,1);
  localStorage.setItem('filledData',JSON.stringify(filledData));
  list.innerHTML='';
  orderList();
  filledList.innerHTML='';
  filled();
}

