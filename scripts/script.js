let json;
window.addEventListener('load', setup);

function setup() {
    loadCommon();
}

function loadCommon() {
    $.getJSON('./data/common.json', function(data) {
        json = data;
        createDropdown(data);
    });
}

function createDropdown(data) {

}