window.onload = function () {
}

function busca(){
	var req = new XMLHttpRequest();
	var divdados = document.getElementById('dados')

	var cidade = document.getElementById('cidade').value

	req.onloadend = function(){
		resp = req.responseText;
		resp_obj = JSON.parse(resp)
		document.getElementById('container').style.display = 'block'
		/*
		Cria mapa
		*/
		document.getElementById('map').style.display = 'flex'
		initMap(resp_obj.coord.lat, resp_obj.coord.lon)

		/*
		popula dados
		*/
		divdados.style.display = 'flex'
		divdados.innerHTML = '<p id="tA">Temperatura: '+resp_obj.main.temp+'ºC</p><br />'
		divdados.innerHTML += '<p id="pr">Pressao: '+resp_obj.main.pressure+' pa</p>'
		divdados.innerHTML += '<p id="tMa">Maxima: '+resp_obj.main.temp_max+'ºC</p>'
		divdados.innerHTML += '<p id="tMa">Minima: '+resp_obj.main.temp_min+'ºC</p>'
		divdados.innerHTML += '<div id="iclg"> <img src="http://openweathermap.org/img/wn/'+resp_obj.weather[0].icon+'@2x.png"/><p id="desc">'+resp_obj.weather[0].description+'</p></div>'
		divdados.innerHTML += '<p>Nascer do Sol: '+ ("00"+new Date((resp_obj.sys.sunrise)*1000).getHours()).slice(-2) +':'+("00"+new Date((resp_obj.sys.sunrise)*1000).getMinutes()).slice(-2)+'</p>'
		divdados.innerHTML += '<p>Por do Sol: '+("00"+new Date((resp_obj.sys.sunset)*1000).getHours()).slice(-2)+':'+("00"+new Date((resp_obj.sys.sunset)*1000).getMinutes()).slice(-2)+'</p>'
		divdados.innerHTML += '<p>Latitude: '+resp_obj.coord.lat+'</p>'
		divdados.innerHTML += '<p>Longitude: '+resp_obj.coord.lon+'</p>'
	}

	req.open('get', 'http://api.openweathermap.org/data/2.5/weather?q='+cidade+'&units=metric&lang=pt_br&appid=cb77dbe0b2a15d66d1fc7f830c25c118')
	req.send()

}

function initMap(lat, lon) {
	map = new google.maps.Map(document.getElementById('map'), {
	center: { lat: lat, lng: lon },
	zoom: 10,
	});

	const marker = new google.maps.Marker({
		position: { lat: lat, lng: lon },
		map: map,
	});
}