
if (navigator.geolocation) {
    //Return the user's longitude and latitude on page load using HTML5 geolocation API
    window.onload = function () {
    var currentPosition;
    function getCurrentLocation (position) {
        currentPosition = position;
        latitude = currentPosition.coords.latitude;
        longitude = currentPosition.coords.longitude;
		/*$("#data").text(latitude);
		$("#long").text(longitude);
		
		
        //AJAX request
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=******************", function (data) {
            var rawJson = JSON.stringify(data);
            var json = JSON.parse(rawJson);
            updateWeather(json); //Update Weather parameters
			alert(data.coord.lon);
        });
		$.getJSON('http://api.geonames.org/timezoneJSON?lat=' + latitude + '&lng=' + longitude + '&username=ayoisaiah', function(timezone) {
            var rawTimeZone = JSON.stringify(timezone);
            var parsedTimeZone = JSON.parse(rawTimeZone);
            var dateTime = parsedTimeZone.time;
            timeFull = dateTime.substr(11);
            $(".local-time").html(timeFull); //Update local time
            timeHour = dateTime.substr(-5, 2);
			
    });
	*/
	$.getJSON('http://api.geonames.org/timezoneJSON?lat=' + latitude + '&lng=' + longitude + '&username=ayoisaiah', function(timezone) {
            var rawTimeZone = JSON.stringify(timezone);
            var parsedTimeZone = JSON.parse(rawTimeZone);
            var dateTime = parsedTimeZone.time;
            timeFull = dateTime.substr(11);
            $("#time").text('Time: '+ timeFull); //Update local time
            timeHour = dateTime.substr(-5, 2);
			
    });
	
	
	
		var api1="http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=b7c26b21687a6fedb4fbe429d9d7ae62";
	$.getJSON(api1, function(data){
		alert(data.coord.lon);
		descr=data.weather[0].main;
		
		alert(descr);
		longitude=data.coord.lon;
		latitude=data.coord.lat;
		$("#data").text(longitude);
		$("#long").text(latitude);
		cityname=data.name;
		$("#location").text(cityname);
		alert(data.weather[0].main);
		pritisak=data.main.pressure;
		$("#pressure").text('Pressure: '+ pritisak);
		ktemperatura=data.main.temp;
		ftemp=ktemperatura*(9/5.0) - 459.67;
		ftemp=ftemp.toFixed(2);
		ctemp=(ftemp-32)*(5/9.0);
		ctemp=ctemp.toFixed(2);
		$("#temperature").text('Temperature: '+ctemp+' ℃');
		prognoza=data.weather[0].description;
		$("#weather").text('Weather: '+prognoza);
		
		$("#ftemp").click(function(){
			$("#temperature").text('Temperature: '+ftemp+' F');
		});
		$("#ctemp").click(function(){
			$("#temperature").text('Temperature: '+ctemp+' ℃');
		});
		var sun={id:800, desc:"sunny"};
		var cloud={id:801, desc:"cloudy"};
		var lrain={id:500, desc:"rain"};
		var mrain={id:501, desc:"rain"};
		var hirain={id:502, desc:"rain"};
		var vhrain={id:503, desc:"rain"};
		var erain={id:504, desc:"rain"};
		var weatherIcons= [sun, cloud, lrain, mrain, hirain, vhrain, erain];
		var prefix="wa wa-";
		var code=data.weather[0].id;
		var ic;
		if (code==800){
			var skycons = new Skycons({"color": "white"});
			skycons.add("animated-icon", Skycons.CLEAR_DAY);
			skycons.play();
		}else if (code==801) {
			var skycons = new Skycons({"color": "white"});
			skycons.add("animated-icon", Skycons.PARTLY_CLOUDY_DAY);
			skycons.play();
		}else if (code==500 || code==501 || code==502 || code==503 || code==504){
			var skycons = new Skycons({"color": "white"});
			skycons.add("animated-icon", Skycons.RAIN);
			skycons.play();
		}
		else {
			var skycons = new Skycons({"color": "white"});
			skycons.add("animated-icon", Skycons.CLEAR_DAY);
			skycons.play();
		}
		
	});
		   
    }
	
	navigator.geolocation.getCurrentPosition(getCurrentLocation);
	
	
    };
}

/*
window.onload=function(){
$(document).ready(function(){
	var api="http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=b7c26b21687a6fedb4fbe429d9d7ae62";
	var api1="http://api.openweathermap.org/data/2.5/weather?lat=' + 'latitude'+&lon+'longitude'";
	$.getJSON(api, function(data){
		alert(data.coord.lon);
		descr=data.weather[0].description;
		alert(descr);
		longitude=data.coord.lon;
		latitude=data.coord.lat;
		$("#data").text(longitude);
		$("#long").text(latitude);
		cityname=data.name;
		$("#location").text(cityname);
		alert(data.weather[0].main);
		
	});
});

}
*/


















