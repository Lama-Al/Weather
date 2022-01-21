
//
let theCity = document.getElementById("theCity");
let URL1 ='http://api.weatherstack.com/current?access_key=b150792e3adac9354fa611602845f03d&query=';
let tempID=document.getElementById("temp");
let iconID=document.getElementById("icon");
let descriptionID=document.getElementById("description");
   function setCity(){
let chosenCity=theCity.value;
//"Riyadh";
  URL1=URL1+chosenCity;
//----------------------------------------
const request = new XMLHttpRequest();
      
request.onreadystatechange = function() { 
  if (request.readyState == 4 && request.status == 200)
      josnParser(request.responseText);
};
request.open("GET",URL1, true); // true for asynchronous 
request.send();
   }
//----------------------------------------

function josnParser(Josn){
    
    let myJosn= JSON.parse(Josn);
    let temper=myJosn.current.temperature;
    tempID.innerText=temper;
    let descrip=myJosn.current.weather_descriptions;
    descriptionID.innerText=descrip;
    let Wicon=(myJosn.current.weather_icons).innerText;
    iconID.src="Wicon";
    //let Wicons =parsed_json['current_observation']['icon'];
    //myJosn.current.weather_icons;
    //iconID.innerHTML=icons;
    
    }

       
       
    
