let secret = 'c318f7842fd2c890';
function getWeather() {
    $.ajax({url: "http://api.wunderground.com/api/" + secret + "/conditions/q/zmw:00000.94.71612.json", success: function(result){
        let current = result['current_observation'];
        // console.log(current);
    }});

    $.ajax({url: "http://api.wunderground.com/api/" + secret + "/forecast/q/zmw:00000.94.71612.json", success: function(result){
        let forecast = result;
        console.log(forecast);
    }});
}