import RacingGame from "../src/model/RacingGame.js";

describe("RacingGame 모델 테스트", () => {
  test("초기화 시 cars 배열과 tryCount 설정", () => {
    const game = new RacingGame(["pobi", "woni"], 3);
    expect(game.cars.length).toBe(2);
    expect(game.tryCount).toBe(3);
  });

  test("playRound(): 각 자동차 move 호출 여부", () => {
    const game = new RacingGame(["pobi"], 1);
    game.cars[0].move = jest.fn();
    game.playRound();
    expect(game.cars[0].move).toHaveBeenCalled();
  });

  test("getCurrentPositions() 반환값 확인", () => {
    const game = new RacingGame(["pobi"], 1);
    game.cars[0].position = 2;
    const pos = game.getCurrentPositions();
    expect(pos).toEqual([{ name: "pobi", position: 2 }]);
  });

  test("getWinners() 우승자 판정", () => {
    const game = new RacingGame(["pobi", "woni"], 1);
    game.cars[0].position = 3;
    game.cars[1].position = 5;
    expect(game.getWinners()).toEqual(["woni"]);
  });

  test("getWinners() 공동 우승자", () => {
    const game = new RacingGame(["pobi", "woni"], 1);
    game.cars[0].position = 5;
    game.cars[1].position = 5;
    expect(game.getWinners()).toEqual(["pobi", "woni"]);
  });
});
