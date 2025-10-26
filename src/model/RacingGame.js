import Car from './Car.js';
import { Random } from '@woowacourse/mission-utils';

class RacingGame {
  constructor(carNames, tryCount) {
    this.cars = carNames.map(name => new Car(name));
    this.tryCount = tryCount;
  }

  playRound() {
    this.cars.forEach(car => {
      const randomValue = Random.pickNumberInRange(0, 9);
      car.move(randomValue >= 4);
    });
  }

  playGame() {
    for (let i = 0; i < this.tryCount; i++) {
      this.playRound();
    }
  }

  getCurrentPositions() {
    return this.cars.map(car => ({ name: car.name, position: car.position }));
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name);
  }
}

export default RacingGame;