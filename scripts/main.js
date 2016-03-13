/*global createjs, GameMenu, HighScore, Message, MainMenu, AppStorage*/

var G = {
    BACKGROUND_CANVAS: null,
    MAIN_CANVAS: null,
    BACKGROUND_STAGE: null,
    MAIN_STAGE: null,
    PRELOAD: null,
    MAP: null
};

var BASE_URL = '';


window.onload = function()
{
AppStorage.getData( [ 'cs_spot_names_high_score' ], initApp );
};


function initApp( data )
{
G.BACKGROUND_CANVAS = document.querySelector( '#BackgroundCanvas' );
G.MAIN_CANVAS = document.querySelector( '#MainCanvas' );

G.BACKGROUND_STAGE = new createjs.Stage( G.BACKGROUND_CANVAS );

G.MAIN_STAGE = new createjs.Stage( G.MAIN_CANVAS );
G.MAIN_STAGE.enableMouseOver();

GameMenu.init();
HighScore.init( data[ 'cs_spot_names_high_score' ] );

var mainMenuManifest = {
    path: BASE_URL + 'maps/',
    manifest: [
        { id: 'cache_menu', src: 'cache/de_cache_200.jpg' },
        { id: 'dust2_menu', src: 'dust2/de_dust2_200.jpg' },
        { id: 'inferno_menu', src: 'inferno/de_inferno_200.jpg' },
        { id: 'mirage_menu', src: 'mirage/de_mirage_200.jpg' }
    ]
};

var dust2Manifest = {
    path: BASE_URL + 'maps/dust2/',
    manifest: [
        { id: 'dust2_spots_info', src: 'spots_info.json' },
        { id: 'dust2_background', src: 'background.png' },
        { id: 'dust2_a_ramp', src: 'a_ramp.png' },
        { id: 'dust2_b_doors', src: 'b_doors.png' },
        { id: 'dust2_back_of_a', src: 'back_of_a.png' },
        { id: 'dust2_bombsite_a', src: 'bombsite_a.png' },
        { id: 'dust2_bombsite_b', src: 'bombsite_b.png' },
        { id: 'dust2_catwalk', src: 'catwalk.png' },
        { id: 'dust2_ct_start', src: 'ct_start.png' },
        { id: 'dust2_extended_a', src: 'extended_a.png' },
        { id: 'dust2_hole', src: 'hole.png' },
        { id: 'dust2_long_a', src: 'long_a.png' },
        { id: 'dust2_long_doors', src: 'long_doors.png' },
        { id: 'dust2_lower_tunnel', src: 'lower_tunnel.png' },
        { id: 'dust2_mid_doors', src: 'mid_doors.png' },
        { id: 'dust2_middle', src: 'middle.png' },
        { id: 'dust2_outside_long', src: 'outside_long.png' },
        { id: 'dust2_outside_tunnel', src: 'outside_tunnel.png' },
        { id: 'dust2_pit', src: 'pit.png' },
        { id: 'dust2_short_stairs', src: 'short_stairs.png' },
        { id: 'dust2_t_ramp', src: 't_ramp.png' },
        { id: 'dust2_t_start', src: 't_start.png' },
        { id: 'dust2_top_of_mid', src: 'top_of_mid.png' },
        { id: 'dust2_tunnel_stairs', src: 'tunnel_stairs.png' },
        { id: 'dust2_under_a', src: 'under_a.png' },
        { id: 'dust2_upper_tunnel', src: 'upper_tunnel.png' }
    ]
};


var infernoManifest = {
    path: BASE_URL + 'maps/inferno/',
    manifest: [
        { id: 'inferno_spots_info', src: 'spots_info.json' },
        { id: 'inferno_background', src: 'background.png' },
        { id: "inferno_apartments", src: 'apartments.png' },
        { id: "inferno_arch", src: 'arch.png' },
        { id: "inferno_back_alley", src: 'back_alley.png' },
        { id: "inferno_back_hall", src: 'back_hall.png' },
        { id: "inferno_balcony", src: 'balcony.png' },
        { id: "inferno_banana", src: 'banana.png' },
        { id: "inferno_bedroom", src: 'bedroom.png' },
        { id: "inferno_bombsite_a", src: 'bombsite_a.png' },
        { id: "inferno_bombsite_b", src: 'bombsite_b.png' },
        { id: "inferno_bridge", src: 'bridge.png' },
        { id: "inferno_crawlspace", src: 'crawlspace.png' },
        { id: "inferno_ct_start", src: 'ct_start.png' },
        { id: "inferno_deck", src: 'deck.png' },
        { id: "inferno_garden", src: 'garden.png' },
        { id: "inferno_graveyard", src: 'graveyard.png' },
        { id: "inferno_hay", src: 'hay.png' },
        { id: "inferno_library", src: 'library.png' },
        { id: "inferno_lower_mid", src: 'lower_mid.png' },
        { id: "inferno_middle", src: 'middle.png' },
        { id: "inferno_pit", src: 'pit.png' },
        { id: "inferno_quad", src: 'quad.png' },
        { id: "inferno_ruins", src: 'ruins.png' },
        { id: "inferno_second_mid", src: 'second_mid.png' },
        { id: "inferno_t_stairs", src: 't_stairs.png' },
        { id: "inferno_t_start", src: 't_start.png' },
        { id: "inferno_top_of_mid", src: 'top_of_mid.png' },
        { id: "inferno_truck", src: 'truck.png' },
        { id: "inferno_upstairs", src: 'upstairs.png' }
    ]
};


var cacheManifest = {
    path: BASE_URL + 'maps/cache/',
    manifest: [
        { id: 'cache_spots_info', src: 'spots_info.json' },
        { id: 'cache_background', src: 'background.png' },
        { id: 'cache_back', src: 'back.png' },
        { id: 'cache_bombsite_a', src: 'bombsite_a.png' },
        { id: 'cache_bombsite_b', src: 'bombsite_b.png' },
        { id: 'cache_catwalk', src: 'catwalk.png' },
        { id: 'cache_connector', src: 'connector.png' },
        { id: 'cache_ct_start', src: 'ct_start.png' },
        { id: 'cache_ducts', src: 'ducts.png' },
        { id: 'cache_dumpster', src: 'dumpster.png' },
        { id: 'cache_entrance', src: 'entrance.png' },
        { id: 'cache_garage', src: 'garage.png' },
        { id: 'cache_long_a', src: 'long_a.png' },
        { id: 'cache_long_hall', src: 'long_hall.png' },
        { id: 'cache_middle', src: 'middle.png' },
        { id: 'cache_rafters', src: 'rafters.png' },
        { id: 'cache_ramp', src: 'ramp.png' },
        { id: 'cache_storage_room', src: 'storage_room.png' },
        { id: 'cache_t_ramp', src: 't_ramp.png' },
        { id: 'cache_t_start', src: 't_start.png' },
        { id: 'cache_truck', src: 'truck.png' },
        { id: 'cache_upstairs', src: 'upstairs.png' },
        { id: 'cache_warehouse', src: 'warehouse.png' },
        { id: 'cache_window', src: 'window.png' }
    ]
};


var mirageManifest = {
    path: BASE_URL + 'maps/mirage/',
    manifest: [
        { id: 'mirage_spots_info', src: 'spots_info.json' },
        { id: 'mirage_background', src: 'background.png' },
        { id: 'mirage_apartments', src: 'apartments.png' },
        { id: 'mirage_back_alley', src: 'back_alley.png' },
        { id: 'mirage_balcony', src: 'balcony.png' },
        { id: 'mirage_bombsite_a', src: 'bombsite_a.png' },
        { id: 'mirage_bombsite_b', src: 'bombsite_b.png' },
        { id: 'mirage_catwalk', src: 'catwalk.png' },
        { id: 'mirage_connector', src: 'connector.png' },
        { id: 'mirage_ct_start', src: 'ct_start.png' },
        { id: 'mirage_house', src: 'house.png' },
        { id: 'mirage_ladder', src: 'ladder.png' },
        { id: 'mirage_middle', src: 'middle.png' },
        { id: 'mirage_palace_alley', src: 'palace_alley.png' },
        { id: 'mirage_palace_interior', src: 'palace_interior.png' },
        { id: 'mirage_scaffolding', src: 'scaffolding.png' },
        { id: 'mirage_shop', src: 'shop.png' },
        { id: 'mirage_side_alley', src: 'side_alley.png' },
        { id: 'mirage_snipers_nest', src: 'snipers_nest.png' },
        { id: 'mirage_t_start', src: 't_start.png' },
        { id: 'mirage_truck', src: 'truck.png' },
        { id: 'mirage_tunnel', src: 'tunnel.png' },
        { id: 'mirage_tunnel_stairs', src: 'tunnel_stairs.png' }
    ]
};


var loadingMessage = new Message( '' );

G.PRELOAD = new createjs.LoadQueue();
G.PRELOAD.loadManifest( mainMenuManifest, false );
G.PRELOAD.loadManifest( dust2Manifest, false );
G.PRELOAD.loadManifest( infernoManifest, false );
G.PRELOAD.loadManifest( cacheManifest, false );
G.PRELOAD.loadManifest( mirageManifest, false );
G.PRELOAD.on( 'progress', function( event )
    {
    loadingMessage.setText( 'Loading.. ' + (event.progress * 100 | 0) + '%' );
    });
G.PRELOAD.on( 'complete', function( event )
    {
    loadingMessage.clear();
    MainMenu.init();
    MainMenu.open();
    });
G.PRELOAD.load();
}
