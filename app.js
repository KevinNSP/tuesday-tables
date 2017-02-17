'use strict';

var openTimes = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// constructor -------------------------
function CookieStore(location, minCustomers, maxCustomers, avgCookies) { //function to create new CookieStore
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.cookiesPerHourAr = [];

  //Cookie Calculator
  this.cookiesPerHour = function() {
    for (var i = 0; i < openTimes.length; i++){
      var customersThisHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;

      var avgCookies = Math.floor(customersThisHour * this.avgCookies);
//    array                 into value
      this.cookiesPerHourAr.push(avgCookies);
    };
  };
}
// ---------------------------------
var storeOne = new CookieStore('1st and Pike', 23, 65, 6.3);//new instance of a cookie store
// console.log(storeOne);

var storeTwo = new CookieStore('Seatac Airport', 3, 24, 1.2);//new instance of a cookie store
// console.log(storeTwo);

var storeThree = new CookieStore('Seattle Center', 11, 38, 3.6);//new instance of a cookie store
// console.log(storeThree);

var storeFour = new CookieStore('Capitol Hill', 28, 38, 2.3);//new instance of a cookie store
// console.log(storeFour);

var storeFive = new CookieStore('Alki', 2, 16, 4.6);//new instance of a cookie store
// console.log(storeFive);

var stores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

for (var i = 0; i < stores.length; i++) {
  stores[i].cookiesPerHour();
}

var tableEl = document.createElement('table');

//Submit new store
var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  var location = event.target.location.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  var newStore = new CookieStore(location, minCustomers, maxCustomers, avgCookies);
  newStore.cookiesPerHour();
  console.log(newStore);
  stores.push(newStore);
  while (tableEl.hasChildNodes()) {
    tableEl.removeChild(tableEl.firstChild);
  }
  makeTable();
}

//Table Everything
// Function to make Table Head
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

//Function to make Table Foot
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

// prototype to make data points
CookieStore.prototype.tableData = function() {
  var rowEl = document.createElement('tr');
  rowEl.textContent = this.location;
  tableEl.appendChild(rowEl);

  var dailyTotal = 0;
  for (var j = 0; j < openTimes.length; j++) {
    var dataEl = document.createElement('td');
    var cookie = this.cookiesPerHourAr[j];
    dataEl.textContent = cookie;
    dailyTotal += cookie;
    rowEl.appendChild(dataEl);
  }

  var dailyStoreTotal = document.createElement('td');
  dailyStoreTotal.textContent = dailyTotal;
  rowEl.appendChild(dailyStoreTotal);
};

function makeTable() {
  tableHead();
  for (var i = 0; i < stores.length; i++) {
    stores[i].tableData();
  }
  tableFoot();
};
makeTable();
document.body.appendChild(tableEl);
