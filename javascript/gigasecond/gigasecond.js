class Gigasecond {
    constructor(date) {
        this.birth = date;
        this.gigasecond = Math.pow(10, 12);
        this.newDate = new Date(this.birth.getTime() + this.gigasecond);
    }

    date() {
        return this.newDate;
    }
}

module.exports = Gigasecond;
