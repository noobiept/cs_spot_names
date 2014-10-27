(function(window)
{
function GameMenu()
{

}

    // references to html elements
var CONTAINER = null;
var PART_NAME = null;
var CORRECT = null;
var INCORRECT = null;
var TIMER_ELEMENT = null;
var RESTART = null;
var QUIT = null;

var TIMER;

GameMenu.init = function()
{
CONTAINER = document.querySelector( '#GameMenu' );

PART_NAME = CONTAINER.querySelector( '#PartName' );
CORRECT = CONTAINER.querySelector( '#CorrectValue' );
INCORRECT = CONTAINER.querySelector( '#IncorrectValue' );
TIMER_ELEMENT = CONTAINER.querySelector( '#TimeValue' );
RESTART = CONTAINER.querySelector( '#Restart' );
QUIT = CONTAINER.querySelector( '#Quit' );

RESTART.onclick = function()
    {
    Game.restart();
    };
QUIT.onclick = function()
    {
    TIMER.reset();
    Game.clear();
    Game.hide();
    MainMenu.open();
    };


TIMER = new Utilities.Timer( TIMER_ELEMENT );
};


GameMenu.updateInfo = function( correctCount, incorrectCount )
{
CORRECT.innerHTML = correctCount;
INCORRECT.innerHTML = incorrectCount;
};

GameMenu.updatePartName = function( name )
{
PART_NAME.innerHTML = name;
};


GameMenu.getTimer = function()
{
return TIMER;
};


GameMenu.show = function()
{
CONTAINER.style.visibility = 'visible';
};


GameMenu.hide = function()
{
CONTAINER.style.visibility = 'hidden';
};


window.GameMenu = GameMenu;

}(window));