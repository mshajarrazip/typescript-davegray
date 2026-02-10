class Coder {
  // name: string
  // music: string
  // age: number
  // lang: string

  // secondLang: string | null = null
  secondLang!: string

  constructor(
      public readonly name: string,
      public music: string,
      private age: number,
      protected lang: string = 'Typecript'
    ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge() {
    return `Hello, I'm ${this.age}`
  }
}

// const Dave = new Coder('Dave', 'Rock', 42, 'TypeScript')
const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge())