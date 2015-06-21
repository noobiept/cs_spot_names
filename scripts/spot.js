(function(window)
{
/**

    @param {String} imageId
    @param {String} spotId
    @param {Number} x
    @param {Number} y
    @param {String} name
 */

function Spot( imageId, spotId, x, y, name )
{
var _this = this;

var practiceMode = Game.inPracticeMode();

var image = G.PRELOAD.getResult( imageId );

var imageWidth = image.width;
var imageHeight = image.height;

var imageRect = new createjs.Rectangle( 0, 0, imageWidth / 2, imageHeight );
var selectedRect = new createjs.Rectangle( imageWidth / 2, 0, imageWidth / 2, imageHeight );

var container = new createjs.Container();

container.x = x;
container.y = y;

var spot = new createjs.Bitmap( image );
spot.sourceRect = imageRect;

var helpMessage = null;

if ( practiceMode )
    {
    name = Spot.updateName( name, false );

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
    Game.validatePart( spotId );
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
    Adds a new line if there's alternate names.
        "\n" or <br />, depending on the value on returnHtml

    Example:
        args -> name: "Mid Doors (CT Mid)"
        returns -> "Mid Doors\n(CT Mid)" or "Mid Doors<br />(CT Mid)"

    @param {String} name
    @param {Boolean} returnHtml
    @return {String}
 */

Spot.updateName = function( name, returnHtml )
{
var newLine;

if ( returnHtml === true )
    {
    newLine = '<br />';
    }

else
    {
    newLine = '\n';
    }

return name.replace( '(', newLine + '(' );
};



window.Spot = Spot;

}(window));