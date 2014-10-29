(function(window)
{
function Message( text, timeout, callback )
{
var container = document.querySelector( '#GameMessages' );

var element = document.createElement( 'div' );
element.className = 'gameMessage';
element.innerHTML = text;

container.appendChild( element );

this.timeout = new Utilities.Timeout();
this.timeout.start( function()
    {
    container.removeChild( element );

    if ( typeof callback !== 'undefined' )
        {
        callback();
        }

    }, timeout );
}

window.Message = Message;

}(window));