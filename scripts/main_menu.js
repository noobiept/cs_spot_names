(function(window)
{
function MainMenu()
{

}

var MENU_ELEMENT = null;
var HIGH_SCORE_ELEMENT = null;

MainMenu.init = function()
{
MENU_ELEMENT = document.querySelector( '#MainMenu' );
HIGH_SCORE_ELEMENT = document.querySelector( '#HighScore' );

    // start the normal mode
var start = MENU_ELEMENT.querySelector( '#Start' );

start.onclick = function()
    {
    MainMenu.close();
    Game.start();
    };

    // show the high-scores
var highScore = MENU_ELEMENT.querySelector( '#OpenHighScore' );

highScore.onclick = function()
    {
    MainMenu.close();
    MainMenu.openHighScore();
    };

var back = HIGH_SCORE_ELEMENT.querySelector( '.back' );

back.onclick = function()
    {
    MainMenu.closeHighScore();
    MainMenu.open();
    };


    // practice a specific map
var practiceMaps = MENU_ELEMENT.querySelectorAll( '#PracticeMaps li' );
var length = practiceMaps.length;

for (var a = 0 ; a < length ; a++)
    {
    var map = practiceMaps[ a ];

    map.onclick = function()
        {
        MainMenu.close();
        Game.start( true, this.getAttribute( 'data-map_name' ) );
        };

    var mapName = map.getAttribute( 'data-map_name' );

    map.appendChild( G.PRELOAD.getResult( mapName + '_menu' ) );
    }
};


MainMenu.open = function()
{
MENU_ELEMENT.style.display = 'block';
};


MainMenu.close = function()
{
MENU_ELEMENT.style.display = 'none';
};


MainMenu.openHighScore = function()
{
HighScore.updateTable();

HIGH_SCORE_ELEMENT.style.display = 'block';
};

MainMenu.closeHighScore = function()
{
HIGH_SCORE_ELEMENT.style.display = 'none';
};


window.MainMenu = MainMenu;

}(window));