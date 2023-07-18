import { GUESS_NUMBER, RESET_GAME } from "../../types";

const initialState = {
    randomNumber: Math.floor(Math.random() * 100),
    number: null,
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GUESS_NUMBER:
            return {
                ...state,
                number: action.payload
            }
        case RESET_GAME:
            return {
                ...state,
                randomNumber: Math.floor(Math.random() * 100),
                number: null,
            }
            case 'SET_VALID':
                return {
                    ...state,
                   
                }
        default:
            return state
    }
}
export default reducer;