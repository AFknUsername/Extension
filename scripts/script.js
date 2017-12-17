window.addEventListener('load', setup);

function setup() {
    $('#convert').click(convert);
    $('#units').change(populateUnits)
    loadConvertOptions();
    let json;
    //let unitType;
}

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
    let valFrom = Number($('#typeFrom').val());
    let unitFrom = $('#typeFrom').children(':selected')[0].innerHTML;
    let valTo = Number($('#typeTo').val());
    let unitTo = $('#typeTo').children(':selected')[0].innerHTML;
    let sym1 = json[unitType][unitName][unitFrom]['unit'];
    let sym2 = json[unitType][unitName][unitTo]['unit'];
    let amount = Number($('#numberBox').val());
    $('#result').html(amount + sym1 + ' = ' + (valFrom/valTo)*amount + sym2);
}

function populateUnits() {
    $('#typeFrom').empty();
    $('#typeTo').empty();
    unitType = Number($('#units').val());
    unitName = Object.keys(json[unitType])[0];
    currentObj = json[unitType][unitName];
    let i = 0;
    for (let name in currentObj) {
        if(currentObj.hasOwnProperty(name)) {
            document.getElementById('typeTo').options[i] = new Option(name, currentObj[name]['value']);
            document.getElementById('typeFrom').options[i] = new Option(name, currentObj[name]['value']);
            i++;
        }
    }
}