/************
*
*  testing
*
************/


// localStorage.setItem('state', 3);    // <--- FOR TESTING


/***************
*
*  start game
*
***************/

// Checkt of je al eens op de site bent geweest en start de story

if (!localStorage.getItem('state')) {
  localStorage.setItem('state', 0);
  addNewContent();
} else { // Laad de text van de laatstbekende state
  addNewContent();
}

if (!localStorage.getItem('log')) {
  localStorage.setItem('log', '[]');
}



/************************
*
*  add all new content
*
************************/

function addNewContent() {
   setCurrentStateObject();
  specialCases();

  // Animates the textbox and adds it's content
   editStrings();

  // Adds popups if they're needed
  if (currentStateObject.ajax) {
    addPopUp();
  }

  // Adds AI if there is no embedded video
  if (!currentStateObject.embedVideoUrl){
    addAI();
  } else {
    addVideo();
  }

  playAudio();
}

function playAudio() { 
  if ((ambient.duration > 0 && !ambient.paused) || currentStateObject.id == 0 || currentStateObject.embedVideoUrl) {
  } else {
    ambient.play();
    ambient.onended =  function() {
      ambient.currentTime = 0;
      ambient.play();
    }
  }
}

function refreshContent(thisId = null, thisThing) {
  if (thisId) { 
    localStorage.setItem('state', thisId);
    thisId = null;
  } else {
    localStorage.setItem('state', thisThing.data('next-state'));
  }
  getAiVideoPlayerStyling();
  emptyAll(addNewContent);
}

function emptyAll(callback = null) {
let greyBoxLength = $('.greyBox').length;
  $('.greyBox.scale').each(function(i) {
    setTimeout(function() {
      // after removing the class scale, wait 200ms and remove the element
      let removeAudio = new Audio('./sfx/blieb.mp3');
      removeAudio.volume = 0.6;
      removeAudio.play();
      $('.greyBox.scale').last().removeClass('scale').delay(200).queue(function() {
        $(this).remove();
      })
    }, 200 * i)
   })
    setTimeout(function() {
      textContent.empty();
      $('.options-wrapper').remove();
      aiWrapper.find('video').remove();
      if (callback) {
        callback();
      }
    }, 250 * greyBoxLength)
}



function setCurrentStateObject() {
  currentState = localStorage.getItem('state');
  currentStateObject = storyStates.find(storyState => storyState.id == currentState); // find the current text node based on its index
}

/*************************
*
*  add text and options
*
*************************/

function editStrings() {
  str = currentStateObject.text;
  if (playerName = localStorage.getItem('playerName')) {
    str = str.replace('*naam*', playerName);
  } else {
    str = str.replace('*naam*', 'je moeder');
  }
  currentStateObject.text = str;
  animateHeight(textTypeWriter)
}

function animateHeight(callback) {
  // Add content to dummy height calculator
  heightCalculatorText[0].append(currentStateObject.text)
  if (currentStateObject.options) {
    heightCalculator.append(`<div class="options-wrapper"></div>`)
    for (i = 0; i < currentStateObject.options.length; i++) {
      $('.height-calculator .options-wrapper').append(`<button class="btn btn-option">${currentStateObject.options[i].text}</button>`)
    }
  }

  // Animate height based on calculated height of dummy object.
  let height = heightCalculator[0].offsetHeight + 'px'
  $('.main-dialogue-container').animate({
    height: height,
  }, {
    duration: 1000,
    specialEasing: {
      height: "easeInOutQuint",
    },
    complete: function() {
      callback(currentStateObject.text, textContent[0], addOptions);
      dataSound.play();
      // Empties dummy object after calculating height
      $('.height-calculator .options-wrapper').remove();
       heightCalculatorOptions.empty();
      heightCalculatorText.empty();
    }
  })
}

function textTypeWriter(str, container, callback = null, i = 0, speed = 5) {
  if (i < str.length) {
    container.textContent += str.charAt(i);
    i++;
    setTimeout(function() {
      textTypeWriter(str, container, callback, i, speed)
    }, speed);
  } else if (callback) {
    setTimeout(callback, 200);
  }
}

function specialCases() {
  switch (currentStateObject.id) {
    case 0:
      addStartScreen();
      break;
    case 2:
      addNameInputField();
      break;
    case 26:
      addEndScreen();
      break;
    case 201:
      addLoadingScreenMid();
      break;
    case 211:
      addLoadingScreenMid();
      break;
    case 16: 
      addLoadingScreenMid();
      break;
  }
}



function addOptions() {
  if (currentStateObject.options != '') {
    optionsContainer.append(`<div class="options-wrapper"></div>`)
    
    for (i = 0; i < currentStateObject.options.length; i++) {
      if (currentStateObject.options[i].nextState == currentStateObject.id) { 
        $current = 'current'
      } else {
        $current = 'not-current'
      }
      if (JSON.parse(localStorage.getItem('log')).includes(currentStateObject.options[i].nextState)) {
        $visited = 'visited'
      } else {
        $visited= 'not-visited'
      }
     let button = $('.main-dialogue-container .options-wrapper').append(`<button class="btn btn-option ${$current} ${$visited}" data-next-state="${currentStateObject.options[i].nextState}"><img src="#"></button>`)
     
     let str = currentStateObject.options[i].text;
     let container = button.find('.btn')[i];
    
     textTypeWriter(str, container)
     
    }
  }
  dataSound.pause();
  dataSound.currentTime = 0;
  // Voegt event listener toe aan elke button die iets doet als je klikt 
  $('.btn-option').on('click', function() {
    click.play();
    log = JSON.parse(localStorage.getItem('log'));
    log.push(currentStateObject.id);
    localStorage.setItem('log', JSON.stringify(log));
    refreshContent(null, $(this))
  });
}

/************************
*
*  add ai and movement
*
************************/

function addAI(sourceVideoPath = null) {
  if (sourceVideoPath = currentStateObject.ai.srcVideo || sourceVideoPath) {
    if (currentStateObject.id != 0) {
     aiWrapper.find('img').addClass('show');
    }
     aiWrapper.append(`<video src="${sourceVideoPath}"  "type="video/webm" autoplay playsinline class="hide">`);
     aiVideoPlayer = $('.ai-wrapper video');
     if (aiVideoPlayerSize) {
      aiVideoPlayer[0].style.width = aiVideoPlayerSize;
      aiVideoPlayer[0].style.height = aiVideoPlayerSize;
      aiWrapper.find('img')[0].style.width = aiVideoPlayerSize;
      aiWrapper.find('img')[0].style.height = aiVideoPlayerSize;
     }
     aiVideoPlayer.on('loadedmetadata', function() {
      aiVideoPlayer.removeClass('hide')
      aiWrapper.find('img').removeClass('show');
      if (!aiVideoPlayerPlaying) {
        aiPositionRandomizer();
        };
    })
  }
}

function getAiVideoPlayerStyling() {
  // Because videoplayer is being removed and added again, we need to save the styling
  if (aiVideoPlayer) {
    aiVideoPlayerSize = aiVideoPlayer[0].style.width;
  } else {
    aiVideoPlayerSize = null;
  }
}


function aiPositionRandomizerSetup() {
  if (!( parametersHeight = currentStateObject.ai.heightRandomParameters)) {
    parametersHeight = defaultParametersHeight
  }

  if (!( parametersWidth = currentStateObject.ai.widthRandomParameters)) {
    parametersWidth = defaultParametersWidth
  }

  if (!( parametersSize = currentStateObject.ai.sizeRandomParameters)) {
    parametersSize = defaultParametersSize
  }

  if (!( parametersTime = currentStateObject.ai.timeRandomParameters)) {
    parametersTime = defaultParametersTime
  }

  return {
          height: parametersHeight, 
          width: parametersWidth, 
          size: parametersSize, 
          time: parametersTime};
}


function aiPositionRandomizer() {
 if (aiVideoPlayer[0].duration - aiVideoPlayer[0].currentTime > 5) {
  let aiPosition = aiPositionRandomizerSetup();
  aiVideoPlayerPlaying = true;
  aiPositionAnimate(Math.floor(Math.random() * viewportHeight * ((aiPosition.height[1] - aiPosition.height[0]) / 100 )) + (viewportHeight * (aiPosition.height[0] / 100)),
                    Math.floor(Math.random() * viewportWidth * ((aiPosition.width[1] - aiPosition.width[0]) / 100 )) + (viewportWidth * (aiPosition.width[0] / 100)),
                    800 * ((Math.floor(Math.random() * (aiPosition.size[1] - aiPosition.size[0])) + aiPosition.size[0]) / 100),
                    randomTime = Math.floor(Math.random() * (aiPosition.time[1] - aiPosition.time[0])) + aiPosition.time[0]);
  setTimeout(function() {
    aiPositionRandomizer();
  }, (randomTime + Math.floor(Math.random() * 500) + 1000));
} else {
  aiVideoPlayerPlaying = false;
  aiPositionAnimate(currentStateObject.ai.top, currentStateObject.ai.left, currentStateObject.ai.size, currentStateObject.ai.time, currentStateObject.ai.bottom);
  }
}

function aiPositionAnimate(top, left, size, time, bottom = 'auto') {
  if (!top) {
    top = defaultAiTop;
  }
 
  if (!left) {
    left = defaultAiLeft
  }

  if (!size) {
    size = defaultAiSize
  } 

  if(!time) {
    time = defaultAiMovementTime
  }

  if (!bottom && aiWrapper[0].style.bottom != 'auto') {
    console.log('yes')
    distTop = viewportHeight - 800 - parseInt(aiWrapper[0].style.bottom, 10)
    aiWrapper.css({
      top: distTop,
      bottom: 'auto'
    })
  } else if (bottom && bottom != 'auto') {
    bottomDist =  -1 * parseInt(aiWrapper[0].style.top, 10)
    console.log(viewportHeight - parseInt(aiWrapper[0].style.top, 10))
    aiWrapper.css({
      top: 'auto',
      bottom: bottomDist
    })
    top = 'auto';
  }

  aiWrapper.animate({
    top: top,
    left: left,
    bottom: bottom,
  }, {
    duration: time,
    specialEasing: {
      top: "easeInOutQuint",
      left: "easeInOutQuint",
    }
  })

  aiVideoPlayer.animate({
    width: size,
    height: size,
  }, {
    duration: time,
    specialEasing: {
      width: "easeInOutQuint",
      height: "easeInOutQuint",
    }
  })
}

/************************
*
*  add embedded video
*
************************/

function addVideo() {
  if (currentStateObject.embedVideoUrl) {
    ambient.pause();
    videoWrapper.prepend('<iframe src="" style="position:absolute;top:0;left:0;width:100vw;height:100vh;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>')
    let iframe = $('.video-wrapper iframe');
    iframe.attr('src', currentStateObject.embedVideoUrl);
    videoWrapper.addClass('active');
    player = new Vimeo.Player(iframe);
    player.play();
    player.on('ended', function() {
      videoWrapper.removeClass('active');
      videoWrapper.find('iframe').remove()
      addAI();
      ambient.play();
    })
   
  }
}

function addPopUp(){
  let time = 500;
  let zCounter = 1
  if(currentStateObject.ajax) {
      $.get(currentStateObject.ajax, function (data) {
          $('.html').html(data)
          divs = $('.html div');

          divs.each(function(i, value) {
            
            $('.main-content-wrapper').append(`<div class="drag"><div class="greyBox" id=${i}><div class="header"><div class="dragger"></div><div class="close"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g id="Plus">
            <line id="Verticaal" y1="-1" x2="16.8" y2="-1" transform="matrix(0.00102591 0.999999 -0.999999 0.00117415 8.4834 0.828613)" stroke="#0B3954" stroke-width="2"/>
            <line id="Horizontaal" y1="-1" x2="16.8" y2="-1" transform="matrix(0.999999 -0.00102591 -0.000877632 -1 0.890625 8.40674)" stroke="#0B3954" stroke-width="2"/>
            </g>
            </svg></div></div><div class="content"></div></div></div>`);
            $('.greyBox .content')[i].append($(this)[0]);

            let top = Math.floor(Math.random() * mainContentWrapper[0].offsetHeight / 1.75) + mainContentWrapper[0].offsetHeight / 10
            let left = Math.floor(Math.random() * mainContentWrapper[0].offsetWidth / 5 * 3) + mainContentWrapper[0].offsetWidth / 5

            $('.greyBox').last().css({'top': top + 'px', 'left': left + 'px', 'position':'absolute'});
            $('.greyBox').on('click', function() {
              zCounter++;
              $(this).css({
                'z-index': zCounter
              })
            });

            if (i != divs.length - 1) {
              let close = $('.greyBox').last().find('.close')
              minimizeHeight(close);
            }

            $('.greyBox .close').last().on('click', function() {
              if (!$(this).hasClass('rotate')) {
                minimizeHeight($(this));
              } else {
                maximizeHeight($(this));
              }
            })
      });

      $('.greyBox').each(function(i) { 
          setTimeout(function() {
            let bliep = new Audio('./sfx/blieb.mp3');
            bliep.volume = 0.6;
            bliep.play();
              $('.greyBox').eq(i).addClass('scale');
          }, 200 * i);
      });

      $('.drag').draggable();
  })
}
}

function minimizeHeight(thisThing) {
  click.play();
  let height = thisThing.parents('.header').siblings('.content').children().children()[0].offsetHeight;
  if (height > 75 || height == 0) {
    height = 75;
  }
  thisThing.parents('.header').siblings('.content').animate({
  height: height + 35 + 'px',
}, 250)
thisThing.addClass('rotate');
}

function maximizeHeight(thisThing) {
  click.play();
  let height = thisThing.parents('.header').siblings('.content').children()[0].offsetHeight;
  thisThing.parents('.header').siblings('.content').animate({
    height: height + 50 + 'px',
  }, 250)
  thisThing.removeClass('rotate');
}









