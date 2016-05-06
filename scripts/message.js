/*global Utilities*/
'use strict';

/**
 * @param {String} text
 * @param {Number=} timeout - pass a positive number to set a timeout, otherwise the message isn't removed (and callback not called)
 * @param {Function=} callback
 */
function Message( text, timeout, callback )
{
var container = document.querySelector( '#GameMessages' );

var element = document.createElement( 'div' );
element.className = 'gameMessage';
element.innerHTML = text;

container.appendChild( element );

this.timeout = new Utilities.Timeout();

if ( typeof timeout !== 'undefined' && timeout > 0 )
    {
    this.timeout.start( function()
        {
        container.removeChild( element );

        if ( typeof callback !== 'undefined' )
            {
            callback();
            }

        }, timeout );
    }

this.html_element = element;
this.container = container;
}


/**
 * Remove the message.
 */
Message.prototype.clear = function()
{
this.container.removeChild( this.html_element );
this.timeout.clear();
};


/**
 * Change the message text.
 */
Message.prototype.setText = function( text )
{
this.html_element.innerHTML = text;
};
