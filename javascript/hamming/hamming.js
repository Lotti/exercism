class Hamming {
    compute(a,b) {

        if (a.length !== b.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        let diff = 0;
        for (let i = 0; i < a.length; i++) {
            if (a.charAt(i) !== b.charAt(i)) {
                diff++;
            }
        }

        return diff;
    }
}

module.exports = Hamming;