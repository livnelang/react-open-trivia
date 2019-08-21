import {  SET_QUESTIONS, INCREMENT_SCORE, SET_QUESTION_COUNTER  } from "../constants/index";



const initialState = {
    score: 0,
    questions: [],
    questionsLength: 0,
    currentQuestion: 0
};

function rootReducer(state = initialState, action) {

    if (action.type === SET_QUESTIONS) {
        return Object.assign({}, state, {
            questions: action.payload,
            questionsLength: action.payload.length
        });
    }

    if (action.type === SET_QUESTION_COUNTER) {
        return Object.assign({}, state, {
            currentQuestion: state.currentQuestion + 1
        });
    }

    if (action.type === INCREMENT_SCORE) {
        return Object.assign({}, state, {
            score: state.score + 1
        });
    }

    return state;
}

export default rootReducer;


