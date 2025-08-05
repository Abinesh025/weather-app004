const apikey="1ce61d0378ccddc6476654cd8e9e73f8";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon=document.getElementById("cloudy")
console.log(icon)
const search = document.getElementById("bar")
console.log(search)
const enter=document.getElementById("scope") 
console.log(enter)
const page=document.querySelector(".weather")
console.log(page)
const showout=document.querySelector(".Humi")
const wind=document.querySelector(".wind")
const showt=document.querySelector(".show")

async function setApi(city){
const result= await fetch(apiurl +city + `&appid=${apikey}`);
var show=await result.json();
console.log(show)

document.querySelector(".var1").innerText=show.name;
document.querySelector(".deg").innerText=Math.round(show.main.temp)+"℃";
document.querySelector(".per").innerText=show.main.humidity+"%";
document.querySelector(".km").innerText=show.wind.speed+"Km/h";

  if(result.status == 404){
  const err=  document.createElement("p")
    search.appendChild(err)
    err.innerText="Invalid City Name"
  }
  else{
  
if(show.weather[0].main == "Clouds"){
icon.src="cloud.png"
}
else if(show.weather[0].main == "clear"){
icon.src="clear.png"
}
else if(show.weather[0].main == "Rain"){
icon.src="drizzle.png"
}
else if(show.weather[0].main == "Haze"){
icon.src="haze.png"
}
else if(show.weather[0].main == "Sunny"){
icon.src="sunny.png"
}
showout.style.display="block";
showt.style.display="block";
wind.style.display="block";

}
}
setApi()

