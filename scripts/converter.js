let json;

function loadConvertOptions() {
    $.getJSON('./data/common.json', function (data) {
        json = data;
        for (i = 0; i < json.length; i++) {
            document.getElementById('units').options[i] = new Option(Object.keys(json[i]), i);
        }
        populateUnits();
    })
}

function convert() {
    let unitFrom = $('#typeFrom').children(':selected')[0].innerHTML;
    let unitTo = $('#typeTo').children(':selected')[0].innerHTML;
    let amount = Number($('#numberBox').val());
    if ($('#units').children(':selected')[0].innerHTML === "temperature") {
        convertTemp(unitFrom, unitTo, amount);
    } else {
        let valTo = Number($('#typeTo').val());
        let valFrom = Number($('#typeFrom').val());
        let sym1 = json[unitType][unitName][unitFrom]['unit'];
        let sym2 = json[unitType][unitName][unitTo]['unit'];
        $('#result').html(amount + sym1 + ' = ' + (valFrom / valTo) * amount + sym2);
    }
}

function populateUnits() {
    $('#typeFrom').empty();
    $('#typeTo').empty();
    unitType = Number($('#units').val());
    unitName = Object.keys(json[unitType])[0];
    currentObj = json[unitType][unitName];
    let i = 0;
    for (let name in currentObj) {
        if (currentObj.hasOwnProperty(name)) {
            document.getElementById('typeTo').options[i] = new Option(name, currentObj[name]['value']);
            document.getElementById('typeFrom').options[i] = new Option(name, currentObj[name]['value']);
            i++;
        }
    }
}

function convertTemp(temp1, temp2, amount) {
    if (temp1 === 'celsius') {
        let celsius = new Celsius(amount, temp2);
        celsius.convert();;
    } else if (temp1 === 'fahrenheit') {
        let fahrenheit = new Fahrenheit(amount, temp2);
        fahrenheit.convert();
    } else {
        let kelvin = new Kelvin(amount, temp2);
        kelvin.convert();
    }
}