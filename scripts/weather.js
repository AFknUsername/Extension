let secret = 'c318f7842fd2c890';
let state;

function getWeather() {

    $.ajax({
        url: `http://api.wunderground.com/api/${secret}/conditions/q/zmw:00000.94.71612.json`,
        success: function (result) {
            let current = result['current_observation'];
            $('#currentTemp').html(`${current['temp_c']}&#176;`);
            $('#sky').html(current['weather']);
            $('#feelsLike').html(`feels like ${current['feelslike_c']}&#176;`);
            $('#skyIcon').attr("src", current['icon_url']);
        }
    });

    $.ajax({
        url: `http://api.wunderground.com/api/${secret}/forecast/q/zmw:00000.94.71612.json`,
        success: function (result) {
            let forecast = result['forecast']['simpleforecast']['forecastday'];
            for (let i = 1; i < 4; i++) {

                $('<div/>', {
                    class: 'day',
                    id: `day${i}`,
                }).appendTo('#forecast');

                $('<p/>', {
                    class: 'weekDay',
                    id: `weekDay${i}`,
                }).appendTo(`#day${i}`);

                $('<img/>', {
                    class: 'icon',
                    id: `icon${i}`,
                }).appendTo(`#day${i}`);

                $('<p/>', {
                    class: 'temp',
                    id: `high${i}`,
                }).appendTo(`#day${i}`);

                $('<p/>', {
                    class: 'temp',
                    id: `low${i}`,
                }).appendTo(`#day${i}`);

                $(`#weekDay${i}`).html(forecast[i]['date']['weekday']);
                $(`#icon${i}`).attr('src', forecast[i]['icon_url']);
                $(`#high${i}`).html(`${forecast[i]['high']['celsius']}&#176;`);
                $(`#low${i}`).html(`${forecast[i]['low']['celsius']}&#176;`);
            }
                $('<span/>', {
                    class: 'temp',
                    id: 'currentHi',
                }).appendTo('#weatherInfo');

                $('<span/>', {
                    class: 'temp',
                    id: 'currentLo',
                }).appendTo('#weatherInfo');

                $(`#currentHi`).html(`High:${forecast[0]['high']['celsius']}&#176;\n`);
                $(`#currentLo`).html(`Low:${forecast[0]['low']['celsius']}&#176;`);
        }
    });
}

function switchWeather() {
    $('#current').toggle();
    $('#forecast').toggle();
    switchButton();
}

function switchButton() {
    if ($('#current').is(`:visible`)) {
        $('.weatherSwitch').html(`show forecast`);
    } else {
        $('.weatherSwitch').html(`&larr;`);
    }
}