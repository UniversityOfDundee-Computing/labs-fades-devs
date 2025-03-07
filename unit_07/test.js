const btn = document.getElementById('calculate');
const bill = document.getElementById('bill');

const per1 = document.getElementById('per1');
const per2 = document.getElementById('per2');
const per3 = document.getElementById('per3');

// per1.addEventListener('click', getTip);

// function getTip() {
//     var billValue;
//     var tipPerc = per1.innerHTML;
//     tipPerc = tipPerc.slice(0, 1);
// }


bill.addEventListener('input', triggerTip);

function triggerTip() {
    per1.addEventListener('click', getValues)
}

function getValues() {
    let billValue = bill.value
    let tipPerc = per1.innerHTML.slice(0, 1)
    console.log(billValue * (tipPerc / 100))
    document.getElementById('final').innerHTML = billValue * (tipPerc / 100)
    return
}

// var x = bill.addEventListener('input', getvalue);
// console.log(x);



//  function getTip() {
//     return per1.innerHTML.slice(0, 1);
// }

// function getvalue() {
//     return bill.value;
// }

// btn.addEventListener('click', calculateTotal);
// function calculateTotal() {
//     per1.addEventListener('click', getTip);

//     function getTip () {
//         const tipPerc = per1.innerHTML;
//         console.log(tipPerc);
//     }
// }

// try with if statements so that it doesn't run all of them ?
