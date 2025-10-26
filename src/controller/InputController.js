import inputView from "../view/InputView.js"
import { SYSTEM_MESSAGE } from "../constants/message.js"
import { parseCarNames } from "../utils/parser.js";
import { validateCarNames } from "../utils/CarNameValidator.js";
import { validateTryCount } from "../utils/TryCountValidator.js"

class InputController {
    async getCarNames() {
        const inputCarName = await inputView.readLineMessage(SYSTEM_MESSAGE.INPUT_CAR_NAMES);
        const carNames = parseCarNames(inputCarName);
        validateCarNames(carNames);
        return carNames;
    }

    async getTryCount() {
        const inputTryCount = await inputView.readLineMessage(SYSTEM_MESSAGE.INPUT_TRY_COUNT);
        const tryCount = validateTryCount(inputTryCount);
        return tryCount;
    }
}

export default InputController;