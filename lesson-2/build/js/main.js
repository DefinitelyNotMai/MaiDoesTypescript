"use strict";
let myName = 'Neil';
let meaningOfLife;
let isLoading;
let album; // kind of defeats the purpose of TypeScript
// myName = 32; // Would have been legal in JavaScript.
myName = 'Mai';
meaningOfLife = 87;
isLoading = false;
album = 'Scoring the End of the World';
console.log('Name: ', myName);
console.log('Number: ', meaningOfLife);
console.log('Boolean: ', isLoading);
console.log('Album: ', album);
album = 34;
console.log('Album: ', album);
const sum = (a, b) => {
    return a + b;
};
console.log(sum(8, '5asd'));
let postId;
let isActive;
let re = /\w+/g;
