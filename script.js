const display = document.getElementById('display');

// Adiciona texto ao display
function appendToDisplay(value) {
    display.value += value;
}

// Limpa o display
function clearDisplay() {
    display.value = '';
}

// Apaga o último caractere
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Realiza o cálculo
function calculate() {
    try {
        display.value = eval(display.value); // Use com cuidado (apenas para projetos locais)
    } catch (error) {
        display.value = 'Erro';
    }
}
