const numbers = [1, 2,3,4,5,6,7,8];
const squaredNumbers = numbers.map(num => 2 * num);
console.log(squaredNumbers)
console.log(numbers)

//------------------------------------------------------------------------------------------
const words = ['Test', 'Kaffee', 'Haus', 'Projektwoche', 'Baustelle', 'Dienstag'];
const result = words.filter((word) => word.length > 5);
console.log(result)
const reversed = words.reverse();
console.log('reversed words:', reversed);
words.sort()
console.log('sorted words:', words)
//------------------------------------------------------------------------------------------
let arrayReduce: number = [10, 20, 30, 40].reduce((a,b) => a+b);
console.log("total is " + arrayReduce)
//------------------------------------------------------------------------------------------
const arraySome : number [] = [1,20,3,4,50,6,7,18];
const text = ['aufwärts','abwärts','gleich']
let welcheZahl : number[] = arraySome.filter((zahl) => zahl > 10);
let resultSome : boolean = arraySome.some((zahl) => zahl > 10);
const gradeZahl = arraySome.filter(num => num % 2 === 0);
const isLargeNumber = (zahl) => zahl > 40;

if(resultSome) {
    console.log("Es gibt mindestens eine Zahl die ist größer als 10")
    console.log("und zwar die Zahlen " + welcheZahl + ".")
    console.log("Grade Zahlen lauten wie folgt: " + gradeZahl + ".")
    console.log("Der Index der größeren Zahl als 40 lautet: " + arraySome.findIndex(isLargeNumber));
    console.log("hier die verketteten Zahlen " + arraySome.join('-') + " aus dem Array")
}else{
    console.log("Es gibt keine Zahl die größer als 10 ist")
}