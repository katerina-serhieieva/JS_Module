let rectangleArea = (width, height) => width * height;
//------------------------------------------------------------
let circleArea = (r) => 3.14 * r * r;
console.log(circleArea(5));
//------------------------------------------------------------
let cylinderArea = (r, h) => 2 * 3.14 * r * r + 2 * 3.14 * r * h;
console.log(cylinderArea(5, 5));
//------------------------------------------------------------
let itemOfArray = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
itemOfArray(users);
//------------------------------------------------------------
let createText = (p) => {
    document.write(`<p>${p}</p>`);
}
createText('Hello World!');
//------------------------------------------------------------
let createUL = (li, quantity) => {
    document.write(`<ul>`)
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}
createUL ('Hello World!', 5);
//------------------------------------------------------------
let createUlArr = (arr) => {
    document.write(`<ul>`)
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
let simple = ['word', 45, false];
createUlArr(simple);
//------------------------------------------------------------
let createObjOfArr = (arr) => {
    for (const object of arr) {
        document.write(`<div>`)
        document.write(`<p>name: ${object.name}</p>`)
        document.write(`<p>age: ${object.age}</p>`)
        document.write(`<p>status: ${object.status}</p>`)
        document.write(`</div>`);
    }
}
createObjOfArr(users);
//-------------------------------------------------------------
let minNum = (arr) => {
    let minNum = arr[0];
    for (let num of arr) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum
}
let nums = [4, 5, 45, 1, 2, 10, 11, 12, 56];
console.log(minNum(nums));
//--------------------------------------------------------------
let sum = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum = sum + num;
    }
    return sum
}
console.log(sum(nums));
//--------------------------------------------------------------
let swap = (arr, index1, index2) => {
    if (index1 <= arr.length && index2 <= arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    } else if (index1 > arr.length && index2 <= arr.length) {
        return `Index 1 is more than array length` ;
    } else if (index1 <= arr.length && index2 > arr.length) {
        return `Index 2 is more than array length` ;
    } else {
        return `Indexes are more than array length` ;
    }
}
console.log(swap(nums, 0, 1));
//---------------------------------------------------------------------------
debugger;
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenCurrency;
    for (item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    return result = sumUAH/chosenCurrency.value;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
