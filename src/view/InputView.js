import { Console } from '@woowacourse/mission-utils';

const inputView = {
    async readLineMessage(message) {
        const input = await Console.readLineAsync(`${message}\n`);
        return input;
    }
}

export default inputView;