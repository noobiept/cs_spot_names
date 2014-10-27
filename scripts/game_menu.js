(function(window)
{
function GameMenu()
{

}

    // references to html elements
var CORRECT = null;
var INCORRECT = null;
var TIMER_ELEMENT = null;
var RESTART = null;
var QUIT = null;

var TIMER;

GameMenu.init = function()
{
var container = document.querySelector( '#GameMenu' );

CORRECT = container.querySelector( '#CorrectValue' );
INCORRECT = container.querySelector( '#IncorrectValue' );
TIMER_ELEMENT = container.querySelector( '#TimeValue' );
RESTART = container.querySelector( '#Restart' );
QUIT = container.querySelector( '#Quit' );

TIMER = new Utilities.Timer( TIMER_ELEMENT );
};


GameMenu.updateInfo = function( correctCount, incorrectCount )
{
CORRECT.innerHTML = correctCount;
INCORRECT.innerHTML = incorrectCount;
};


GameMenu.getTimer = function()
{
return TIMER;
};



window.GameMenu = GameMenu;

}(window));