const btn = document.getElementById('calculate');
const bill = document.getElementById('bill');

const per1 = document.getElementById('per1');
const per2 = document.getElementById('per2');
const per3 = document.getElementById('per3');
const largest = document.getElementById('largest')

// per1.addEventListener('click', getTip);

// function getTip() {
//     var billValue;
//     var tipPerc = per1.innerHTML;
//     tipPerc = tipPerc.slice(0, 1);
// }


bill.addEventListener('input', triggerTip);

function triggerTip() {

    per1.addEventListener('click', getValues1)
        function getValues1() {
            let billValue = bill.value
            let tipPerc = per1.innerHTML.slice(0, 1)
            console.log(tipPerc)
            document.getElementById('final').innerHTML = billValue * (tipPerc / 100)
            return
        }

    per2.addEventListener('click', getValues2)
        function getValues2() {
            let billValue = bill.value
            let tipPerc = per2.innerHTML.slice(0, 2)
            console.log(tipPerc)
            document.getElementById('final').innerHTML = billValue * (tipPerc / 100)
            return
        }
    
        per3.addEventListener('click', getValues3)
        function getValues3() {
            let billValue = bill.value
            let tipPerc = per3.innerHTML.slice(0, 2)
            console.log(tipPerc)
            document.getElementById('final').innerHTML = billValue * (tipPerc / 100)
            return
        }

        largest.addEventListener('click', getValues4)
        function getValues4() {
            let billValue = bill.value
            let tipMid = per2.innerHTML.slice(0, 2)
            let tipBig = per3.innerHTML.slice(0, 2)
            let maxValue = Math.max((billValue * (tipBig / 100)), ((billValue * (tipMid / 100)) + 2))
            document.getElementById('final').innerHTML = maxValue
            return
        }
    
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
