function calculate() {
    // Получаем значения из формы
    const x = parseFloat(document.getElementById('xValue').value);
    const y = parseFloat(document.getElementById('yValue').value);

    // Проверяем значения
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    errorDiv.textContent = ''; // Сброс ошибок
    resultDiv.style.display = 'none'; // Скрыть результат, если был

    if (isNaN(x) || isNaN(y)) {
        errorDiv.textContent = 'Введите оба значения!';
        return;
    }

    if (x === 0 || y === 0) {
        errorDiv.textContent = 'Значения X и Y не могут быть равны 0.';
        return;
    }

    // Вычисляем Z
    const z = 1 / (x * y);
    resultDiv.textContent = `Результат: Z = ${z.toFixed(3)}`;
    resultDiv.style.display = 'block';


}

function sendToServer(data) {
   
        let x = parseFloat(document.getElementById('xValue').value);
        let y = parseFloat(document.getElementById('yValue').value);

        if (x === 0 || y === 0 || isNaN(x) || isNaN(y)) {
            alert("Ошибка: Убедитесь, что X и Y корректны и не равны нулю.");
            return;
        }

        let z = 1 / (x * y);
        let query = `https://www.bing.com/search?q=Задача: Определить значение Z=1/(X*Y), где X=${x}, Y=${y}, Z=${z}`;
        window.open(query, '_blank');
    
}
document.getElementById('calculateButton').addEventListener('click', calculate);
document.getElementById('sendButton').addEventListener('click', sendToServer);