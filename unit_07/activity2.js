// let billvalue = "";

// document.getElementById('bill').addEventListener("input", function () {
//     billvalue = getbill();
// });

// function getbill() {
//     return document.getElementById('bill').value;
// }


// must read value on event of input + function that gets value

var bill = document.getElementById('bill');
var billValue = '';

bill.addEventListener('input', function() {
    billValue = getvalue();
 } )

function getvalue() {
    return bill.value;
}

console.log(billValue);