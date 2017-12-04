let temp = document.getElementById('temp');
let tempUnit = document.getElementById('temp-unit');
let weatherIcon = document.getElementById('weather-icon');
let weatherInfo = document.getElementById('weather-info');
let shareModal = document.getElementById('share-modal');
let close = document.getElementById('close-btn');
let modal = document.getElementById('modal');
let time = document.getElementById('time');
let greeting = document.getElementById('greeting');

// Get position coordinates
function getLocation() {
  // Verify geolocation services is available
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    alert("Geolocation is not supported by your browser");
  }
  
  let refresh = document.getElementById('refresh');

  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lon=:' + lon + '&lat=:' + lat, 'true');
    xhr.send();
    
    xhr.onload = function() {
      if(xhr.status = 200) {
        let res = xhr.responseText;
        temp.innerText = Math.floor(res.main.temp);
        weatherInfo.innerText = res.weather[0].description;
        weatherIcon.setAttribute(src, res.weather[0].icon);
        return res;
      }
      console.log(res);
    }
  }
}

getLocation();

refresh.addEventListener('click', getLocation);

// Convert temperature 
let tempConvert = document.getElementById('temp-convert');

function convertTemp() {

  if(tempConvert.innerHTML === 'C') {
    tempConvert.innerText = 'F';
    temp.innerText = (5/9)*temp.innerText;
    tempUnit.innerText = 'C';
  } 
  else if(tempConvert.innerHTML === 'F') {
    tempConvert.innerText = 'C';
    temp.innerText = (9/5)*temp.innerText;
    tempUnit.innerText = 'F';
  } 
}

tempConvert.addEventListener('click', convertTemp);

// Share weather button
let share = document.getElementById('share');

function shareBtn() {

  modal.className = 'active';
  shareModal.className = 'active';
  if(modal.classList.active) {
    console.log("active class is added");
  }
}

share.addEventListener('click', shareBtn);


// Close Modal Button
function closeBtn() {
  shareModal.classList.remove('active');
  modal.classList.remove('active');
}

close.addEventListener('click', closeBtn);


// Set Time
function setTime() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  month = months[month];
  let minutes = now.getMinutes();
  let hour = now.getHours();

  if(hour > 12) {
    greeting.innerText = 'Good Afternoon';
  }
  if(hour > 17 || hour < 0) {
    greeting.innerText = 'Good evening';
  }
  time.innerText = `${month} ${date}`;
}

setTime();









