var cityTemp = document.querySelector("#cityTemp")
function GetInformation() {
    
    var newID = document.getElementById("cityInput").value;
    var cityInfo = document.getElementById("cityInfo");
  cityInfo.innerhtml = "--" + newID.value + "--";
console.log("newID",newID)
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${newID}+&appid=81158ab9a9673323f019eac0555dc307&units=imperial`)
  .then((response) => response.json())
  .then((data) => {
    //Temp, wind speed, for loop ect
console.log(data.list)
    for (i = 0; i < 5; i++) {
      
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
         "Min:" + Number(data.list[i].main.temp_min).toFixed(1) + "°";
         document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max:" + Number(data.list[i].main.temp_max).toFixed(2) + "°";
          document.getElementById("wind" + (i + 1)).innerHTML="Speed:" + Number(data.list[i].wind.speed);
          document.getElementById("humid" + (i + 1)).innerHTML="Humidity:" + Number(data.list[i].main.humidity);
     }
    
});
}
cityTemp.addEventListener("click", function(){
  GetInformation()
})