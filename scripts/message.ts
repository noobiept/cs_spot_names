class Message
{
private timeout: Utilities.Timeout;
private container: HTMLElement;
private html_element: HTMLElement;

/**
 * Pass a positive number to set a timeout, otherwise the message isn't removed (and callback not called).
 */
constructor( text: string, timeout?: number, callback?: () => any )
    {
    var container = <HTMLElement> document.querySelector( '#GameMessages' );

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
clear()
    {
    this.container.removeChild( this.html_element );
    this.timeout.clear();
    }


/**
 * Change the message text.
 */
setText( text: string )
    {
    this.html_element.innerHTML = text;
    }
}
