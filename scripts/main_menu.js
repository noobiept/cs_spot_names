(function(window)
{
function MainMenu()
{

}

var MENU_ELEMENT = null;

MainMenu.init = function()
{
MENU_ELEMENT = document.querySelector( '#MainMenu' );

    // start the normal mode
var start = MENU_ELEMENT.querySelector( '#Start' );

start.onclick = function()
    {
    MainMenu.close();
    Game.start();
    };


    // practice a specific map
var practiceMaps = MENU_ELEMENT.querySelector( '#PracticeMaps' );
var length = practiceMaps.childNodes.length;

for (var a = 0 ; a < length ; a++)
    {
    practiceMaps.childNodes[ a ].onclick = function()
        {
        MainMenu.close();
        Game.start( true, this.innerHTML );
        }
    }
};


MainMenu.open = function()
{
MENU_ELEMENT.style.visibility = 'visible';
};


MainMenu.close = function()
{
MENU_ELEMENT.style.visibility = 'hidden';
};


window.MainMenu = MainMenu;

}(window));