"use strict"


//отображать время на странице//
function showTime () {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    const time = document.querySelector(".time");
    time.textContent = currentTime;
    setTimeout(showTime, 1000); 
};
showTime();


function showDate () {
   
    const dateToday = new Date();
    const options = {weekday: "long", month: 'long', day: 'numeric'};
    const date = document.querySelector(".date");
    const currentDate = dateToday.toLocaleDateString('en-US', options);  
    date.textContent = currentDate;
   
};
showDate();



function setGreet() {
    const greeting = document.querySelector('.greeting')
    const today = new Date(),
      hour = today.getHours()
    if (hour > 18 || hour < 24) {
      greeting.textContent = 'Good evening,  '
    } else if (hour > 6 || hour < 12) {
      greeting.textContent = 'Good morning,  '
    } else if (hour > 12 || hous < 18) {
      greeting.textContent = 'Good afternoon,  '
    } else {
      greeting.textContent = 'Good night,  '
    }
  };
  setGreet();

  function setLocalStorage() {
    const name = document.querySelector('.name');
    const text = new Date();
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);


  function getLocalStorage() {

    const name = document.querySelector('.name');
    const text = new Date();
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);