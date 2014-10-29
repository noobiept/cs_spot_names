(function(window)
{
function Map( mapName )
{
var background = new createjs.Bitmap( G.PRELOAD.getResult( mapName + '_background' ) );

G.BACKGROUND_STAGE.addChild( background );

var mapSpots = G.PRELOAD.getResult( mapName + '_images_position' );
var length = mapSpots.length;

var spots = [];

for (var a = 0 ; a < length ; a++)
    {
    var spotInfo = mapSpots[ a ];
    var identifier = mapName + '_' + spotInfo.name;

    var spot = new Spot( identifier, spotInfo.name, spotInfo.x, spotInfo.y );

    spots.push( spot );
    }

this.map_spots = mapSpots;
this.background = background;
this.map_name = mapName;
this.spots = spots;
}


Map.prototype.getPartNames = function()
{
var names = [];
var map = this.map_spots;

var length = map.length;

for (var a = 0 ; a < length ; a++)
    {
    names.push( map[ a ].name );
    }

return names;
};


Map.prototype.clear = function()
{
GameMenu.clear();

G.BACKGROUND_STAGE.removeChild( this.background );

var length = this.spots.length;

for (var a = 0 ; a < length ; a++)
    {
    this.spots[ a ].clear();
    }

this.spots.length = 0;
this.background = null;
};




window.Map = Map;

}(window));