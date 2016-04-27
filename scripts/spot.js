/*global G, Game, GameMenu*/

function Spot( pathElement )
{
var _this = this;
var practiceMode = Game.inPracticeMode();


pathElement.onmouseover = function()
    {
    this.style.fillOpacity = 0.3;
    };
pathElement.onmouseout = function()
    {
    this.style.fillOpacity = 0;
    };
pathElement.style.fillOpacity = 0;

pathElement.onclick = function()
    {
    Game.validatePart( pathElement.getAttribute( 'id' ) );
    };

this.path_element = pathElement;
}


Spot.prototype.clear = function()
{
this.path_element.removeAllEventListeners();
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
