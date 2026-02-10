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
// type stringOrNumber = string | number
// type stringOrNumberArray = (string | number)[]

// type Guitarist = {
//   name?: string,
//   active: boolean,
//   albums: stringOrNumberArray
// }

// //  types are aliases
// type UserId = stringOrNumber

// //  interfaces are like classes! this is not allowed
// // interface PostId = stringOrNumber

// //  Literal types
// let myName: 'Dave'
// // myName = 'John'
// myName = 'Dave'

// let userName: 'Dave' | 'John' | 'Amy'
// userName = 'Amy'

// // function
// const add = (a: number, b: number): number => {
//   return a + b;
// }

// const logMsg = (message: any) => {
//   console.log(message);
// }

// logMsg('Hello!')
// logMsg(add(2, 3))

// let subtract = function(c: number, d: number): number {
//   return c-d;
// }
// console.log(subtract(10, 2));

// type mathFunction = (a: number, b: number) => number 
// // interface mathFunction {
// //   (c: number, d: number): number
// // }
// let multiply: mathFunction = function (c, d) {
//   return c * d;
// }

// logMsg(multiply(2, 2))

// //  optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   //  "type guard"
//   if (typeof c !== 'undefined') {
//     return a + b + c
//   }
//   return a + b
// }

// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c
// }

// logMsg(addAll(2, 3))
// logMsg(addAll(2, 4))
// logMsg(sumAll(1, 2))
// logMsg(sumAll(undefined, 12))

// //  Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((prev, curr) => prev + curr)
// }

// logMsg(total(1, 2, 3, 4))

// // never types throw errors
// const createError = (errMsg: string): never => {
//   throw new Error(errMsg)
// }

// //  endless loops also returns never
// // const infinite = (): never => {
// //   let i: number = 1
// //   while (true) {
// //     i++
// //   }
// // }

// const infinite = (): void => {
//   let i: number = 1
//   while (true) {
//     i++
//     if (i > 100) {
//       break
//     }
//   }
// }

// //  custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === 'number'? true: false
// }

// //  use of the never type
// const numberOfString = (value: number | string): string => {
//   if (typeof value === 'string') return 'string'
//   if (isNumber(value)) return 'number'
//   //  TS need explicit return w possible error
//   return createError('This should never happen!')
// }

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific type
let c = a as Three // more specific

console.log(typeof b)
console.log(typeof c)

//  can't do this in react, but TS allows it
let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b
  }
  return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
// TS assertions not always correct so code intentionally
let nextVals: number = addOrConcat(1, 2, 'concat') as number

let nextVal: number = addOrConcat(1, 2, 'add') as number

// cannot
// 10 as string
// can but avoid though
( 10 as unknown ) as string

// The DOM - TS can infer if selector is specific
const img = document.querySelector('img')
const img2 = document.querySelector('#myId')
const img3 = document.getElementById('#img')
const img4 = document.querySelector('img') as HTMLImageElement

// non-null assertion
const img5 = document.getElementById('#img')! as HTMLImageElement
const img6 = document.querySelector('img')!
//  doesn't work with react
const img7 = <HTMLImageElement>document.querySelector('img')

//  TS knows what it is, so doesn't error src
img4.src
//  did not infer as HTMLelement
// img3.src







