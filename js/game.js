let board = ['','','','','','','','','',];
let playerTime = 0;
let player = "Messi";
let symbols = ['x','o'];
let gameOver = false;
let punctuationMessi = 0;
let punctuationCR7 = 0;
let j;

function handleMove(position) {board



if (gameOver){
   
    board[0] = "";
    board[1] = "";
    board[2] = "";
    board[3] = "";
    board[4] = "";
    board[5] = "";
    board[6] = "";
    board[7] = "";
    board[8] = "";


}

    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin();

        if(gameOver == false) {
            if (playerTime == 0) {
                playerTime = 1;
                player = "CR7";
            } else if (playerTime == 1) {
                playerTime = 0;
                player = "MESSI";
            } else {
                player = "EMPATE";
            }

        }
    }
    return gameOver;
}

function isWin() {
    
    let winStates =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]

    let contador = 0;
    for(let j = 0; j < board.length; j++){
        if (board[j] != '') {
            contador++;
        }
    }

    for(let i = 0; i < winStates.length; i++){
        let sequence = winStates[i];
        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if(board[position1] == board[position2] && board[position1] == board[position3] && board[position1] != '') {
            return true;
        }
    }
    if(contador == 9){
        player = "'EMPATE'";
        return true;
    }
    return false;
}