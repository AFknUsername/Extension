window.addEventListener('load', setup);

function setup() {
    let storage = localStorage;
    if (storage.todo === null) {
        storage.todo = JSON.stringify([]);
    }
    $(`#convert`).click(convert);
    $(`.weatherSwitch`).click(switchWeather);
    $('#addItem').click(addItem);
    $(`#units`).change(populateUnits);
    loadConvertOptions();
    getWeather();
    populateItems();
}