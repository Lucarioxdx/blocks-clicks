const gamearea = document.getElementById ("game-area");
const message = document.getElementById ("message");
function createobstacle (quantity){
    for (let i = 0; i < quantity; i++){
        const obstacle = document.createElement ("div");
        obstacle.classList.add ("obstacle")
        const x = Math.random ()*(gamearea.clientWidth - 30)
        const y = Math.random ()*(gamearea.clientHeight - 30)
        obstacle.style.left = `${x}px`
        obstacle.style.top = `${y}px`
        obstacle.addEventListener ("click", ()=> {
            obstacle.remove();
            checkvictory ()
        })
        gamearea.appendChild (obstacle)
    }
}
function checkvictory (){
    const restantes = document.querySelectorAll (".obstacle")
    if (restantes.length === 0){
        message.textContent = "Uai, cade meus blocos"
    }
}
createobstacle (30)