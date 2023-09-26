const numbers = [1, 2,3,4,5,6,7,8];
const squaredNumbers = numbers.map(num => 2 * num);
console.log(squaredNumbers)
console.log(numbers)

//------------------------------------------------------------------------------------------
const words = ['Test', 'Kaffee', 'Haus', 'Projektwoche', 'Baustelle', 'Dienstag'];
const result = words.filter((word) => word.length > 5);
console.log(result)
//------------------------------------------------------------------------------------------
let arrayReduce: number = [10, 20, 30, 40].reduce((a,b) => a+b);
console.log("total is " + arrayReduce)
//------------------------------------------------------------------------------------------
const arraySome = [1,20,3,4,50,6,7,18];
let resultSome : boolean = arraySome.some((zahl) => zahl > 10);

if(resultSome) {
    console.log("Es gibt mindestens eine Zahl die ist als 10")
}else{
    console.log("Es gibt keine Zahl die größer als 10 ist")
}