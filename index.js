import * as $ from 'jquery';

let counter = 0
let slides = [
  '.hello',
  '.intro',
  '.tech-section',
  '.projects',
  '.contact'
]

let updatePage = () => {
  $(slides[counter]).toggleClass('active');
  counter += 1;
  if (counter > 4) {
    counter = 0;
  }
  $(slides[counter]).toggleClass('active');

  console.log(`counter is ${counter}`);
}


$(document).ready(function() {

  $('.button').click(() => {
    updatePage();
  })

})