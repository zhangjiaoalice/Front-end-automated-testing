export class Calculator {
    num: number;
    constructor() {
        this.num = 0;
    }
    add() {
        this.num += 1;
    }

    addDouble() {
        this.num += 2;
    }

    minus() {
        this.num -= 1;
    }
}