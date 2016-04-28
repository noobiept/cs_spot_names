/*global G, Spot*/


function Map( mapName )
{
var svg = G.PRELOAD.getResult( mapName );
var spots = svg.querySelectorAll( '.Spot' );
var all = [];

var canvasContainer = document.getElementById( 'CanvasContainer' );
canvasContainer.insertBefore( svg, canvasContainer.firstChild );

for (var a = 0 ; a < spots.length ; a++)
    {
    var path = spots[ a ];

        // create the text element
    var textElement = document.createElementNS( 'http://www.w3.org/2000/svg', 'text' );
    textElement.setAttribute( 'class', 'Text' );

    svg.firstChild.appendChild( textElement );  // there's 2 svgs

    var spot = new Spot( path, textElement );
    all.push( spot );
    }

this.svg = svg;
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

    names.push( element.getAttribute( 'displayName' ) );
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

this.svg.parentElement.removeChild( this.svg );
this.svg = null;
};
