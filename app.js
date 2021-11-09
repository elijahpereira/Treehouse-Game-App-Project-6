const qwertyHTML = document.querySelector('#qwerty');
const startBtn = document.querySelector('.btn__reset');
const phraseUL = document.querySelector('#phrase ul');
const checkablePhrase = document.getElementsByClassName("letter");
const button = document.getElementsByTagName('button');
const scoreboardUL = document.querySelector('#scoreboard ol');

const firstHeart = document.getElementsByClassName('.tries');
const createIMG = document.createElement('img');
const createLI = document.createElement('li');

let missed = 0;
let phraseArray = '';

//3. hides the start screen overlay
startBtn.addEventListener('click', () =>{
    var start = document.querySelector('.start');
    start.style.display = "none";
    const inPhraseArray = getRandomPhraseAsArray(phrases);
    phraseArray = inPhraseArray;
    addPhraseToDisplay(inPhraseArray);
});

//4. creates an arary with 5 different strings.
var phrases = [
    "thank you next",
    "goodnight n go",
    "bloodline",
    "just like magic",
    "into you"
];
//5. creates getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
    const innerPhrase = arr[Math.floor(Math.random()*arr.length)];
    const splitPhrase = innerPhrase.split('');
    return splitPhrase;
}
  
//6. create an addPhraseToDisplay function.
function addPhraseToDisplay(arr){
    for (let i = 0; i< arr.length; i++){
        let makeLI = document.createElement('li');
        let splitChar = arr[i];
    
        makeLI.textContent = splitChar;
        if(splitChar == ' '){
            makeLI.className = "space";
        } else { 
            makeLI.className = "letter";
        }
        phraseUL.append(makeLI);
}}

//7. create a checkLetter function.
function checkLetter(button){
    let match = '';
    //loop over letters and check for matches
    //if there's a match
    //add "show" class to li
    //store matching letter inside of a variable
    //return the letter
    for (let i=0; i< checkablePhrase.length; i++){
        let targetLetter = checkablePhrase[i].textContent;
        if(button.textContent === targetLetter){
            checkablePhrase[i].className += " show";
            match = button.textContent;
        }
    }
    if (match.length> 0){
        return match;
    } else {
        return null;
    }
}

//8. add an event listener to the keyboard.
qwerty.addEventListener('click',(e) => {
    let letterFound = checkLetter(e.target);
    //when letter is picked add the “chosen” class to that button
    //set “disabled” attribute to true
    //pass the button to the checkLetter function
    //store the letter returned inside of a variable called letterFound
    if (e.target.tagName === 'BUTTON'){
        e.target.className = 'chosen';
        e.target.disabled = true;
        letterFound;
        //9. count the missed guesses in the game.
        //write a statement to check the value of the letterFound variable.
        //if the value is null, remove one of the tries from the scoreboard
        //when you remove a try from the scoreboard ,increase the missed count by 1
        //change a liveHeart.png image to a lostHeart.png image
        if (letterFound === null){
            scoreboardUL.removeChild(scoreboardUL.children[missed]);
            createLI.classList = "tries";
            createIMG.src = "images/lostHeart.png";
            createIMG.style.height = '35px';
            createIMG.style.width = '30px';
            createLI.appendChild(createIMG); 
            scoreboardUL.insertBefore(createLI, scoreboardUL.children[missed]);
            missed++; 
        }
    }
});