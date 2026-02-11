class Coder {
    name;
    music;
    age;
    lang;
    // name: string
    // music: string
    // age: number
    // lang: string
    // secondLang: string | null = null
    secondLang;
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// const Dave = new Coder('Dave', 'Rock', 42, 'TypeScript')
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
class WebDev extends Coder {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const dev = new WebDev('Macbook', 'Lisa', 'Jazz', 15);
console.log(dev.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
////////////////////////////////////////////////////////////////////////
class Peeps {
    name;
    // static applies to class, not instance of the class
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    saysHello() {
        console.log(`${this.name} ( id == ${this.id} ) says Hello!`);
    }
}
const John = new Peeps('John');
const Johny = new Peeps('Johny');
const Jonah = new Peeps('Jonah');
John.saysHello();
Johny.saysHello();
Jonah.saysHello();
/////////////////////////////////////////////////////////////
//  getters and setters
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    // getter, can make object read only
    get data() {
        return this.dataState;
    }
    // setters can't return values
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Yeoung', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ top'];
console.log(MyBands.data);
export {};
// MyBands.data = 'Van Halen'
// MyBands.data = ['Van Halen', 5150]
//# sourceMappingURL=main.js.map