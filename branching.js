"use strict";
// var priceOfPhone = 42000,
//   bankBalance = 20000,
//   creditLimit = 30000;
// if (priceOfPhone < bankBalance) {
//   console.log("all ok. process payment");
// } else if (priceOfPhone < creditLimit) {
//   console.log("bank payment failed.credit card willbe used");
// } else {
//   console.log("sorry, you do not have sufficient funds");
// }
// console.log("transcation over");

// var smartPhone = 30000,
//   iHave = 25000,
//   creditLimit = 3000;
// if (smartPhone < iHave) {
//   console.log("I can buy the phone");
// } else if (smartPhone <= iHave + creditLimit) {
//   console.log("I can buy the phone with i have and creditlimit");
// } else {
//   var leftAmount = smartPhone - (iHave + creditLimit);
//   console.log("To buy phone the extra money needed is " + leftAmount);
// }

var chacolate = "DairyMilk",
  quantity;
switch (chacolate) {
  case "DairyMilk":
    quantity = 5;
    break;
  case "Hersheys":
    quantity = 50;
    break;
  case "Toblerone":
    quantity = 3;
    break;
  default:
    quantity = 2;
}
console.log(quantity);
