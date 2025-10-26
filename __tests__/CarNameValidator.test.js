import { validateCarNames } from "../src/utils/CarNameValidator.js";
import { ERROR_MESSAGE } from "../src/constants/error.js";

describe("CarNameValidator 테스트", () => {
  test("정상 입력", () => {
    expect(() => validateCarNames(["pobi", "woni"])).not.toThrow();
  });

  test("[예외] 빈 입력", () => {
    expect(() => validateCarNames([])).toThrow(ERROR_MESSAGE.EMPTY_CAR_NAME);
  });

  test("[예외] 중복 이름 존재", () => {
    expect(() => validateCarNames(["pobi", "pobi"])).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
  });

  test("[예외] 0자인 이름 존재", () => {
    expect(() => validateCarNames([""])).toThrow(ERROR_MESSAGE.CAR_NAME_TOO_SHORT);
  });

  test("[예외] 이름 길이 5 초과 존재", () => {
    expect(() => validateCarNames(["abcdef"])).toThrow(ERROR_MESSAGE.CAR_NAME_TOO_LONG);
  });
});
