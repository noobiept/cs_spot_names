/*global Game, G, HighScore*/
'use strict';

var MainMenu;
(function(MainMenu) {


var MENU_ELEMENT = null;
var HIGH_SCORE_ELEMENT = null;
var HELP_ELEMENT = null;


/**
 * Initialize the main menu module.
 */
MainMenu.init = function()
{
MENU_ELEMENT = document.getElementById( 'MainMenu' );
HIGH_SCORE_ELEMENT = document.getElementById( 'HighScore' );
HELP_ELEMENT = document.getElementById( 'HelpSection' );

    // start the normal mode
var start = document.getElementById( 'Start' );
start.onclick = function()
    {
    closeMenu();
    Game.start();
    };

    // show the high-scores
var highScore = document.getElementById( 'OpenHighScore' );
highScore.onclick = openHighScore;

var backButtons = document.querySelectorAll( '.back' );
var a;

for (a = 0 ; a < backButtons.length ; a++)
    {
    backButtons[ a ].onclick = MainMenu.open;
    }

    // show help section
var help = document.getElementById( 'OpenHelp' );
help.onclick = MainMenu.openHelp;

    // practice a specific map
var practiceMaps = MENU_ELEMENT.querySelectorAll( '#PracticeMaps li' );
var length = practiceMaps.length;

for (a = 0 ; a < length ; a++)
    {
    var map = practiceMaps[ a ];

    map.onclick = function()
        {
        closeMenu();
        Game.start( true, this.getAttribute( 'data-map_name' ) );
        };

    var mapName = map.getAttribute( 'data-map_name' );
    }
};


/**
 * Open the main menu.
 */
MainMenu.open = function()
{
    // close the sub-menus (that may be opened)
HIGH_SCORE_ELEMENT.style.display = 'none';
HELP_ELEMENT.style.display = 'none';

    // show the main menu
MENU_ELEMENT.style.display = 'block';
};


/**
 * Hide the main menu.
 */
function closeMenu()
{
MENU_ELEMENT.style.display = 'none';
}


/**
 * Show the high-score section.
 */
function openHighScore()
{
closeMenu();

HighScore.updateTable();
HIGH_SCORE_ELEMENT.style.display = 'block';
}


/**
 * Show the help section.
 */
MainMenu.openHelp = function()
{
closeMenu();

HELP_ELEMENT.style.display = 'block';
};


})(MainMenu || (MainMenu = {}));
