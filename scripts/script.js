window.addEventListener('load', setup);

function setup() {
    $('#convert').click(convert);
    $('#units').change(populateUnits)
    loadConvertOptions();
}
