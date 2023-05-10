function addStartScreen() {
    $('.container .wrapper').prepend('<div class="start-screen"><h1>Welkom!</h1><p>Dit project is gemaakt in opdracht voor het CBS door studenten van de opleiding Communicatie & Multimedia Design in Maastricht. Het doel van dit project is om gebruikers beter te informeren over wat Nederland uniek maakt binnen de agricultuur.</p><p>Disclaimer: Alhoewel dit project in opdracht is van het CBS, associeert het CBS zich niet direct met de boodschap die in dit project wordt verspreid.</p><button class="start-button btn" onclick="removeStartScreen()">Start de ervaring</button><p>Tip: Gebruik audio voor een optimale ervaring!</P> <br> <p> Tip: Klik op de  <span style="font-size:140%; font-weight:600; color:#16f4d0;">+ </span> <span style= "color:#16f4d0">knop </span>of op de <span class="spanRotate">+</span><span style= "color:#16f4d0"> knop</span> om schermen groter of kleiner te maken. Schermen zijn ook versleepbaar!</p></div>');
    toggleTextContainer();
}

function removeStartScreen() {
    $('.start-screen').animate({
        opacity: 0
    }, 1000, function() {
        $('.start-screen').remove();
        addLoadingScreen();
    })
}

function addLoadingScreen() {
    $('.container .wrapper').prepend('<div class="loading-screen"><h1></h1><p></p></div>')
    const h1 = $('.loading-screen h1');
    textTypeWriter('Booting up', h1[0], animateLoadingScreen, 0, 150)
    addAI('aiVideos/loading.webm');
}

const loading = ['Loading videos...', 'Loading images...', 'Loading jokes...', 'Loading Agra...', 'Loading background...', 'Loading compiler...', "Loading 0 and 1's...", 'Loading bugs...', 'Loading error messages...', 'Loading files to load...', 'Pretending to load...', 'Loading infographics...', 'Loading sarcasm...', 'Loading loading-screen...', 'Loading superiority complex...', 'Playing pong...', 'loading sass...']


function animateLoadingScreen() {
    const h1 = $('.loading-screen h1');
    const p = $('.loading-screen p');
    animateDots(h1, 0, true);
    randomTextGenerator(p);
}

function randomTextGenerator(container) {
    const ai = $('.ai-wrapper video');
    if (ai[0].duration - ai[0].currentTime > 5) {
        let randomText = loading[Math.floor(Math.random() * loading.length)]
      textTypeWriter(randomText, container[0], removeRandomText, 0, 25);
    } else {
        const h1 = $('.loading-screen h1');
        setTimeout(function() {
            for (let i = 0; i < h1[0].textContent.length; i++) {
                setTimeout(function() {
                    str = h1[0].textContent
                    h1[0].textContent = str.slice(0, -1);
                }, 15 * i);
            }
            h1.remove();
        }, 1000);
        setTimeout(function() {
            $('.loading-screen').prepend('<h1 class="center"></h1>')
            const h1 = $('.loading-screen h1');
            textTypeWriter('System ready', h1[0], loadingScreenEnd, 0, 150)
        }, 2000)
    }
}

function loadingScreenEnd() {
    $('.loading-screen').append('<button class="start-button btn" onclick="startGameLoading()">Start Agra</button>')
}

function removeRandomText() {
    const p = $('.loading-screen p');
    setTimeout(function() {
    for (let i = 0; i < p[0].textContent.length; i++) {
        setTimeout(function() {
            str = p[0].textContent
            p[0].textContent = str.slice(0, -1);
        }, 15 * i);
    }
}, 1000);
    setTimeout(function() {
        randomTextGenerator(p);
    }, p[0].textContent.length * 15 + 1500);
}

function startGameLoading() {
    const loading = $('.loading-screen');
    loading.animate({
        opacity: 0
    }, 1000, function() {
        loading.remove();
        toggleTextContainer();
        refreshContent(1);
    });
}


function animateDots(item, dots = 0, add = true, exit = false) {
    if (add) {
        item[0].textContent += '.';
        dots++;
    } else {
        str = item[0].textContent
        item[0].textContent = str.slice(0, -1);
        dots--;
    }

    if (dots == 0) {
        add = true;
    } else if (dots == 3) {
        add = false;
    }
    if (!exit){
     setTimeout(function() {
         animateDots(item, dots, add)
     }, 500);
    }
}

function toggleTextContainer() {
    mainTextContent.toggleClass('hide');
}





// NAME input fields

function addNameInputField() {
    // add input field where players can enter their name and save it to local storage
    optionsContainer.append('<input type="text" id="fname" name="fname" placeholder="Jouw naam"><button class="name-input" onclick="setPlayerName()" data-next-state="5">Bevestigen</button>')
    $(window).keyup(function(event) {
        if (event.keyCode == 13 && $('input') && $('input')[0].value != '') {
            setPlayerName();
        }
    })
}

function setPlayerName() {
    let name = $('input')[0].value;
    localStorage.setItem('playerName', name);
    optionsContainer.empty();
    refreshContent(3); 
  }

function addEndScreen() {
    $('.container .wrapper').prepend('<div class="end-screen"><h1>Dankjewel voor het spelen!</h1><p>Hopelijk vond je het net zo leuk als dat wij plezier hebben gehad met het maken ervan. En natuurlijk hopen we ook dat jij er iets van hebt geleerd. Dat je die volgende keer in de supermarkt kiest voor een fairtrade product. Of iets gaat halen bij de lokale groentenboer of slager.</p><p>Mocht je zin hebben om het verhaal nog eens te doorlopen, klik dan op deze knop</p><button class="start-button btn" onclick="removeEndScreen()">Speel opnieuw</button><p class="by">Dit project is gemaakt door:<br><a href="https://www.linkedin.com/in/thika-rudolph-0579a81b5/" target="_blank">Thika Rudolph</a><a href="https://www.linkedin.com/in/aiden-lee-carrasco-599b53209/?originalSubdomain=nl" target="_blank">Aiden Lee Carrasco</a><a href="https://www.linkedin.com/in/sem-stassen-420384226/?originalSubdomain=nl" target="_blank">Sem Stassen</a><a href="https://www.instagram.com/brams_workshop/" target="_blank">Bram Stessen</a></p></div>');
    toggleTextContainer();
}

function removeEndScreen() {   
        localStorage.clear();
        document.location.reload(true)
}




function addLoadingScreenMid() {
    toggleTextContainer();
    findAiVideoPlayer();
}

function findAiVideoPlayer() {
    let video = $('.ai-wrapper video');
    if (video.length > 0) {
        $('.container .wrapper').append('<div class="loading-mid"><p></p></div>')
        let container = $('.container .wrapper .loading-mid p')
        switch (currentStateObject.id) {
            case 201:
                array = ['Laden soorten zaad...', 'Laden van tomaten...', 'Laden van informatie...', 'Stem kalibreren...', 'CO2 controleren...', 'Dingen berekenen...', 'Tellen tot 3', '1...2...3...'];
                break;
            case 211: 
                array = ['Drones laten vliegen...', 'Make it drup...', 'Kassen verwarmen...', 'Planten analyseren...', 'Lampen aanzetten...', 'Planten bekijken...', 'Planten tellen...', 'Planten besproeien...']
                break;    
            case 16:
                array = ['Laden van conclusie...', 'Informatie samenvoegen...', 'Keuzes maken...', 'Potje schaken...', 'Tic tac toe...', 'Schrijven teksten...', 'Stem opwarmen...', 'Dingen berekenen...', 'Eindcredits scrhijven...']
                break;    
        }
        addRandomText(container[0], video[0], array);
        video.on('ended', function() {
            
            refreshContent(currentStateObject.options[0].nextState)
            toggleTextContainer();
        });
    } else {
        setTimeout(findAiVideoPlayer, 200)
    }
}

function addRandomText(container, video = null, array = null) {
    if (video != null) {
        remVideo = video;
    } else {
        video = remVideo
    }

    if (array != null) {
        remArray = array;
    } else {
        array = remArray
    }

    if (video.duration - video.currentTime > 1.5) {
        text = array[Math.floor(Math.random() * array.length)];
        textTypeWriter(text, container, removeRandomTextMid, 0, 20);
    }
}

function removeRandomTextMid() {
    let container = $('.container .wrapper .loading-mid p');
    setTimeout(function() {
        for (let i = 0; i < container[0].textContent.length; i++) {
            setTimeout(function() {
                str = container[0].textContent
                container[0].textContent = str.slice(0, -1);
            }, 15 * i);
        }
    }, 1000);
        setTimeout(function() {
            addRandomText(container[0]);
        }, container[0].textContent.length * 20 + 1500);
    }

 