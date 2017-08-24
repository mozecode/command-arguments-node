#!/usr/bin/env node
let[,,...myArgs]=process.argv;
//turn strings into numbers array
let numArray= myArgs.map((num)=>parseFloat(num));
//use reduce to add numbers in array
let sum = numArray.reduce((prev, curr)=> prev + curr);
console.log(sum);

