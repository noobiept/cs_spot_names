/*global G, createjs, Spot*/

(function(window)
{
function Map( mapName )
{
var background = new createjs.Bitmap( G.PRELOAD.getResult( mapName + '_background' ) );

G.BACKGROUND_STAGE.addChild( background );

var mapSpots = G.PRELOAD.getResult( mapName + '_spots_info' );
var length = mapSpots.length;

var spots = [];

for (var a = 0 ; a < length ; a++)
    {
    var spotInfo = mapSpots[ a ];
    var identifier = mapName + '_' + spotInfo.id;

    var spot = new Spot( identifier, spotInfo.id, spotInfo.x, spotInfo.y, spotInfo.name );

    spots.push( spot );
    }

this.map_spots = mapSpots;
this.background = background;
this.map_name = mapName;
this.spots = spots;
}


Map.prototype.getSpotsNames = function()
{
var names = [];
var map = this.map_spots;

var length = map.length;

for (var a = 0 ; a < length ; a++)
    {
    var info = map[ a ];

    names.push({
        id: info.id,
        name: Spot.updateName( info.name, true )
        });
    }

return names;
};



Map.prototype.clear = function()
{
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