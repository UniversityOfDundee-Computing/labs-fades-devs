function goAgain() {
    document.getElementById('id1').style.color = 'yellow';
}

let headerText = document.getElementById('id1');

document.getElementById("orangeButton").addEventListener("click", orangeButton);

function orangeButton() {
  headerText.style.color = 'orange';
}
