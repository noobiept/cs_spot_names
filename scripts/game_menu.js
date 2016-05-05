/*global MainMenu, Game, Utilities*/

var GameMenu;
(function (GameMenu) {


    // references to html elements
var CONTAINER = null;
var MAP_NAME = null;
var PART_NAME = null;
var MESSAGE = null;
var CORRECT = null;
var INCORRECT = null;
var TIMER_ELEMENT = null;
var HELP = null;

var TIMER;
var MESSAGE_TIMEOUT;
var SHOW_HELP = true;  // whether to show or not the help (the map needs to be in practice mode)


GameMenu.init = function()
{
CONTAINER = document.querySelector( '#GameMenu' );

MAP_NAME = CONTAINER.querySelector( '#MapName' );
PART_NAME = CONTAINER.querySelector( '#PartName' );
MESSAGE = CONTAINER.querySelector( '#MenuMessage' );
CORRECT = CONTAINER.querySelector( '#CorrectValue' );
INCORRECT = CONTAINER.querySelector( '#IncorrectValue' );
TIMER_ELEMENT = CONTAINER.querySelector( '#TimeValue' );
HELP = CONTAINER.querySelector( '#Help' );

var helpValue = HELP.querySelector( 'span' );

HELP.onclick = function()
    {
    SHOW_HELP = !SHOW_HELP;

    helpValue.innerHTML = toOnOff( SHOW_HELP );
    };

    // update the html element text as well
helpValue.innerHTML = toOnOff( SHOW_HELP );

var skip = document.getElementById( 'Skip' );
skip.onclick = Game.skipSpot;

var restart = document.getElementById( 'Restart' );
restart.onclick = Game.restart;

var quit = document.getElementById( 'Quit' );
quit.onclick = function()
    {
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


GameMenu.updateMapName = function( name )
{
    // capitalize the first letter
name = name.charAt( 0 ).toUpperCase() + name.slice( 1 );

MAP_NAME.innerHTML = name;
};


GameMenu.getTimer = function()
{
return TIMER;
};


GameMenu.show = function()
{
CONTAINER.style.display = 'flex';
};


GameMenu.hide = function()
{
CONTAINER.style.display = 'none';
HELP.style.visibility = 'hidden';
};


GameMenu.showCorrectMessage = function()
{
GameMenu.showMessage( 'Correct!', 'correct' );
};


GameMenu.showIncorrectMessage = function()
{
GameMenu.showMessage( 'Incorrect :(', 'incorrect' );
};


GameMenu.showMessage = function( text, className )
{
if ( typeof className !== 'undefined' )
    {
    MESSAGE.className = className;
    }

else
    {
    MESSAGE.className = '';
    }

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


GameMenu.isHelpSet = function()
{
return SHOW_HELP;
};


GameMenu.clear = function()
{
TIMER.reset();
};


function toOnOff( on )
{
if ( on )
    {
    return 'On';
    }

return 'Off';
}


})(GameMenu || (GameMenu = {}));
