let json;
window.addEventListener('load', setup);

function setup() {
    loadCommon();
}

function loadCommon() {
    $.getJSON('./data/common.json', function(data) {
        //json = data;
        for(let i = 0; i < data.length; i++) {
            document.getElementById('conversionType').options[i] = new Option(Object.keys(data[i]));
        }
    })
}