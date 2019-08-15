import { SET_QUESTIONS } from "../constants/index";

export function setQuestions(payload) {
    return { type: SET_QUESTIONS, payload };
}
