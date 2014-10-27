(function(window)
{
function Map( mapName )
{
var background = new createjs.Bitmap( G.PRELOAD.getResult( mapName + '_background' ) );

G.BACKGROUND_STAGE.addChild( background );

var mapSpots = MAPS[ mapName ];
var length = mapSpots.length;

var spots = [];

for (var a = 0 ; a < length ; a++)
    {
    var spotInfo = mapSpots[ a ];
    var identifier = mapName + '_' + spotInfo.name;

    var spot = new Spot( identifier, spotInfo.x, spotInfo.y );

    spots.push( spot );
    }

this.spots = spots;
}




var MAPS = {
    dust2: [
        { name: 'a_ramp', x: 848, y: 121 },
        { name: 'b_doors', x: 257, y: 145 },
        { name: 'back_of_a', x: 787, y: 64 },
        { name: 'bombsite_a', x: 753, y: 141 },
        { name: 'bombsite_b', x: 49, y: 13 },
        { name: 'catwalk', x: 496, y: 404 },
        { name: 'ct_start', x: 499, y: 182 },
        { name: 'extended_a', x: 616, y: 131 },
        { name: 'hole', x: 236, y: 145 },
        { name: 'long_a', x: 838, y: 244 },
        { name: 'long_doors', x: 673, y: 491 },
        { name: 'lower_tunnel', x: 275, y: 417 },
        { name: 'mid_doors', x: 412, y: 210 },
        { name: 'middle', x: 431, y: 422 },
        { name: 'outside_long', x: 583, y: 659 },
        { name: 'outside_tunnel', x: 80, y: 607 },
        { name: 'pit', x: 848, y: 591 },
        { name: 'short_stairs', x: 610, y: 221 },
        { name: 't_ramp', x: 48, y: 794 },
        { name: 't_start', x: 147, y: 794 },
        { name: 'top_of_mid', x: 393, y: 593 },
        { name: 'tunnel_stairs', x: 265, y: 469 },
        { name: 'under_a', x: 681, y: 221 },
        { name: 'upper_tunnel', x: 54, y: 358 }
    ]
};


window.Map = Map;

}(window));