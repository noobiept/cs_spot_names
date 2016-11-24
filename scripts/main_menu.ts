module MainMenu
{
var MENU_ELEMENT: HTMLElement;
var HIGH_SCORE_ELEMENT: HTMLElement;
var HELP_ELEMENT: HTMLElement;


/**
 * Initialize the main menu module.
 */
export function init()
    {
    MENU_ELEMENT = document.getElementById( 'MainMenu' )!;
    HIGH_SCORE_ELEMENT = document.getElementById( 'HighScore' )!;
    HELP_ELEMENT = document.getElementById( 'HelpSection' )!;

        // start the normal mode
    var start = document.getElementById( 'Start' )!;
    start.onclick = function()
        {
        closeMenu();
        Game.start();
        };

        // show the high-scores
    var highScore = document.getElementById( 'OpenHighScore' )!;
    highScore.onclick = openHighScore;

    var backButtons = document.querySelectorAll( '.back' );

    for (let a = 0 ; a < backButtons.length ; a++)
        {
        let back = <HTMLElement> backButtons[ a ];
        back.onclick = MainMenu.open;
        }

        // show help section
    var help = document.getElementById( 'OpenHelp' )!;
    help.onclick = MainMenu.openHelp;

        // practice a specific map
    var practiceMaps = MENU_ELEMENT.querySelectorAll( '#PracticeMaps li' );
    var length = practiceMaps.length;

    for (let a = 0 ; a < length ; a++)
        {
        var map = <HTMLElement> practiceMaps[ a ];

        map.onclick = function()
            {
            closeMenu();
            Game.start( true, this.getAttribute( 'data-map_name' )! );
            };
        }
    }


/**
 * Open the main menu.
 */
export function open()
    {
        // close the sub-menus (that may be opened)
    HIGH_SCORE_ELEMENT.style.display = 'none';
    HELP_ELEMENT.style.display = 'none';

        // show the main menu
    MENU_ELEMENT.style.display = 'block';
    }


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
export function openHelp()
    {
    closeMenu();

    HELP_ELEMENT.style.display = 'block';
    }
}
