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
      protected lang: string = 'Typescript'
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

class WebDev extends Coder {
  
  constructor(
    public computer: string, 
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age)
    this.computer = computer
  }

  public getLang() {
    return `I write ${this.lang}`
  }
}

const dev = new WebDev('Macbook', 'Lisa', 'Jazz', 15)
console.log(dev.getLang())

//  template??
interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

////////////////////////////////////////////////////////////////////////

class Peeps {
  // static applies to class, not instance of the class
  static count: number = 0;

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }

  saysHello() {
    console.log(`${this.name} ( id == ${this.id} ) says Hello!`)
  }
}

const John = new Peeps('John')
const Johny = new Peeps('Johny')
const Jonah = new Peeps('Jonah')

John.saysHello()
Johny.saysHello()
Jonah.saysHello()

/////////////////////////////////////////////////////////////

//  getters and setters
class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  // getter, can make object read only
  public get data(): string[] {
    return this.dataState
  }

  // setters can't return values
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(
        (el) => typeof el === 'string')) {
        this.dataState = value
      } else throw new Error('Param is not an array of strings')
  }

}

const MyBands = new Bands()
MyBands.data = ['Neil Yeoung', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ top']
console.log(MyBands.data)
// MyBands.data = 'Van Halen'
// MyBands.data = ['Van Halen', 5150]





