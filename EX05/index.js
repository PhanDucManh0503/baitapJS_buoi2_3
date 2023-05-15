document.getElementById("btn1").onclick = function () {
    var number = +document.getElementById("number").value;
    var total = number % 10 + Math.floor(number / 10);
    document.getElementById("result").innerHTML = total;
}