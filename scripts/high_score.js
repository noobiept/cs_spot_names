(function(window)
{
function HighScore()
{

}

HighScore.calculateScore = function( correct, incorrect, time )
{
return correct * 100 - incorrect * 50 - time * 5;
};


window.HighScore = HighScore;

}(window));