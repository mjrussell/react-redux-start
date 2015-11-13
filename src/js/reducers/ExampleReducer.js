import * as Constants from '../constants/Constants'

const initialState = {
    name: undefined,
};

export default function (state = initialState, action = {}) {

    const { data, type } = action;

    switch (type) {
        case Constants.SUBMIT_NAME:
            return {
                ...state,
                name: data.name
            };
        case Constants.CLEAR_NAME:
            return {
                ...state,
                name: initialState.name
            };
        default:
            return state;
    }
}

