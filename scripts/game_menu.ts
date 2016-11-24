module GameMenu
{
    // references to html elements
var CONTAINER: HTMLElement;
var MAP_NAME: HTMLElement;
var PART_NAME: HTMLElement;
var MESSAGE: HTMLElement;
var CORRECT: HTMLElement;
var INCORRECT: HTMLElement;
var SKIPPED: HTMLElement;
var TIMER_ELEMENT: HTMLElement;
var HELP: HTMLElement;

var TIMER: Utilities.Timer;
var MESSAGE_TIMEOUT: Utilities.Timeout;
var SHOW_HELP = true;  // whether to show or not the help (the map needs to be in practice mode)


/**
 * Initialize the game menu.
 */
export function init( showHelp: boolean )
    {
    if ( !Utilities.isBoolean( showHelp ) )
        {
        showHelp = true;
        }

    SHOW_HELP = showHelp;

    CONTAINER = document.getElementById( 'GameMenu' )!;

    MAP_NAME = document.getElementById( 'MapName' )!;
    PART_NAME = document.getElementById( 'PartName' )!;
    MESSAGE = document.getElementById( 'MenuMessage' )!;
    CORRECT = document.getElementById( 'CorrectValue' )!;
    INCORRECT = document.getElementById( 'IncorrectValue' )!;
    SKIPPED = document.getElementById( 'SkippedValue' )!;
    TIMER_ELEMENT = document.getElementById( 'TimeValue' )!;
    HELP = document.getElementById( 'Help' )!;

    var helpValue = HELP.querySelector( 'span' );

    HELP.onclick = function()
        {
        SHOW_HELP = !SHOW_HELP;
        AppStorage.setData({ 'cs_spot_names_show_help': SHOW_HELP });

        helpValue.innerHTML = toOnOff( SHOW_HELP );
        };

        // update the html element text as well
    helpValue.innerHTML = toOnOff( SHOW_HELP );

    var skip = document.getElementById( 'Skip' )!;
    skip.onclick = Game.skipSpot;

    var restart = document.getElementById( 'Restart' )!;
    restart.onclick = Game.restart;

    var quit = document.getElementById( 'Quit' )!;
    quit.onclick = function()
        {
        Game.clear();
        Game.hide();
        MainMenu.open();
        };

    TIMER = new Utilities.Timer( TIMER_ELEMENT );
    MESSAGE_TIMEOUT = new Utilities.Timeout();
    }


/**
 * Update the game menu info elements with the current game state.
 */
export function updateInfo( correctCount: number, incorrectCount: number, skippedCount: number )
    {
    CORRECT.innerHTML = correctCount.toString();
    INCORRECT.innerHTML = incorrectCount.toString();
    SKIPPED.innerHTML = skippedCount.toString();
    }


/**
 * Show the current part name in the menu.
 */
export function updatePartName( name: string )
    {
    PART_NAME.innerHTML = name;
    }


/**
 * Show the current map name in the menu.
 */
export function updateMapName( name: string )
    {
        // capitalize the first letter
    name = name.charAt( 0 ).toUpperCase() + name.slice( 1 );

    MAP_NAME.innerHTML = name;
    }


/**
 * Get the timer object.
 */
export function getTimer()
    {
    return TIMER;
    }


/**
 * Show the game menu.
 */
export function show()
    {
    CONTAINER.style.display = 'flex';
    }


/**
 * Hide the game menu.
 */
export function hide()
    {
    CONTAINER.style.display = 'none';
    HELP.style.visibility = 'hidden';
    }


/**
 * Show the correct guess message.
 */
export function showCorrectMessage()
    {
    GameMenu.showMessage( 'Correct!', 'correct' );
    }


/**
 * Show the incorrect guess message.
 */
export function showIncorrectMessage()
    {
    GameMenu.showMessage( 'Incorrect :(', 'incorrect' );
    }


/**
 * Show the skipped spot message.
 */
export function showSkippedMessage()
    {
    GameMenu.showMessage( 'Skipped.', 'skipped' );
    }


/**
 * Show a message in the menu (with an optional css class set for some styling).
 */
export function showMessage( text: string, className: string )
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
    }


/**
 * Show the help element or not (depending on whether we're on practice mode).
 */
export function setMode( practice: boolean )
    {
    if ( practice === true )
        {
        HELP.style.visibility = 'visible';
        }

    else
        {
        HELP.style.visibility = 'hidden';
        }
    }


/**
 * Check if the help text is on.
 */
export function isHelpSet()
    {
    return SHOW_HELP;
    }


/**
 * Clear the game menu module.
 */
export function clear()
    {
    TIMER.reset();
    }


/**
 * Convert a boolean value to a string (On/Off).
 */
function toOnOff( on: boolean )
    {
    if ( on )
        {
        return 'On';
        }

    return 'Off';
    }
}