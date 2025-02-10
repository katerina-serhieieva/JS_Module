// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>smth</div>');
}

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>same ' + i + '</div>');
    // document.write(`<div> same ${i} </div>`); - seen from resolves
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині
let x = 0
while (x < 20) {
    document.write('<h1>tyu</h1>');
    x++;
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let y = 0
while (y < 20) {
    document.write(`<h1>tyu ${y}</h1>`);
    y++;
}
//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (let item of listOfItems) {
    document.write(`<li> ${item} </li>`);
}
document.write('</ul>');
// як винести спільний ул підгледіла в рішеннях


//#Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://twinings.ca/cdn/shop/products/herbal-variety-pack-bags-20ct-cl.png?v=1579715076'
    },
];
for (let i=0; i < products.length; i++) {
    document.write(`<div class="product-card">
    <h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
    <img src="${products[i].image}" alt="" class="product-image"/>
</div>`);
}


// #4WrHwFTEop0
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
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
document.write(`<h4>Married users</h4>`)
for (let user of users) {
    if (user.status === true) {
        document.write(`<p>${user.name} - ${user.age} - ${user.status}</p>`);
    }
}
document.write(`<h4>Single users</h4>`)
for (let user of users) {
    if (user.status === false) {
        document.write(`<p>${user.name} - ${user.age} - ${user.status}</p>`);
    }
}
document.write(`<h4>Adult users</h4>`)
for (let user of users) {
    if (user.age > 30) {
        document.write(`<p>${user.name} - ${user.age} - ${user.status}</p>`);
    }
}

