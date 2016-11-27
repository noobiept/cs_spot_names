class Spot
{
private path_element: SVGPathElement;
private text_element: SVGTextElement;
private display_name: string;
private already_guessed = false;


constructor( pathElement: SVGPathElement, textElement: SVGTextElement )
    {
    var _this = this;
    var displayName = pathElement.getAttribute( 'displayName' )!;

    pathElement.onmouseover = function()
        {
        if ( !_this.already_guessed )
            {
            _this.highlight();
            }
        };
    pathElement.onmouseout = function()
        {
        if ( !_this.already_guessed )
            {
            _this.removeHighlight();
            }
        };
    pathElement.onclick = function()
        {
        if ( !_this.already_guessed )
            {
            var correct = Game.validatePart( displayName );

            if ( correct === Game.Play.correct )
                {
                _this.guessedCorrectly();
                }
            }
        };

    textElement.innerHTML = pathElement.getAttribute( 'displayName' )!;

    var pathBox = pathElement.getBBox();
    var textBox = textElement.getBBox();

    textElement.setAttribute( 'x', (pathBox.x + pathBox.width / 2 - textBox.width / 2).toString() );
    textElement.setAttribute( 'y', (pathBox.y + pathBox.height / 2 - textBox.height / 2).toString() );

        // reset the css classes that may be on the elements
    pathElement.classList.remove( 'SpotNotAvailable' );

        // hide the spot element and text
    pathElement.classList.add( 'SpotHidden' );
    textElement.classList.add( 'TextHidden' );

    this.path_element = pathElement;
    this.text_element = textElement;
    this.display_name = displayName;
    }


/**
 * Highlight the spot (increase the opacity of the path element).
 * In practice mode, it shows the text element with the part name as well.
 */
highlight()
    {
    var practiceMode = Game.inPracticeMode();
    var helpSet = GameMenu.isHelpSet();

    this.path_element.classList.remove( 'SpotNotAvailable' );
    this.path_element.classList.remove( 'SpotHidden' );

    if ( practiceMode && helpSet )
        {
        this.text_element.classList.remove( 'TextHidden' );
        }
    }


/**
 * Remove the highlight (also hides the text element).
 */
removeHighlight()
    {
    this.path_element.classList.remove( 'SpotNotAvailable' );
    this.path_element.classList.add( 'SpotHidden' );
    this.text_element.classList.add( 'TextHidden' );
    }


/**
 * Disable the spot, so the player knows the spot isn't a valid option anymore.
 */
guessedCorrectly()
    {
    this.already_guessed = true;
    this.path_element.classList.remove( 'SpotHidden' );
    this.path_element.classList.add( 'SpotNotAvailable' );
    this.text_element.classList.add( 'TextHidden' );
    }


/**
 * Get the spot name.
 */
getName()
    {
    return this.display_name;
    }


/**
 * Mark the spot as already guessed or not.
 */
setAlreadyGuessed( value: boolean )
    {
    this.already_guessed = value;
    }


/**
 * Reset the spot state.
 */
reset()
    {
        // reset the css classes that may be on the elements
    this.path_element.classList.remove( 'SpotNotAvailable' );

        // hide the spot element and text
    this.path_element.classList.add( 'SpotHidden' );
    this.text_element.classList.add( 'TextHidden' );

    this.already_guessed = false;
    }
}
