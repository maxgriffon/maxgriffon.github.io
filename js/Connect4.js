const EMPTY = 0;

class Connect4 {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.activePlayer = 0;
    this.board = [];
    this.totalTokens = 0;
    this.playerNames = [null, "red", "blue"];
    this.player1Score = 0;
    this.player2Score = 0;
    this.gameOn = false;
  }
  build() {
    for(let row=0; row<this.numRows; row++){
      this.board[row]=[];
      for(let col=0; col<this.numCols; col++){
        this.board[row][col]=EMPTY;
      }
    }
  }
  start() {
    this.activePlayer = 1;
    this.gameOn=true;
    this.totalTokens=0;
  }
  drop(col) {
    if (this.gameOn ==false){
      return false;
    }
    if (this.board[0][col]!=EMPTY){
      return false;
    }

    // Counts down to top of column
    let row=this.numRows-1;

    while (this.board[row][col]!=EMPTY){
      row--;
    }

    // Set piece at position
    this.board[row][col]=this.activePlayer;
    this.totalTokens += 1
    console.log(this.totalTokens)
    if(this.totalTokens>41){
      this.gameOn=false;
      return false;
    }

    // Check for win
    if (this.checkForWin(row,col)){
      this.onWin(this.activePlayer);
      return true;
    }

    // Switches to next player
    if (this.activePlayer==1){
      this.activePlayer = 2;
    } else{
      this.activePlayer = 1;
    }
    return false;
  }
  isOutOfBounds(row, col) {
    return row<0||col<0||row>this.numRows-1||col>this.numCols-1;
  }
  checkInDirection(row, col, dR, dC) {
    const srow=row+3*dR;
    const scol=col-3*dC;
    let counter=0;
    let i = srow;
    let j = scol;
    for (let k = 0; k < 7; k++) {
      if (!this.isOutOfBounds(i, j)) {
        if (this.board[i][j]==this.activePlayer){
           counter++;
           if(counter==4){
             return true;
           }
         }
         else{
           counter=0;
         }
      }
      i -= dR;
      j += dC;
    }
    return false;
  }
  checkForWin(row, col) {
    if(this.totalTokens<7){
      return false;
    }
    return this.checkInDirection(row,col,0,1) || // horizontal
           this.checkInDirection(row,col,1,0) || // vertical
           this.checkInDirection(row,col,1,1) || // up-right diagonal
           this.checkInDirection(row,col,-1,1)   // down-right diagonal
  }
  onWin(winner) {
    this.gameOn = false;
    if(winner==1){
      this.player1Score+=1
    }
    else{
      this.player2Score+=1
    }
  }
}
