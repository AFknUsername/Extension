window.addEventListener('load', setup);

function setup() {
    $(`#convert`).click(convert);
    $(`.weatherSwitch`).click(switchWeather);
    $('#addItem').click(addItem);
    $(`#units`).change(populateUnits);
    loadConvertOptions();
    getWeather();
    populateItems();
    fetchIMOTD();
}