import inputView from "../src/view/InputView.js";
import { Console } from "@woowacourse/mission-utils";

describe("InputView 테스트", () => {
  test("readLineMessage: Mock 사용", async () => {
    Console.readLineAsync = jest.fn().mockResolvedValue("test input");
    const result = await inputView.readLineMessage("message");
    expect(result).toBe("test input");
  });
});