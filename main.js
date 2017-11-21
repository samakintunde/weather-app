let temp = document.getElementById('temp');
let tempUnit = document.getElementById('temp-unit');
let weatherIcon = document.getElementById('weather-icon');
let weatherInfo = document.getElementById('weather-info');
let share = document.getElementById('share');
let shareModal = document.getElementById('share-modal');
let refresh = document.getElementById('refresh');
let tempConvert = document.getElementById('temp-convert');
let close = document.getElementById('close-btn');
let modal = document.getElementById('modal');
let time = document.getElementById('time');
let greeting = document.getElementById('greeting');

// Get position coordinates
function getLocation() {
  function getPosition(position) {
    weatherInfo.innerText = position.coords.latitude;
    position.coords.longitude;
  }
// Verify geolocation services is available
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    body.innerHTML = "Geolocation is not supported by your browser";
  }
}

// Convert temperature 
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

// Share weather button
function shareBtn() {
  modal.className = 'active';
  shareModal.className = 'active';
  if(modal.classList.active) {
    console.log("active class is added");
  }
}

// Close Modal Button
function closeBtn() {
  shareModal.classList.remove('active');
  modal.classList.remove('active');
}

getLocation();
tempConvert.addEventListener('click', convertTemp);
refresh.addEventListener('click', getLocation);
share.addEventListener('click', shareBtn);
close.addEventListener('click', closeBtn);






