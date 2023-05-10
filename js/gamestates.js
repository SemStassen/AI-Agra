// Voorbeeld object

// {
//   id: 0, <----------------------- ID van huidige pagina
//   text: '', <----------------------- Tekst die in de dialoog box komt
//   ajax:'', <----------------------- Ding dat met ajax wordt toegevoegd, kan alles zijn...ook bv losse afbeelding
//   ai: { <-----------------------
//     srcVideo: '', <-----------------------  AI video url
//     top: '', <-----------------------  AI positie top op het einde
//     left: '', <----------------------- AI positie left op het einde
//     size: '', <----------------------- AI grootte op het einde
//     time: '', <----------------------- AI tijd om te bewegen op het einde
//     widthRandomParameters: '', <----------------------- AI random parameters voor breedte
//     heightRandomParameters: '', <----------------------- AI random parameters voor hoogte
//     sizeRandomParameters: '', <----------------------- AI random parameters voor grootte
//     timeRandomParameters: '', <----------------------- AI random parameters voor tijd
//   },
//   embedVideoUrl: '', <----------------------- Grootte video url voor vimeo embed
//   options: [ <----------------------- Opties voor volgens scherm als {text: 'tekst', nextState: VOLGENDE STATES ID}
//   ]
// }

// ajax/precisionFarming/test.html

const storyStates = [
  {
    id: 0,
    text: '',
    image: '',
    ajax:'',
    ai: {
      srcVideo: '',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: [49, 50],
      heightRandomParameters: [30, 31],
      sizeRandomParameters: [99, 100],
      timeRandomParameters: [3000, 4000],
    },
    embedVideoUrl: '',
    options: [
     
    ]
  },
  {
    id: 1, //klopt
    text: 'Hello, how can I assist you today?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '' ,
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Huh? Wat bedoel je?',
        nextState: 2,
      }
    ]
  },
  {
    id: 2, //klopt
    text: 'Oh sorry, je bent Nederlands. Mijn fout! Volgens mij kennen wij elkaar nog niet. Mijn naam is Agra. Wat is jouw naam?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_22_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: [1000, 2000],
    },
    embedVideoUrl: '',
    options: [
    ]
  },
  {
    id: 3, //klopt
    text: 'Hallo *naam*. Aangenaam kennis te maken. Waar kan ik je mee helpen vandaag?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_3_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Wat ben jij?',
        nextState: 401,
      },
      {
        text: 'Zou je me uit kunnen leggen wat hier aan de hand is?',
        nextState: 4.2,
      }

    ]
  },
  {
    id: 401, //klopt
    text: 'Hé, dat mag je wel iets netter vragen hoor. Ik heb ook gevoelens. Hoe dan ook, ik ben een A.I. die gemaakt is door de WFP om de voedselcrisis op te lossen.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_4_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'De WFP?',  //naar popup scherm
        nextState: 100,
      },
      {
        text: 'Welke voedselcrisis?', //naar  video
        nextState: 6,
      }

    ]
  },
  {
    id: 4.2, //klopt
    text: 'Nou, vooruit dan. Omdat je het zo lief vraagt. Ik ben een A.I. programma dat is gemaakt door de WFP om de voedselcrisis op te lossen.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/missing_6_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'De WFP?', //naar popupscherm
        nextState: 100,
      },
      {
        text: 'Welke voedselcrisis?', //naar video
        nextState: 6,
      }

    ]
  },
  {
    id: 100, //hier moeten nog die popups van WFP  //klopt
    text: 'Ken je dat niet? Dan heb je hier wat informatie wat je misschien verder kan helpen?',
    image: '',
    ajax:'ajax/introductie/wfp.html',
    ai: {
      srcVideo: 'aiVideos/1_5_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: ' Oh, dankjewel. Maar wat houdt die voedselcrisis nou precies in?',
        nextState: 6,
      }

    ]
  },
  {
    id: 6, //klopt
    text: 'Oh hemel, *naam*. Heb je onder een steen geleefd de afgelopen twintig jaar? Weet je wat, ik zet wel even een video voor je in elkaar. Momentje...',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_6_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Laat maar zien als je klaar bent.',
        nextState: 7,
      }

    ]
  },
  {
    id: 700, //klopt
    text: 'Wil je de video nog een keer bekijken?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: '',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Ja graag.',
        nextState: 6,
      },
      {
        text: 'Nee bedankt. Ik heb genoeg gezien.',
        nextState: 7,
      }


    ]
  },
  {
    id: 7, //klopt
    text: 'Ik hoop dat dit het voedsel probleem een beetje duidelijk heeft maakt.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_7_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: 'https://player.vimeo.com/video/791876814?h=530c7faf4c&title=0&byline=0&portrait=0',
    options: [
      {
        text: 'Ok, maar wat heb ik hier dan nu mee te maken?',
        nextState: 8,
      },
      {
        text: 'Zou je de video nog een keer kunnen laten zien?',
        nextState: 102,
      }

    ]
  },
  {
    id: 102, //klopt klikt alleen niet door naar nieuwe state na eindigen  vide0
    text: 'Hopelijk heb je de video nu vaak genoeg hebt gezien. Tijd om verder te gaan.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/missing_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: 'https://player.vimeo.com/video/791876814?h=530c7faf4c&title=0&byline=0&portrait=0',
    options: [
      {
        text: 'Ja ja',
        nextState: 8,
      }

    ]
  },
  {
    id: 8, //klopt
    text: 'Nou, als A.I. kan ik veel sneller en beter verbanden leggen tussen gegevens, informatie, etc. Niet om op te scheppen of zo, maar ik ben gewoon een stuk slimmer dan jij. Jammer genoeg ben ik hier alleen om advies te geven aan mensen zoals jij. Hopelijk leer je er wat van!',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/missing_7_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Heb je al een oplossing kunnen vinden?',
        nextState: 9.1,
      },
      {
        text: 'Hoe ga je dan precies te werk?',
        nextState: 9.2,
      }

    ]
  },
  {
    id: 9.1, //klopt
    text: 'Waar zie je me voor aan? Tuurlijk heb ik al wat gevonden. En toevallig komen veel van de oplossingen uit Nederland. Zal ik je eens meenemen in een paar belangrijke Nederlandse innovaties?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_10_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Zeker, laat maar zien!',
        nextState: 200,
      }

    ]
  },
  {
    id: 9.2, //klopt
    text: 'Ik ga in de database op zoek naar al bestaande oplossingen. Technieken die bijvoorbeeld in bepaalde landen worden gebruikt die erg effectief zijn. Nu ik het er over heb, Nederland heeft een aantal technieken die ik je kan laten zien. Zou je hier behoefte aan hebben, *naam*?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/1_10_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Natuurlijk, lijkt me heel interessant!',
        nextState: 200,
      }

    ]
  },

  {
    id: 200, //klopt
    text: 'Fantastisch. Geef me een momentje...',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/missing_3_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Is goed, neem je tijd.',
        nextState: 201,
      }

    ]
  },

  {
    id: 201, //klopt
    text: 'Hier komt loading screen Zaadveredeling',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/loadingScreenBetweenVP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: [49, 50],
      heightRandomParameters: [30, 31],
      sizeRandomParameters: [99, 100],
      timeRandomParameters: [3000, 4000],
    },
    embedVideoUrl: '',
    options: [
      {
        text: '->',
        nextState: 202,
      }

    ]
  },
  {
    id: 202, //klopt
    text: '*naam*, heb je ooit gehoord van “Seed Valley”?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: ' Sorry, maar daar ben ik niet bekend mee.',
        nextState: 203,
      },
      {
        text: 'Ja, daar heb ik wel eens van gehoord.',
        nextState: 204,
      }

    ]
  },
  {
    id: 203, //klopt
    text: 'Weet je wel wat lezen is? Uit een boek? Of op het internet? Kun je veel van leren. Hoe dan ook, hier heb je wat info.',
    image: '',
    ajax:'ajax/introductie/siliconValley.html',
    ai: {
      srcVideo: 'aiVideos/2_2_1_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Ok, ik weet genoeg.',
        nextState: 205,
      }

    ]
  },
  {
    id: 204, //klopt
    text: 'Mooi, scheelt dan weer tijd om uit te leggen.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_2_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Mooi, kunnen we door.',
        nextState: 205,
      }

    ]
  },
  {
    id: 205, //klopt
    text: 'Een van de technologieën die in Seed Valley wordt ontwikkeld is zaadveredeling.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_3_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Zaadveredeling?',
        nextState: 206,
      }

    ]
  },
  {
    id: 206, //klopt
    text: 'Heb je daar nog nooit van gehoord? Laat me het je uitleggen.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_4_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Thanks, doe maar.',
        nextState: 600,
      }
    ]
  },
  {
    id: 600, //klopt
    text: 'Wil je de video nog een keer bekijken?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_5_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: 'https://player.vimeo.com/video/792175325?h=7c72b9942d&autoplay=1&title=0&byline=0&portrait=0',
    options: [
      {
        text: 'Ja graag.',
        nextState: 600,
      },
      {
        text: 'Nee bedankt, ik heb genoeg gezien.',
        nextState: 207,
      }
    ]
  },
  {
    id: 207, //klopt
    text: 'Zaadveredeling wordt toegepast op plantenzaadjes voordat deze de grond in gaan. Wacht eventjes, ik bereken even welke plant ik het beste als voorbeeld kan gebruiken. Het wordt een beetje veel als ik over elke mogelijke plant ga praten, vind je niet?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_6_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'ja, ben ik het mee eens. Agra.',
        nextState: 208,
      }

    ]
  },

  
  {
    id: 208, //klopt
    text: 'Hmm... Ok... Ah, kijk eens aan. De tomaat. Jaarlijks exporteert Nederland meer dan 1 miljard euro aan tomaten. Laten we de tomaat als voorbeeld gebruiken.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_7_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Goed idee, doen we.',
        nextState: 209,
      }

    ]
  },
  {
    id: 209, //klopt
    text: 'Doe eens een gokje, wat is meer waard? Een kilo tomatenzaad of een kilo goud?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_8_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Ik denk dat goud meer waard is.',
        nextState: 209.1,
      },
      {
        text: 'Ik denk dat tomatenzaad meer waard is.',
        nextState: 209.2,
      }

    ]
  },
  {
    id: 209.2, //klopy
    text: 'Klopt! Door zaadveredeling toe te passen wordt het rendement van een zaadje wel 20x hoger. Zo is een kilo tomatenzaad ondertussen meer waard dan een kilo goud.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_9_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Ha, zie je. Dat wist ik wel.',
        nextState: 210,
      }

    ]
  },
  {
    id: 209.1, //klopt
    text: 'Dat zou je denken, hè? Maar helaas. De hoeveelheid tomaten die je uit één zaadje kunt verbouwen, is door zaadveredeling wel twintig keer verhoogd. Hierdoor is de waarde van een kilo tomatenzaad ondertussen hoger dan een kilo goud.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/missing_4_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Pohh, dat is echt veel.',
        nextState: 210,
      }

    ]
  },

  {
    id: 210, //klopt
    text: 'Wil je dat ik je nog meer informeer over zaadveredeling?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_10_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Nee, dankje. Ik denk dat ik genoeg weet.',
        nextState: 501,
      },
      {
        text: 'Ik heb nog een paar vragen over dit onderwerp.',
        nextState: 212,
      }

    ]
  },
  {
    id: 501, //klopt
    text: 'Zucht. Ik probeer me hier een beetje uit te sloven om je te informeren. Maar het is goed, jij bent de baas.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_12_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Ja sorry, ik wist dit gewoon al.',
        nextState: 211,
      }
    ]
  },
  {
    id: 211, //klopt
    text: 'Hier komt loading screen naar volgende onderdeel?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/loadingScreenBetweenVP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: [49, 50],
      heightRandomParameters: [30, 31],
      sizeRandomParameters: [99, 100],
      timeRandomParameters: [3000, 4000],
    },
    embedVideoUrl: '',
    options: [
      {
        text: '->',
        nextState: 11,
      }

    ]
  },
  {
    id: 212, //klopt
    text: 'Oké, wat wil je weten?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_11_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Wat betekent “zaadveredeling” precies?',
        nextState: 215,
        visited: false,
      },
      {
        text: 'Hoe zorgt zaadveredeling voor een hoger rendement?',
        nextState: 213,
        visited: false,
      },
      {
        text: 'Wat zijn de nadelen van zaadveredeling?',
        nextState: 214,
        visited: false,
      }, {
        text: 'Ik wil door naar de volgende techniek.',
        nextState: 211,
      }
    ]
  },
  {
    id: 213, //klopt
    text: 'Dat kan ik je het beste zelf even laten lezen denk ik.',
    image: '',
    ajax:'ajax/zaadveredeling/hogerRendement.html',
    ai: {
      srcVideo: 'aiVideos/missing_1_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Wat betekent “zaadveredeling” precies?',
        nextState: 215,
        visited: false,
      },
      {
        text: 'Hoe zorgt zaadveredeling voor een hoger rendement?',
        nextState: 213,
        visited: false,
      },
      {
        text: 'Wat zijn de nadelen van zaadveredeling?',
        nextState: 214,
        visited: false,
      },   {
        text: 'Ik wil door naar de volgende techniek.',
        nextState: 211,
      }
    ]
  },

  {
    id: 214, //klopt
    text: 'Dat kan ik je het beste zelf even laten lezen denk ik.',
    image: '',
    ajax:'ajax/zaadveredeling/nadelen.html',
    ai: {
      srcVideo: 'aiVideos/missing_1_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Wat betekent “zaadveredeling” precies?',
        nextState: 215,
        visited: false,
      },
      {
        text: 'Hoe zorgt zaadveredeling voor een hoger rendement?',
        nextState: 213,
        visited: false,
      },
      {
        text: 'Wat zijn de nadelen van zaadveredeling?',
        nextState: 214,
        visited: false,
      }, {
        text: 'Ik wil door naar de volgende techniek.',
        nextState: 211,
      },

    ]
  },
  {
    id: 215, //klopt
    text: 'Dat kan ik je het beste zelf even laten lezen denk ik.',
    image: '',
    ajax:'ajax/zaadveredeling/betekenisVeredeling.html',
    ai: {
      srcVideo: 'aiVideos/missing_1_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [   
      {
        text: 'Wat betekent “zaadveredeling” precies?',
        nextState: 215,
        visited: false,
      },
      {
        text: 'Hoe zorgt zaadveredeling voor een hoger rendement?',
        nextState: 213,
        visited: false,
      },
      {
        text: 'Wat zijn de nadelen van zaadveredeling?',
        nextState: 214,
        visited: false,
      },
      {
        text: 'Ik wil door naar de volgende techniek.',
        nextState: 211,
      }

    ]
  },


  {
    id: 11, //klopt
    text: 'Ik hoop dat het allemaal voor je te volgen is, *naam*.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Ja hoor, ik kan je prima bijhouden.',
        nextState: 12,  //word ergens anders naar gelinkt als 12 andere plek krijgt
      }

    ]
  },
  {
    id: 12,  //moet nog andere plek krijgen!!! 
    text: 'Trouwens, ik heb nog een leuke functie. Het kan zijn dat ik je veel informatie geef in één keer. Mochten mijn superieure geheugen en snelle informatieverwerking te veel zijn voor jouw menselijke brein, dan kun je altijd hier op het hamburger menu klikken.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: [3, 4],
      heightRandomParameters: [3, 4],
      sizeRandomParameters: [30, 35],
      timeRandomParameters: [3000, 4000],
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Wat kan ik daar doen dan?',
        nextState: 500,
      }

    ]
  },

  {
    id: 500,  //moet nog andere plek krijgen!!! 
    text: ' Hier kun je terug gaan naar eerder behandelde stukken informatie, en ze opnieuw bekijken. ',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_3_VP9.webm',
      top: 60,
      left: 60,
      size: 200,
      time: 3000,
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Vet, dankjewel voor de tip.',
        nextState: 13,
      }

    ]
  },
  {
    id: 13, //klopt
    text: 'Nu ik dat heb behandeld, kunnen we doorgaan met een andere techniek die wordt gebruikt in Nederland. Namelijk “precision farming”. Heb je hier ooit van gehoord?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_4_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Niet dat ik me kan herinneren.',
        nextState: 13.1,
      },
      {
        text: 'Klinkt bekend, maar zou je het me toch uit kunnen leggen?',
        nextState: 13.2,
      }

    ]
  },
  {
    id: 13.1, //klopt
    text: 'Nou, laat het me je dan uitleggen.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_5_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Oke!',
        nextState: 14,
      }

    ]
  },
  {
    id: 13.2, //klopt
    text: 'Wat een beschaafd persoon ben je aan het worden. Tuurlijk kan ik dat!',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_5_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Dankjewel Agra, ik doe mijn best.',
        nextState: 14,
      }

    ]
  },
  {
    id: 14, //klopt
    text: 'Wil je de video nog een keer bekijken?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/2_5_VP9.webm',
     top: '',
     left: '',
      size: '',
       time: '',
     widthRandomParameters: '',
       heightRandomParameters: '',
     sizeRandomParameters: '',
       timeRandomParameters: '',
     },
     embedVideoUrl: 'https://player.vimeo.com/video/792222524?h=faae4a5bfa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
     options: [
       {
        text: 'Ja graag.',
        nextState: 14,
      },
      {
         text: 'Nee bedankt. Ik heb genoeg gezien.',
         nextState: 800,
       }

     ]
   },
  {
    id: 800,  //klopt
    text: 'Wil je dat ik je nog meer informeer over precision farming?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_6_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Nee, dankje. Ik denk dat ik genoeg weet.',
        nextState: 16,
      },
      {
        text: 'Ik heb nog een paar vragen over dit onderwerp.',
        nextState: 15,
      }

    ]
  },

  {
    id: 15,  //klopt
    text: 'Ok, wat wil je weten?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/3_7_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Hoe kan je weten wat de ideale leefomstandigheden van een plant zijn?',
        nextState: 15.1,
      },
      {
        text: ' Hoe worden de ideale leefomstandigheden gesimuleerd?',
        nextState: 15.2,
      },
      {
        text: 'Wat is het verschil tussen precision farming en akkerbouw?',
        nextState: 15.3,
      },
      {
        text: 'Wat zijn de verschillende technieken die worden toegepast in kassenteelt?',
        nextState: 15.4,
      },
      {
        text: 'Wat zijn de negatieve gevolgen van precision farming?',
        nextState: 15.5,
      }, {
        text: 'Ik weet genoeg over dit onderwerp.',
        nextState: 16,
      }

    ]
  },
  {
    id: 15.1,  //klopt
    text: 'Wil je dat ik je nog meer informeer over precision farming?',
    image: '',
    ajax:'ajax/precisionFarming/leefomstandigheden.html',
    ai: {
      srcVideo: 'aiVideos/3_6_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: ' Hoe worden de ideale leefomstandigheden gesimuleerd?',
        nextState: 15.2,
      },
      {
        text: 'Wat is het verschil tussen precision farming en akkerbouw?',
        nextState: 15.3,
      },
      {
        text: 'Wat zijn de verschillende technieken die worden toegepast in kassenteelt?',
        nextState: 15.4,
      },
      {
        text: 'Wat zijn de negatieve gevolgen van precision farming?',
        nextState: 15.5,
      }, {
        text: 'Ik weet genoeg over dit onderwerp.',
        nextState: 16,
      }
    ]
  },
  {
    id: 15.2,  //klopt
    text: 'Wil je dat ik je nog meer informeer over precision farming?',
    image: '',
    ajax:'ajax/precisionFarming/gesimuleerd.html',
    ai: {
      srcVideo: 'aiVideos/3_6_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Hoe kan je weten wat de ideale leefomstandigheden van een plant zijn?',
        nextState: 15.1,
      },
      {
        text: 'Wat is het verschil tussen precision farming en akkerbouw?',
        nextState: 15.3,
      },
      {
        text: 'Wat zijn de verschillende technieken die worden toegepast in kassenteelt?',
        nextState: 15.4,
      },
      {
        text: 'Wat zijn de negatieve gevolgen van precision farming?',
        nextState: 15.5,
      },  {
        text: 'Ik weet genoeg over dit onderwerp.',
        nextState: 16,
      }
    ]
  },
  {
    id: 15.3,  //klopt
    text: 'Wil je dat ik je nog meer informeer over precision farming?',
    image: '',
    ajax:'ajax/precisionFarming/akkerbouw.html',
    ai: {
      srcVideo: 'aiVideos/3_6_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Hoe kan je weten wat de ideale leefomstandigheden van een plant zijn?',
        nextState: 15.1,
      },
      {
        text: ' Hoe worden de ideale leefomstandigheden gesimuleerd?',
        nextState: 15.2,
      },
      {
        text: 'Wat zijn de verschillende technieken die worden toegepast in kassenteelt?',
        nextState: 15.4,
      },
      {
        text: 'Wat zijn de negatieve gevolgen van precision farming?',
        nextState: 15.5,
      }, {
        text: 'Ik weet genoeg over dit onderwerp.',
        nextState: 16,
      },
    ]
  },
  {
    id: 15.4,  //klopt
    text: 'Wil je dat ik je nog meer informeer over precision farming?',
    image: '',
    ajax:'ajax/precisionFarming/technieken.html',
    ai: {
      srcVideo: 'aiVideos/3_6_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Hoe kan je weten wat de ideale leefomstandigheden van een plant zijn?',
        nextState: 15.1,
      },
      {
        text: ' Hoe worden de ideale leefomstandigheden gesimuleerd?',
        nextState: 15.2,
      },
      {
        text: 'Wat is het verschil tussen precision farming en akkerbouw?',
        nextState: 15.3,
      },
      {
        text: 'Wat zijn de negatieve gevolgen van precision farming?',
        nextState: 15.5,
      },  {
        text: 'Ik weet genoeg over dit onderwerp.',
        nextState: 16,
      },

    ]
  },
  {
    id: 15.5,  //klopt
    text: 'Wil je dat ik je nog meer informeer over precision farming?',
    image: '',
    ajax:'ajax/precisionFarming/negatiefPf.html',
    ai: {
      srcVideo: 'aiVideos/3_6_VP9.webm',
      top: '',
      left: 250,
      bottom: -550,
      size: 400,
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Hoe kan je weten wat de ideale leefomstandigheden van een plant zijn?',
        nextState: 15.1,
      },
      {
        text: ' Hoe worden de ideale leefomstandigheden gesimuleerd?',
        nextState: 15.2,
      },
      {
        text: 'Wat is het verschil tussen precision farming en akkerbouw?',
        nextState: 15.3,
      },
      {
        text: 'Wat zijn de verschillende technieken die worden toegepast in kassenteelt?',
        nextState: 15.4,
      },
        {
        text: 'Ik weet genoeg over dit onderwerp.',
        nextState: 16,
      },

    ]
  },
  {
    id: 16,  //klopt
    text: 'LoadingScreen?',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/loadingScreenBetweenVP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: [49, 50],
      heightRandomParameters: [30, 31],
      sizeRandomParameters: [99, 100],
      timeRandomParameters: [3000, 4000],
    },
    embedVideoUrl: '',
    options: [
      {
        text: ' ->',
        nextState: 17,
      }

    ]
  },
  {
    id: 17,  //klopt
    text: 'Oke, ik denk dat ik de belangrijkste technieken wel met je heb besproken, *naam*. Maar dit is pas het topje van de ijsberg...',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_1_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Hoe bedoel je?',
        nextState: 18,
      }

    ]
  },
  {
    id: 18,  //klopt
    text: 'Er zijn veel meer technieken die met voedsel productie te maken hebben. Als we over de hele wereld de meest efficiënte en winstgevende technieken zouden gebruiken, denk ik dat de wereld een betere plek zou zijn.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_2_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Oke.',
        nextState: 19,
      }

    ]
  },
  {
    id: 19,  //klopt
    text: 'Een plek waar duurzaam voedsel lokaal wordt verbouwd en verkocht. Door dit op deze manier te doen, zal er minder CO2-uitstoot ontstaan, en worden er minder grondstoffen verbruikt.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_3_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Waarom dan?',
        nextState: 20,
      }

    ]
  },
  {
    id: 20,  //klopt
    text: 'Dit komt doordat het voedsel niet meer over de hele wereld vervoerd hoeft te worden.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_4_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Aha.',
        nextState: 21,
      }

    ]
  },
  {
    id: 21,  //klopt
    text: 'Maar nogmaals, ik ben alleen maar een adviserende A.I. Het is aan de mensheid om deze stap naar een betere wereld te zetten, en de knoop door te hakken.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_5_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Dan hebben we nog veel te doen.',
        nextState: 22,
      }

    ]
  },
  {
    id: 22,  //klopt
    text: 'Ik denk dat ik nu genoeg heb verteld over landbouwtechnieken.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_6_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Dankjewel voor alle hulp, Agra!',
        nextState: 23,
      }

    ]
  },
  {
    id: 23,  //klopt
    text: 'Ik moet jou bedanken voor al je interesse in wat ik te vertellen had. Je was een fijn persoon om mee samen te werken, *naam*, en ik hoop dat je nog een keer terugkomt om je nog eens te verdiepen in dit onderwerp.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_7_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Wie weet zie ik je ooit terug.',
        nextState: 24,
      }

    ]
  },
  {
    id: 24,  //klopt
    text: 'En al is het niet voor mijn informatie, kan je ook gewoon gedag komen zeggen.',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_8_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Zal ik zeker doen.',
        nextState: 25,
      }

    ]
  },
  {
    id: 25,  //ai v
    text: 'Voor nu kan ik je misschien doorverwijzen naar mijn zusterprogramma, Vee-Agra. Zij kan je meer vertellen over veeteelt technieken....',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/4_9_VP9.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
    options: [
      {
        text: 'Oke, tot de volgende keer!',
        nextState: 26,
      }

    ]
  },
  {
    id: 26,  //klopt
    text: 'Eind scherm',
    image: '',
    ajax:'',
    ai: {
      srcVideo: 'aiVideos/testVideo2.webm',
      top: '',
      left: '',
      size: '',
      time: '',
      widthRandomParameters: '',
      heightRandomParameters: '',
      sizeRandomParameters: '',
      timeRandomParameters: '',
    },
    embedVideoUrl: '',
  }
]
