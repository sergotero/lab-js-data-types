/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister);




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const palabraUno = part1.slice(0,-1) + part1[part1.length-1].toUpperCase();
const palabraDos = part2.slice(0,-1) + part2[part2.length-1].toUpperCase();
const result = palabraUno + palabraDos;

// Second method
// This was what inmediately came to my mind, but we didn't know whether we were allowed to use loops. I know it involves more coding, but I think is easier to understand)

// let palabra1 = "";
// let palabra2 = "";

// for (let i = 0; i < part1.length; i++) {
//     if(i === (part1.length -1)){
//         palabra1 += part1[i].toUpperCase();
//     } else{
//         palabra1 += part1[i];
//     }
// }

// for (let i = 0; i < part2.length; i++) {
//     if(i === (part2.length -1)){
//         palabra2 += part2[i].toUpperCase();
//     } else{
//         palabra2 += part2[i];
//     }
// }
// const resultado = palabra1+palabra2;


// Print the cameLtaiL-formatted string
console.log(result);
// console.log(resultado);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = (billTotal*15)/100;

// Print out the tipAmount
console.log(tipAmount);




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random()*11)

// Print the generated random number
console.log(randomNumber);



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false
console.log(expression1);

const expression2 = a || b; //true
console.log(expression2);

const expression3 = !a && b; //false
console.log(expression3);

const expression4 = !(a && b); //true
console.log(expression4);

const expression5 = !a || !b; //true
console.log(expression5);

const expression6 = !(a || b); //false
console.log(expression6);

const expression7 = a && a; //true
console.log(expression7);