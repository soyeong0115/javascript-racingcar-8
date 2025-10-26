import InputController from "./controller/InputController.js";
import GameController from "./controller/GameController.js";
import outputView from "./view/OutputView.js";

class App {
  async run() {
    try {
      const inputController = new InputController();
      const carNames = await inputController.getCarNames();
      const tryCount = await inputController.getTryCount();

      const gameController = new GameController(carNames, tryCount);
      await gameController.startGame();
    } catch(error) {
      await outputView.printMessage(error.message);
      return;
    }
  }
}

export default App;