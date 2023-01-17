let playerOne=''
let playerTwo=''


const getPlayers = ()=>{
playerOne=prompt("What is the name of player one?")
document.querySelector(".playerOne").innerText=playerOne
playerTwo=prompt("What is the name of player two?")
document.querySelector(".playerTwo").innerText=playerTwo
}


const startListener = ()=>{
  document.querySelector(".start").addEventListener("click",()=>{
getPlayers()
  })}

  startListener();