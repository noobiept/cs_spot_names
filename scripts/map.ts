class Map
{
private svg: SVGSVGElement;
private spots: Spot[];
private map_name: string;


constructor( mapName: string, svg: SVGSVGElement )
    {
    var spots = svg.querySelectorAll( '.Spot' );
    var all: Spot[] = [];

    for (var a = 0 ; a < spots.length ; a++)
        {
        var path = <SVGPathElement> spots[ a ];

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
 * Add the SVG element to the start of the container.
 */
attachTo( container: HTMLElement )
    {
    container.insertBefore( this.svg, container.firstChild );
    }


/**
 * Remove the SVG element from its container.
 */
detach()
    {
    this.svg.parentElement.removeChild( this.svg );
    }


/**
 * Return a list with all the spot names.
 */
getSpotsNames()
    {
    var names: string[] = [];
    var map = this.spots;

    var length = map.length;

    for (var a = 0 ; a < length ; a++)
        {
        names.push( map[ a ].getName() );
        }

    return names;
    }


/**
 * Reset the map state to the initial values.
 */
reset()
    {
    for (let a = 0 ; a < this.spots.length ; a++)
        {
        this.spots[ a ].reset();
        }
    }


/**
 * Get a spot object.
 */
getSpot( name: string )
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
    }


/**
 * Return the map's name.
 */
getMapName()
    {
    return this.map_name;
    }
}
