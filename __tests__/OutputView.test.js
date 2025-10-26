import outputView from "../src/view/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

describe("OutputView 테스트", () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(Console, "print").mockImplementation(() => {});
  });
  afterEach(() => {
    spy.mockRestore();
  });

  test("printRoundResult: 출력 호출", async () => {
    const cars = [{ name: "pobi", position: 2 }];
    await outputView.printRoundResult(cars);
    expect(spy).toHaveBeenCalledWith("pobi : --");
  });

  test("printWinners: 출력 호출", async () => {
    await outputView.printWinners(["pobi"]);
    expect(spy).toHaveBeenCalledWith("최종 우승자 : pobi");
  });
});