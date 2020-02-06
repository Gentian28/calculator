const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')

let value = '';
const items = [];
const results = [];
let res = 0;
let typedValues = '';

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        if (res > 0 && !items.length) {
            clear.click();
        }
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
            console.log(value.length)
        }
        if (!value.length && res > 0 && items.length < 2) {
            items.push(Number(res));
            value = '';
            items.push(this.id);
            console.log(items);
            typedValues += this.innerText;
            enteredValue.innerHTML = typedValues;
            console.log(value.length)
        }
        if (value.length) {
            evaluateExpression.click();
            typedValues += this.innerText;
            enteredValue.innerHTML = typedValues;
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
    typedValues = '';
    enteredValue.innerHTML = typedValues;
    resultContainer.innerHTML = '';
}
