//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['string', 'number', 'boolean', 1, 2, 3, true, false, 'null', 'undefined'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'John',
    pageCount: 40,
    genre: 'horror',
}
let book2 = {
    title: 'Mary',
    pageCount: 10,
    genre: 'fantasy',
}
let book3 = {
    title: 'January',
    pageCount: 20,
    genre: 'tragedy',
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
book1.authors = [{name: 'Harry', age: 46}, {name: 'Jan', age: 48}];
book2.authors = [{name: 'Liza', age: 28}, {name: 'Maria', age: 32}];
book3.authors = [{name: 'Jane', age: 35}, {name: 'Mark', age: 41}];

console.log(book3);


//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. +
//Вивести в консоль пароль кожного користувача

user1 = {
    name: 'John',
    username: 'John',
    password: 'fhjk',
};
user2 = {
    name: 'Iza',
    username: 'Iza',
    password: 'sdfghjk',
};
user3 = {
    name: 'Ewa',
    username: 'Ewa',
    password: 'efgbn',
};
user4 = {
    name: 'Denis',
    username: 'Denis',
    password: 'plkjhgf',
};
user5 = {
    name: 'Polly',
    username: 'Polly',
    password: 'jmnsfg',
};
user6 = {
    name: 'Henry',
    username: 'Henry',
    password: 'xsdrthnmkl',
};
user7 = {
    name: 'Gabriel',
    username: 'Gabriel',
    password: 'mnbvcdfghjk',
};
user8 = {
    name: 'Adam',
    username: 'Adam',
    password: 'mbvcdfrty',
};
user9 = {
    name: 'Tom',
    username: 'Tom',
    password: 'sxcvb',
};
user10 = {
    name: 'Ana',
    username: 'Ana',
    password: 'basjdk',
};
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

day1 = {
    morning: 10,
    day: 15,
    evening: 13,
};
day2 = {
    morning: 11,
    day: 16,
    evening: 14,
};
day3 = {
    morning: 13,
    day: 17,
    evening: 18,
};
day4 = {
    morning: 15,
    day: 16,
    evening: 17,
};
day5 = {
    morning: 16,
    day: 17,
    evening: 18,
}
day6 = {
    morning: 17,
    day: 18,
    evening: 19,
}
day7 = {
    morning: 18,
    day: 23,
    evening: 19,
};
weather = [day1, day2, day3, day5, day6, day7];


//Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('enter a number');
// x = 1; //0 -3
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно')
// }



// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
// time = +prompt('Enter minutes within an hour');
// if (time >= 0 && time < 15) {
//     console.log('1st quarter')
// } else if (time >= 15 && time < 30) {
//     console.log('2nd quarter')
// } else if (time >= 30 && time < 45) {
//     console.log('3rd quarter')
// } else if (time >= 45 && time <= 59) {
//     console.log('4th quarter')
// } else {
//     console.log('Invalid input')
// }



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// day = +prompt('Enter date within a month');
// if (day >= 1 && day < 11) {
//     console.log('1st decade')
// } else if (day >= 11 && day < 21) {
//     console.log('2nd decade')
// } else if (day >= 21 && day <= 31) {
//     console.log('3rd decade')
// } else {
//     console.log('Invalid input')
// }



// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).
// weekDay = +prompt('Enter ordinal number of the day of the week');
// switch (weekDay) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;
//     case 4:
//         console.log('Thursday')
//         break;
//     case 5:
//         console.log('Friday')
//         break;
//     default:
//         console.log('Invalid input')
// }



// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// a = +prompt('Enter the first number');
// b = +prompt('Enter the second number');
// if (a > b) {
//     console.log(a)
// } else if (a < b) {
//     console.log(b)
// } else {
//     console.log('equal values')
// }



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// let x; // let x = 0 || let x = null || let x = false || let x = NaN
// // console.log(typeof x);   // just for my checking, not actually the part of the task
// if (!x) {
//     console.log('default')
// } else {
//     console.log('not a falsy value');
// }
// (!x) - gpt's hint



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
//replace manually the index