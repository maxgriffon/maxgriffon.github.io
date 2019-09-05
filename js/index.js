// TODO: Make it so you can't drop paste the top
// TODO: Make it so you can't drop after winning

const game = new Connect4(6, 7);
const view = new Connect4View(game);

function Drop(col) {
  if (game.drop(col)) // if game won
    view.onWin();
  else if(game.totalTokens>41){
    view.tie()
  }

  view.updateBoard();
  view.updateCurrentPlayerInfo();
}

function BeginGame(){
  console.log(game.gameOn)
  if (game.gameOn==true){
    return false;
  }

  game.build();
  view.updateBoard();
  game.start();

  view.updateCurrentPlayerInfo();
}
