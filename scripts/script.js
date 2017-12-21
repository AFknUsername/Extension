window.addEventListener('load', setup);

function setup() {
    if (localStorage.todo === undefined) {
        localStorage.todo = JSON.stringify([]);
    }
    let itemList = refresh(JSON.parse(localStorage.getItem('todo')));
    console.log(itemList);
    $(`#convert`).click(convert);
    $(`.weatherSwitch`).click(switchWeather);
    $('#addItem').click(addItem);
    $(`#units`).change(populateUnits);
    loadConvertOptions();
    getWeather();
    populateItems();
}