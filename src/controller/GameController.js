import RacingGame from '../model/RacingGame.js';
import outputView from '../view/OutputView.js';

class GameController {
  constructor(carNames, tryCount) {
    this.racingGame = new RacingGame(carNames, tryCount);
  }

  async startGame() {
    outputView.printMessage('\n실행 결과');

    for (let i = 0; i < this.racingGame.tryCount; i++) {
      this.racingGame.playRound();
      await outputView.printRoundResult(this.racingGame.getCurrentPositions());
    }
    const winners = this.racingGame.getWinners();
    await outputView.printWinners(winners);
  }
}

export default GameController;
