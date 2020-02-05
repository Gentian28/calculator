const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')

let value = '';
const items = [];
const results = [];
let res = 0;
let typedValues = '';

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        value += this.id;
        typedValues += this.innerText;
        enteredValue.innerHTML = typedValues;
    }
}


for (let i = 0; i < operators.length; i++) {
    operators[i].onclick = function () {
        if (value.length && items.length < 2) {
            items.push(Number(value));
            value = '';
            items.push(this.id);
            console.log(items);
            typedValues += this.innerText;
            enteredValue.innerHTML = typedValues;
        } else {
            evaluateExpression.click();
            items.push(res);
            items.push(this.id);
            console.log(res);
            console.log(results);
            console.log(items);
        }
    }
}

evaluateExpression.onclick = function () {
    if (items.length === 2 && value.length) {
        items.push(Number(value));
        value = '';
        const operator = items[1];
        const operation = opreatorFunctions[operator];
        const result = operation(items[0], items[2]);
        results.push(result);
        items.length = 0;
        res = result;
        console.log(result);
        console.log(results);
        console.log(items);
        resultContainer.innerHTML = res;
    }
}

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}


const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const calculate = function (operator) {
    if (operator === 'subtract') {
        return subtract;
    }
    if (operator === 'add') {
        return add;
    }
    if (operator === 'multiply') {
        return multiply;
    }
    if (operator === 'divide') {
        return divide;
    }
}

const opreatorFunctions = {
    subtract,
    add,
    multiply,
    divide
}

clear.onclick = function () {
    value = '';
    items.length = 0;
    results.length = 0;
    res = 0;
}