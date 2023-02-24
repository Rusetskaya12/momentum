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
    const greeting = document.querySelector('.greeting');
    const today = new Date(),
      hour = today.getHours()
    if (hour >= 18 || hour <= 23) {
      greeting.textContent = 'Good evening,  ';
    } else if (hour >= 6 || hour <= 12) {
      greeting.textContent = 'Good morning,  ';
    } else if (hour > 12 || hour < 18) {
      greeting.textContent = 'Good afternoon,  ';
    } else {
      greeting.textContent = 'Good night,  ';
    }
  }
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



  const imageUrls = [
"/assets/img/01.jpg",
"/assets/img/02.jpg",
"/assets/img/03.jpg",
"/assets/img/04.jpg",
"/assets/img/05.jpg",
"/assets/img/06.jpg",
"/assets/img/11.jpg",
"/assets/img/12.jpg",
"/assets/img/13.jpg",
"/assets/img/14.jpg",
"/assets/img/15.jpg",
"/assets/img/16.jpg",
"/assets/img/morning1.jpg",
"/assets/img/morning2.jpg",
"/assets/img/morning3.jpg",
"/assets/img/morning4.jpg",
"/assets/img/morning5.jpg",
"/assets/img/morning6.jpg",
"/assets/img/morning7.jpg",
"/assets/img/morning8.jpg",
]


function next () {
  
}
function prev () {
  alert("dd")
}


const images = imageUrls.map(url => {
  const img = new Image()
  img.src = url
  return img
});
let index = 1;


setInterval(()=>{
  document.body.style.backgroundImage = `url(${images[index].src})`
  index = index >= images.length-1 ? 0 : index + 1
}, 5000)

