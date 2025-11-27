function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const error = document.getElementById("error");
    const resultField = document.getElementById("result");

    error.textContent = ""; 

    if (num1 === "" || num2 === "") {
        error.textContent = "Введіть обидва числа!";
        resultField.textContent = "---";
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        error.textContent = "Вводити можна лише числа!";
        resultField.textContent = "---";
        return;
    }

    let a = Number(num1);
    let b = Number(num2);
    let result;

    switch (operation) {
        case "add":
            result = a + b;
            break;

        case "sub":
            result = a - b;
            break;

        case "mul":
            result = a * b;
            break;

        case "div":
            if (b === 0) {
                error.textContent = "На нуль ділити не можна!";
                resultField.textContent = "---";
                return;
            }
            result = Number((a / b).toFixed(2)); // округлення до сотих
            break;
    }

    resultField.textContent = result;
}
