let userScore = 0;
let botScore = 0;
const _userScore = document.getElementById('user-score')
const _botScore = document.getElementById('bot-score');
const _result = document.querySelector('.result')
const _rock = document.getElementById('rock');
const _paper = document.getElementById('paper');
const _scissors = document.getElementById('scissors');
const _miho = document.getElementById('res');

function botChoices(){
    const choices =['rock','paper', 'scissors'];
    const randomChoices = Math.floor( Math.random()*3);
    return choices[randomChoices];
}

function game(userChoices) {
    const user = userChoices;
    const bot = botChoices();
    if (user+bot === 'scissorspaper' || user+bot === 'paperrock' || user+bot === 'rockscissors'){
        win(user,bot);

    }
    else if (user === bot ){
        draw(user, bot);

    }
    else{
        lose(user, bot);

    }

}

function win (user, bot){
    userScore++;
    _userScore.innerHTML = userScore;
    _result.innerHTML =   user + '   beats   ' + bot + ', You  Won !!! ';
    document.getElementById(user).classList.add('blueW');
    setTimeout(function() {
        document.getElementById(user).classList.remove('blueW')},100);
}
function draw (user, bot){
    _result.innerHTML =   "It's   a   draw !";
    document.getElementById(user).classList.add('yellowD');
    setTimeout(function() {
    document.getElementById(user).classList.remove('yellowD')},100);

}
function lose (user, bot){
    botScore++;
    _botScore.innerHTML = botScore;
    _result.innerHTML =   bot + ' beats ' + user + ',  You  lost ! ';
    document.getElementById(user).classList.add('redL')
    setTimeout(function() {
        document.getElementById(user).classList.remove('redL')},100);
}


main();

function main() {
    _rock.addEventListener('click', function () {
        game("rock");

    })

    _paper.addEventListener('click', function () {
        game("paper");

    })

    _scissors.addEventListener('click', function () {
        game("scissors");

    })
    

}
