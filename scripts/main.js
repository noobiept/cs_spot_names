var G = {
    BACKGROUND_CANVAS: null,
    MAIN_CANVAS: null,
    BACKGROUND_STAGE: null,
    MAIN_STAGE: null,
    PRELOAD: null,
    MAP: null
};



window.onload = function()
{
G.BACKGROUND_CANVAS = document.querySelector( '#BackgroundCanvas' );
G.MAIN_CANVAS = document.querySelector( '#MainCanvas' );

G.MAIN_CANVAS.width = G.BACKGROUND_CANVAS.width = 1024;
G.MAIN_CANVAS.height = G.BACKGROUND_CANVAS.height = 1024;

G.BACKGROUND_STAGE = new createjs.Stage( G.BACKGROUND_CANVAS );

G.MAIN_STAGE = new createjs.Stage( G.MAIN_CANVAS );
G.MAIN_STAGE.enableMouseOver();


var manifest = [
        { id: 'dust2_background', src: 'maps/dust2/background.png' },
        { id: 'dust2_a_ramp', src: 'maps/dust2/a_ramp.png' },
        { id: 'dust2_a_ramp_selected', src: 'maps/dust2/a_ramp_selected.png' },
        { id: 'dust2_b_doors', src: 'maps/dust2/b_doors.png' },
        { id: 'dust2_b_doors_selected', src: 'maps/dust2/b_doors_selected.png' },
        { id: 'dust2_back_of_a', src: 'maps/dust2/back_of_a.png' },
        { id: 'dust2_back_of_a_selected', src: 'maps/dust2/back_of_a_selected.png' },
        { id: 'dust2_bombsite_a', src: 'maps/dust2/bombsite_a.png' },
        { id: 'dust2_bombsite_a_selected', src: 'maps/dust2/bombsite_a_selected.png' },
        { id: 'dust2_bombsite_b', src: 'maps/dust2/bombsite_b.png' },
        { id: 'dust2_bombsite_b_selected', src: 'maps/dust2/bombsite_b_selected.png' },
        { id: 'dust2_catwalk', src: 'maps/dust2/catwalk.png' },
        { id: 'dust2_catwalk_selected', src: 'maps/dust2/catwalk_selected.png' },
        { id: 'dust2_ct_start', src: 'maps/dust2/ct_start.png' },
        { id: 'dust2_ct_start_selected', src: 'maps/dust2/ct_start_selected.png' },
        { id: 'dust2_extended_a', src: 'maps/dust2/extended_a.png' },
        { id: 'dust2_extended_a_selected', src: 'maps/dust2/extended_a_selected.png' },
        { id: 'dust2_hole', src: 'maps/dust2/hole.png' },
        { id: 'dust2_hole_selected', src: 'maps/dust2/hole_selected.png' },
        { id: 'dust2_long_a', src: 'maps/dust2/long_a.png' },
        { id: 'dust2_long_a_selected', src: 'maps/dust2/long_a_selected.png' },
        { id: 'dust2_long_doors', src: 'maps/dust2/long_doors.png' },
        { id: 'dust2_long_doors_selected', src: 'maps/dust2/long_doors_selected.png' },
        { id: 'dust2_lower_tunnel', src: 'maps/dust2/lower_tunnel.png' },
        { id: 'dust2_lower_tunnel_selected', src: 'maps/dust2/lower_tunnel_selected.png' },
        { id: 'dust2_mid_doors', src: 'maps/dust2/mid_doors.png' },
        { id: 'dust2_mid_doors_selected', src: 'maps/dust2/mid_doors_selected.png' },
        { id: 'dust2_middle', src: 'maps/dust2/middle.png' },
        { id: 'dust2_middle_selected', src: 'maps/dust2/middle_selected.png' },
        { id: 'dust2_outside_long', src: 'maps/dust2/outside_long.png' },
        { id: 'dust2_outside_long_selected', src: 'maps/dust2/outside_long_selected.png' },
        { id: 'dust2_outside_tunnel', src: 'maps/dust2/outside_tunnel.png' },
        { id: 'dust2_outside_tunnel_selected', src: 'maps/dust2/outside_tunnel_selected.png' },
        { id: 'dust2_pit', src: 'maps/dust2/pit.png' },
        { id: 'dust2_pit_selected', src: 'maps/dust2/pit_selected.png' },
        { id: 'dust2_short_stairs', src: 'maps/dust2/short_stairs.png' },
        { id: 'dust2_short_stairs_selected', src: 'maps/dust2/short_stairs_selected.png' },
        { id: 'dust2_t_ramp', src: 'maps/dust2/t_ramp.png' },
        { id: 'dust2_t_ramp_selected', src: 'maps/dust2/t_ramp_selected.png' },
        { id: 'dust2_t_start', src: 'maps/dust2/t_start.png' },
        { id: 'dust2_t_start_selected', src: 'maps/dust2/t_start_selected.png' },
        { id: 'dust2_top_of_mid', src: 'maps/dust2/top_of_mid.png' },
        { id: 'dust2_top_of_mid_selected', src: 'maps/dust2/top_of_mid_selected.png' },
        { id: 'dust2_tunnel_stairs', src: 'maps/dust2/tunnel_stairs.png' },
        { id: 'dust2_tunnel_stairs_selected', src: 'maps/dust2/tunnel_stairs_selected.png' },
        { id: 'dust2_under_a', src: 'maps/dust2/under_a.png' },
        { id: 'dust2_under_a_selected', src: 'maps/dust2/under_a_selected.png' },
        { id: 'dust2_upper_tunnel', src: 'maps/dust2/upper_tunnel.png' },
        { id: 'dust2_upper_tunnel_selected', src: 'maps/dust2/upper_tunnel_selected.png' }
    ];

G.PRELOAD = new createjs.LoadQueue();
G.PRELOAD.on( 'complete', start );
G.PRELOAD.loadManifest( manifest, true );
};


function start()
{
G.MAP = new Map( 'dust2' );

G.BACKGROUND_STAGE.update();
G.MAIN_STAGE.update();

//G.STAGE.update();
//createjs.Ticker.on( 'tick', tick );
}


function tick()
{
G.MAIN_STAGE.update();
}