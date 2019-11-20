console.log("hello world!");
var happyCounter = 40;
var chonkCounter = 20;
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
  else if (happyCounter > 20 && happyCounter < 40) {
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
        happy: 5,
        chonk: 10
      },
      {
        text: '< Eat the cereal >',
        nextText: 8,
        happy: -15,
        chonk: 20
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
        happy: -10,
        chonk: 0
      },
      {
        text: '< See what they offer you >',
        nextText: 51,
        happy: -15,
        chonk: 10
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
        happy: 25,
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
        nextText: 25,
        happy: 0,
        chonk: 0
      },
      {
        text: "< Too much excersize! Take a nap. >",
        nextText: 24,
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
        happy: 25,
        chonk: 0
      }
    ]
  },
  {
    id: 12,
    text: 'You jump out, landing headfirst into a bowl of orange chicken. You become unhinged. You gorge yourself, finishing off the entire hot line before anyone can pull you away. Once the ordeal is done you are returned to the courtyard, but you do not mind. Your brief taste of freedom was enough to last forever. You have officially become the chonkiest cat alive. It is nap time. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
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
        happy: 5,
        chonk: 0
      },
      {
        text: '< Jump out and explore the world! >',
        nextText: 25,
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
        nextText: 15,
        happy: 10,
        chonk: 0
      },
      {
        text: '< Peek your head out >',
        nextText: 21,
        happy: -20,
        chonk: 0
      }
    ]
  },
  {
    id: 15,
    text: 'The next time you wake up is to a scream! You pop your head out of the open backpack to see the Viterbi kid hyperventilating on the floor. "EVKitty!??" she shouts.',
    options:[
      {
        text: '< offer cuddles >',
        nextText: 16,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 16,
    text: 'Your cuddles soothe her until she is once again able to speak. "I- I am so sorry, I have no idea how you got in there! I think I have to take you back to EVK."',
    options:[
      {
        text: '< Comply >',
        nextText: 17,
        happy: 20,
        chonk: 0
      },
      {
        text: '< Hide under bed >',
        nextText: 18,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 17,
    text: 'Hey, my name is Lisa by the way," says your new friend. Lisa carries you back to EVK. Although you wish your adventure could have lasted longer, your brief taste of freedom was enough to last many cat years. Plus, you made a new friend! "Goodbye EVKitty," Lisa says. She gives you just one little smile, and leaves for class. After a big day of adventuring, it is once again nap time. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 18,
    text: '"Listen, I guess if you don\'t want to go we don\'t have to. But if you stay here, we\'re gonna have to figure out a way to hide you... My name\'s Lisa by the way."',
    options:[
      {
        text: '< Sweet! >',
        nextText: 19,
        happy: 30,
        chonk: 20
      },
    ]
  },
  {
    id: 19,
    text: 'You and Lisa quickly become best friends. Every day she brings you REAL cat food. Your days of begging for dining hall food are over! She even takes you home during breaks to meet her family. Over the years, you watch her grow up, graduate, and even land her first job as a civil engineer. Places change, faces come and go, but your love for one another remains constant.',
    options:[
      {
        text: '< Awh >',
        nextText: 20,
        happy: 100,
        chonk: 100
      },
    ]
  },
  {
    id: 20,
    text: 'Sometimes you think back to your days in the EVK Courtyard and smile, but you never truly miss it. Nowadays you content yourself by chatting with the other local apartment cats, and snuggling up to watch Animal Planet with Lisa after work (Big Cat Diaries is your favorite). Yup, life is pretty good. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 21,
    text: 'You appear to be underneath a desk. You see about 20 pairs of legs all pointed towards the front of the room. At the front of this room there is a voice lecturing about essay invention strategies... Oh no. You\'ve heard about this place. You\'re in WRITING 150!',
    options:[
      {
        text: '< Return to backpack >',
        nextText: 15,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Keep listening >',
        nextText: 22,
        happy: 15,
        chonk: -20
      }
    ]
  },
  {
    id: 22,
    text: 'Wait a minute, this could be a good thing! You wait until the class leaves and quickly hide in the lecture podium. Slowly, over hundreds of class periods, you begin to learn to write English. You improve upon your argumentative organization and research strategies. You develop a personal voice. The best part: USC can\'t charge a cat tuition!',
    options:[
      {
        text: '< Continue thriving >',
        nextText: 23,
        happy: 100,
        chonk: 30
      },
    ]
  },
  {
    id: 23,
    text: 'When the time is right, you leave hiding and begin to make your work known. As the world\'s first English-writing cat and premiere expert in feline studies, you make international headlines. You are quickly made a tenured professor, awarded the Nobel Peace Prize, and even appear as a guest on the Ellen show! Even when you eventually pass, your work lives, on inspiring the next generations of kitty scholars. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 24,
    text: 'You run into the first building you can find and look for somewhere to sleep. You spot a backpack filled with energy drink cans and hop in!',
    options:[
      {
        text: '< Perfect! >',
        nextText: 14,
        happy: 5,
        chonk: 0
      },
    ]
  },
  {
    id: 25,
    text: 'You sprint aimlessly, passing by red building after red building. Eventually you find yourself by the film school. Believing it to be The Cheesecake Factory (TM) you excitedly rush inside!',
    options:[
      {
        text: '< Explore >',
        nextText: 26,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Leave >',
        nextText: 37,
        happy: -15,
        chonk: 0
      }
    ]
  },
  {
    id: 26,
    text: 'Despite the lack of  endless menu options, you decide to explore building SCI. You run up a stairwell and find yourself at a large black cage. The cage has a gate attached to it, and inside this gate there is a metal door. You hear strange sounds emanating from behind it...',
    options:[
      {
        text: '< Inspect it closer >',
        nextText: 27,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Run! >',
        nextText: 38,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 27,
    text: 'Right as you move closer to get a better look, the door swings open to reveal a man with white hair, a white beard, and the biggest goddamned neck you\'ve ever seen. It\'s GEORGE LUCAS!!',
    options:[
      {
        text: '< Wait, what? >',
        nextText: 28,
        happy: 10,
        chonk: 0
      },
    ]
  },
  {
    id: 28,
    text: 'George picks you up and gives you incredible head scratches. "Hey there little guy," he begins. "it\'s been a long while since I\'ve had any visitors." Sensing the confusion in your eyes, he continues. "You see, when I donate to SCA, it\'s not just to support the future generation of media artists..."',
    options:[
      {
        text: '< meow to show active listening >',
        nextText: 29,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 29,
    text: '"I have lost all privacy in the world outside. Star Wars fans shouting outside of my home, paparazzi breathing down my neck... I can\'t even go to the store without someone asking for an autograph, or complaining to me about the prequels! So I made my own world here..." George places you down, opens the door, and gestures for you to walk inside.',
    options:[
      {
        text: '< Go in >',
        nextText: 30,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Run away! >',
        nextText: 38,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 30,
    text: 'The room is windowless and simple. There is a desk, refrigerator, toilet, and mattress. Most peculiar, however, is the gigantic wheel at the center of the room. "I\'ve tried to make myself useful while in hiding," George explains. "I turn this wheel 10 hours a day as a form of exercise. It powers all of SCA."',
    options:[
      {
        text: '< Cuddle George Lucas >',
        nextText: 31,
        happy: 15,
        chonk: 0
      },
      {
        text: '< Run away! >',
        nextText: 38,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 31,
    text: 'You rub up against George\'s leg, claiming him as your own. You look up and see a single tear drop trickling down his face. *sniffle* "What am I doing holed up in this tower? I\'m a world famous filmmaker. I\'ve got more money than I know what to do with! Fuck it. You ever wanted to star in a major motion picture?"',
    options:[
      {
        text: '< Stare at him. >',
        nextText: 32,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 32,
    text: 'Realizing you are a cat and cannot speak, George pauses for a second. "meow once for yes, and twice for no"',
    options:[
      {
        text: '< meow >',
        nextText: 33,
        happy: -70,
        chonk: 50
      },
      {
        text: '< meow meow >',
        nextText: 35,
        happy: 0,
        chonk: 0
      }
    ]
  },
  {
    id: 33,
    text: '"Yes!" Shouts George. "you\'re gonna be a star, cat! You just wait and see..." However, despite high hopes the movie business is tough on you. Three years, two "Paw Wars" films, and one nasty cat nip addiction later, you are worn out. You spend hours a day, just wandering your Beverly Hills mansion looking for something to keep you busy.',
    options:[
      {
        text: '< continue >',
        nextText: 34,
        happy: 80,
        chonk: -100
      },
    ]
  },
  {
    id: 34,
    text: 'No amount of imported salmon or luxury kitty furniture could ever have replaced the satisfaction you once received being a therapy pet for thousands of USC students. Your body is starting to fail you and you know you are running out of time. In one final act of desperation, you burn your mansion to the ground and journey home. By the time you reach EVK, the sun is setting and you cannot muster the energy to go on. Students gather, as you lay down for one final nap. They know their queen has returned home. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 35,
    text: '"I understand," George says. "it is better anyway that you prefer the simple life, and avoid my mistake. No movie franchise could ever make you happier than enjoying free food, a cozy nap, and warm cuddles in the place you belong... Return to your home, EVKitty. Before you end up like me, without a home to return to. I must get back to turning the wheel."',
    options:[
      {
        text: '< continue >',
        nextText: 36,
        happy: 100,
        chonk: 0
      },
    ]
  },
  {
    id: 36,
    text: 'You give George Lucas a final hug goodbye, and scurry home. You find your place in the sun and settle in. Nothing has changed, yet everything feels different. Everything feels new. You are where you are meant to be. It is nap time. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 37,
    text: 'Disappointed at the lack of hors d\'oeuvres, you leave SCA.',
    options:[
      {
        text: '< continue >',
        nextText: 39,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 38,
    text: 'You stumble, bruising your paws on the way down the stairs. Luckily you make it back outside. THAT was scary...',
    options:[
      {
        text: '< Whew! >',
        nextText: 39,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 39,
    text: 'You continue wandering and end up at the Village dining hall. The door to the hall is open, but you also hear a rustling in the courtyard bushes.',
    options:[
      {
        text: '< Inspect the bushes >',
        nextText: 41,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Enter the dining hall >',
        nextText: 40,
        happy: -20,
        chonk: 30
      }
    ]
  },
  {
    id: 40,
    text: 'Although you run as quickly as you can, the exhaustion of the day has caught up to you. Before you can even make it to the sandwich line, a staff member snatches you up. Your adventure has been cut short. You are soon returned to EVK, where you console yourself with half-eaten pieces of salmon. THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 41,
    text: 'You move closer and see a small brown animal digging a hole. He sees you and instantly begins shaking in terror. "PLEASE DON\'T EAT ME MAM!" squeaks the mouse. "I promise I\'ll give you anything you want, just please let me live!"',
    options:[
      {
        text: '< have mercy >',
        nextText: 47,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Eat him >',
        nextText: 42,
        happy: 0,
        chonk: 25
      },
      {
        text: '< Go to the dining hall >',
        nextText: 40,
        happy: -20,
        chonk: 30
      }
    ]
  },
  {
    id: 42,
    text: 'Your instincts take control and you pounce the poor guy. You try to keep him alive to play with for a while, but soon enough he makes a tasty snack.',
    options:[
      {
        text: '< Feel remorse >',
        nextText: 43,
        happy: -10,
        chonk: 0
      },
      {
        text: '< Nice! >',
        nextText: 46,
        happy: 10,
        chonk: 0
      }
    ]
  },
  {
    id: 43,
    text: 'Oh my god what have you done!?? You are a murderer! Guilt guilt remorse blah blah blah. Anyway, what do you want to do now?',
    options:[
      {
        text: '< Go to the dining hall >',
        nextText: 40,
        happy: -20,
        chonk: 30
      },
      {
        text: '< Become a street cat >',
        nextText: 44,
        happy: 15,
        chonk: -30
      }
    ]
  },
  {
    id: 44,
    text: 'Life as a street cat is different from anything you\'ve experienced before in your previously posh existence. You love it. Don\'t get me wrong, it\'s tough out there, but it feels honest. You start gambling, wearing fedoras, playing stand up bass, and get a job stealing tuna fish from a local sandwich shop.',
    options:[
      {
        text: '< continue >',
        nextText: 45,
        happy: 20,
        chonk: 0
      },
    ]
  },
  {
    id: 45,
    text: 'One night during a routine robbery, cats from a rival gang jump you. You\'re able to fight them off, but not without injury. As you lay there, bleeding out, your new family surround you. You are able to meow two final words before your life cuts to black: "Avenge me." THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 46,
    text: 'What do you want to do next?',
    options:[
      {
        text: '< Go to the dining hall >',
        nextText: 40,
        happy: -20,
        chonk: 30
      },
      {
        text: '< Become a street cat >',
        nextText: 44,
        happy: 15,
        chonk: -30
      }
    ]
  },
  {
    id: 47,
    text: '"I don\'t want to hurt you little guy!", you meow in reply. "Oh thank God. Please pardon my screaming, you wouldn\'t believe the number of cats who\'d love to eat me as a snack!" the mouse says as you lick your lips. "Wait a minute... are you EVKitty??"',
    options:[
      {
        text: '< Introduce yourself >',
        nextText: 48,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Eat him >',
        nextText: 42,
        happy: 0,
        chonk: 20
      }
    ]
  },
  {
    id: 48,
    text: 'You give the mouse a smirk. "Yes, I am the queen of Everybody\'s Kitchen." The mouse\'s face lights up. "I can\'t believe this! You see, when I first heard about you I gave up my previous life as a street mouse and changed my name to McCarthy Mouse! You are my greatest idol..." he pauses. "not that it matters anyway."',
    options:[
      {
        text: '< Why so sad? >',
        nextText: 49,
        happy: 0,
        chonk: 0
      },
      {
        text: '< Eat McCarthy Mouse >',
        nextText: 42,
        happy: 0,
        chonk: 20
      }
    ]
  },
  {
    id: 49,
    text: '"Well, I want to be just like you. It\'s just... whenever I try to give people cuddles, all they do is scream and run away from me. Most of the time now, I just hang out in these bushes and try not to get eaten by neighborhood cats."',
    options:[
      {
        text: '< Become friends >',
        nextText: 50,
        happy: 100,
        chonk: 100
      },
      {
        text: '< EAT! THAT! MOUSE! >',
        nextText: 42,
        happy: 0,
        chonk: 20
      }
    ]
  },
  {
    id: 50,
    text: '"Don\'t worry Mr. Mouse! I have an idea!" After a quick meal and a sprinkler bath, you ask McCarthy to ride on your back. With your combined cuteness and undeniable charm you become THE DINING HALL DUO. Every day, you make your rounds to all three dining halls collecting more food and cuddles than you ever could have on your own. Life is better with your best friend on your back! THE END.',
    options:[
      {
        text: ' ',
        nextText: 0,
        happy: 0,
        chonk: 0
      },
    ]
  },
  {
    id: 51,
    text: 'They each give you a small piece of cantaloupe, but you are still grumpy that they woke you up.',
    options:[
      {
        text: '< *sigh* >',
        nextText: 6,
        happy: 0,
        chonk: 0
      },
    ]
  }
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
            audio.muted = !audio.muted; // unmute audio
        } else { // vice versa
            audio.muted = !audio.muted;
            audio.currentTime = 0;
        }

        $(this).toggleClass("toggled"); // toggle class "toggled"
    });
});
