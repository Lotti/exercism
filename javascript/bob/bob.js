class Bob {
    hey(sentence) {
        sentence = sentence.trim();
        if (this.isGibberish(sentence)) {
            return 'Fine. Be that way!';
        } else if (this.isYell(sentence)) {
            return 'Whoa, chill out!';
        } else if (this.isQuestion(sentence)) {
            return 'Sure.';
        } else {
            return 'Whatever.';
        }
    }

    isQuestion(sentence) {
        return sentence.endsWith('?');
    }

    isYell(sentence) {
        return sentence === sentence.toUpperCase() && /[a-zA-Z]+/g.test(sentence);
    }

    isGibberish(sentence) {
        return sentence.replace(/\W/g,'').length === 0;
    }
}

module.exports = Bob;