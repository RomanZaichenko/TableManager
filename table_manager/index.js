
const isEven = (num) => num % 2 === 0;
const sum = (nums) => nums.reduce((sum, n) => sum + n, 0);
const average = (nums) => sum(nums)/nums.length;

const median = nums => {
    const sorted = nums.slice().sort((a, b) => a - b);
    const length = sorted.length;
    const middle = Math.floor(length / 2);

    if (isEven(length)) {
        return average([sorted[middle - 1], sorted[middle]]);
    } else {
        return sorted[middle];
    }
};

const spreadsheetFunctions = {
    sum,
    average,
    median,
}

const range = (start, end) => Array(end-start+1).fill(start).
map((element, index) => element + index);

const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).
map((code) => String.fromCharCode(code));

const evalFormula = (x, cells) => {
    const idToText = (id) => cells.find(cell => cell.id === id).value;
}

window.onload = () => {
    const container = document.getElementById('container');

    const createLabel = (name) => {
        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = name;
        container.appendChild(label);
    };

    const letters = charRange("A", "J");
    letters.forEach(createLabel);

    range(1, 99).forEach((number) => {
        createLabel(number);
        letters.forEach((letter) => {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = letter + number;
            input.ariaLabel = letter + number;
            input.onchange = update;
            container.appendChild(input);
        });
    });
};

const update = event => {
    const element = event.target;
    const value = element.value.replace(/\s/g, '');

    if (!value.includes(element.id) && value[0] === '='){

    }
};