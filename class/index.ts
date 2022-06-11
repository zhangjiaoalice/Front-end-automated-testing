export class Animal {
    name: string;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running...`);
    }
    say() {
        console.log('eat something!');

    }
}