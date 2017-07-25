class Robot {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = Robot.getRandomName();
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomLetter() {
        // 65 = A, 90 = Z
        let i = Robot.getRandomInt(65, 90);
        return String.fromCharCode(i)
    }

    static getRandomNumber() {
        const num = Robot.getRandomInt(0, 999);
        const str = num.toString();
        const pad = '000';
        return pad.substring(0, pad.length - str.length) + str;
    }

    static getRandomName() {
        if (!this.names) {
            this.names = [];
        }

        let name = null;
        do {
            name = Robot.getRandomLetter()+Robot.getRandomLetter()+Robot.getRandomNumber();
        } while(this.names.includes(name));

        if (name === null) {
            throw new Error('A robot name was not generated!');
        }

        this.names.push(name);
        return name;
    }
}

module.exports = Robot;
