(function(window)
{
/**

    @param {String} imageId
    @param {String} spotName
    @param {Number} x
    @param {Number} y
    @param {Array=} alternateNames
 */

function Spot( imageId, spotName, x, y, alternateNames )
{
var _this = this;

if ( typeof alternateNames === 'undefined' )
    {
    alternateNames = [];
    }

var practiceMode = Game.inPracticeMode();

var image = G.PRELOAD.getResult( imageId );

var imageWidth = image.width;
var imageHeight = image.height;

var imageRect = new createjs.Rectangle( 0, 0, imageWidth / 2, imageHeight );
var selectedRect = new createjs.Rectangle( imageWidth / 2, 0, imageWidth, imageHeight );

var container = new createjs.Container();

container.x = x;
container.y = y;

var spot = new createjs.Bitmap( image );
spot.sourceRect = imageRect;

var helpMessage = null;

if ( practiceMode )
    {
    var name = Spot.getFullName( spotName, false, alternateNames );

    helpMessage = new createjs.Text( name, '30px Arial', 'white' );

    helpMessage.visible = false;
    }


spot.on( 'rollover', function( event )
    {
    _this.shape.sourceRect = selectedRect;

    var helpSet = GameMenu.isHelpSet();

    if ( practiceMode && helpSet )
        {
        helpMessage.visible = true;
        G.MAIN_STAGE.addChild( container ); // move it to the top of all other elements, so that the text doesn't get cut off for being under other elements
        }

    G.MAIN_STAGE.update();
    });
spot.on( 'rollout', function( event )
    {
    _this.shape.sourceRect = imageRect;

    var helpSet = GameMenu.isHelpSet();

    if ( practiceMode && helpSet )
        {
        helpMessage.visible = false;
        }

    G.MAIN_STAGE.update();
    });
spot.on( 'click', function( event )
    {
    Game.validatePart( spotName );
    });

container.addChild( spot );

if ( practiceMode )
    {
    container.addChild( helpMessage );
    }

G.MAIN_STAGE.addChild( container );

this.help_message = helpMessage;
this.shape = spot;
this.container = container
}


Spot.prototype.clear = function()
{
G.MAIN_STAGE.removeChild( this.help_message );
G.MAIN_STAGE.removeChild( this.shape );
G.MAIN_STAGE.removeChild( this.container );

this.shape.removeAllEventListeners();

this.container = null;
this.shape = null;
};


/**
    Constructs a string with the part name, and the alternate names (if available).

    Example:
        args -> spotName: "mid_doors", alternateNames: [ "CT mid" ]
        returns -> "Mid doors (CT mid)"


    @param {String} spotName
    @param {Boolean} returnHtml
    @param {String[]} alternateNames
    @return {String}
 */

Spot.getFullName = function( spotName, returnHtml, alternateNames )
{
    // capitalize the first letter
var name = spotName.charAt( 0 ).toUpperCase() + spotName.slice( 1 );

    // substitute underscores for spaces
name = name.replace( /_/g, ' ' );

    // add alternate names inside parenthesis
if ( typeof alternateNames !== 'undefined' && alternateNames.length > 0 )
    {
    var alternate = '';
    var length = alternateNames.length;

    for (var a = 0 ; a < length ; a++)
        {
        alternate += alternateNames[ a ];

        if ( a + 1 < length )
            {
            alternate += ', ';
            }
        }

    var newLine;

    if ( returnHtml === true )
        {
        newLine = '<br />';
        }

    else
        {
        newLine = '\n';
        }

    name = name + newLine + '(' + alternate + ')';
    }

return name;
};


window.Spot = Spot;

}(window));