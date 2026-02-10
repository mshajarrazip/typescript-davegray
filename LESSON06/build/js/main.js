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
    constructor(name, music, age, lang = 'Typecript') {
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
export {};
//# sourceMappingURL=main.js.map