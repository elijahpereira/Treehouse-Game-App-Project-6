var qwertyHTML = document.querySelector('#qwerty');
var startBtn = document.querySelector('.btn__reset');
var phrase = document.querySelector('#phrase');
var missed = 0;

//3. hides the start screen overlay
startBtn.addEventListener('click', () =>{
    const start = document.querySelector('.start');
    start.style.display = "none";
    getRandomPhraseAsArray(phrases)
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
        //choose a phrase 
        //split that phrase into a new array of characters
        const innerPhrase = arr[Math.floor(Math.random()*arr.length)];
        const splitPhrase = innerPhrase.split('');
        
        //do stuff to any arr that is passed in 
        for (let i = 0; i<= splitPhrase.length; i++){
            let phraseUL = document.querySelector('.phraseHolder');
            let makeLI = document.createElement('li');
            let splitChar = splitPhrase[i];

            if(splitChar == ""){
                makeLI.className = "space"
            } else { 
                makeLI.textContent = splitChar;
                makeLI.className = "letter"
            }
            phraseUL.append(makeLI);
        }
    }
