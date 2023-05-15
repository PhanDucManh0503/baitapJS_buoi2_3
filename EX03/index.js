const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});



document.getElementById("btn").onclick = function () {
    var Dolas = +document.getElementById("moneyDolas").value;
    var VNmoney = Dolas * 23500;
    var VNmoney1 = VND.format(VNmoney);
    document.getElementById("result1").innerHTML = VNmoney1;
}