var nextDate = [
    [2,2,0,0],
    [2,2,2,0],
    [0,0,0,0],
    [0,0,0,0]
];
var  gameDate = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,1,0,0,0],
    [0,0,0,2,2,2,1,0,0,0],
    [1,1,1,1,1,1,1,0,0,0]
];
var nextDivs = [];
var gameDivs = [];
var initGame = function () {
    for (var i=0; i<gameDate.length;i++){
        var gameDiv = [];
        for (var j=0; j<gameDate[0].length;j++){
            var newNode = document.createElement('div');
            newNode.className = 'none';
            newNode.style.top = (i*20) + 'px';
            newNode.style.left = (j*20) + 'px';
            document.getElementById('game').appendChild(newNode);
            gameDiv.push(newNode);
        }
        gameDivs.push(gameDiv);
    }
}
var initNext = function () {
    for (var i=0; i<nextDate.length;i++){
        var nextDiv = [];
        for (var j=0; j<nextDate[0].length;j++){
            var newNode = document.createElement('div');
            newNode.className = 'none';
            newNode.style.top = (i*20) + 'px';
            newNode.style.left = (j*20) + 'px';
            document.getElementById('next').appendChild(newNode);
            nextDiv.push(newNode);
        }
        nextDivs.push(nextDiv);
    }
}
var refreshGame = function () {
    for (var i = 0; i < gameDate.length; i++) {
        for (var j = 0; j < gameDate[0].length; j++) {
            if (gameDate[i][j] == 0) {
                gameDivs[i][j].className = 'none';
            } else if (gameDate[i][j] == 1) {
                gameDivs[i][j].className = 'done';
            } else if (gameDate[i][j] == 2) {
                gameDivs[i][j].className = 'current';
            }
        }
    }
}
var refreshNext = function () {
    for (var i = 0; i < nextDate.length; i++) {
        for (var j = 0; j < nextDate[0].length; j++) {
            if (nextDate[i][j] == 0) {
                nextDivs[i][j].className = 'none';
            } else if (nextDate[i][j] == 1) {
                nextDivs[i][j].className = 'done';
            } else if (nextDate[i][j] == 2) {
                nextDivs[i][j].className = 'current';
            }
        }
    }
}
initGame();
initNext();
refreshGame();
refreshNext();