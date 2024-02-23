const clock = document.getElementById('clock');

//Important Question for Interview
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
