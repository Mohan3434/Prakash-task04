
const apiKey = "c46817594bb1e4aaa182d69ba3030eb7"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

async function checkweather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data= await response.json();
  var citi=data.name;
  var tempture=data.main.temp;
  var humdity=data.main.humidity;
  var windu=data.wind.speed;
  cityn(citi);
  temperature(tempture);
  humidity(humdity);
  wind(windu);
}
      
function cityn(citi){
  let area = document.querySelector(".city");
  area.textContent=citi;
}
function temperature(tempture){
  let tempr= document.querySelector(".temperature");
  let icon= document.querySelector(".icon");
    tempr.textContent=tempture+"°C"; 
  
}
function humidity(humdity){
  let hum=document.getElementById("value");
  hum.textContent=humdity+"%";
}
function wind(windu){
  let win=document.getElementById("speed");
  win.textContent=windu+"Km/hr";
}

const button=document.querySelector(".button");
button.addEventListener("click",getInput,false);

function getInput(){
  let city=document.querySelector(".input").value;
  checkweather(city);
};
