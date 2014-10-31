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
G.BACKGROUND_CANVAS = document.querySelector( '#BackgroundCanvas' );
G.MAIN_CANVAS = document.querySelector( '#MainCanvas' );

    // scale the canvas/stage to fit the window's dimensions
var scale = 1;

G.MAIN_CANVAS.width = G.BACKGROUND_CANVAS.width = 1024 * scale;
G.MAIN_CANVAS.height = G.BACKGROUND_CANVAS.height = 1024 * scale;

G.BACKGROUND_STAGE = new createjs.Stage( G.BACKGROUND_CANVAS );

G.MAIN_STAGE = new createjs.Stage( G.MAIN_CANVAS );
G.MAIN_STAGE.enableMouseOver();

G.MAIN_STAGE.scaleX = G.BACKGROUND_STAGE.scaleX = scale;
G.MAIN_STAGE.scaleY = G.BACKGROUND_STAGE.scaleY = scale;

var canvasContainer = document.querySelector( '#CanvasContainer' );

canvasContainer.style.width = (1024 * scale) + 'px';
canvasContainer.style.height = (1024 * scale) + 'px';

GameMenu.init();
MainMenu.init();
HighScore.init();

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



G.PRELOAD = new createjs.LoadQueue();
G.PRELOAD.loadManifest( dust2Manifest, false );
G.PRELOAD.loadManifest( infernoManifest, false );
G.PRELOAD.on( 'complete', function( event )
    {
    MainMenu.open();
    });
G.PRELOAD.load();
};

