  
    function getData(){
        let city=document.getElementById("query").value;
        let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=2a7417848e67bee949af373680eb9a6c`
        fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function (res){
            console.log(res);
            append(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    }
    // "https://maps.google.com/maps?q=belonia&t=&z=13&ie=UTF8&iwloc=&output=embed"
    function append(data){
         let url=`https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
         let container=document.getElementById("container");
         container.innerHTML=null;
        let h2=document.createElement("h2");
        h2.innerText=data.city.name;
        let sunrise=document.createElement("p")
        sunrise.innerText=`Sunrise:- ${data.city.sunrise} `;
        let sunset=document.createElement("p")
        sunset.innerText=`Sunset:- ${data.city.sunset} `;

        let humidity=document.createElement("p")
        humidity.innerText=`Humidity:- ${data.list[0].main.humidity} %`;

        let temp=document.createElement("p")
        temp.innerText=`Temp:- ${Math.ceil(data.list[0].main.temp-273.15)} °C`;

        let min_temp=document.createElement("p")
        min_temp.innerText=`Min Temp:- ${Math.ceil(data.list[0].main.temp_min-273.15)} °C`;

        let max_temp=document.createElement("p")
        max_temp.innerText=`Max Temp:- ${Math.ceil(data.list[0].main.temp_max-273.15)} °C`;

        let wea=document.createElement("p")
        wea.innerText=`Weather:- ${data.list[0].weather[0].description}`;

        let wind=document.createElement("p")
        wind.innerText=`Wind-Speed:- ${data.list[0].wind.speed} m/s`;

        let box1=document.createElement("div")
        let day1=document.createElement("p")
        day1.innerText="Day 1";
        let tmax=document.createElement("p")
        tmax.innerText=`Max Temp:- ${Math.ceil(data.list[0].main.temp_max-273.15)} °C`;
        let tmin=document.createElement("p")
        tmin.innerText=`Min Temp:- ${Math.ceil(data.list[0].main.temp_min-273.15)} °C`;
        box1.append(day1,tmax,tmin);

        let box2=document.createElement("div")
        let day2=document.createElement("p")
        day2.innerText="Day 2";
        let tmax1=document.createElement("p")
        tmax1.innerText=`Max Temp:- ${Math.ceil(data.list[1].main.temp_max-273.15)} °C`;
        let tmin1=document.createElement("p")
        tmin1.innerText=`Min Temp:- ${Math.ceil(data.list[1].main.temp_min-273.15)} °C`;
        box2.append(day2,tmax1,tmin1);

        let box3=document.createElement("div")
        let day3=document.createElement("p")
        day3.innerText="Day 3";
        let tmax2=document.createElement("p")
        tmax2.innerText=`Max Temp:- ${Math.ceil(data.list[2].main.temp_max-273.15)} °C`;
        let tmin2=document.createElement("p")
        tmin2.innerText=`Min Temp:- ${Math.ceil(data.list[2].main.temp_min-273.15)} °C`;
        box3.append(day3,tmax2,tmin2);

        let box4=document.createElement("div")
        let day4=document.createElement("p")
        day4.innerText="Day 4";
        let tmax3=document.createElement("p")
        tmax3.innerText=`Max Temp:- ${Math.ceil(data.list[3].main.temp_max-273.15)} °C`;
        let tmin3=document.createElement("p")
        tmin3.innerText=`Min Temp:- ${Math.ceil(data.list[3].main.temp_min-273.15)} °C`;
        box4.append(day4,tmax3,tmin3);

        let box5=document.createElement("div")
        let day5=document.createElement("p")
        day5.innerText="Day 5";
        let tmax4=document.createElement("p")
        tmax4.innerText=`Max Temp:- ${Math.ceil(data.list[4].main.temp_max-273.15)} °C`;
        let tmin4=document.createElement("p")
        tmin4.innerText=`Min Temp:- ${Math.ceil(data.list[4].main.temp_min-273.15)} °C`;
        box5.append(day5,tmax4,tmin4);

        let box6=document.createElement("div")
        let day6=document.createElement("p")
        day6.innerText="Day 6";
        let tmax5=document.createElement("p")
        tmax5.innerText=`Max Temp:- ${Math.ceil(data.list[5].main.temp_max-273.15)} °C`;
        let tmin5=document.createElement("p")
        tmin5.innerText=`Min Temp:- ${Math.ceil(data.list[5].main.temp_min-273.15)} °C`;
        box6.append(day6,tmax5,tmin5);

        let box7=document.createElement("div")
        let day7=document.createElement("p")
        day7.innerText="Day 7";
        let tmax6=document.createElement("p")
        tmax6.innerText=`Max Temp:- ${Math.ceil(data.list[6].main.temp_max-273.15)} °C`;
        let tmin6=document.createElement("p")
        tmin6.innerText=`Min Temp:- ${Math.ceil(data.list[6].main.temp_min-273.15)} °C`;
        box7.append(day7,tmax6,tmin6);



        container.append(h2,sunrise,sunset,humidity,temp,min_temp,max_temp,wea,wind);
        document.querySelector("#weatherReport").append(box1,box2,box3,box4,box5,box6,box7)
        let iframe=document.getElementById("gmap_canvas");
        iframe.src=url;
        document.querySelector("#weatherReport").append(box1,box2,box3,box4,box5,box6,box7)

    }

    function getLocation(){
        navigator.geolocation.getCurrentPosition(success);
    
    function success(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  getweatherLocation(crd.latitude, crd.longitude);
}
    }
    

    function getweatherLocation(lat, lon){
        let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=2a7417848e67bee949af373680eb9a6c`;
        fetch(url)
        .then(function (res){
            return res.json();
        })
        .then(function (res){
            console.log(res);
            append(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    }