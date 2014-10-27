(function(window)
{
function MainMenu()
{

}

var MENU_ELEMENT = null;

MainMenu.init = function()
{
MENU_ELEMENT = document.querySelector( '#MainMenu' );

var start = MENU_ELEMENT.querySelector( '#Start' );

start.onclick = function()
    {
    MainMenu.close();
    Game.start();
    };

    // center the menu in the middle of the canvas
var rect = getOffsetRect( G.BACKGROUND_CANVAS );

var left = rect.left + G.BACKGROUND_CANVAS.width / 2 - MENU_ELEMENT.offsetWidth / 2;
var top = rect.top + G.BACKGROUND_CANVAS.height / 2 - MENU_ELEMENT.offsetHeight / 2;

MENU_ELEMENT.style.left = left + 'px';
MENU_ELEMENT.style.top = top + 'px';
};


MainMenu.open = function()
{
MENU_ELEMENT.style.visibility = 'visible';
};


MainMenu.close = function()
{
MENU_ELEMENT.style.visibility = 'hidden';
};


function getOffsetRect( elem )
{
var box = elem.getBoundingClientRect();

var body = document.body;
var docElem = document.documentElement;

var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

var clientTop = docElem.clientTop || body.clientTop || 0;
var clientLeft = docElem.clientLeft || body.clientLeft || 0;

var top  = box.top +  scrollTop - clientTop;
var left = box.left + scrollLeft - clientLeft;

return { top: Math.round( top ), left: Math.round( left ) };
}




window.MainMenu = MainMenu;

}(window));