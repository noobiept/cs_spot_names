/*global G, Spot*/
'use strict';

function Map( mapName, svg )
{
var spots = svg.querySelectorAll( '.Spot' );
var all = [];

var mainContainer = document.getElementById( 'MainContainer' );
mainContainer.insertBefore( svg, mainContainer.firstChild );

for (var a = 0 ; a < spots.length ; a++)
    {
    var path = spots[ a ];

        // create the text element
    var textElement = document.createElementNS( 'http://www.w3.org/2000/svg', 'text' );
    textElement.setAttribute( 'class', 'Text' );

    svg.appendChild( textElement );

    var spot = new Spot( path, textElement );
    all.push( spot );
    }

this.svg = svg;
this.spots = all;
this.map_name = mapName;
}


/**
 * Return a list with all the spot names.
 */
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


/**
 * Remove the map.
 */
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


/**
 * Get a spot object.
 */
Map.prototype.getSpot = function( name )
{
for (var a = 0 ; a < this.spots.length ; a++)
    {
    var spot = this.spots[ a ];

    if ( name === spot.getName() )
        {
        return spot;
        }
    }

return null;
};
