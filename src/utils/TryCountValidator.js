import { ERROR_MESSAGE } from "../constants/error.js";

export const validateTryCount = (input) => {
    // [예외] 입력값이 없을 경우
    if (input === undefined || input === null || input.trim() === "") {
        throw new Error(ERROR_MESSAGE.EMPTY_TRY_COUNT);
    }

    const count = Number(input);

    // [예외] 문자를 입력했을 경우
    if (Number.isNaN(count)) {
        throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_NUMBER);
    }

    // [예외] 소수를 입력했을 경우
    if (!Number.isInteger(count)) {
        throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_INTEGER);
    }

    // [예외] 0 또는 음수를 입력했을 경우
    if (count <= 0) {
        throw new Error(ERROR_MESSAGE.TRY_COUNT_LESS_THAN_ZERO);
    }

    return count;
};