//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Year {
    constructor(input) {
        this.year = input;
    }

    isLeap() {
        if (this.year % 400 === 0 || this.year % 4 === 0 && this.year % 100 !== 0) {
            return true;
        }
        return false;
    }
}

module.exports = Year;
