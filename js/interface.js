document.addEventListener('DOMContentLoaded', () =>{
 
    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    });

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(() => {
            if(player == 'EMPATE'){
                alert("O joga Acabou - Deu empate");
            } else {
            alert("O joga Acabou - O vencedor foi " +player)
            if(player == 'MESSI'){
                punctuationMessi++;
            } else if (player == 'CR7') {
                punctuationCR7++;
            }
            document.getElementById("punctuation").value="Messi: "+punctuationMessi+"  X  CR7: "+punctuationCR7;
        }
        }, 10);
    }
    updateSquares();

}

function updateSquares(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if (gameOver) {
            square.innerHTML =`<div class=''></div>`
        } else if(symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}