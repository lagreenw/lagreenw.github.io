console.log("hello world!");
var happyCounter = 50;
var chonkCounter = 30;
// var students = "students";
const textElement = document.getElementById('gametext');
const optionButttonsElement = document.getElementById('optionsContainer');
const bodyImage = document.getElementById('kittybody');
const headImage = document.getElementById('kittyhead');


function startGame () {
  showTextNode(1);
}

function showTextNode (textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;

  while (optionButttonsElement.firstChild) {
    optionButttonsElement.removeChild(optionButttonsElement.firstChild)
  }
  textNode.options.forEach(option => {
    if(showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add("options")
      button.addEventListener('click', () => selectOption(option))
      optionButttonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return true
}

function selectOption (option) {
  const nextTextNodeId = option.nextText
  showTextNode(nextTextNodeId)
  happyCounter += option.happy
  pb2.setValue(happyCounter)
  chonkCounter += option.chonk
  pb1.setValue(chonkCounter)
    // chonkiness min/max
  if (chonkCounter < 0) {
      chonkCounter = 0;
    }
  if (chonkCounter > 100) {
      chonkCounter = 100;
  }
  // chonkiness image change
  if (chonkCounter <= 40) {
    bodyImage.src = 'image/skinnybody.png';
  }
  else if (chonkCounter > 40 && chonkCounter <= 80) {
    bodyImage.src = 'image/mediumbody.png';
  }
  else {
    bodyImage.src = 'image/chonkybody.png';
  }
  // happiness min/max
  if (happyCounter < 0) {
      happyCounter = 0;
    }
  if (happyCounter > 100) {
      happyCounter = 100;
  }
  // happiness image change
  if (happyCounter <= 20) {
    headImage.src = 'image/frownface.png';
  }
  else if (happyCounter > 20 && happyCounter <= 40) {
    headImage.src = 'image/neutralface.png';
  }
  else {
    headImage.src = 'image/smileface.png';
  }
}

const textNodes = [
  {
    id: 0,
    text: 'Placeholder',
    options:[
      {
        text: '< Coolio. >',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 1,
    text: 'Another beautiful day in the Everybody’s Kitchen courtyard! The smell of “Soyrizo Burritos” and “Made to Order Cage Free Omelettes (customize for veggie option)” fills the air as you stretch your furry legs in the sun! It soon turns 7am. A staff member comes by to unlock the doors and students begin trickling in.',
    options: [
      {
        text: '< Aquire food >',
        nextText: 2,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Aquire cuddles >',
        nextText: 3,
        happy: 10,
        chonk: 0,
      },
      {
        text: '< Sleep >',
        nextText: 4,
        happy: 10,
        chonk: 0
      }
    ]
  },
  {
    id: 2,
    text: 'You jump up on a chair and see two students: one with a plate of scrambled eggs, and one with a bowl of (delicious) Cheerios.',
    options:[
      {
        text: '< Eat the eggs >',
        nextText: 7,
        happy: 10,
        chonk: 10
      },
      {
        text: '< Eat the cereal >',
        nextText: 8,
        happy: -15,
        chonk: 30
      }
    ]
  },
  {
    id: 3,
    text: 'You find a New North-er with a large hoodie, settle in for head scratches, and have a snooze.',
    options:[
      {
        text: '< Nice! >',
        nextText: 5,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 4,
    text: 'You let the sun lull you slowly back to sleep. You are soon interrupted, however, by two students... *ahem* loyal subjects who come by to give you praise.',
    options:[
      {
        text: '< Not now, pesky humans. >',
        nextText: 6,
        happy: 0,
        chonk: 0
      },
      {
        text: '< See what they offer you >',
        nextText: 1,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 5,
    text: 'What will you do next?',
    options: [
      {
        text: '< Aquire food >',
        nextText: 2,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Aquire cuddles >',
        nextText: 3,
        happy: 10,
        chonk: 0,
      },
      {
        text: '< Sleep >',
        nextText: 4,
        happy: 10,
        chonk: 0
      }
    ]
  },
  {
    id: 6,
    text: "You lay there, slightly annoyed, and wonder what exists in the world outside of EVK Courtyard. The thought scares you. You find yourself pacing back and forth on your fuzzy little kitten toes. You have never considered leaving before, why now? EVK seems to be all you've ever known. In fact, you have forgotten how you came to live here in the first place! You try to shake the thought, but cannot resist imagining what might be out there for you...",
    options:[
      {
        text: '< Curiosity never killed a cat! >',
        nextText: 9,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Continue your day as usual >',
        nextText: 5,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 7,
    text: 'Good choice! While cats are generally carnivorous, cooked eggs are actually a safe source of protein for kitty consumption!',
    options:[
      {
        text: '< Nice! >',
        nextText: 5,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 8,
    text: 'You wait patiently until the time is right. When the student leaves to get a napkin, you pounce! Before anyone notices what has happened, you have already finished off the bowl and returned to your napping area. Unfortunately for you, cats cannot digest lactose and you get a massive stomach ache.',
    options:[
      {
        text: '< Ruh roh. >',
        nextText: 6,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 9,
    text: 'You survey your surroundings and decide there are only two options:',
    options:[
      {
        text: '< Go through EVK >',
        nextText: 10,
        happy: 50,
        chonk: 0
      },
      {
        text: "< Hide in a student's backpack >",
        nextText: 11,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 10,
    text: 'A student opens the door to enter the courtyard and you bolt through. Never in your little kitty heart have you felt such a thrill! Weaving in and out of tables and chairs you make your way across the room. As you reach the entrance a group of students opens the door allowing you to narrowly escape! You look behind you, only for a brief second, and see the entire dining hall watching you in a state of shock.',
    options:[
      {
        text: '< You are now a fugitive. Run! >',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
      {
        text: "< Too much excersize! Take a nap. >",
        nextText: 0,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 11,
    text: 'You find an engineer nose-deep in reading. You gently crawl in their backpack and cover yourself in crumpled energy drink cans. 20 minutes later you feel yourself being lifted off the ground. As you leave you hear the sounds of plates and cutlery closer than ever before... the smell of food stronger than ever...',
    options:[
      {
        text: '< Mhmm... Jump out and feast! >',
        nextText: 12,
        happy: 100,
        chonk: 100
      },
      {
        text: "< Suppress gluttonous urges >",
        nextText: 13,
        happy: 30,
        chonk: 0
      }
    ]
  },
  {
    id: 12,
    text: 'You jump out, landing headfirst into a bowl of orange chicken. You become unhinged. You gorge yourself, finishing off the entire hot line before anyone can pull you away. Once the ordeal is done you are returned to the courtyard, but you do not mind. Your brief taste of freedom was enough to last forever. You have officially become the chonkiest cat alive. It is nap time. THE END.',
    options:[
      {
        text: '< RESTART >',
        nextText: 1,
        happy: -50,
        chonk: -70
      },
    ]
  },
  {
    id: 13,
    text: 'You peek your head out and see hundreds of fellow Trojans going about their days! The thrill of seeing such a large and open space makes your heart soar! The world has endless possibilities for a kitty like yourself... you are getting a little sleepy though.',
    options:[
      {
        text: '< Escaping EVK is hard work! Take a nap. >',
        nextText: 14,
        happy: 10,
        chonk: 0
      },
      {
        text: '< Jump out and explore the world! >',
        nextText: 0,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 14,
    text: 'You nestle underneath the pile of energy drink cans and quickly fall asleep. A few hours later you hear voices coming from outside the backpack.',
    options:[
      {
        text: '< Go back to sleep >',
        nextText: 14,
        happy: 10,
        chonk: 0
      },
      {
        text: '< Peek your head out >',
        nextText: 0,
        happy: 0,
        chonk: 0
      }
    ]
  },
]

startGame();




// chonk level
class ProgressBar1 {
  constructor (element, initialValue = 0) {
    this.valueElem = element.querySelector(".progress-bar-value1");
    this.fillElem = element.querySelector(".progress-bar-fill1");
    // this.bodyImage = element.querySelector("#kittybody");

    this.setValue(initialValue);
  }

  setValue (newValue) {
    if (newValue < 0) {
      newValue = 0;
    }
    if (newValue > 100) {
      newValue = 100;
    }

    this.value = newValue;
    this.update();
    // this.changeBody();
  }

  update () {
    const percentage = this.value + "%";
    this.fillElem.style.width = percentage;
    this.valueElem.textContent = "Chonk-iness: " + percentage;
  }

  // changeBody (newValue) {
  //   if (newValue <= 40) {
  //     this.bodyImage.src = "image/skinnybody.png";
  //   }
  //   else if (newValue > 40 && newValue <= 80) {
  //     this.bodyImage.src = "image/mediumbody.png";
  //   }
  //   else {
  //     this.bodyImage.src = "image/chonkybody.png";
  //   }
  // }
}

const pb1 = new ProgressBar1(document.querySelector(".progress-bar1"), 0);
pb1.setValue(chonkCounter);


// happiness meter
class ProgressBar2 {
  constructor (element, initialValue = 0) {
    this.valueElem = element.querySelector(".progress-bar-value2");
    this.fillElem = element.querySelector(".progress-bar-fill2");

    this.setValue(initialValue);
  }

  setValue (newValue) {
    if (newValue < 0) {
      newValue = 0;
    }
    if (newValue > 100) {
      newValue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update () {
    const percentage = this.value + "%";

    this.fillElem.style.width = percentage;
    this.valueElem.textContent = "Happiness: " + percentage;
  }

}

const pb2 = new ProgressBar2(document.querySelector(".progress-bar2"), 0);
pb2.setValue(happyCounter);









// music toggle

$(document).ready(function(){
    var audio = document.getElementById("audio");
    audio.autoplay = true;

    $("#mute-toggle").click(function(){ // on toggle click
        if($(this).hasClass("toggled")){ // if toggle has class "toggled"
            audio.muted = true; // unmute audio
        } else { // vice versa
            audio.muted = false;
            audio.currentTime = 0;
        }

        $(this).toggleClass("toggled"); // toggle class "toggled"
    });
});
