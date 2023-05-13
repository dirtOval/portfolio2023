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

let frontEnd = ['images/html-5.png',
                'images/css-3.png',
                'images/scss.png',
                'images/jquery.png',
                'images/react.png',
                'images/react-native.png',
                'images/three.png'];


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
let frontTan = Math.tan(Math.PI/frontEnd.length);

$(document).ready(function() {

  $('.button').click(() => {
    updatePage();
  })

  let $techList = $('.tech-list');

  let $langNode = $(`<div class="node lang-node" style="
                          --m: ${languages.length};
                          --tan: ${langTan.toFixed(2)};"></div>`);
  let $frontNode = $(`<div class="node front-node" style="
                          --m: ${frontEnd.length};
                          --tan: ${frontTan.toFixed(2)};"></div>`);
  $techList.append($langNode);
  $techList.append($frontNode);

  let $langBubble = $('<div class="bubble lang-bubble">Languages</div>');
  $langNode.append($langBubble);
  let $frontBubble = $('<div class="bubble front-bubble">Front End</div>');
  $frontNode.append($frontBubble);

  for (let i = 0; i < languages.length; i++) {
    const $language = $(`<img class="icon lang" style="--i: ${i};" src=${languages[i]} />`);
    $langNode.append($language);
  }

  for (let i = 0; i < frontEnd.length; i++) {
    const $frontEnd = $(`<img class="icon front" style="--i: ${i};" src=${frontEnd[i]} />`);
    $frontNode.append($frontEnd);
  }

  // $langNode.on('animationend', () => {
  // })
  // $langNode.on('mouseenter', () => {
  //   // $icons.css('animation-direction', 'reverse')
  //   $icons.css('animation-play-state', 'running',
  //              'display', 'inline');
  // })
  // $langNode.on('mouseleave', () => {
  //   // $icons.css('animation-direction', 'reverse')
  //   // $icons.css('animation-play-state', 'running');
  // })
  // // $icons.bind('oanimationend animationend webkitAnimationEnd', () => {
  // //   $icons.css('display', 'none');
  // // })


})