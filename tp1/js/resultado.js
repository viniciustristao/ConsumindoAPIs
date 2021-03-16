$(function(){
});
function busca(){
    document.getElementById('result').style.display='block'
    var url_cov = "https://api.brasil.io/v1/dataset/covid19/caso_full/data?city_ibge_code="
    buscaId(url_cov)
    img = document.getElementById("imcab")
    cphd = document.getElementById("cpha")
    casos = document.getElementById("casos")
    mortos = document.getElementById("mortos")
    semana = document.getElementById("semana")
    populacao = document.getElementById("populacao")
    mortalidade = document.getElementById("mortalidade")
    initMap()

}

function initMap() {
    let cidade = document.getElementById("busca").value
    let req = new XMLHttpRequest()
    req.onloadend = function(){
		resp = req.responseText;
		resp_obj = JSON.parse(resp)
        let lat = resp_obj.coord.lat
        let lon = resp_obj.coord.lon

        map = new google.maps.Map(document.getElementById('mapa'), {
            center: { lat: lat, lng: lon },
            zoom: 10,
        });
        
        const marker = new google.maps.Marker({
            position: { lat: lat, lng: lon },
            map: map,
        });
    }
    req.open('get', 'http://api.openweathermap.org/data/2.5/weather?q='+cidade+'&units=metric&lang=pt_br&appid=cb77dbe0b2a15d66d1fc7f830c25c118')
	req.send()
}

function buscaAPICov(url,id){
    let req = new XMLHttpRequest()
    req.onloadend = function(){
        let resp = req.responseText
        let resp_obj = JSON.parse(resp)
        
        //img.style.display = "none"
        cpha.innerHTML='<p>Casos 100mil hab.</p>'
        cpha.append(resp_obj.results[0].last_available_confirmed_per_100k_inhabitants)
        casos.innerHTML='<p>Casos confirmados</p>'
        casos.append(resp_obj.results[0].last_available_confirmed)
        mortos.innerHTML='<p>Mortes confirmadas</p>'
        mortos.append(resp_obj.results[0].last_available_deaths)
        semana.innerHTML='<p>Semana pamdemica</p>'
        semana.append(resp_obj.results[0].epidemiological_week.toString().substring(4)+"ª")
        populacao.innerHTML='<p>População estimada</p>'
        populacao.append(resp_obj.results[0].estimated_population)
        mortalidade.innerHTML='<p>Taxa de mortalidade</p>'
        mortalidade.append(resp_obj.results[0].last_available_death_rate+"%")
    }
    req.open('get', url+id)
    req.setRequestHeader("Authorization", "Token 99345b14d81ec86dab83050528220053f177a6ff")
    req.send()
}

function buscaId(url_cov){
    let api_ibge = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos"
    var idcidade;
    let cidade = document.getElementById("busca").value
    let req = new XMLHttpRequest();
    req.onloadend = function(){
        let resp = req.responseText
        let obj_resp = JSON.parse(resp)
        for(let i=0; i < Object.keys(obj_resp).length; i++){
            if(obj_resp[i]["nome"].toLowerCase() == cidade.toLowerCase()){
                //alert("Cidade: "+obj_resp[i]["nome"]+"\nID: "+obj_resp[i]["id"])
                buscaAPICov(url_cov,obj_resp[i]["municipio"].id)
            }
        }
    }
    req.open("get", api_ibge)
    req.send()
}