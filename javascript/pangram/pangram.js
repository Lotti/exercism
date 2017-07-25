class Pangram {
    constructor(sentence) {
        this.sentence = sentence.toLowerCase().replace(/\W|\d|_/g, '');
    }

    isPangram() {
        const letters = [];
        for (let i = 0; i < this.sentence.length; i++) {
            const l = this.sentence.charAt(i);
            if (!letters.includes(this.sentence.charAt(i))) {
                letters.push(l);
            }
        }

        return letters.length === 26;
    }
}

module.exports = Pangram;
