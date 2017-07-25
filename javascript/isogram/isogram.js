class Isogram {
    constructor(word) {
        this.word = word;
        this._checkIsogram();
    }

    _checkIsogram() {
        const letters = [];
        const word = this.word.toLowerCase().replace(/[^a-zA-Zòèéìàù]/g,'');
        console.log(word);
        this.isogram = true;
        for (let i = 0; i < word.length; i++) {
            const l = word.charAt(i);
            if (!letters.includes(l)) {
                letters.push(l)
            } else {
                this.isogram = false;
                break;
            }
        }
    }

    isIsogram() {
        return this.isogram;
    }
}

module.exports = Isogram;
