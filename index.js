import * as $ from 'jquery';

let counter = 0
const slides = [
  '.hello',
  '.intro',
  '.tech-section',
  '.projects',
  '.contact'
]

const languages = ['images/js.png',
                 'images/typescript.png',
                 'images/python.png'];

const frontEnd = ['images/html-5.png',
                'images/css-3.png',
                'images/scss.png',
                'images/jquery.png',
                'images/react.png',
                'images/react-native.png',
                'images/three.png'];

const backEnd = ['images/node-js.png',
                 'images/express.png',
                 'images/django.png',
                 'images/rest.png',
                 'images/mongo.png',
                 'images/mysql.jpg',
                 'images/sqlite.png',
                 'images/postgres.png'];

const testing = ['images/jest.png',
                 'images/mocha.png',
                 'images/chai.png',
                 'images/ec2.png',
                 'images/pythonanywhere.png'];


let updatePage = () => {
  $(slides[counter]).toggleClass('active');
  counter += 1;
  if (counter > 4) {
    counter = 0;
  }
  $(slides[counter]).toggleClass('active');
  // console.log(`counter is ${counter}`);
}

const langTan = Math.tan(Math.PI/languages.length);
const frontTan = Math.tan(Math.PI/frontEnd.length);
const backTan = Math.tan(Math.PI/backEnd.length);
const testTan = Math.tan(Math.PI/testing.length);

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
  let $backNode = $(`<div class="node back-node" style="
                          --m: ${backEnd.length};
                          --tan: ${backTan.toFixed(2)};"></div>`);
  let $testNode = $(`<div class="node test-node" style="
                          --m: ${testing.length};
                          --tan: ${testTan.toFixed(2)};"></div>`);

  $techList.append($langNode);
  $techList.append($frontNode);
  $techList.append($backNode);
  $techList.append($testNode);

  let $langBubble = $('<div class="bubble lang-bubble">Languages</div>');
  $langNode.append($langBubble);
  let $frontBubble = $('<div class="bubble front-bubble">Front End</div>');
  $frontNode.append($frontBubble);
  let $backBubble = $('<div class="bubble back-bubble">Back End</div>');
  $backNode.append($backBubble);
  let $testBubble = $('<div class="bubble test-bubble">Test/Deploy</div>');
  $testNode.append($testBubble);

  for (let i = 0; i < languages.length; i++) {
    const $language = $(`<img class="icon lang" style="--i: ${i};" src=${languages[i]} />`);
    $langNode.append($language);
  }

  for (let i = 0; i < frontEnd.length; i++) {
    const $frontEnd = $(`<img class="icon front" style="--i: ${i};" src=${frontEnd[i]} />`);
    $frontNode.append($frontEnd);
  }

  for (let i = 0; i < backEnd.length; i++) {
    const $backEnd = $(`<img class="icon back" style="--i: ${i};" src=${backEnd[i]} />`);
    $backNode.append($backEnd);
  }

  for (let i = 0; i < testing.length; i++) {
    const $test = $(`<img class="icon test" style="--i: ${i};" src=${testing[i]} />`);
    $testNode.append($test);
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