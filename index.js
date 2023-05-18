import $ from 'jquery';
import animationManager from './bg/bg.js';

animationManager.init();


let slideCounter = 0;
let projectCounter = 0;
let commentaryExpanded = false;

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
    title: 'The Thor Store',
    image: 'images/thor-store.gif',
    description: 'The front-end of an online clothing store. Worked on a team with two other engineers.',
    link: 'https://github.com/RFE-2212-FEC-Thor/FEC-Thor',
    commentary: `
    The project came together over a few weeks January - February 2022.
    <br><br>
    We used React with TypeScript, with an Express proxy to talk to the API serving the clothing data. I'd
    dabbled in TypeScript before, but this was my first time using it for a real project. Because I was the most
    excited about using TypeScript, it fell to me to set up the repo. Our original plan was to use Create-React-App's
    TypeScript template, but we were warned doing so would make deploying more annoying later, so I ended up learning
    how to make Webpack, React, and TypeScript work together. Not sure how much easier it made deploying, but I definitely
    learned a lot about Webpack in the process. :)
    <br><br>
    Another first for me, we used SCSS. At first we were working in one big stylesheet, which turned into 3 little
    ones feeding into a main file after we swiftly plunged into merge conflict hell. Gotta say, I looove SCSS. The nesting
    alone makes it totally worth it, and being able to set up simple loops is a big time-saver. I thought really hard about
    using SCSS for this site, but then I forgot. Next time!
    <br><br>
    My other major contribution to the project was the Product Overview component, pictured on the left. As aforementioned,
    all of the product data was coming from Axios calls to an API. Setting up TypeScript interfaces for each component's props
    was tedious, but ultimately a huge time-saver, as far as preventing the sort of bugs that result from thinking data
    is one type when it's actually another.
    <br><br>
    This was an enjoyable project for me. I love working on the front-end, especially where animations and transitions are
    concerned. A lot of the work was more functional, but there were plenty of little details, tiny onmouseover
    effects and such. The most interesting and fun part of the project was the image gallery. There's a cute animation that
    plays when the gallery goes into expanded mode, and the zoom view was an interesting challenge that got me whiteboarding
    to solve. 10/10, would Thor Store again.
    <br><br><br><br><br><br>
    `
  },
  {
    title: 'SocketShooter',
    image: 'images/socketShooter.gif',
    description: 'WIP multiplayer platformer shooter made in 3 days.',
    link: 'https://github.com/dirtOval/SocketShooter',
    commentary: `
    This project was a huge learning experience. I'd messed around in Unity & Godot before, but never before had I made
    a game without an editor, much less a multiplayer game. I used Phaser 3 for the gameplay, Colyseus for the game server,
    and React for the main menu. That last one was a weird choice, one that resulted in some difficulties in development. If
    I was to do it again, I would definitely have just made an in-game menu in Phaser. Live and learn I guess.
    <br><br>
    The basic gameplay is all there, currently. You can run around and jump and shoot each other, and there's a
    simple game lobby in the main menu. I tested it with 16 players at once hosted on an EC2 Micro and it worked just fine,
    minor bugs & spotty hitboxes aside.
    <br><br>
    The real problem with the game at the moment is, I found out 2 days into development
    that the physics engine I was using, Phaser's built in Arcade engine, only works on the browser. This would be fine
    if I was making a singleplayer game, but in a multiplayer game the player's X and Y coordinates need to live on the
    server so it can tell all clients where each player is using websockets. SO, as it is the server tracks the player's X
    coordinate and whether or not they are jumping. When a player jumps, the client messages the server to set
    the boolean value isJumping to true, which then in turn notifies each other client that the player in question is
    jumping. When the player lands, it tells the server, which tells every other client. As you might guess, this can
    cause some pretty significant sync issues due to lag.
    <br><br>
    I plan to address this by revising the game to instead use Matter.js for its physics, which can run in Node. Another
    item on the list is to get someone to do some graphics for the game, as it currently uses free assets by artists
    Master484 and Nexust on opengameart.org. Finally, I definitely want to redo the main menu to be in game.
    <br><br>
    The aforementioned difficulties with the main menu had to do with how Phaser interacts with its surrounding environment.
    More specifically, how it really doesn't do that at all. When it came time to set up the game lobby, I needed a way to
    pass a session ID from React state into Phaser. Unfortunately, the only entrypoint into Phaser is its config file at initialization.
    So what I ended up doing was going through the Phaser docs (which are, by the way, kind of bad) looking for a property on the config
    that I could pass a string into that wouldn't harm anything. What I ended up settling on was the gameTitle property, which just
    displayed in the console upon init, and which was accessible from the main Game object from within Phaser. Tomfoolery, to be sure.
    <br><br><br><br>

    `
  },
  {
    title: 'The Thor Store Ratings & Reviews API',
    image: 'images/sdc2.png',
    description: 'An API serving the ratings & reviews section of an online clothing store.',
    link: 'https://github.com/dirtOval/rfe2212-system-design-capstone',
    commentary: `
    Worked on this one right after the front-end of The Thor Store, sometime mid February 2023.
    <br><br>
    So as I mentioned in The Thor Store description, all the data populating the front-end came from
    an API. The task with this project was to, along with two other engineers, decompose the API into
    smaller services in order to handle larger, more frequent traffic. I was tasked with handling the
    service covering the Ratings & Reviews component.
    <br><br>
    The first thing to do was decide how I was going to store the data. I researched a variety of database options before
    settling on MongoDB. Its document-based structure made sense given the nested nature of the data to be stored, and
    research suggested it was highly available and would scale well horizontally.
    <br><br>
    From there, I wrote a Python script to ETL the millions of lines of CSV into the DB. This turned out to be quite the
    arduous process. The main issue arose from the absurd memory consumption involved in attempting to open multiple
    millions-of-lines-long CSV files at once and package their contents into objects. I got around it by using the Pandas
    library's CSV chunking functionality, turning the CSVs into bite-sized pieces an EC2 Micro could handle without immediately choking.
    <br><br>
    Writing the actual API functionality wasn't so bad. I used an Express server to feed requests into the appropriate
    controller, trying my best to adhere to the MVC model. Most of the routes were pretty simple and lightweight, but I
    ran into an interesting conundrum when attempting to write the metadata route. Specifically, whether to generate and
    store the metadata, or simply generate it as needed.
    <br><br>
    Reasoning that it would somehow be more annoying to update the metadata every time a review was added, I elected to generate
    it as needed. Naturally, my initial implementation ran horrifically slow. Like, 9 seconds per request slow. I added
    some indexes and made use of Mongoose's aggregate functionality, which brought it within the requirement that each
    request take no longer than 50ms, but it was at that point I realized my mistake.
    <br><br>
    While storing the data seemed like it would take more work than generating it on the fly, that work would all
    happen on the back-end, and would not affect the user experience at all. Generating on the fly, on the other hand,
    resulted in slightly slower load times for the front-end, which was no good. Oops!
    <br><br>
    This project was pretty frustrating at times, but ultimately a big learning experience. I hadn't previously
    dealt with such large sets of data, and had only really dabbled in Mongo at that point. If I were to do it again
    I'd do everything 10x faster and less foolishly. That's how it goes, I guess!
    <br><br><br><br><br><br><br><br><br><br><br><br>
    `
  },
  {
    title: 'BoatworksSMS',
    image: 'images/boatworks.png',
    description: 'A simple web app utilizing Twilio\'s SMS API plugged into an SQLite database for mass messaging.',
    link: 'https://github.com/dirtOval/boatworksSMS_3.8',
    commentary: `
    I made this over a few weeks between March & April 2022. A Brooklyn-based education non-profit hired
    me to help enhance their alumni outreach capabilities. At the time I was working almost entirely in Python, so
    I used Django for pretty much everything: templating, routing, ORM, you name it.
    <br><br>
    Twilio's SMS API was the tool of choice for doing the actual messaging. It was pretty simple to take the Hello World
    example on the Twilio website and plug it into Django's default SQLite database. If I was to do it again I would
    probably have picked a different database, most likely mySQL. Anyway, in order to make mass messaging convenient I
    added functionality allowing users to search through the database and add people to lists, these lists also being
    stored in the database. From there it was simply a matter of selecting the desired list and pressing Send. The search
    bar caused me to dip my toes into regular expressions, which I hadn't previously messed around with much, save copy-pasting
    the occasional example off Stack Overflow.
    <br><br>
    You might notice the almost entire lack of CSS styling on the screenshot to the left. There are two main
    reasons for this: <br>
    1. The deadline for this project was short, and I devoted all my time to getting functionality down and bug free.<br>
    2. I wasn't then as strong in CSS as I am today. Like, I could center a div, and I had certainly *heard* of flexbox,
    but I lacked the breadth and depth of knowledge to make it look pretty on such a short timeline.<br>It's at the top of
    the list if they ever hire me again, rest assured!
    <br><br>
    The hardest part of this project was loading the non-profit's alumni spreadsheet into the database. It should have
    been easy. I had a library to import data via Django's admin page, and it was no trouble exporting the spreadsheet
    in CSV form. The trouble came from the spreadsheet itself: it was inconsistent, rife with errors and duplicate
    data, and made the whole process way more unpleasant than it had to be. Just goes to show, in practice data
    is messy! Or it doesn't have to be, but often is. I ended up burning the better part of a day sorting through the
    errors. If I was to do it again I definitely would write a script to fix the errors for me.
    <br><br>
    I really enjoyed working on this project. As a newbie dev it pushed me to learn about API calls, databases, deploying,
    and especially error handling really quickly. The day after I deployed it I got an email saying it was
    bugging out after trying to message only ~50 people. Given I'd designed it to message hundreds of people at once,
    something was clearly not working right. It turned out someone had replied STOP to an earlier message the non-profit
    had sent out, and I hadn't written any logic to handle that. One very apologetic email and about half a dozen lines of
    code later, and it was working like a charm.
    <br><br>
    I definitely want to do another thing with Twilio SMS someday, whether for work or my own insidious purposes. It is an
    insanely fun service, and costs fractions of a cent per message. Definitely recommend it if you've never played with it.
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    `
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
  $('.scroll-container')[0].scrollTo(0, 0);

  $('.project-commentary').html(projects[projectCounter].commentary);
  commentaryExpanded = true;
  toggleCommentary();
}

let toggleCommentary = () => {
  if (!commentaryExpanded) {
    // $('.scroll-container').css('transform', 'scaleY(1)');
    $('.scroll-container').css('height', '100%');
    $('.project-title').css('font-size', '0rem');
    $('.project-description').css('font-size', '0rem');

    $('.read-more').css('font-size', '1rem');
    $('.read-more').text('Read less!');
  } else {
    // $('.scroll-container').css('transform', 'scaleY(0)');
    $('.scroll-container').css('height', '0%');
    $('.project-title').css('font-size', '');
    $('.project-description').css('font-size', '');

    $('.project-title').css('display', '');
    $('.project-description').css('display', '');

    $('.read-more').css('font-size', '');
    $('.read-more').text('Read more!');
  }
  commentaryExpanded = !commentaryExpanded;
}

const langTan = Math.tan(Math.PI/languages.length);
const frontTan = Math.tan(Math.PI/frontEnd.length);
const backTan = Math.tan(Math.PI/backEnd.length);
const testTan = Math.tan(Math.PI/testing.length);
const miscTan = Math.tan(Math.PI/misc.length);
const gamesTan = Math.tan(Math.PI/games.length);

//need this to change font size between OSs
if (navigator.userAgent.includes("Win")) {
  console.log('windows detected! :)');
  $('html').css('font-size', '16px');
  $('h1').css('font-size', '19rem');
  $('h2').css('font-size', '4.5rem');
  $('p').css('font-size', '1.25rem');
  $('body').css('--bubble-radius', '6rem');
} else {
  console.log('yay for no windows OS!');
}

$(document).ready(function() {
  updateProject();

  $('.button').click(() => {
    const slide = $('.active');
    slide.css('animation', 'flydown 0.65s linear');
    slide.on('animationend', () => {
      slide.off('animationend');
      slide.css('animation', 'blinkon 0.65s linear');
      animationManager.updateCounter();
      updatePage();
    })
  });

  $('.right').click(() => {
    projectCounter += 1;
    if (projectCounter >= projects.length) {
      projectCounter = 0;
    }
    updateProject();
  });


  $('.left').click(() => {
    projectCounter -= 1;
    if (projectCounter < 0) {
      projectCounter = projects.length - 1;
    }
    updateProject();
  });

  $('.tech-section').on('animationend', () => {
    $('.bubble').css('display', 'flex');
    setTimeout(() => {
      $('.lang-node .icon').css('display', 'inline');
    }, 250);
    setTimeout(() => {
      $('.front-node .icon').css('display', 'inline');
    }, 325);
    setTimeout(() => {
      $('.back-node .icon').css('display', 'inline');
    }, 525);
    setTimeout(() => {
      $('.test-node .icon').css('display', 'inline');
    }, 725);
    setTimeout(() => {
      $('.misc-node .icon').css('display', 'inline');
    }, 925);
    setTimeout(() => {
      $('.games-node .icon').css('display', 'inline');
    }, 1125);
  });

  $('.read-more').on('click', () => {
    toggleCommentary();
  })

  $('.project-title').on('transitionend', () => {
    if (commentaryExpanded) {
      $('.project-title').css('display', 'none');
      $('.project-description').css('display', 'none');
    }
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
  let $miscBubble = $('<div class="bubble misc-bubble">DevTools/\nMisc</div>');
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