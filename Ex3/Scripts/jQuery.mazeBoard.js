(function ($) {
    var canvas;
    var context;
    var rows;
    var cols;
    var cellWidth;
    var cellHeight;
    var mazeDat;
    var strRow;
    var strCol;
    var xitRow;
    var xitCol;
    var playerImg = new Image();
    playerImg.src = "../Images/Mario.png";
    var exitImg = new Image();
    exitImg.src = "../Images/exit.jpg";
    var playerRowLoc;
    var playerColLoc;

    $.fn.mazeBoard = function (mazeData, startRow, startCol, exitRow, exitCol) {
        canvas = $(this)[0];
        context = canvas.getContext("2d");
        rows = mazeData.length;
        cols = mazeData[0].length;
        cellWidth = mazeCanvas.width / cols;
        cellHeight = mazeCanvas.height / rows;
        mazeDat = mazeData;
        strRow = startRow;
        strCol = startCol;
        xitRow = exitRow;
        xitCol = exitCol;
        playerImg = playerImg;
        exitImg = exitImg;
        playerRowLoc = strRow;
        playerColLoc = strCol;

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (mazeData[i][j] == 1) {
                    context.fillRect(cellWidth * j, cellHeight * i,
                        cellWidth, cellHeight);
                }
            }
        }
        context.drawImage(playerImg, playerRowLoc, playerColLoc, cellWidth, cellHeight);
        context.drawImage(exitImg, xitRow, xitCol, cellWidth, cellHeight);
        document.addEventListener("onkeydown", move, false);
    }
    function movePlayer(newRowLoc, newColLoc) {
        context.fillStyle = "#FF0000";
        context.fillRect(playerRowLoc, playerColLoc, cellWidth, cellHeight);
        context.drawImage(playerImg, newRowLoc, newColLoc, cellWidth, cellHeight);
    }
    function move(event) {

        switch (event.keyCode) {
            case 37:
                if (mazeDat[playerRowLoc][playerColLoc - 1] == 0) {
                    move(playerRowLoc, playerColLoc - 1);
                }

                break;
            case 38:
                if (mazeDat[playerRowLoc - 1][playerColLoc] == 0) {
                    move(playerRowLoc - 1, playerColLoc);
                }
                break;
            case 39:
                if (mazeDat[playerRowLoc][playerColLoc + 1] == 0) {
                    move(playerRowLoc, playerColLoc + 1);
                }
                break;
            case 40:
                if (mazeDat[playerRowLoc + 1][playerColLoc] == 0) {
                    move(playerRowLoc + 1, playerColLoc);
                }
                break;
        }
        if (playerRowLoc == xitRow && playerColLoc == xitCol) {

        }

    }
    $.fn.solveMaze = function (solution) {
        movePlayer(strRow, strCol);
        var i = 0;
        var x = setInterval(function () {

            switch (solution[i]) {
                case "0":
                    move(playerRowLoc, playerColLoc - 1);
                    break;
                case '1':
                    move(playerRowLoc, playerColLoc + 1);
                    break;
                case '2':
                    move(playerRowLoc - 1, playerColLoc);
                    break;
                case '3':
                    move(playerRowLoc + 1, playerColLoc);
                    break;
            }
            i++
        }, 20);
    }

})(jQuery); 
