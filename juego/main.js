(function (){ 
self.Board= function(width, heigh){
this.width =width;
this.heigh = heigh;
this.playing = false;
this.gameover = false;
this.bars = [];
this.ball = null;
}

self.Board.prototype = {
    get elements(){
var elements = this.bars;
elements.push(ball);
return elements;
    }
}

})();
(function(){ 
self.BoardView = function(canvas, board){
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.heigh = board.heigh;
    this.board = board;
    this.ctx = canvas.getcont
    }
})

function main {

}