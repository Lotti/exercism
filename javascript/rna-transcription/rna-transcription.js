class DnaTranscriber {
    constructor() {
        this.DNAtoRNAMap = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
        };
    }

    toRna(dna) {
        if (this.isValidDNA(dna)) {
            return this.translateDNAtoRNA(dna);
        }
        throw new Error('Invalid input');
    }

    isValidDNA(dna) {
        const dnaElements = Object.keys(this.DNAtoRNAMap);
        for (let i = 0; i < dna.length; i++) {
            if (!dnaElements.includes(dna.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    translateDNAtoRNA(dna) {
        let rna = '';
        for (let i = 0; i < dna.length; i++) {
            rna+= this.DNAtoRNAMap[dna.charAt(i)];
        }
        return rna;
    }
}

module.exports = DnaTranscriber;
