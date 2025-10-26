import { Console } from '@woowacourse/mission-utils';

const outputView = {
  async printRoundResult(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  },

  async printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },

  async printMessage(message) {
    await Console.print(message);
  },
};

export default outputView;