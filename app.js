document.addEventListener('DOMContentLoaded', (e) =>{
    const qwerty = document.getElementById('qwerty');
    const startBtn = document.querySelector('.btn__reset');
    let missed = 0;

    //3. hides the start screen overlay
    startBtn.addEventListener('click', (e) =>{
    const start = document.querySelector('.start');
    start.style.display = "none";
    });
    //4. creates an arary with 5 different strings.
    var ski = [
        'hello',
        'thank you for coming',
        'enjoy your stay',
        'it was nice seeing you',
        'goodbye'
    ];
    //5. creates getRandomPhraseAsArray function.
    function getRandomPhraseAsArray(arr){
        //choose a phrase 
        const arrRandomizer = arr[Math.floor(Math.random() * arr.length)];
        const innerArr = arr[arrRandomizer];
        //split that phrase into a new array of characters
        const splitArr = innerArr.split(',');
        //do stuff to any arr that is passed in 
        return splitArr;
    };
});