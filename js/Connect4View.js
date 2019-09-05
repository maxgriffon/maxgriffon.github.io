class Connect4View {
  constructor(game) {
    this.game = game

    this.player1Score_span=document.getElementById("Player1-score");
    this.player2Score_span=document.getElementById("Player2-score");
    this.gameInfo_div=document.getElementById('game_info');
  }
  updateBoard() {
    for(let row=0; row<this.game.numRows; row++){
      for(let col=0; col<this.game.numCols;col++){
        document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+this.game.board[row][col]+"'> </span>";
      }
    }
  }
  updateCurrentPlayerInfo() {
    if (this.game.gameOn) {
      this.gameInfo_div.innerHTML = "Current Player: Player " + this.game.activePlayer + " <span class='player"+this.game.activePlayer+"'>(" + this.game.playerNames[this.game.activePlayer] + ")</span>";
    }
  }
  onWin() {
    this.gameInfo_div.innerHTML = "Winner: " + this.game.activePlayer;
    this.player1Score_span.innerHTML=this.game.player1Score
    this.player2Score_span.innerHTML=this.game.player2Score
  }
  tie(){
    this.gameInfo_div.innerHTML="It's a tie press begin game to reset"
  }
}
