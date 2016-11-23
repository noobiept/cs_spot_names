/*global Game, GameMenu*/
'use strict';

function Spot( pathElement, textElement )
{
var _this = this;
var displayName = pathElement.getAttribute( 'displayName' );

pathElement.onmouseover = function()
    {
    _this.highlight();
    };
pathElement.onmouseout = function()
    {
    _this.removeHighlight();
    };
pathElement.onclick = function()
    {
    Game.validatePart( displayName );
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
this.display_name = displayName;
}


/**
 * Clear the spot object.
 */
Spot.prototype.clear = function()
{
this.path_element.onmouseover = null;
this.path_element.onmouseout = null;
this.path_element.onclick = null;
this.path_element = null;
};


/**
 * Highlight the spot (increase the opacity of the path element).
 * In practice mode, it shows the text element with the part name as well.
 */
Spot.prototype.highlight = function()
{
var practiceMode = Game.inPracticeMode();
var helpSet = GameMenu.isHelpSet();

this.path_element.style.fillOpacity = 0.3;

if ( practiceMode && helpSet )
    {
    this.text_element.style.visibility = 'visible';
    }
};


/**
 * Remove the highlight (also hides the text element).
 */
Spot.prototype.removeHighlight = function()
{
this.path_element.style.fillOpacity = 0;
this.text_element.style.visibility = 'hidden';
};


/**
 * Get the spot name.
 */
Spot.prototype.getName = function()
{
return this.display_name;
};
