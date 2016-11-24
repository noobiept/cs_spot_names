module HighScore
{
var HIGH_SCORE: number[] = [];    // list of top scores (higher first)
var LIMIT = 5;          // limit of the list above
var TABLE_DATA_ELEMENTS: HTMLElement[] = [];   // list of td html elements


/**
 * Initialize the high-score module.
 */
export function init( highScore: number[] )
    {
    if ( highScore )
        {
        HIGH_SCORE = highScore;
        }

    var table = document.querySelector( '#HighScore table' );

        // add the tr/td elements, depending on the limit set
    for (var a = 0 ; a < LIMIT ; a++)
        {
        var tr = document.createElement( 'tr' );
        var td = document.createElement( 'td' );
        var position = document.createElement( 'td' );

        position.innerHTML = (a + 1).toString();

        tr.appendChild( position );
        tr.appendChild( td );
        table.appendChild( tr );

        TABLE_DATA_ELEMENTS.push( td );
        }
    }


/**
 * Add a score if its higher than the top existing scores.
 */
export function add( correct: number, incorrect: number, skipped: number, time: number )
    {
    var score = HighScore.calculateScore( correct, incorrect, skipped, time );

        // don't add repeated scores
    if ( HIGH_SCORE.indexOf( score ) >= 0 )
        {
        return score;
        }

    HIGH_SCORE.push( score );

        // higher the score, the better
    HIGH_SCORE.sort( function( a, b )
        {
        return b - a;
        });

        // make sure we don't go past the limit
    if ( HIGH_SCORE.length > LIMIT )
        {
        HIGH_SCORE.pop();
        }

    save();

    return score;
    }


/**
 * Save the high-scores to the storage.
 */
function save()
    {
    AppStorage.setData({ 'cs_spot_names_high_score': HIGH_SCORE });
    }


/**
 * Clear the high-scores.
 */
export function clear()
    {
    HIGH_SCORE.length = 0;

    save();
    }


/**
 * Calculate a score value based on the number of correct/incorrect/etc values.
 */
export function calculateScore( correct: number, incorrect: number, skipped: number, time: number )
    {
    return correct * 50 - incorrect * 75 - skipped * 200 - time * 5;
    }


/**
 * Update the high-score table (in the main-menu) with the current high-score values.
 */
export function updateTable()
    {
    for (var a = 0 ; a < LIMIT ; a++)
        {
        var score = HIGH_SCORE[ a ];
        var td = TABLE_DATA_ELEMENTS[ a ];

        if ( typeof score === 'undefined' )
            {
            td.innerHTML = '-';
            }

        else
            {
            td.innerHTML = score.toString();
            }
        }
    }
}
