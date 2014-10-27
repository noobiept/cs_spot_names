(function(window)
{
function Game()
{

}

var CURRENT_PART_NAME;          // will have the current part name string
var MAP = null;
var ALL_PART_NAMES = [];        // array of strings with all the names of the map

    // count the number of correct/incorrect plays (for the score at the end)
var CORRECT_COUNT = 0;
var INCORRECT_COUNT = 0;



Game.start = function( mapName )
{
if ( typeof mapName === 'undefined' )
    {
    mapName = 'dust2';
    }


MAP = new Map( mapName );

ALL_PART_NAMES = MAP.getPartNames();

Game.nextSpot();
GameMenu.getTimer().start();
GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT );

Game.show();

G.BACKGROUND_STAGE.update();
G.MAIN_STAGE.update();
};


Game.nextSpot = function()
{
if ( ALL_PART_NAMES.length === 0 )
    {
    console.log( 'No more spots.' );
    return;
    }

var position = Utilities.getRandomInt( 0, ALL_PART_NAMES.length - 1 );

var name = ALL_PART_NAMES.splice( position, 1 )[ 0 ];

GameMenu.updatePartName( name );
CURRENT_PART_NAME = name;
};


Game.validatePart = function( partName )
{
if ( partName === CURRENT_PART_NAME )
    {
    console.log( 'Correct!' );
    CORRECT_COUNT++;
    Game.nextSpot();
    }

else
    {
    INCORRECT_COUNT++;
    console.log( 'Incorrect :(' );
    }

GameMenu.updateInfo( CORRECT_COUNT, INCORRECT_COUNT );
};


Game.clear = function()
{
MAP.clear();

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

};


window.Game = Game;

}(window));