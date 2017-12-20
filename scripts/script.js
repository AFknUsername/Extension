window.addEventListener('load', setup);

function setup() {
    $(`#convert`).click(convert);
    $(`.weatherSwitch`).click(switchWeather);
    $('#addItem').click(addItem);
    $(`#units`).change(populateUnits);
    loadConvertOptions();
    getWeather();
}

Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};