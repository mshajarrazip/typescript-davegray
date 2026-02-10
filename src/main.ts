// let myName: string = 'Hajar'
// // myName = 42

// const myCar = 'Toyota'
// // myCar = 'Honda'

// let isLoading: boolean
// isLoading = true

// let album: string | number | boolean
// album = 1
// album = 'Reputation'
// album = true

// // const sum1 = (a: number, b: string): number => {
// //   return a + b;
// // }

// const sum = (a: number, b: string): string => {
//   return a + b;
// }

// let re: RegExp = /\w+/g

//  LESSON 03

// let stringArr = ['one', 'hey', 'Dave']
// let guitars = ['Strat', 'Les Paul', 5150]
// let mixedData = ['EVH', '1984', true, 555]

// stringArr[0] = 'doobedoobap'
// // guitars.push({name: 'Arnold', age: 101})

// mixedData = guitars

// let test = []
// let bands: string[] = []
// bands.push('BTS')


// // Tuple
// let myTuple: [string, number, boolean] = ['Dave', 42, true];

// let mixed: (string | number | boolean)[] = ['John', 1, false];

// // myTuple = mixed
// myTuple[1] = 42
// // muTuple[1] = "blahblahblah"

// // Objects
// let myObj: object
// myObj = []
// console.log(typeof myObj)
// myObj = bands

// let exampleObj: {
//   prop1: string,
//   prop2: boolean
// };
// // exampleObj = {
// //   name: 'Lucy', age: 17
// // };
// exampleObj = {
//   prop1: 'lulu', prop2: true
// }

// // type Guitarist = {
// //   name: string, 
// //   active?: boolean,
// //   albums: (string | number)[]
// // }

// interface Guitarist {
//   name?: string, 
//   active?: boolean,
//   albums: (string | number)[]
// }

// let evh: Guitarist = {
//   name: 'Eddie', active: false, albums: ['lulu', 'lala', 5150]
// }
// let jp = {
//   name: 'Jimmy', active: true, albums: ['lili', 'lele', 1150]
// }
// let h = {
//   // name: 'Hwasa', 
//   albums: ['NA', 'good goodbye']
// }

// evh = jp
// console.log(evh === jp)

// // evh.years = 40

// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name}!`
//   } else {
//     return "Hello!"
//   }
// }
// console.log(greetGuitarist(h));

// // Enums
// enum Grade {
//   U = 1,
//   D,
//   C,
//   B,
//   A
// }
// console.log(Grade.U)
// console.log(Grade.D)

// LESSON 04
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
}

//  types are aliases
type UserId = stringOrNumber

//  interfaces are like classes! this is not allowed
// interface PostId = stringOrNumber

//  Literal types
let myName: 'Dave'
// myName = 'John'
myName = 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// function
const add = (a: number, b: number): number => {
  return a + b;
}

const logMsg = (message: any) => {
  console.log(message);
}

logMsg('Hello!')
logMsg(add(2, 3))


