(function(window)
{
function Utilities()
{

}

Utilities.getRandomInt = function( min, max )
{
return Math.floor( Math.random() * (max - min + 1) ) + min;
};

window.Utilities = Utilities;

}(window));