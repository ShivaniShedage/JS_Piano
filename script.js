document.getElementById('play').addEventListener('click',play)
function play(){
    location.href="#piano"
}

//For playing piano using keyboard buttons
const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j']
//Select all keys as elements
const keys = document.querySelectorAll('.key')
const WhiteKeys = document.querySelectorAll('.key.White')
const BlackKeys = document.querySelectorAll('.key.Black')
//slect each key from keys and play note on click
keys.forEach(key=>{
    key.addEventListener('click',()=> playnote(key))
})
//code to play piano using keyboard buttons
document.addEventListener('keydown',e=>{
    if(e.repeat) return//It does not repeat the note while keydown
    const key = e.key  //get the key which is pressed
    const WhiteKeyIndex = WHITE_KEYS.indexOf(key)
    const BlackKeyIndex = BLACK_KEYS.indexOf(key)
    //-1 return if it cant find anything
    if(WhiteKeyIndex >-1) playnote(WhiteKeys[WhiteKeyIndex])
    if(BlackKeyIndex>-1) playnote(BlackKeys[BlackKeyIndex])
})

//Function to play note
function playnote(key){
    //get notes by using data-note and id
    const noteAudio = document.getElementById(key.dataset.note)
    //this code starts the note from begining
    noteAudio.currentTime = 0
    //plays note
    noteAudio.play()
    //This add active class to keys and removes active class after note ends
    key.classList.add('active')
    noteAudio.addEventListener('ended',()=>{
        key.classList.remove('active')
    })
}