console.log("hello world!");
var happyCounter = 50;
var chonkCounter = 50;
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
  else if (happyCounter > 20 && chonkCounter <= 40) {
    headImage.src = 'image/neutralface.png';
  }
  else {
    headImage.src = 'image/smileface.png';
  }
}

const textNodes = [
  {
    id: 1,
    text: 'Another beautiful day in the Everybody’s Kitchen courtyard! The smell of “Soyrizo Burritos” and “Made to Order Cage Free Omelettes (customize for veggie option)” fills the air as you stretch your furry legs in the sun! It soon turns 7am. A staff member comes by to unlock the doors and students begin trickling in.',
    options: [
      {
        text: '< Aquire food >',
        nextText: 2,
        happy: 60,
        chonk: 60
      },
      {
        text: '< Aquire cuddles >',
        nextText: 3,
        happy:-10,
        chonk: 0,
      },
      {
        text: '< Sleep >',
        nextText: 4,
        happy: 20,
        chonk: 20
      }
    ]
  },
  {
    id: 2,
    text: 'You are now at text node 2.',
    options:[
      {
        text: '< Aquire cuddles >',
        nextText: 1,
        happy: -10,
        chonk: -10
      }
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
