//  Index Signatures 

// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

// interface TransactionObj {
  
//   // index signatures
//   // index can't be boolean
//   [index: string]: number
// }

interface TransactionObj {  
  // index signatures
  // index can't be boolean
  readonly [index: string]: number
  Pizza: number
  Books: number
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])
console.log('This line is not printing')

//  error
let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction of Object.keys(transactions)) {
    total += transactions[transaction] ?? 0; // Use nullish coalescing to handle undefined values
  }
  return total;
}

console.log(todaysNet(todaysTransactions))

todaysTransactions.Pizza = 40

// No error because TS can't see future
console.log(todaysTransactions['Dave'])

/////////////////////////////////////////////////////////
interface Student {
  [key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[] // make optional with ?
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200]
}

//  no error with index signature
console.log(student.test)
console.log('Printing all contents of student')

//  keyof
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA')
logStudentKey(student, 'name')

//////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number
// }

//  literal type
type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number>
type Incomes2 = Record<Streams, number | string >

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250
}

// use as keyof to fix error
for ( const revenue in monthlyIncomes ) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
} 

////////////////////////////////////////////////////////

