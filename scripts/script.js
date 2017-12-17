let json;

window.addEventListener('load', setup);

$('button#but').on('click', function () {
    alert('pressed');
});

function setup() {
    loadCommon();
}

function loadCommon() {
    $.getJSON('./data/common.json', function(data) {
        createDropdown(data);
    });
}

function createDropdown(data) {
    
}