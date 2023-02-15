
 let subtotal = document.getElementById("subtotal");
 let total = document.getElementById("total");
 let tax = document.getElementById("tax");
 
 total.innerText = parseInt(subtotal.innerText)+parseInt(tax.innerText);
// total.innerText = parseInt(subtotal) + parseInt(total);


function updateMobileNum() {
  let input = document.getElementById("input-1");
  let inputvalue = input.value;
  let inputValueNum = parseInt(inputvalue);

  input.value = inputValueNum + 1;
  //
  let firstprize = document.getElementById("input-1-prize");
  let firstPrizeValue = firstprize.innerText;
  let firstPrizeNum = parseInt(firstPrizeValue);

  firstprize.innerText = parseInt(1219 * input.value);
  
  return firstprize.innerText;
}

// 
function updateCaseNum(){
let input = document.getElementById("input-2");
let inputvalue = input.value;
let inputValueNum = parseInt(inputvalue);

input.value = inputValueNum + 1;

//

let firstprize = document.getElementById("input-2-prize");
let firstPrizeValue = firstprize.innerText;
let firstPrizeNum = parseInt(firstPrizeValue);

firstprize.innerText = parseInt(59 * input.value);

return firstprize.innerText;
}
function updateMobileNumMinus(){
let input = document.getElementById("input-1");
let inputValue = input.value;
let inputValueNum = parseInt(inputValue);

input.value = inputValueNum - 1;
if (input.value < 0) {
  alert("Not so minus mojo jojo");
  input.value = 0;
  
}
//
let firstprize = document.getElementById("input-1-prize");
let firstPrizeValue = firstprize.innerText;
let firstPrizeNum = parseInt(firstPrizeValue);

firstprize.innerText = parseInt(1219 * input.value);

return firstprize.innerText;
}
function updateCaseNumMinus(){
let input = document.getElementById("input-2");
let inputValue = input.value;
let inputValueNum = parseInt(inputValue);

input.value = inputValueNum - 1;
if (input.value < 0) {
  alert("Not so minus mojo jojo");
  input.value = 0;
  
}
//

let firstprize = document.getElementById("input-2-prize");
let firstPrizeValue = firstprize.innerText;
let firstPrizeNum = parseInt(firstPrizeValue);

firstprize.innerText = parseInt(59 * input.value);

return firstprize.innerText;
}

// 
// 
//

document.getElementById("btn-1-plus").addEventListener("click", function () {
  // updateMobileNum();
  
  let subtotal = document.getElementById('subtotal');
  let casePrize = document.getElementById('input-2-prize');
  let caseNum = casePrize.innerText;
  subtotal.innerText = parseInt(updateMobileNum()) +parseInt(caseNum);

  // 
  let tax = document.getElementById('tax');
  let taxValue = tax.innerText;
  
  let total = document.getElementById('total');
  let totalValue = total.innerText;
  total.innerText = (parseInt(subtotal.innerText)) + 25;
});

document.getElementById("btn-1-minus").addEventListener("click", function () {
  // updateMobileNumMinus();
  let subtotal = document.getElementById("subtotal");
  let casePrize = document.getElementById("input-2-prize");
  let caseNum = casePrize.innerText;
  subtotal.innerText = parseInt(updateMobileNumMinus()) + parseInt(caseNum);
  // 
  
  // console.log(total1);
  //
  let tax = document.getElementById("tax");
  let taxValue = tax.innerText;

  let total = document.getElementById("total");
  let totalValue = total.innerText;
  // 
  if (parseInt(subtotal.innerText) < 1) {
    alert("stop clicking");
    total.innerText = 0;
    
    return total.innerText;
  }
  // 
  total.innerText = parseInt(subtotal.innerText) + 25;
});

//

document.getElementById("btn-2-plus").addEventListener("click", function () {
  // updateCaseNum();
  let subtotal = document.getElementById("subtotal");
  let mobilePrize = document.getElementById("input-1-prize");
  let mobileNum = mobilePrize.innerText;
  subtotal.innerText = parseInt(updateCaseNum()) + parseInt(mobileNum);
  //  console.log(total2)
  //
  //
  let tax = document.getElementById("tax");
  let taxValue = tax.innerText;

  let total = document.getElementById("total");
  let totalValue = total.innerText;
  total.innerText = parseInt(subtotal.innerText) + 25;
});

document.getElementById("btn-2-minus").addEventListener("click", function () {
  // updateCaseNumMinus();
  let subtotal = document.getElementById("subtotal");
  let mobilePrize = document.getElementById("input-1-prize");
  let mobileNum = mobilePrize.innerText;
  subtotal.innerText = parseInt(updateCaseNumMinus()) + parseInt(mobileNum);
  // console.log(total3);
  if (parseInt(subtotal.innerText) < 1) {
    alert("stop clicking");
    total.innerText = 0;
    
    return total.innerText;
  }
  //
  let tax = document.getElementById("tax");
  let taxValue = tax.innerText;

  let total = document.getElementById("total");
  let totalValue = total.innerText;
  total.innerText = parseInt(subtotal.innerText) + 25;
});

// 


