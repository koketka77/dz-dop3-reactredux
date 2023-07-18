import { GUESS_NUMBER, RESET_GAME } from "../../types";

export const guessNumber = (number) => ({
    type: GUESS_NUMBER,
    payload: number,
});

export const resetGame = () => ({
    type: RESET_GAME,
});