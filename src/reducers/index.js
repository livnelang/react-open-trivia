import {  SET_QUESTIONS  } from "../constants/index";



const initialState = {
    score: 0,
    questions: []
};

function rootReducer(state = initialState, action) {

    if (action.type === SET_QUESTIONS) {
        return Object.assign({}, state, {
            questions: action.payload
        });
    }

    return state;
}

export default rootReducer;


