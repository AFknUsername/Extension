class Celsius {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
        this.sym = json[unitType][unitName][tempTo]['unit'];
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            $('#result').html(Number((this.amount * (9 / 5)) + 32).toFixed(2) + ' ' + this.sym);
        } else if (this.tempTo === 'kelvin') {
            $('#result').html(Number(this.amount + 273.15).toFixed(2) + ' ' + this.sym);
        } else {
            $('#result').html(Number(this.amount).toFixed(2) + ' ' + this.sym);
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
            $('#result').html(Number(this.amount).toFixed(2) + ' ' + this.sym);
        } else if (this.tempTo === 'kelvin') {
            $('#result').html(Number((this.amount - 32) * (5 / 9) + 273.15).toFixed(2) + ' ' + this.sym);
        } else {
            $('#result').html(Number((this.amount - 32) * (5 / 9)).toFixed(2) + ' ' + this.sym);
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
            $('#result').html(Number((this.amount - 273.15) * (9 / 5) + 32).toFixed(2) + ' ' + this.sym);
        } else if (this.tempTo === 'kelvin') {
            $('#result').html(Number(this.amount).toFixed(2) + ' ' + this.sym);
        } else {
            $('#result').html(Number(this.amount - 273.15).toFixed(2) + ' ' + this.sym);
        }
    }
}