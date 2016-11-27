/// <reference path="../libraries/utilities.1.9.0.d.ts" />


interface MapsInfo {
    [ mapName: string ]: SVGSVGElement;
}


window.onload = function()
{
AppStorage.getData( [ 'cs_spot_names_high_score', 'cs_spot_names_has_run', 'cs_spot_names_show_help' ], initApp );
};


/**
 * Initialize the application (after the data has been loaded from the storage).
 */
function initApp( data: AppStorage.Data )
{
GameMenu.init( data[ 'cs_spot_names_show_help' ] );
HighScore.init( data[ 'cs_spot_names_high_score' ] );

    // determine if this is the first run of the program or not
var firstRun = false;

if ( !data[ 'cs_spot_names_has_run' ] )
    {
    firstRun = true;
    AppStorage.setData({ 'cs_spot_names_has_run': true });
    }

    // pre-load the maps (SVG files)
var maps = [
        { id: 'cache', src: 'maps/cache/cache.svg' },
        { id: 'cobblestone', src: 'maps/cobblestone/cobblestone.svg' },
        { id: 'dust2', src: 'maps/dust2/dust2.svg' },
        { id: 'inferno', src: 'maps/inferno/inferno.svg' },
        { id: 'mirage', src: 'maps/mirage/mirage.svg' },
        { id: 'overpass', src: 'maps/overpass/overpass.svg' },
        { id: 'train', src: 'maps/train/train.svg' }
    ];
var mapsInfo: MapsInfo = {};

var loadingMessage = new Message( 'Loading..' );
var total = maps.length;
var loading = 0;        // count the number of elements still loading (so we know when its done, to start the game)
var loaded = function( response: SVGSVGElement, mapName: string )
    {
    mapsInfo[ mapName ] = response;
    loading--;
    loadingMessage.setText( 'Loading.. ' + (total - loading) + '/' + total );

        // all elements have finished loading
    if ( loading <= 0 )
        {
        loadingMessage.clear();
        MainMenu.init();
        Game.init( mapsInfo );

        if ( firstRun )
            {
            MainMenu.openHelp();
            }

        else
            {
            MainMenu.open();
            }
        }
    };


for (let a = 0 ; a < total ; a++)
    {
    loading++;

    var request = new XMLHttpRequest();
    let info = maps[ a ];

    request.open( 'get', info.src, true );
    request.responseType ='document';
    request.addEventListener( 'load', function()
        {
        loaded( this.response.documentElement, info.id );
        });
    request.send();
    }
}
