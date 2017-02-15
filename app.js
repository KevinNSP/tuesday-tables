'use strict';

var openTimes = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(location, minCustomers, maxCustomers, avgCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.cookiesPerHourAr = [];

  //Cookie Calculator
  this.cookiesPerHour = function() {
    for (var i = 0; i < openTimes.length; i++){
      var customersThisHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);

      var avgCookies = Math.floor(customersThisHour * this.avgCookies);
//    array                 into value
      this.cookiesPerHourAr.push(avgCookies);
    };
  };
  console.log(this.location);
  console.log(this.minCustomers);
  console.log(this.maxCustomers);
  console.log(this.avgCookies);
  console.log(this.cookiesPerHourAr);
}

// // simple element creation
// function createElement(tagType, tagIdentifier, tagIdentifierName, elementContent, parentNode) {
//   var element = document.createElement(tagType);
//   element.setAttribute(tagIdentifier, tagIdentifierName);
//   element.textContent = elementContent;
//   console.log(element);
//   //give the Child to the Dom
//   parentNode.appendChild(element);
// } // credit Ben Ayzenberg

var storeOne = new CookieStore('1st and Pike', 23, 65, 6.3);
// console.log(storeOne);

var storeTwo = new CookieStore('Seatac Airport', 3, 24, 1.2);
// console.log(storeTwo);

var storeThree = new CookieStore('Seattle Center', 11, 38, 3.6);
// console.log(storeThree);

var storeFour = new CookieStore('Capitol Hill', 28, 38, 2.3);
// console.log(storeFour);

var storeFive = new CookieStore('Alki', 2, 16, 4.6);
// console.log(storeFive);

var stores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

for (var i = 0; i < stores.length; i++) {
  stores[i].cookiesPerHour();
}
// for(var i = 0; i < stores.length; i++){ // console.log(stores.cookiesPerHourAr);
//   var storesEl = stores[i];
// }

console.log(openTimes);

console.log(stores);

console.log(CookieStore.cookiesPerHourAr);

console.log(storeOne.maxCustomers);

console.log(storeOne.location);

var tableEl = document.createElement('table');

// for(var i = 0; i < stores.length; i++){
//   var currentStore = stores[i];
//
//   var rowEl = document.createElement('tr');
//   tableEl.appendChild(rowEl);
//
// // Add for loop
//
//   var openTimesEl = document.createElement('th');
//   openTimesEl.textContent = openTimes;
//   tableEl.appendChild(openTimesEl);
//
//   var locationEl = document.createElement('th');
//   locationEl.textContent = currentStore.location;
//   rowEl.appendChild(locationEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.minCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var aveCookiesEl = document.createElement('td');
//   aveCookiesEl.textContent = currentStore.avgCookies;
//   rowEl.appendChild(aveCookiesEl);
//
// };

function tableHead() {
  var tableHeadEl = document.createElement('thead');
  tableHeadEl.textContent = 'Times';
  tableEl.appendChild(tableHeadEl);

  for (var i = 0; i < openTimes.length; i++) {
    var hourEl = document.createElement('th');
    hourEl.textContent = openTimes[i];
    tableHeadEl.appendChild(hourEl);
  }

  var storeTotalEl = document.createElement('th');
  storeTotalEl.textContent = 'Daily Total';
  tableHeadEl.appendChild(storeTotalEl);
};

function tableFoot() {
  var tableFootEl = document.createElement('tfoot');
  tableFootEl.textContent = 'Hourly Totals';
  tableEl.appendChild(tableFootEl);
  var grandTotal = 0;

  for (var i = 0; i < openTimes.length; i++) {
    var hourlyTotal = 0;

    for (var j = 0; j < stores.length; j++) {
      var currentStore = stores[j];
      var storeAtHour = currentStore.cookiesPerHourAr[i];
      hourlyTotal += storeAtHour;
      grandTotal += storeAtHour;
    }

    var totalEl = document.createElement('td');
    totalEl.textContent = hourlyTotal;
    tableFootEl.appendChild(totalEl);
  }
  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  tableFootEl.appendChild(grandTotalEl);
};

tableHead();
tableFoot();
document.body.appendChild(tableEl);
//createElement('p', 'id', 'myCustomId', 'Hello User', sectionEl);
//<section id = "sectionEl">
  //<p id = "myCustomId">Hello User</p>
//</section>

// var tableEl = document.createElement('table');
//
// for(var i = 0; i < stores.length; i++){
//   var currentStore = stores[i];
//   var rowEl = document.createElement('tr');
//   tableEl.appendChild(rowEl);
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.name;
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.minCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var aveCookiesEl = document.createElement('td');
//   aveCookiesEl.textContent = currentStore.avgCookies;
//   rowEl.appendChild(aveCookiesEl);
//
//   var cookiesPerHourEl = document.createElement('td');
//   cookiesPerHourEl.textContent = currentStore.cookiesPerHourAr;
//   rowEl.appendChild(cookiesPerHourEl);
//
// };
//
// document.body.appendChild(tableEl);
