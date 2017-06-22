
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

    $.fn.mazeBoard = function (mazeData, startRow, startCol, exitRow, exitCol,enabled) {
        canvas = $(this)[0];
        context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
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
        context.fillStyle = "#000000";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (mazeData[i][j] == 1) {
                    context.fillRect(cellWidth * j, cellHeight * i,
                        cellWidth, cellHeight);
                }
            }
        }
        context.drawImage(playerImg, playerColLoc * cellWidth, playerRowLoc * cellHeight, cellWidth, cellHeight);
        context.drawImage(exitImg, xitCol * cellWidth, xitRow * cellHeight, cellWidth, cellHeight);
        if (enabled) {
            document.addEventListener("keydown", move, false);
        }
    }
    function movePlayer(newRowLoc, newColLoc) {
        context.fillStyle = "#ffffff";
        context.fillRect(playerColLoc * cellWidth, playerRowLoc * cellHeight, cellWidth, cellHeight);
        context.drawImage(playerImg, newColLoc * cellWidth, newRowLoc * cellHeight, cellWidth, cellHeight);
        playerColLoc = newColLoc;
        playerRowLoc = newRowLoc;
    }
    function move(event) {

        switch (event.keyCode) {
            case 37:
                if (mazeDat[playerRowLoc][playerColLoc - 1] == 0) {
                    movePlayer(playerRowLoc, playerColLoc - 1);
                }

                break;
            case 38:
                if (mazeDat[playerRowLoc - 1][playerColLoc] == 0) {
                    movePlayer(playerRowLoc - 1, playerColLoc);
                }
                break;
            case 39:
                if (mazeDat[playerRowLoc][playerColLoc + 1] == 0) {
                    movePlayer(playerRowLoc, playerColLoc + 1);
                }
                break;
            case 40:
                if (mazeDat[playerRowLoc + 1][playerColLoc] == 0) {
                    movePlayer(playerRowLoc + 1, playerColLoc);
                }
                break;
        }
        if (playerRowLoc == xitRow && playerColLoc == xitCol) {
            window.open("../view/winModal.html");
           

            
        }

    }
    $.fn.solveMaze = function (solution) {
        movePlayer(strRow, strCol);
        var i = 0;
        var x = setInterval(function () {

            switch (solution[i]) {
                case '0':
                    movePlayer(playerRowLoc, playerColLoc - 1);
                    break;
                case '1':
                    movePlayer(playerRowLoc, playerColLoc + 1);
                    break;
                case '2':
                    movePlayer(playerRowLoc - 1, playerColLoc);
                    break;
                case '3':
                    movePlayer(playerRowLoc + 1, playerColLoc);
                    break;
            }
            i++
        }, 200);
    }

})(jQuery); 
