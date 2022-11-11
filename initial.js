let greeting = "Hello World";
console.log(greeting); 
let x = "Esto es una letiable";
console.log(x);
let obj = {
    name: "Johan",
    age: 19,
    number: 123456789,
    isMarried: false,
    money: 12345.8,
}
console.log(obj);
console.log(obj.name);
console.log(obj.age+obj.number);
console.log(typeof obj);
console.log(typeof obj.age);
console.log(typeof obj.isMarried);
console.log(obj.isMarried);
obj.isMarried = true;
console.log(obj.isMarried);

function sayHello(name, age) {
    console.log("Hello " + name + " you are " + age + " years old");
}
sayHello("Johan", 19);

function mf(){}
console.log(typeof sayHello);

class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
}

let me = new person("Johan", 19);
let names = [1, obj.name, "jelou", obj.isMarried]
console.log(names);

let n = "Johan"
let a = "Vergara"
let fn = n +" "+ a +" "+ 19
// console.log(fn);

// let f = 2, g = "2"
// let h = f===g
// console.log(h);

function checkIsPar (a){
    if((a%2) == 0)
        return true;
    else
        return false;        
}

// console.log(checkIsPar(6666) + " y " + checkIsPar(7777));

let aa = (obj.age >= 18) ? "mayor de edad" : "menor de edad"
// console.log(aa);

let ff = "124"
console.log(typeof ff);
let fg = Number(ff)
// console.log("el tipo de fg es "+typeof fg);

let result = '';
let i = 0;

do {
  i++;
  result = result + i;
} while (i < 5);

// console.log(result);



// let fu = function(a, b){return a+b}
// let re = fu(2,3)
// for (let i = 0; i < 10; i++) {
//     alert("Numero: " + i + " es "+ re)
// } 

// alert(obj)
// console.log(obj)

numbersx = [1,2,3,4,5,6,7,8,9,10]
// for (xd in numbersx){
//     alert(xd)
//     console.log(xd)
// }

// delete obj.money
// print(obj)


let xarray = Object.values(obj)
console.log(xarray);

let strobj = JSON.stringify(obj)
console.log(strobj); 

let test = {
    name: "Johan",
    age: 19,
    number: 123456789,
    isMarried: false,
    money: 12345.8,
    array: [1,2,3,4,5,6,7,8,9,10],
    lang: "es",
    get language(){
        return this.lang.toUpperCase()
    },
    set language(lang){
        this.lang = lang.toUpperCase()
    }
}

console.log(test.language);
test.language = "fr"
console.log(test.language);

function persona (nombre, apellido, edad, email){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.email = email
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}

let pablo = new persona("Pablo", "Perez", 20, "pablitoxd@gmail.com")
