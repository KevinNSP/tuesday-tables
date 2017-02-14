'use strict';

var openTimes = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

function CookieStore(location, minCustomers, maxCustomers, avgCookies, cookiesPerHour) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;

  this.custPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers));

  // this.cookiesPerHour = function() {
  //     for (var i = 6; i < 20; i++){
  //       return this.cookiesPerHour(Math.floor(this.custPerHour() * this.avgCookies));
  };
  // console.log(this.location);
  // console.log(this.minCustomers);
  // console.log(this.maxCustomers);
  // console.log(this.avgCookies);
  console.log(this.cookiesPerHour);
}

var storeOne = new CookieStore('1st and Pike', 23, 65, 6.3, []);
console.log(storeOne);

var storeTwo = new CookieStore('Seatac Airport', 3, 24, 1.2, []);
console.log(storeTwo);

var storeThree = new CookieStore('Seattle Center', 11, 38, 3.6, []);
console.log(storeThree);

var storeFour = new CookieStore('Capitol Hill', 28, 38, 2.3, []);
console.log(storeFour);

var storeFive = new CookieStore('Alki', 2, 16, 4.6, []);
console.log(storeFive);

var stores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

console.log(stores);

var tableEl = document.createElement('table'); //created table element. tableEl = <table></table>

for(var i = 0; i < stores.length; i++){
  var currentStore = stores[i]; //i will dynamically change with the loop "index 0 = pikePlace" line 88

  var rowEl = document.createElement('tr'); //creat table row w/o any content
  tableEl.appendChild(rowEl); //append row prior to appending child to row

  var nameEl = document.createElement('th'); //table heading
  nameEl.textContent = currentStore.name;
  // <th>currentStore</th>
  rowEl.appendChild(nameEl);

  var minCustEl = document.createElement('td');
  minCustEl.textContent = currentStore.minCustomers;
  rowEl.appendChild(minCustEl);

  var maxCustEl = document.createElement('td');
  maxCustEl.textContent = currentStore.maxCustomers;
  rowEl.appendChild(maxCustEl);

  var aveCookiesEl = document.createElement('td');
  aveCookiesEl.textContent = currentStore.aveCookies;
  rowEl.appendChild(aveCookiesEl);

};

document.body.appendChild(tableEl);
