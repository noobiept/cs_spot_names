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

var dust2Manifest = {
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


var infernoManifest = {
    path: BASE_URL + 'maps/inferno/',
    manifest: [
        { id: 'inferno_images_position', src: 'images_position.json' },
        { id: 'inferno_background', src: 'background.png' },
        { id: "inferno_apartments", src: 'apartments.png' },
        { id: "inferno_apartments_selected", src: 'apartments_selected.png' },
        { id: "inferno_arch", src: 'arch.png' },
        { id: "inferno_arch_selected", src: 'arch_selected.png' },
        { id: "inferno_back_alley", src: 'back_alley.png' },
        { id: "inferno_back_alley_selected", src: 'back_alley_selected.png' },
        { id: "inferno_back_hall", src: 'back_hall.png' },
        { id: "inferno_back_hall_selected", src: 'back_hall_selected.png' },
        { id: "inferno_balcony", src: 'balcony.png' },
        { id: "inferno_balcony_selected", src: 'balcony_selected.png' },
        { id: "inferno_banana", src: 'banana.png' },
        { id: "inferno_banana_selected", src: 'banana_selected.png' },
        { id: "inferno_bedroom", src: 'bedroom.png' },
        { id: "inferno_bedroom_selected", src: 'bedroom_selected.png' },
        { id: "inferno_bombsite_a", src: 'bombsite_a.png' },
        { id: "inferno_bombsite_a_selected", src: 'bombsite_a_selected.png' },
        { id: "inferno_bombsite_b", src: 'bombsite_b.png' },
        { id: "inferno_bombsite_b_selected", src: 'bombsite_b_selected.png' },
        { id: "inferno_bridge", src: 'bridge.png' },
        { id: "inferno_bridge_selected", src: 'bridge_selected.png' },
        { id: "inferno_crawlspace", src: 'crawlspace.png' },
        { id: "inferno_crawlspace_selected", src: 'crawlspace_selected.png' },
        { id: "inferno_ct_start", src: 'ct_start.png' },
        { id: "inferno_ct_start_selected", src: 'ct_start_selected.png' },
        { id: "inferno_deck", src: 'deck.png' },
        { id: "inferno_deck_selected", src: 'deck_selected.png' },
        { id: "inferno_garden", src: 'garden.png' },
        { id: "inferno_garden_selected", src: 'garden_selected.png' },
        { id: "inferno_graveyard", src: 'graveyard.png' },
        { id: "inferno_graveyard_selected", src: 'graveyard_selected.png' },
        { id: "inferno_hay", src: 'hay.png' },
        { id: "inferno_hay_selected", src: 'hay_selected.png' },
        { id: "inferno_library", src: 'library.png' },
        { id: "inferno_library_selected", src: 'library_selected.png' },
        { id: "inferno_lower_mid", src: 'lower_mid.png' },
        { id: "inferno_lower_mid_selected", src: 'lower_mid_selected.png' },
        { id: "inferno_middle", src: 'middle.png' },
        { id: "inferno_middle_selected", src: 'middle_selected.png' },
        { id: "inferno_pit", src: 'pit.png' },
        { id: "inferno_pit_selected", src: 'pit_selected.png' },
        { id: "inferno_quad", src: 'quad.png' },
        { id: "inferno_quad_selected", src: 'quad_selected.png' },
        { id: "inferno_ruins", src: 'ruins.png' },
        { id: "inferno_ruins_selected", src: 'ruins_selected.png' },
        { id: "inferno_second_mid", src: 'second_mid.png' },
        { id: "inferno_second_mid_selected", src: 'second_mid_selected.png' },
        { id: "inferno_t_stairs", src: 't_stairs.png' },
        { id: "inferno_t_stairs_selected", src: 't_stairs_selected.png' },
        { id: "inferno_t_start", src: 't_start.png' },
        { id: "inferno_t_start_selected", src: 't_start_selected.png' },
        { id: "inferno_top_of_mid", src: 'top_of_mid.png' },
        { id: "inferno_top_of_mid_selected", src: 'top_of_mid_selected.png' },
        { id: "inferno_truck", src: 'truck.png' },
        { id: "inferno_truck_selected", src: 'truck_selected.png' },
        { id: "inferno_upstairs", src: 'upstairs.png' },
        { id: "inferno_upstairs_selected", src: 'upstairs_selected.png' }
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

