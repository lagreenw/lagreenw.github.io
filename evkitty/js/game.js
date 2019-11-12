console.log("hello world!");
var healthCounter = 0;
const textElement = document.getElementById('gametext');
const optionButttonsElement = document.getElementById('optionsContainer');


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
  healthCounter += option.food
  // health.innerText = healthCounter
  pb1.setValue(healthCounter)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Another beautiful day in the Everybody’s Kitchen courtyard! The smell of “Soyrizo Burritos” and “Made to Order Cage Free Omelettes (customize for veggie option)” fills the air as you stretch your furry legs in the sun! It soon turns 7am. A staff member comes by to unlock the doors and students begin trickling in.',
    options: [
      {
        text: '< Aquire food >',
        nextText: 2,
        food:20
      },
      {
        text: '< Aquire cuddles >',
        nextText: 3,
        food:-10
      },
      {
        text: '< Sleep >',
        nextText: 4,
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
        food:-10
      }
    ]
  }
]

startGame();





class ProgressBar {
  constructor (element, initialValue = 0) {
    this.valueElem = element.querySelector(".progress-bar-value");
    this.fillElem = element.querySelector(".progress-bar-fill");

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
    this.valueElem.textContent = percentage;
  }

}

const pb1 = new ProgressBar(document.querySelector(".progress-bar"), 75);
pb1.setValue(healthCounter);
