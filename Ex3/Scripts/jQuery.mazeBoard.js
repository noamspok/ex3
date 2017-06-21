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
	var playerImg;
	var exitImg;
	var playerLoc=[];

	$.fn.mazeBoard = function (mazeData, startRow, startCol, exitRow, exitCol, playerImage, exitImage) {
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
		playerImg = playerIamge;
		exitImg = exitImage;
		playerLoc = [strRow, strCol];

		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				if (mazeData[i][j] == 1) {
					context.fillRect(cellWidth * j, cellHeight * i,
						cellWidth, cellHeight);
				}
			}
			drawPlayer();
			drawExit()

			
		}



	}
	function drawPlayer() {
		context.drawImage(playerImg, playerLoc[0], playerLoc[1], cellWidth, cellHeight);
	}
	function drawExit() {
		context.drawImage(exitImg, xitRow, xitCol, cellWidth, cellHeight);
	}


})(jQuery);