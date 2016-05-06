/*global createjs, GameMenu, HighScore, Message, MainMenu, AppStorage*/
'use strict';

var G = {
    PRELOAD: null
};


window.onload = function()
{
AppStorage.getData( [ 'cs_spot_names_high_score', 'cs_spot_names_has_run', 'cs_spot_names_show_help' ], initApp );
};


/**
 * Initialize the application (after the data has been loaded from the storage).
 */
function initApp( data )
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

var manifest = {
    path: 'maps/',
    manifest: [
        { id: 'cache_menu', src: 'cache/de_cache_200.jpg' },
        { id: 'dust2_menu', src: 'dust2/de_dust2_200.jpg' },
        { id: 'inferno_menu', src: 'inferno/de_inferno_200.jpg' },
        { id: 'mirage_menu', src: 'mirage/de_mirage_200.jpg' },
        { id: 'overpass_menu', src: 'overpass/de_overpass_200.jpg' },

        { id: 'dust2', src: 'dust2/dust2.svg' },
        { id: 'cache', src: 'cache/cache.svg' },
        { id: 'inferno', src: 'inferno/inferno.svg' },
        { id: 'mirage', src: 'mirage/mirage.svg' },
        { id: 'overpass', src: 'overpass/overpass.svg' }
    ]
};

var loadingMessage = new Message( '' );

G.PRELOAD = new createjs.LoadQueue();
G.PRELOAD.loadManifest( manifest, false );
G.PRELOAD.on( 'progress', function( event )
    {
    loadingMessage.setText( 'Loading.. ' + (event.progress * 100 | 0) + '%' );
    });
G.PRELOAD.on( 'complete', function( event )
    {
    loadingMessage.clear();
    MainMenu.init();

    if ( firstRun )
        {
        MainMenu.openHelp();
        }

    else
        {
        MainMenu.open();
        }
    });
G.PRELOAD.load();
}
