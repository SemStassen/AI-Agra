const mainTextContent = $('.main-dialogue-wrapper');
const textContent = $('.main-dialogue-wrapper .text-wrapper p');
const mainContentWrapper = $('.main-content-wrapper')
const aiWrapper = $('.ai-wrapper');
const videoWrapper= $('.video-wrapper');
const optionsContainer = $('.main-dialogue-wrapper .options-container'); // get the option buttons element from the DOM
const blokPopUp= $('popUp');
const heightCalculator = $('.height-calculator')
const heightCalculatorOptions = $('.height-calculator .options-wrapper');
const heightCalculatorText = $('.height-calculator .text-wrapper p');
const dataSound = new Audio('./sfx/data.mp3');
const click = new Audio('./sfx/click.mp3');
const bgVideo = $('.bg-video')
bgVideo.defaultPlayBackRate = 0.5;
click.volume = 0.2;
const ambient = new Audio('./sfx/ambient.mp3');
ambient.volume=0.07;
let player;
let aiVideoPlayer;
let aiVideoPlayerPlaying = false;
let aiVideoPlayerSize;
let currentState;
let currentStateObject;
let typeWriterText;
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
let safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if(viewportWidth < 1000) {
  warningScreens();
}

if (safari) {
  warningBrowser();
}

$(window).resize(function() {
  viewportHeight = window.innerHeight;
  viewportWidth = window.innerWidth;
    warningScreens();

});

function warningScreens() {
  if ($('body .warning-size').length < 1 && viewportWidth < 1000) {
      $('body').append('<div class="warning-size"><h2>Let op!</h2><p>Je kan deze multimedia story het beste op een groter scherm bekijken. Hopelijk zien we je daar!</p></div>')
    } else if (viewportWidth > 1000) {
      $('body .warning-size').remove();
    }
}

function warningBrowser() {
  $('body').append('<div class="warning-size"><h2>Let op!</h2><p>Je kan deze multimedia helaas niet bekijken op deze browser. Probeer een andere browser als Chrome, Opera of Firefox</p></div>')
}

/************************
*
*  Options
*
************************/

const typeWriterSpeed = 5;
const defaultAiTop = '320px'; 
const defaultAiLeft = '50%';
const defaultAiSize = '800px';
const defaultAiMovementTime = '4000';
const defaultParametersHeight = [14, 50];
const defaultParametersWidth = [20, 80];
const defaultParametersSize = [99, 100];
const defaultParametersTime = [1999, 2000];
