let myName: string = 'Neil';
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // kind of defeats the purpose of TypeScript

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

const sum = (a: number, b: string) => {
  return a + b;
};

console.log(sum(8, '5asd'));

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
