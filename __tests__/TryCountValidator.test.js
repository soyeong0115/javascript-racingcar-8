import { validateTryCount } from "../src/utils/TryCountValidator.js";
import { ERROR_MESSAGE } from "../src/constants/error.js";

describe("TryCountValidator 테스트", () => {
  test("정상 입력", () => {
    expect(validateTryCount("5")).toBe(5);
  });

  test("[예외] 빈 입력", () => {
    expect(() => validateTryCount("")).toThrow(ERROR_MESSAGE.EMPTY_TRY_COUNT);
  });

  test("[예외] 숫자가 아닌 값 입력", () => {
    expect(() => validateTryCount("abc")).toThrow(ERROR_MESSAGE.TRY_COUNT_NOT_NUMBER);
  });

  test("[예외] 소수 입력", () => {
    expect(() => validateTryCount("1.1")).toThrow(ERROR_MESSAGE.TRY_COUNT_NOT_INTEGER);
  });

  test("[예외] 0 또는 음수 입력", () => {
    expect(() => validateTryCount("0")).toThrow(ERROR_MESSAGE.TRY_COUNT_LESS_THAN_ZERO);
    expect(() => validateTryCount("-1")).toThrow(ERROR_MESSAGE.TRY_COUNT_LESS_THAN_ZERO);
  });
});
