class Celsius {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            console.log((this.amount * (9/5)) + 32);
        } else if(this.tempTo === 'kelvin') {
            console.log(this.amount + 273.15);
        } else {
            console.log(this.amount);
        }
    }
}

class Fahrenheit {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            console.log(this.amount);
        } else if(this.tempTo === 'kelvin') {
            console.log((this.amount - 32)*(5/9)+273.15);
        } else {
            console.log((this.amount-32)*(5/9));
        }
    }
}

class Kelvin {
    constructor(amount, tempTo) {
        this.amount = amount;
        this.tempTo = tempTo;
    }

    convert() {
        if (this.tempTo === 'fahrenheit') {
            console.log((this.amount - 273.15)*(9/5)+32);
        } else if(this.tempTo === 'kelvin') {
            console.log(this.amount);
        } else {
            console.log(this.amount - 273.15);
        }
    }
}