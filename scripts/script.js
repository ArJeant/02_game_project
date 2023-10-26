let player;
let botPlay;
let result;
let playerScore = 0;
let botScore = 0;

window.onload = () =>{

    $("#bot-img__cont").flip({
        trigger: 'manual'
      });

    // FINES EDUCATIVOS
    // $('#0').click(() => {

    //     selection(0);
    //     $(this[0]).css('border-color', '#A0E5A5');
    // })

    // $('#1').click(() => {

    //     selection(0);
    //     $(this[1]).css('border-color', '#A0E5A5');
    // })

    // $('#2').click(() => {

    //     selection(0);
    //     $(this[2]).css('border-color', '#A0E5A5');
    // })

    // SELECCIONAR

    $('#0').click(() => {

        selection(0);
        $('#0').css('border-color', '#A0E5A5');

    })

    $('#1').click(() => {

        selection(1);
        $('#1').css('border-color', '#A0E5A5');

    })

    $('#2').click(() => {

        selection(2);
        $('#2').css('border-color', '#A0E5A5');

    })

    // CONFIRMAR

    $('#confirm').click(()=> {

        $('#confirm').css('visibility', 'hidden');
        $('#0, #1, #2').attr('disabled', true);
        botPlay = randomBot();
        result = winCondition();

        if (result == null){
            changeResultView('¡Empate!', 'xswucfho.json');
        }
        else if (result){
            playerScore++;
            changeResultView('¡Ganaste!', 'essfskgt.json');
        }
        else {
            botScore++;
            changeResultView('¡Perdiste!', 'webcaezf.json');
        }

        $('#img-back').attr('src', `assets/${botPlay}.png`);

        $("#bot-img__cont").flip(true, () => {

            $('#playerScore-span').text(playerScore);
            $('#botScore-span').text(botScore);
            
            $('#replayModal').modal('show');

        });


        $('#playerScore-span').text = playerScore;
        $('#botScore-span').text = botScore;

    })

    $('#btn-modal').click(() => {
        $('#bot-img__cont').flip(false);
        $('#confirm').css('visibility', 'hidden');

        $('#0').css('border-color', '#000');
        $('#1').css('border-color', '#000');
        $('#2').css('border-color', '#000');

        $('#playerImg').fadeOut(300, () => {
            $('#playerImg').attr('src', 'assets/frog.png');
            $('#playerImg').fadeIn(300, () => {
                $('#0, #1, #2').attr('disabled', false);
            });
        })
    })

}

// FUNCIONES

function randomBot() {
   return Math.floor(Math.random() * 3);
}

function winCondition(){

    let winCondition;

    if (player == botPlay){
        changeResultView('¡Empate!');
        return null;
    }
    else if (player == 0) winCondition = 2;
    else if (player == 1) winCondition = 0;
    else  winCondition = 1;


    if (botPlay == winCondition) return true;
    else return false;

}

function selection(selected) {

    // REESTABLECER
    $('#confirm').attr('disabled', true);
    $('#confirm').text('Cambiando...');

    $('#0').css('border-color', '#000');
    $('#1').css('border-color', '#000');
    $('#2').css('border-color', '#000');

    player = selected;

    $('#playerImg').fadeOut(300, () => {
        $('#playerImg').attr('src', `assets/${player}.png`);

        $('#playerImg').fadeIn(300, () =>{
            $('#confirm').attr('disabled', false);
            $('#confirm').text('Confirmar');
        });
    })

    $('#confirm').css('visibility', 'visible');

}

function changeResultView (resultText, resultIcon){

    $('#resultView').text(resultText);
    $('#r-icon').attr('src', `https://cdn.lordicon.com/${resultIcon}`);

}