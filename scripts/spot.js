/*global Game, GameMenu*/

function Spot( pathElement, textElement )
{
var _this = this;
var practiceMode = Game.inPracticeMode();

pathElement.onmouseover = function()
    {
    this.style.fillOpacity = 0.3;

    var helpSet = GameMenu.isHelpSet();

    if ( practiceMode && helpSet )
        {
        _this.text_element.style.visibility = 'visible';
        }
    };
pathElement.onmouseout = function()
    {
    _this.path_element.style.fillOpacity = 0;
    _this.text_element.style.visibility = 'hidden';
    };
pathElement.onclick = function()
    {
    Game.validatePart( pathElement.getAttribute( 'displayName' ) );
    };

textElement.innerHTML = pathElement.getAttribute( 'displayName' );

var pathBox = pathElement.getBBox();
var textBox = textElement.getBBox();

textElement.setAttribute( 'x', pathBox.x + pathBox.width / 2 - textBox.width / 2 );
textElement.setAttribute( 'y', pathBox.y + pathBox.height / 2 - textBox.height / 2 );

    // hide element and text
pathElement.style.fillOpacity = 0;  // use opacity so it can be clicked
textElement.style.visibility = 'hidden';

this.path_element = pathElement;
this.text_element = textElement;
}


Spot.prototype.clear = function()
{
this.path_element.onmouseover = null;
this.path_element.onmouseout = null;
this.path_element.onclick = null;
this.path_element = null;
};
