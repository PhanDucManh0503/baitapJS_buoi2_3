const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});


document.getElementById("btn1").onclick = function () {
    var dayWorks = +document.getElementById("dayWorks").value;
    var salary = dayWorks * 100000;
    var salaryFinal = VND.format(salary);
    document.getElementById("result1").innerHTML = salaryFinal;
}


