(function(window)
{
function Spot( imageId, spotName, x, y )
{
var _this = this;

this.image = G.PRELOAD.getResult( imageId );
this.image_selected = G.PRELOAD.getResult( imageId + '_selected' );

var spot = new createjs.Bitmap( this.image );

spot.x = x;
spot.y = y;

spot.on( 'rollover', function( event )
    {
    _this.shape.image = _this.image_selected;
    G.MAIN_STAGE.update();
    });
spot.on( 'rollout', function( event )
    {
    _this.shape.image = _this.image;
    G.MAIN_STAGE.update();
    });
spot.on( 'click', function( event )
    {
    Game.validatePart( spotName );
    });


G.MAIN_STAGE.addChild( spot );

this.shape = spot;
}


window.Spot = Spot;

}(window));