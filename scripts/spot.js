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

var pathBox = pathElement.getBBox();

textElement.innerHTML = pathElement.getAttribute( 'displayName' );
textElement.setAttribute( 'x', pathBox.x );
textElement.setAttribute( 'y', pathBox.y );

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
