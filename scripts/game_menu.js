/*global MainMenu, Game, Utilities, AppStorage*/
'use strict';

var GameMenu;
(function(GameMenu) {


    // references to html elements
var CONTAINER = null;
var MAP_NAME = null;
var PART_NAME = null;
var MESSAGE = null;
var CORRECT = null;
var INCORRECT = null;
var SKIPPED = null;
var TIMER_ELEMENT = null;
var HELP = null;

var TIMER;
var MESSAGE_TIMEOUT;
var SHOW_HELP = true;  // whether to show or not the help (the map needs to be in practice mode)


/**
 * Initialize the game menu.
 */
GameMenu.init = function( showHelp )
{
if ( !Utilities.isBoolean( showHelp ) )
    {
    showHelp = true;
    }

SHOW_HELP = showHelp;

CONTAINER = document.querySelector( '#GameMenu' );

MAP_NAME = CONTAINER.querySelector( '#MapName' );
PART_NAME = CONTAINER.querySelector( '#PartName' );
MESSAGE = CONTAINER.querySelector( '#MenuMessage' );
CORRECT = CONTAINER.querySelector( '#CorrectValue' );
INCORRECT = CONTAINER.querySelector( '#IncorrectValue' );
SKIPPED = CONTAINER.querySelector( '#SkippedValue' );
TIMER_ELEMENT = CONTAINER.querySelector( '#TimeValue' );
HELP = CONTAINER.querySelector( '#Help' );

var helpValue = HELP.querySelector( 'span' );

HELP.onclick = function()
    {
    SHOW_HELP = !SHOW_HELP;
    AppStorage.setData({ 'cs_spot_names_show_help': SHOW_HELP });

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


/**
 * Update the game menu info elements with the current game state.
 */
GameMenu.updateInfo = function( correctCount, incorrectCount, skippedCount )
{
CORRECT.innerHTML = correctCount;
INCORRECT.innerHTML = incorrectCount;
SKIPPED.innerHTML = skippedCount;
};


/**
 * Show the current part name in the menu.
 */
GameMenu.updatePartName = function( name )
{
PART_NAME.innerHTML = name;
};


/**
 * Show the current map name in the menu.
 */
GameMenu.updateMapName = function( name )
{
    // capitalize the first letter
name = name.charAt( 0 ).toUpperCase() + name.slice( 1 );

MAP_NAME.innerHTML = name;
};


/**
 * Get the timer object.
 */
GameMenu.getTimer = function()
{
return TIMER;
};


/**
 * Show the game menu.
 */
GameMenu.show = function()
{
CONTAINER.style.display = 'flex';
};


/**
 * Hide the game menu.
 */
GameMenu.hide = function()
{
CONTAINER.style.display = 'none';
HELP.style.visibility = 'hidden';
};


/**
 * Show the correct guess message.
 */
GameMenu.showCorrectMessage = function()
{
GameMenu.showMessage( 'Correct!', 'correct' );
};


/**
 * Show the incorrect guess message.
 */
GameMenu.showIncorrectMessage = function()
{
GameMenu.showMessage( 'Incorrect :(', 'incorrect' );
};


/**
 * Show the skipped spot message.
 */
GameMenu.showSkippedMessage = function()
{
GameMenu.showMessage( 'Skipped.', 'skipped' );
};

/**
 * Show a message in the menu (with an optional css class set for some styling).
 */
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


/**
 * Show the help element or not (depending on whether we're on practice mode).
 */
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


/**
 * Check if the help text is on.
 */
GameMenu.isHelpSet = function()
{
return SHOW_HELP;
};


/**
 * Clear the game menu module.
 */
GameMenu.clear = function()
{
TIMER.reset();
};


/**
 * Convert a boolean value to a string (On/Off).
 */
function toOnOff( on )
{
if ( on )
    {
    return 'On';
    }

return 'Off';
}


})(GameMenu || (GameMenu = {}));
