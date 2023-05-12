import * as $ from 'jquery';

let counter = 0
let slides = [
  '.hello',
  '.intro',
  '.tech-section',
  '.projects',
  '.contact'
]

let languages = ['images/js.png',
                 'images/typescript.png',
                 'images/python.png'];


let updatePage = () => {
  $(slides[counter]).toggleClass('active');
  counter += 1;
  if (counter > 4) {
    counter = 0;
  }
  $(slides[counter]).toggleClass('active');
  // console.log(`counter is ${counter}`);
}

let langTan = Math.tan(Math.PI/languages.length);

$(document).ready(function() {

  $('.button').click(() => {
    updatePage();
  })

  let $techList = $('.tech-list');
  let $langNode = $(`<div class="node lang" style="
                          --m: ${languages.length};
                          --tan: ${langTan.toFixed(2)};">Languages</div>`);
  $techList.append($langNode);
  for (let i = 0; i < languages.length; i++) {
    const $language = $(`<img class="icon" style="--i: ${i};" src=${languages[i]} />`)
    $langNode.append($language);
  }


})