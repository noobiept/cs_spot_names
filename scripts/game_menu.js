(function(window)
{
function GameMenu()
{

}

    // references to html elements
var CONTAINER = null;
var PART_NAME = null;
var MESSAGE = null;
var CORRECT = null;
var INCORRECT = null;
var TIMER_ELEMENT = null;
var HELP = null;
var RESTART = null;
var QUIT = null;

var TIMER;
var MESSAGE_TIMEOUT;

GameMenu.init = function()
{
CONTAINER = document.querySelector( '#GameMenu' );

PART_NAME = CONTAINER.querySelector( '#PartName' );
MESSAGE = CONTAINER.querySelector( '#Message' );
CORRECT = CONTAINER.querySelector( '#CorrectValue' );
INCORRECT = CONTAINER.querySelector( '#IncorrectValue' );
TIMER_ELEMENT = CONTAINER.querySelector( '#TimeValue' );
HELP = CONTAINER.querySelector( '#Help' );
RESTART = CONTAINER.querySelector( '#Restart' );
QUIT = CONTAINER.querySelector( '#Quit' );

HELP.onclick = function()
    {
        //HERE
    };
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
MESSAGE_TIMEOUT = new Utilities.Timeout();
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
HELP.style.visibility = 'hidden';
};


GameMenu.showMessage = function( text )
{
MESSAGE.innerHTML = text;
MESSAGE.style.visibility = 'visible';

MESSAGE_TIMEOUT.start( function()
    {
    MESSAGE.style.visibility = 'hidden';
    }, 1000 );
};


GameMenu.setMode = function( practice )
{
if ( practice === true )
    {
    HELP.style.visibility = 'visible';
    }

else
    {
    HELP.style.visibility = 'hidden';
    }
};



window.GameMenu = GameMenu;

}(window));