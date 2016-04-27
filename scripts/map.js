/*global G, createjs, Spot*/


function Map( mapName )
{
var svg = G.PRELOAD.getResult( 'dust2' );
var spots = svg.querySelectorAll( '.Spot' );

for (var a = 0 ; a < spots.length ; a++)
    {
    var spot = spots[ a ];

    spot.onmouseover = function()
        {
        this.style.fillOpacity = 0.3;
        };
    spot.onmouseout = function()
        {
        this.style.fillOpacity = 0;
        };
    spot.style.fillOpacity = 0;
    }

var canvasContainer = document.getElementById( 'CanvasContainer' );
canvasContainer.insertBefore( svg, canvasContainer.firstChild );

var mapSpots = G.PRELOAD.getResult( mapName + '_spots_info' );

this.map_spots = mapSpots;
this.map_name = mapName;
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
var length = this.spots.length;

for (var a = 0 ; a < length ; a++)
    {
    this.spots[ a ].clear();
    }

this.spots.length = 0;
this.background = null;
};
