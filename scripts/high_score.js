/*global AppStorage*/

var HighScore;
(function (HighScore) {


var HIGH_SCORE = [];    // list of top scores (higher first)
var LIMIT = 5;          // limit of the list above
var TABLE_DATA_ELEMENTS = [];   // list of td html elements


HighScore.init = function( highScore )
{
load( highScore );

var table = document.querySelector( '#HighScore table' );

    // add the tr/td elements, depending on the limit set
for (var a = 0 ; a < LIMIT ; a++)
    {
    var tr = document.createElement( 'tr' );
    var td = document.createElement( 'td' );
    var position = document.createElement( 'td' );

    position.innerHTML = a + 1;

    tr.appendChild( position );
    tr.appendChild( td );
    table.appendChild( tr );

    TABLE_DATA_ELEMENTS.push( td );
    }
};


HighScore.add = function( correct, incorrect, time )
{
var score = HighScore.calculateScore( correct, incorrect, time );

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
};


function save()
{
AppStorage.setData({ 'cs_spot_names_high_score': HIGH_SCORE });
}


function load( scores )
{
if ( scores )
    {
    HIGH_SCORE = scores;
    }
}


HighScore.clear = function()
{
HIGH_SCORE.length = 0;

save();
};


HighScore.calculateScore = function( correct, incorrect, time )
{
return correct * 50 - incorrect * 100 - time * 5;
};


HighScore.updateTable = function()
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
        td.innerHTML = score;
        }
    }
};


})(HighScore || (HighScore = {}));
