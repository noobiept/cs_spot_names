/*global Utilities, GameMenu, HighScore, Message, MainMenu, Map, G*/

var Game;
(function (Game) {


var CURRENT_PART_NAME;          // will have the current part name string
var MAP = null;
var ALL_PART_NAMES = [];        // array of strings with all the names of the map

    // count the number of correct/incorrect plays (for the score at the end)
var CORRECT_COUNT = 0;
var INCORRECT_COUNT = 0;
var PRACTICE_MODE = false;

    // all the map names in the game (don't change this)
var MAP_NAMES = [ 'cache', 'dust2', 'inferno', 'mirage' ];

    // has the name of the maps still left to be played
var MAPS_LEFT = [];


/**
    @param {Boolean=false} practice - whether to play the map in practice mode or not
    @param {String=} mapName - only used for practice mode, to select the map. In the normal mode, its a random map

    Practice mode:
        - play the same map constantly
        - there's no score
        - have access to the help

    Normal mode:
        - gets a random map
        - once you go through all the spots, a new map is loaded, etc
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
GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT );
GameMenu.setMode( practice );

Game.show();
};


/*
    Returns true if there's another spot left, or if a new map was loaded, false if its the end of the game (no more spots or maps)
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
            var score = HighScore.add( CORRECT_COUNT, INCORRECT_COUNT, GameMenu.getTimer().getTimeSeconds() );

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

var partInfo = ALL_PART_NAMES.splice( position, 1 )[ 0 ];

GameMenu.updatePartName( partInfo.name );
CURRENT_PART_NAME = partInfo;

return true;
};


Game.loadMap = function( mapName )
{
if ( MAP !== null )
    {
    MAP.clear();
    }

MAP = new Map( mapName );

ALL_PART_NAMES = MAP.getSpotsNames();

GameMenu.updateMapName( mapName );
Game.nextSpot();

G.BACKGROUND_STAGE.update();
G.MAIN_STAGE.update();
};


Game.validatePart = function( partName )
{
if ( partName === CURRENT_PART_NAME.id )
    {
    CORRECT_COUNT++;

    if ( Game.nextSpot() )
        {
        GameMenu.showMessage( 'Correct!' );
        }
    }

else
    {
    INCORRECT_COUNT++;
    GameMenu.showMessage( 'Incorrect :(' );
    }

GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT );
};


Game.clear = function()
{
GameMenu.clear();
MAP.clear();
MAP = null;

ALL_PART_NAMES.length = 0;

CORRECT_COUNT = 0;
INCORRECT_COUNT = 0;
};


Game.show = function()
{
G.BACKGROUND_CANVAS.style.visibility = 'visible';
G.MAIN_CANVAS.style.visibility = 'visible';

GameMenu.show();
};


Game.hide = function()
{
G.BACKGROUND_CANVAS.style.visibility = 'hidden';
G.MAIN_CANVAS.style.visibility = 'hidden';

GameMenu.hide();
};


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
GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT );
};


Game.inPracticeMode = function()
{
return PRACTICE_MODE;
};


})(Game || (Game = {}));
