let billvalue = "";

document.getElementById('bill').addEventListener("input", function () {
    billvalue = getbill();
});

function getbill() {
    return document.getElementById('bill').value;
}