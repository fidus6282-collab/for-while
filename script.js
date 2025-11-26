// for (let i= 1; i<5; i++) {
//     console.log("Qadam:", i);
// }

// // i++ = i + 1 increement

// let fruits = ["Apple", "banana", "orange"]
// console.log(fruits);
// for (let i = 0; i <fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

// for (let i = 5; i>0; i--) {
//     console.log("Orqaga sanoq:",   i);
// }

let numbers = [2, 4, 9, 10, 45, 67, 8, 90,];

alert('Sizning massivingizdagi sonlar: ' + numbers);

for (let i = 0; i < numbers.length; i++) {
    
    numbers[i] % 2 === 0 && console.log('Juft son: ' + numbers[i]);
 
    numbers[i] % 2 !== 0 && console.log('Toq son: ' + numbers[i]);

    numbers[i] % 2 === 0 && alert('Juft son: ' + numbers[i]);

    numbers[i] % 2 !== 0 && alert('Toq son: ' + numbers[i]);
}




// let son = [2, 4, 9, 10, 45, 67, 8, 90]

// if ( son[0] % 2 === 0 ){
//     console.log("Juft son" + son); 
// }else{
//     console.log("Toq son" + son);
// }