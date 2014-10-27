(function(window)
{
function Game()
{

}

var CURRENT_PART_NAME;          // will have the current part name string
var PART_NAME_ELEMENT = null;   // reference to the html element
var MAP = null;
var ALL_PART_NAMES = [];        // array of strings with all the names of the map

Game.init = function()
{
PART_NAME_ELEMENT = document.querySelector( '#PartName' );
};


Game.start = function( mapName )
{
if ( typeof mapName === 'undefined' )
    {
    mapName = 'dust2';
    }

MAP = new Map( mapName );

ALL_PART_NAMES = MAP.getPartNames();

Game.nextSpot();

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

PART_NAME_ELEMENT.innerHTML = name;
CURRENT_PART_NAME = name;
};


Game.validatePart = function( partName )
{
if ( partName === CURRENT_PART_NAME )
    {
    console.log( 'Correct!' );
    Game.nextSpot();
    }

else
    {
    console.log( 'Incorrect :(' );
    }
};


window.Game = Game;

}(window));