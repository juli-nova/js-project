//Декларуємо змінні:
//var - старе, не використовуємо
//let - звичайна змінна
//const - стала змінна 

//Primitive data types 
//Number
//String - text
//Boolean - true or false
//null - пусто
//undefined - не визначено
//Object
//Symbol - унікальний незмінний ідентифікатор


let bestGreetings = 'Hallo'
alert(bestGreetings);
bestGreetings = 'JavaScript'
alert (bestGreetings)

const age = Number(prompt ('Enter your age'));
alert ('Your age is: ' + age);

const nextage = addOne(age);
alert('Next year you will be: ' + nextAge);

//logical operators 
//< > >= <= != !== == === || && 

if(age >= 18) {
 alert('You are adult');
} else {
 alert('You are underaged');
}

function AddOne(num) {
 const incremented = num + 1;
 return incremented; 
}