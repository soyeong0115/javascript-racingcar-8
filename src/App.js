import InputController from "./controller/InputController.js";
import outputView from "./view/OutputView.js";

class App {
  async run() {
    const inputController = new InputController();

    try {
      const carNames = await inputController.getCarNames();

    } catch(error) {
      await outputView.printMessage(error.message);
      return;
    }
  }
}

export default App;
