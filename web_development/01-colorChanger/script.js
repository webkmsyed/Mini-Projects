const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target); //.target use to identify where the event comes from
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'white'; //to change body color
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'white';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'black'; //to change text color
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'black'; //to change text color
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'black'; //to change text color
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'white'; //to change text color
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'white'; //to change text color
    }
    if (e.target.id === 'lawngreen') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'black'; //to change text color
    }
    if (e.target.id === 'lime') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'black'; //to change text color
    }
    if (e.target.id === 'darkblue') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'white'; //to change text color
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'white'; //to change text color
    }
    if (e.target.id === 'cornflowerblue') {
      body.style.backgroundColor = e.target.id; //to change body color
      body.style.color = 'black'; //to change text color
    }
  });
});
