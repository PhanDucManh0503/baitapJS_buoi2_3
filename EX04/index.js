document.getElementById("btn").onclick = function () {
    var chieurong = +document.getElementById("width1").value;
    var chieudai = +document.getElementById("height1").value;
    var chuvi = (chieudai + chieurong) * 2;
    var dientich = chieudai * chieurong;
    document.getElementById("result1").innerHTML = chuvi;
    document.getElementById("result2").innerHTML = dientich;
}