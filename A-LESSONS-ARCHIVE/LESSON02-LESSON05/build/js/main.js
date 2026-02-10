// let myName: string = 'Hajar'
// // myName = 42
// convert to more or less specific
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
console.log(typeof b);
console.log(typeof c);
//  can't do this in react, but TS allows it
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// TS assertions not always correct so code intentionally
let nextVals = addOrConcat(1, 2, 'concat');
let nextVal = addOrConcat(1, 2, 'add');
// cannot
// 10 as string
// can but avoid though
10;
// The DOM - TS can infer if selector is specific
const img = document.querySelector('img');
const img2 = document.querySelector('#myId');
const img3 = document.getElementById('#img');
const img4 = document.querySelector('img');
// non-null assertion
const img5 = document.getElementById('#img');
const img6 = document.querySelector('img');
//  doesn't work with react
const img7 = document.querySelector('img');
//  TS knows what it is, so doesn't error src
img4.src;
export {};
//  did not infer as HTMLelement
// img3.src
//# sourceMappingURL=main.js.map