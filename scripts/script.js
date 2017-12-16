console.log('what')

window.addEventListener('load', setup);

function setup() {
    $('button#but').on('click', function() {
        alert('pressed');
    });
}