class PhoneNumber {
    constructor(value) {
        this.value = value;
    }

    number() {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 10 && value.charAt(0) !== '1') {
            return null;
        }
        value = value.replace(/^1/,'');
        if (value.length < 10) {
            return null;
        }
        if (['0','1'].includes(value.charAt(0)) || ['0','1'].includes(value.charAt(3))) {
            return null;
        }
        return value;
    }
}

module.exports = PhoneNumber;
