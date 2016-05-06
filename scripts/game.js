/*global Utilities, GameMenu, HighScore, Message, MainMenu, Map*/
'use strict';

var Game;
(function(Game) {


var CURRENT_PART_NAME;          // will have the current part name string
var MAP = null;
var ALL_PART_NAMES = [];        // array of strings with all the names of the map

    // count the number of correct/incorrect plays and skipped spots (for the score at the end)
var CORRECT_COUNT = 0;
var INCORRECT_COUNT = 0;
var SKIPPED_COUNT = 0;
var PRACTICE_MODE = false;

var SKIP_TIMEOUT_ID = null;
var SKIP_CALLBACK = null;

    // all the map names in the game (don't change this)
var MAP_NAMES = [ 'cache', 'dust2', 'inferno', 'mirage', 'overpass' ];

    // has the name of the maps still left to be played
var MAPS_LEFT = [];


/**
 * @param {Boolean=false} practice - whether to play the map in practice mode or not
 * @param {String=} mapName - only used for practice mode, to select the map. In the normal mode, its a random map
 *
 * Practice mode:
 *     - play the same map constantly
 *     - there's no score
 *     - have access to the help
 *
 * Normal mode:
 *     - gets a random map
 *     - once you go through all the spots, a new map is loaded, etc
 */
Game.start = function( practice, mapName )
{
if ( typeof practice === 'undefined' )
    {
    practice = false;
    }

PRACTICE_MODE = practice;

if ( practice === false )
    {
    MAPS_LEFT = Utilities.deepClone( MAP_NAMES );

    var position = Utilities.getRandomInt( 0, MAPS_LEFT.length - 1 );

    mapName = MAPS_LEFT.splice( position, 1 )[ 0 ];
    }

Game.loadMap( mapName );
GameMenu.getTimer().start();
GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT, SKIPPED_COUNT );
GameMenu.setMode( practice );
GameMenu.show();
};


/**
 * Returns true if there's another spot left, or if a new map was loaded, false if its the end of the game (no more spots or maps).
 */
Game.nextSpot = function()
{
var position;

if ( ALL_PART_NAMES.length === 0 )
    {
        // restart the map
    if ( PRACTICE_MODE )
        {
        ALL_PART_NAMES = MAP.getSpotsNames();
        }

        // load the next map
    else
        {
        if ( MAPS_LEFT.length === 0 )
            {
            var score = HighScore.add( CORRECT_COUNT, INCORRECT_COUNT, SKIPPED_COUNT, GameMenu.getTimer().getTimeSeconds() );

            Game.clear();
            Game.hide();

            new Message( 'All done, congrats! Score: ' + score, 4000, function()
                {
                MainMenu.open();
                });

            return false;
            }

        else
            {
            position = Utilities.getRandomInt( 0, MAPS_LEFT.length - 1 );

            var mapName = MAPS_LEFT.splice( position, 1 )[ 0 ];

            Game.loadMap( mapName );
            }

        return true;
        }
    }

position = Utilities.getRandomInt( 0, ALL_PART_NAMES.length - 1 );

var partName = ALL_PART_NAMES.splice( position, 1 )[ 0 ];

GameMenu.updatePartName( partName );
CURRENT_PART_NAME = partName;

return true;
};


/**
 * Load a new map.
 */
Game.loadMap = function( mapName )
{
if ( MAP !== null )
    {
    clearMap();
    }

MAP = new Map( mapName );

ALL_PART_NAMES = MAP.getSpotsNames();

GameMenu.updateMapName( mapName );
Game.nextSpot();
};


/**
 * Check if the player's guess is correct.
 */
Game.validatePart = function( partName )
{
if ( partName === CURRENT_PART_NAME )
    {
    CORRECT_COUNT++;

    if ( Game.nextSpot() )
        {
        GameMenu.showCorrectMessage();
        }
    }

else
    {
    INCORRECT_COUNT++;
    GameMenu.showIncorrectMessage();
    }

GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT, SKIPPED_COUNT );
};


/**
 * Clears the map (not necessary the whole game). Called when switching the maps or ending the game.
 */
function clearMap()
{
window.clearTimeout( SKIP_TIMEOUT_ID );

if ( SKIP_CALLBACK )
    {
    SKIP_CALLBACK();
    }

SKIP_TIMEOUT_ID = null;
SKIP_CALLBACK = null;

MAP.clear();
MAP = null;
}


/**
 * Clear the map and reset the game state.
 */
Game.clear = function()
{
clearMap();
GameMenu.clear();

ALL_PART_NAMES.length = 0;

CORRECT_COUNT = 0;
INCORRECT_COUNT = 0;
SKIPPED_COUNT = 0;
};


/**
 * Hide the game elements.
 */
Game.hide = function()
{
GameMenu.hide();
};


/**
 * Restart the current map.
 */
Game.restart = function()
{
var mapName = MAP.map_name;

Game.clear();

if ( PRACTICE_MODE === false )
    {
    MAPS_LEFT = Utilities.deepClone( MAP_NAMES );

    var position = Utilities.getRandomInt( 0, MAPS_LEFT.length - 1 );

    mapName = MAPS_LEFT.splice( position, 1 )[ 0 ];
    }

Game.loadMap( mapName );
GameMenu.getTimer().start();
GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT, SKIPPED_COUNT );
};


/**
 * Check if the game is in practice mode.
 */
Game.inPracticeMode = function()
{
return PRACTICE_MODE;
};


/**
 * Skip a spot and move on to the next one.
 * Highlight the skipped spot for a certain time.
 */
Game.skipSpot = function()
{
window.clearTimeout( SKIP_TIMEOUT_ID );

if ( SKIP_CALLBACK )
    {
    SKIP_CALLBACK();
    }

    // highlight the skipped spot
var spot = MAP.getSpot( CURRENT_PART_NAME );
spot.highlight();

    // save the function in case we need to clear the timeout early
SKIP_CALLBACK = function()
    {
    spot.removeHighlight();
    SKIP_TIMEOUT_ID = null;
    SKIP_CALLBACK = null;
    };
SKIP_TIMEOUT_ID = window.setTimeout( SKIP_CALLBACK, 2000 );

    // go to the next one
Game.nextSpot();

    // count the amount skipped spots (useful later to determine the score)
SKIPPED_COUNT++;
GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT, SKIPPED_COUNT );
GameMenu.showSkippedMessage();
};


})(Game || (Game = {}));
