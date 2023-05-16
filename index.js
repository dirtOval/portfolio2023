import * as $ from 'jquery';

let slideCounter = 0;
let projectCounter = 0;

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

const misc = ['images/vim.png',
              'images/git.png',
              'images/npm.png',
              'images/webpack.png',
              'images/vite.png',
              'images/babel.png',
              'images/pip.png'];

const games = ['images/phaser.png',
               'images/colyseus.jpg',
               'images/unity.png'];

const projects  = [
  {
    title: 'Cool Project',
    image: 'images/mike.jpg',
    description: 'a very cool project',
    link: '#',
    commentary: `A very serious project about serious things. I
    worked on this project for months, toiling tirelessly and
    eating nothing but lettuce and hot sauce packets. This project
    will change the world.`
  },
  {
    title: 'Another Cool Project',
    image: 'images/mike.jpg',
    description: 'another very cool project',
    link: '#',
    commentary: `Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project`
  },
  {
    title: 'The very coolest project',
    image: 'images/mike.jpg',
    description: 'this project is so cool',
    link: '#',
    commentary: `Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project
    Another very serious project for serious people.
    I spent so much time on this project and now it is perfect. beautiful.
    transcendent. amazing. i lvoe this project`
  }
]

let updatePage = () => {
  $(slides[slideCounter]).toggleClass('active');
  slideCounter += 1;
  if (slideCounter > 4) {
    slideCounter = 0;
  }
  $(slides[slideCounter]).toggleClass('active');
  // console.log(`slideCounter is ${slideCounter}`);
}

let updateProject = () => {
  $('.project-image').attr('src', projects[projectCounter].image);
  $('.project-title a').text(projects[projectCounter].title)
  $('.project-title a').attr('href', projects[projectCounter].link);
  $('.project-description').text(projects[projectCounter].description);
  $('.project-commentary').text(projects[projectCounter].commentary);
}

const langTan = Math.tan(Math.PI/languages.length);
const frontTan = Math.tan(Math.PI/frontEnd.length);
const backTan = Math.tan(Math.PI/backEnd.length);
const testTan = Math.tan(Math.PI/testing.length);
const miscTan = Math.tan(Math.PI/misc.length);
const gamesTan = Math.tan(Math.PI/games.length);

$(document).ready(function() {
  updateProject();

  $('.button').click(() => {
    const slide = $('.active');
    slide.css('animation', 'flydown 0.65s linear');
    slide.on('animationend', () => {
      slide.off('animationend');
      slide.css('animation', 'blinkon 0.65s linear');
      updatePage();
    })
  })

  $('.right').click(() => {
    projectCounter += 1;
    if (projectCounter >= projects.length) {
      projectCounter = 0;
    }
    updateProject();
  })


  $('.left').click(() => {
    projectCounter -= 1;
    if (projectCounter < 0) {
      projectCounter = projects.length - 1;
    }
    updateProject();
  })

  let $techList = $('.tech-list');

  let $langGroup = $(`<div class="group"></div>`);
  let $langNode = $(`<div class="node lang-node" style="
                          --m: ${languages.length};
                          --tan: ${langTan.toFixed(2)};"></div>`);
  let $langList = $(`
    <ul>
      <li class="lang-li">JavaScript</li>
      <li class="lang-li">TypeScript</li>
      <li class="lang-li">Python</li>
    </ul>
  `)
  $langGroup.append($langNode);
  $langGroup.append($langList);

  let $frontGroup = $(`<div class="group"></div>`);
  let $frontNode = $(`<div class="node front-node" style="
                          --m: ${frontEnd.length};
                          --tan: ${frontTan.toFixed(2)};"></div>`);
  let $frontList = $(`
    <ul>
      <li class="front-li">HTML 5</li>
      <li class="front-li">CSS 3</li>
      <li class="front-li">SCSS</li>
      <li class="front-li">jQuery</li>
      <li class="front-li">React</li>
      <li class="front-li">React Native</li>
      <li class="front-li">Three.js</li>
    </ul>
  `);
  $frontGroup.append($frontNode);
  $frontGroup.append($frontList);

  let $backGroup = $(`<div class="group"></div>`);
  let $backNode = $(`<div class="node back-node" style="
                          --m: ${backEnd.length};
                          --tan: ${backTan.toFixed(2)};"></div>`);
  let $backList = $(`
    <ul>
      <li class="back-li">Node.js</li>
      <li class="back-li">Express</li>
      <li class="back-li">Django</li>
      <li class="back-li">RESTful APIs</li>
      <li class="back-li">MongoDB</li>
      <li class="back-li">MySQL</li>
      <li class="back-li">SQLite</li>
      <li class="back-li">PostgreSQL</li>
    </ul>
  `)
  $backGroup.append($backNode);
  $backGroup.append($backList);

  let $testGroup = $(`<div class="group"></div>`);
  let $testNode = $(`<div class="node test-node" style="
                          --m: ${testing.length};
                          --tan: ${testTan.toFixed(2)};"></div>`);
  let $testList = $(`
    <ul>
      <li class="test-li">Jest</li>
      <li class="test-li">Mocha</li>
      <li class="test-li">Chai</li>
      <li class="test-li">EC2</li>
      <li class="test-li">PythonAnywhere</li>
    </ul>
  `)
  $testGroup.append($testNode);
  $testGroup.append($testList);

  let $miscGroup = $(`<div class="group"></div>`);
  let $miscNode = $(`<div class="node misc-node" style="
                          --m: ${misc.length};
                          --tan: ${miscTan.toFixed(2)};"></div>`);
  let $miscList = $(`
    <ul>
      <li class="misc-li">Vim</li>
      <li class="misc-li">Git</li>
      <li class="misc-li">npm</li>
      <li class="misc-li">Webpack</li>
      <li class="misc-li">Vite</li>
      <li class="misc-li">Babel</li>
      <li class="misc-li">PyPi</li>
    </ul>
  `)
  $miscGroup.append($miscNode);
  $miscGroup.append($miscList);

  let $gamesGroup = $(`<div class="group"></div>`);
  let $gamesNode = $(`<div class="node games-node" style="
                          --m: ${games.length};
                          --tan: ${gamesTan.toFixed(2)};"></div>`);
  let $gamesList = $(`
    <ul>
      <li class="games-li">Phaser 3</li>
      <li class="games-li">Colyseus</li>
      <li class="games-li">Unity</li>
    </ul>
  `)
  $gamesGroup.append($gamesNode);
  $gamesGroup.append($gamesList);

  $techList.append($langGroup);
  $techList.append($frontGroup);
  $techList.append($backGroup);
  $techList.append($testGroup);
  $techList.append($miscGroup);
  $techList.append($gamesGroup);

  let $langBubble = $('<div class="bubble lang-bubble">Languages</div>');
  $langNode.append($langBubble);
  let $frontBubble = $('<div class="bubble front-bubble">Front End</div>');
  $frontNode.append($frontBubble);
  let $backBubble = $('<div class="bubble back-bubble">Back End</div>');
  $backNode.append($backBubble);
  let $testBubble = $('<div class="bubble test-bubble">Test/Deploy</div>');
  $testNode.append($testBubble);
  let $miscBubble = $('<div class="bubble misc-bubble">DevTools/Misc</div>');
  $miscNode.append($miscBubble);
  let $gamesBubble = $('<div class="bubble games-bubble">Games</div>');
  $gamesNode.append($gamesBubble);

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

  for (let i = 0; i < misc.length; i++) {
    const $misc = $(`<img class="icon misc" style="--i: ${i};" src=${misc[i]} />`);
    $miscNode.append($misc);
  }

  for (let i = 0; i < games.length; i++) {
    const $game = $(`<img class="icon game" style="--i: ${i};" src=${games[i]} />`);
    $gamesNode.append($game);
  }

  let $langLi = $('.lang-li');
  $langNode.on('mouseenter', () => {
    $langLi.css('color', 'rgba(255, 255, 255, 1)');
  })
  $langNode.on('mouseleave', () => {
    $langLi.css('color', '');
  })

  let $frontLi = $('.front-li');
  $frontNode.on('mouseenter', () => {
    $frontLi.css('color', 'rgba(255, 255, 255, 1)');
  })
  $frontNode.on('mouseleave', () => {
    $frontLi.css('color', '');
  })

  let $backLi = $('.back-li');
  $backNode.on('mouseenter', () => {
    $backLi.css('color', 'rgba(255, 255, 255, 1)');
  })
  $backNode.on('mouseleave', () => {
    $backLi.css('color', '');
  })

  let $testLi = $('.test-li');
  $testNode.on('mouseenter', () => {
    $testLi.css('color', 'rgba(255, 255, 255, 1)');
  })
  $testNode.on('mouseleave', () => {
    $testLi.css('color', '');
  })

  let $miscLi = $('.misc-li');
  $miscNode.on('mouseenter', () => {
    $miscLi.css('color', 'rgba(255, 255, 255, 1)');
  })
  $miscNode.on('mouseleave', () => {
    $miscLi.css('color', '');
  })

  let $gamesLi = $('.games-li');
  $gamesNode.on('mouseenter', () => {
    $gamesLi.css('color', 'rgba(255, 255, 255, 1)');
  })
  $gamesNode.on('mouseleave', () => {
    $gamesLi.css('color', '');
  })

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