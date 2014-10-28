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

var manifest = {
    path: BASE_URL + 'maps/dust2/',
    manifest: [
        { id: 'dust2_images_position', src: 'images_position.json' },
        { id: 'dust2_background', src: 'background.png' },
        { id: 'dust2_a_ramp', src: 'a_ramp.png' },
        { id: 'dust2_a_ramp_selected', src: 'a_ramp_selected.png' },
        { id: 'dust2_b_doors', src: 'b_doors.png' },
        { id: 'dust2_b_doors_selected', src: 'b_doors_selected.png' },
        { id: 'dust2_back_of_a', src: 'back_of_a.png' },
        { id: 'dust2_back_of_a_selected', src: 'back_of_a_selected.png' },
        { id: 'dust2_bombsite_a', src: 'bombsite_a.png' },
        { id: 'dust2_bombsite_a_selected', src: 'bombsite_a_selected.png' },
        { id: 'dust2_bombsite_b', src: 'bombsite_b.png' },
        { id: 'dust2_bombsite_b_selected', src: 'bombsite_b_selected.png' },
        { id: 'dust2_catwalk', src: 'catwalk.png' },
        { id: 'dust2_catwalk_selected', src: 'catwalk_selected.png' },
        { id: 'dust2_ct_start', src: 'ct_start.png' },
        { id: 'dust2_ct_start_selected', src: 'ct_start_selected.png' },
        { id: 'dust2_extended_a', src: 'extended_a.png' },
        { id: 'dust2_extended_a_selected', src: 'extended_a_selected.png' },
        { id: 'dust2_hole', src: 'hole.png' },
        { id: 'dust2_hole_selected', src: 'hole_selected.png' },
        { id: 'dust2_long_a', src: 'long_a.png' },
        { id: 'dust2_long_a_selected', src: 'long_a_selected.png' },
        { id: 'dust2_long_doors', src: 'long_doors.png' },
        { id: 'dust2_long_doors_selected', src: 'long_doors_selected.png' },
        { id: 'dust2_lower_tunnel', src: 'lower_tunnel.png' },
        { id: 'dust2_lower_tunnel_selected', src: 'lower_tunnel_selected.png' },
        { id: 'dust2_mid_doors', src: 'mid_doors.png' },
        { id: 'dust2_mid_doors_selected', src: 'mid_doors_selected.png' },
        { id: 'dust2_middle', src: 'middle.png' },
        { id: 'dust2_middle_selected', src: 'middle_selected.png' },
        { id: 'dust2_outside_long', src: 'outside_long.png' },
        { id: 'dust2_outside_long_selected', src: 'outside_long_selected.png' },
        { id: 'dust2_outside_tunnel', src: 'outside_tunnel.png' },
        { id: 'dust2_outside_tunnel_selected', src: 'outside_tunnel_selected.png' },
        { id: 'dust2_pit', src: 'pit.png' },
        { id: 'dust2_pit_selected', src: 'pit_selected.png' },
        { id: 'dust2_short_stairs', src: 'short_stairs.png' },
        { id: 'dust2_short_stairs_selected', src: 'short_stairs_selected.png' },
        { id: 'dust2_t_ramp', src: 't_ramp.png' },
        { id: 'dust2_t_ramp_selected', src: 't_ramp_selected.png' },
        { id: 'dust2_t_start', src: 't_start.png' },
        { id: 'dust2_t_start_selected', src: 't_start_selected.png' },
        { id: 'dust2_top_of_mid', src: 'top_of_mid.png' },
        { id: 'dust2_top_of_mid_selected', src: 'top_of_mid_selected.png' },
        { id: 'dust2_tunnel_stairs', src: 'tunnel_stairs.png' },
        { id: 'dust2_tunnel_stairs_selected', src: 'tunnel_stairs_selected.png' },
        { id: 'dust2_under_a', src: 'under_a.png' },
        { id: 'dust2_under_a_selected', src: 'under_a_selected.png' },
        { id: 'dust2_upper_tunnel', src: 'upper_tunnel.png' },
        { id: 'dust2_upper_tunnel_selected', src: 'upper_tunnel_selected.png' }
    ]
};


G.PRELOAD = new createjs.LoadQueue();
G.PRELOAD.on( 'complete', function( event )
    {
    MainMenu.open();
    });
G.PRELOAD.loadManifest( manifest, true );
};

