import { SET_QUESTIONS, INCREMENT_SCORE, SET_QUESTION_COUNTER, RESET_GAME } from "../constants/index";

export function setQuestions(payload) {
    return { type: SET_QUESTIONS, payload };
}

export function incrementScore(payload) {
    return { type: INCREMENT_SCORE, payload };
}

export function setQuestionCounter(payload) {
    return { type: SET_QUESTION_COUNTER, payload };
}

export function resetGame(payload) {
    return { type: RESET_GAME, payload };
}
