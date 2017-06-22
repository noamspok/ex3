/*$(document).ready(function () {

var script = document.createElement('script');
script.src = './Scripts/jquery.mazeBoard.js';
document.getElementsByTagName('head')[0].appendChild(script);*/

$("#StrtBtn").click(function () {
    var apiUrl = "../api/Single/" + $("#mazeName").val() + "/" + $("#rows").val() + "/" + $("#cols").val();
    /*$.getJSON(apiUrl)*/$.ajax({
        method: "GET",
        url: apiUrl
    }).done(function (maze) {

        var rows = maze.Rows;
        var cols = maze.Cols;   
        var startRow = maze.Start.Row;
        var startCol = maze.Start.Col;
        var exitRow = maze.End.Row;
        var exitCol = maze.End.Col;
        alert(startRow + "," + startCol);
        alert(exitRow + "," + exitCol);
        var mazeData = new Array(rows);
        for (var i = 0; i < rows; i++) {
            mazeData[i] = new Array(cols);
        }

        var fromStr = maze.Maze.split("");

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                mazeData[i][j] = fromStr[(i * rows) + j];
            }
        }
        alert(mazeData);
        var mazeBoard = $("#mazeCanvas").mazeBoard(mazeData, startRow, startCol, exitRow, exitCol);
    });
});

/*});*/
//{"Name":"my","Maze":"0001001110000101101000000","Rows":5,"Cols":5,"Start":{"Row":0,"Col":2},"End":{"Row":2,"Col":2}}