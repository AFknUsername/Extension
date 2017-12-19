window.addEventListener('load', setup);

function setup() {
    $(`#convert`).click(convert);
    $(`.weatherSwitch`).click(switchWeather);
    $(`#units`).change(populateUnits);
    loadConvertOptions();
    getWeather();
}
