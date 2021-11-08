var qwertyHTML = document.querySelector('#qwerty');
var startBtn = document.querySelector('.btn__reset');
var button = document.getElementsByTagName('button');
var phrase = document.querySelector('#phrase');
var missed = 0;
var phraseArray = '';

//3. hides the start screen overlay
startBtn.addEventListener('click', () =>{
    const start = document.querySelector('.start');
    start.style.display = "none";
    const inPhraseArray = getRandomPhraseAsArray(phrases);
    phraseArray = inPhraseArray;
    addPhraseToDisplay(inPhraseArray);
});

//4. creates an arary with 5 different strings.
var phrases = [
    "hello",
    "thank you for coming",
    "enjoy your stay",
    "it was nice seeing you",
    "goodbye"
];
//5. creates getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
    const innerPhrase = arr[Math.floor(Math.random()*arr.length)];
    const splitPhrase = innerPhrase.split('');
    return splitPhrase;
}

//6. create an addPhraseToDisplay function.
function addPhraseToDisplay(arr){
    for (let i = 0; i<= arr.length; i++){
        let phraseUL = document.querySelector('#phrase ul');
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
function checkLetter(buttonClicked){
    //get all elements with class "letter"
    //loop over letters and check for matches
    for (let i=0; i< phraseArray.length; i++){
        let targetLetter = phraseArray[i];
        //if there's a match
        //add "show" class to li
        //store matching letter inside of a variable
        //return the letter
    if(buttonClicked.textContent === 'targetLetter'){
        targetLetter.className = "show";
        return targetLetter;
    } else{return null;}
}}

//8. add an event listener to the keyboard.

// for ( )
// button.addEventListener('click',(e) => {
//     e.currentTarget.style.visibility = 'hidden';
//   console.log(e.currentTarget);
//     //when letter is picked add the “chosen” class to that button
//     //set “disabled” attribute to true
//     //pass the button to the checkLetter function
//     //store the letter returned inside of a variable called letterFound
// });