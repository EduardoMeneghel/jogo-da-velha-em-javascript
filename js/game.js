jogador = "x";
jogador1 = 0;
jogador2 = 0;

function select(element) {
    if (element.classList == "square"){
        element.classList.add(jogador);
        element.value =jogador;
        if(jogador == "x"){
            jogador = "o";
        } else {
            jogador = "x"
        }
    }
    gameover(jogador);
  }

  function gameover(jogador) {
    position0 = document.getElementById('r0').value;
    position1 = document.getElementById('r1').value;
    position2 = document.getElementById('r2').value;
    position3 = document.getElementById('r3').value;
    position4 = document.getElementById('r4').value;
    position5 = document.getElementById('r5').value;
    position6 = document.getElementById('r6').value;
    position7 = document.getElementById('r7').value;
    position8 = document.getElementById('r8').value;
    positions = 
    [
        position0, position1, position2, position3, position4, position5, position6, position7, position8
    ]

    win =
    [
        [positions[0],positions[1],positions[2]],
        [positions[3],positions[4],positions[5]],
        [positions[6],positions[7],positions[8]],
        [positions[0],positions[3],positions[6]],
        [positions[1],positions[4],positions[7]],
        [positions[2],positions[5],positions[8]],
        [positions[0],positions[4],positions[8]],
        [positions[2],positions[4],positions[6]]

    ]
    for(i = 0; i < win.length; i++){
        if(win[i][0] == win[i][1] && win[i][0] == win[i][2] && win[i][0]){
            resetGame(jogador);
        }
    }
  }

  function resetGame(jogador) {

    if(jogador == 'o'){
        jogador1 = jogador1+1;
    } else {
        jogador2 = jogador2+1;
    }
    document.getElementById('r0').value = '';
    document.getElementById('r1').value = '';
    document.getElementById('r2').value = '';
    document.getElementById('r3').value = '';
    document.getElementById('r4').value = '';
    document.getElementById('r5').value = '';
    document.getElementById('r6').value = '';
    document.getElementById('r7').value = '';
    document.getElementById('r8').value = '';

    document.getElementById('r0').className = 'square';
    document.getElementById('r1').className = 'square';
    document.getElementById('r2').className = 'square';
    document.getElementById('r3').className = 'square';
    document.getElementById('r4').className = 'square';
    document.getElementById('r5').className = 'square';
    document.getElementById('r6').className = 'square';
    document.getElementById('r7').className = 'square';
    document.getElementById('r8').className = 'square';
    
    document.getElementById('message').innerHTML = '<p>Messi: '+jogador1+' CR7: '+jogador2+'</p>';
}