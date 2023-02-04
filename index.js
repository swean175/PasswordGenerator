const characters = ["A","B","C","D","E","F",
"G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z"];

//Array symbols
const symbolChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

 //Array numbers
const numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8",
"9"]
let symbols = document.getElementById("symbols")
let numbers = document.getElementById("numbers")


symbolChar.checked = false

function generate(){

let sortedCharacters  = characters

    if (symbols.checked){
        sortedCharacters = sortedCharacters.concat(symbolChar)
       
    } if (numbers.checked){
        sortedCharacters = sortedCharacters.concat(numberChar) 
    }

    let pass1 = document.getElementById("span1")
     let pass2 = document.getElementById("span2")
     pass1.value = ""
     pass2.value = ""
  

    for (let i = 1; i < 31; i++){
let r = Math.floor(Math.random() * sortedCharacters.length)

if (i % 2 === 0){
pass1.value += sortedCharacters[r] 


} else {
pass2.value += sortedCharacters[r] 
}}

localStorage.setItem("pass1", pass1.value)
localStorage.setItem("pass2", pass2.value)
}

//Copying text buttons *******************



const btns = document.querySelectorAll('.button-copy')

btns.forEach((btn) =>{
    btn.addEventListener('click', () =>{

        const txt = btn.previousElementSibling.value
        copyToClipboard(txt)
    })
})

async function copyToClipboard(txt){
  
await navigator.clipboard.writeText(txt)
    }


 localStorage.clear


