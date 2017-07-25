class Anagram {
    constructor(word) {
        this.word = word;
    }

    matches(...values) {
        // handle multiple kind of input
        if (values.length === 1 && Array.isArray(values[0])) {
            values = values[0];
        }

        const results = [];
        for (const v of values) {
            // check for partials anagrams
            if (this.word.length !== v.length) {
                continue;
            }

            const word = this.word.toLowerCase();
            const w = v.toLowerCase();
            // check for same word
            if (word === w) {
                continue;
            }

            const letters = word.split('');
            const alternativeLetters = w.split('');
            for (const a of alternativeLetters) {
                const index = letters.indexOf(a);
                if (index >= 0) {
                    letters.splice(index, 1);
                }
            }
            // check if all letters are consumed
            if (letters.length === 0) {
                results.push(v);
            }
        }
        return results;

    }
}

module.exports = Anagram;
