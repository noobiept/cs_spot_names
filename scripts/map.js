/*global G, Spot*/


function Map( mapName )
{
var svg = G.PRELOAD.getResult( mapName );
var spots = svg.querySelectorAll( '.Spot' );
var all = [];

for (var a = 0 ; a < spots.length ; a++)
    {
    var path = spots[ a ];
    var text = svg.querySelector( '#' + path.getAttribute( 'id' ) + 'Text' );
    var spot = new Spot( path, text );

    all.push( spot );
    }

var canvasContainer = document.getElementById( 'CanvasContainer' );
canvasContainer.insertBefore( svg, canvasContainer.firstChild );

this.spots = all;
this.map_name = mapName;
}


Map.prototype.getSpotsNames = function()
{
var names = [];
var map = this.spots;

var length = map.length;

for (var a = 0 ; a < length ; a++)
    {
    var element = map[ a ].path_element;

    names.push({
        id: element.getAttribute( 'id' ),
        name: Spot.updateName( element.getAttribute( 'displayName' ), true )
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
