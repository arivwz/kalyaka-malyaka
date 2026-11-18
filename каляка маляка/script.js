function changePrice() {
    var month = document.getElementById("month").value;
    var priceField = document.getElementById("price");

    if (month == "winter") {
        priceField.value = 600;
    } else if (month == "spring") {
        priceField.value = 400;
    } else if (month == "summer") {
        priceField.value = 300;
    } else if (month == "autumn") {
        priceField.value = 400;
    }
}

function calculate() {
    var fio = document.getElementById("fio").value;
    var daysText = document.getElementById("days").value;

    if (fio == "") {
        alert("Пожалуйста, введите ФИО ребенка!");
        return;
    }

    if (daysText == "") {
        alert("Пожалуйста, введите количество дней!");
        return;
    }

    var days = Number(daysText);

    if (days <= 0 || days % 1 != 0) {
        alert("Дни должны быть целым положительным числом!");
        return;
    }

    if (days > 31) {
        alert("В месяце не может быть больше 31 дня!");
        return;
    }

    var price = Number(document.getElementById("price").value);
    var service = Number(document.getElementById("service").value);

    var totalSum = (price * days) + service;

    document.getElementById("total").value = totalSum + " руб.";
    document.getElementById("resultBlock").style.display = "block";
}

function clearForm() {
    document.getElementById("fio").value = "";
    document.getElementById("days").value = "";
    document.getElementById("service").value = "0";
    document.getElementById("month").value = "winter";
    changePrice();

    document.getElementById("resultBlock").style.display = "none";
    document.getElementById("total").value = "";
}

changePrice();