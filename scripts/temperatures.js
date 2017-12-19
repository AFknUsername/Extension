class Celsius {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
        this.sym = json[unitType][unitName][tempTo]['unit'];
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            $('#result').html((this.amount * (9 / 5)) + 32 + ' ' + this.sym);
        } else if (this.tempTo === 'kelvin') {
            $('#result').html(this.amount + 273.15 + ' ' + this.sym);
        } else {
            $('#result').html(this.amount + ' ' + this.sym);
        }
    }
}

class Fahrenheit {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
        this.sym = json[unitType][unitName][tempTo]['unit'];
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            $('#result').html(this.amount + ' ' + this.sym);
        } else if (this.tempTo === 'kelvin') {
            $('#result').html((this.amount - 32) * (5 / 9) + 273.15 + ' ' + this.sym);
        } else {
            $('#result').html((this.amount - 32) * (5 / 9) + ' ' + this.sym);
        }
    }
}

class Kelvin {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
        this.sym = json[unitType][unitName][tempTo]['unit'];
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            $('#result').html((this.amount - 273.15) * (9 / 5) + 32 + ' ' + this.sym);
        } else if (this.tempTo === 'kelvin') {
            $('#result').html(this.amount + ' ' + this.sym);
        } else {
            $('#result').html(this.amount - 273.15 + ' ' + this.sym);
        }
    }
}
