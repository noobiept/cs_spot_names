(function(window)
{
function Spot( imageId, spotName, x, y )
{
var _this = this;

var practiceMode = Game.inPracticeMode();

this.image = G.PRELOAD.getResult( imageId );
this.image_selected = G.PRELOAD.getResult( imageId + '_selected' );

var container = new createjs.Container();

container.x = x;
container.y = y;

var spot = new createjs.Bitmap( this.image );
var helpMessage = null;

if ( practiceMode )
    {
    helpMessage = new createjs.Text( spotName, '30px Arial', 'white' );

    helpMessage.visible = false;
    }


spot.on( 'rollover', function( event )
    {
    _this.shape.image = _this.image_selected;
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
    _this.shape.image = _this.image;
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


window.Spot = Spot;

}(window));