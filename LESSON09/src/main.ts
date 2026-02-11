// Utility types

//  Partial

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const ass1: Assignment = {
  studentId: "12345",
  title: "fee fi fo fum",
  grade: 1
}

const updatedAssignment = updateAssignment(ass1, {grade: 2});
console.log(updatedAssignment)

// Required and Readonly

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //  send to database, etc.
  return assign
}

const assignVerified: Readonly<Assignment> = {...ass1, verified: true}
console.log(assignVerified)

// assignVerified.grade = 88

// recordAssignment(ass1)
recordAssignment({...ass1, verified: true})

//  Record

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

const hexColorMap: Record<string, string> = {
  red: "FF0000", green: "00FF00", blue: "0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B", Kelly: "U",
  // Bob: "A",
  // Sara: "Z"
}

interface Grades {
  english: number, math: number
}

const gradeData: Record<Students, Grades> = {
  Sara: { english: 85, math: 93 },
  Kelly: { english: 66, math: 12}
}

//  Pick and Omit

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type AssignResult = Pick<Assignment, "studentId" | "grade">
const score: AssignResult = {
  studentId: "k123",
  grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified" >
const preview: AssignPreview = {
  studentId: "k123", title: "Final Project"
}

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

// const grade1: highGrades = "U"
const grade2: highGrades = "A"
const grade3: adjustedGrade = "C"
// const grade4: adjustedGrade = "U"

//  Nonnullable
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

const theChosenOne: NamesOnly = "John"

//  ReturnType

// type newAssign = { title: string, points: number }
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points }
// }

const createNewAssign = (title: string, points: number) => {
  return {title, points}
}
type newAssign = ReturnType<typeof createNewAssign>
//  eg using an external library's return type

const tsAssign: newAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)

//  Parameters
type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Generics", 100]
const tsAssign2: newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise
interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.json()
  }).catch(err => {
    if (err instanceof Error) console.log(err.message)
  })
  return data

}

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then((users: fetchUsersReturnType) => console.log(users))


