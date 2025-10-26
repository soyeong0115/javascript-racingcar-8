import { ERROR_MESSAGE } from '../constants/error.js';

export const validateCarNames = (names) => {
  // [예외] 입력값이 없을 경우
  if (!names.length) throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);

  const nameSet = new Set();

  names.forEach((name) => {
    // [예외] 0자인 자동차 이름이 있을 경우
    if (name.length === 0) {
        throw new Error(ERROR_MESSAGE.CAR_NAME_TOO_SHORT);
    }

    // [예외] 자동차 이름이 5자를 넘는 경우
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_TOO_LONG);
    }

    // [예외] 자동차 이름이 중복되는 경우
    if (nameSet.has(name)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
    }
    nameSet.add(name);
  });
};
