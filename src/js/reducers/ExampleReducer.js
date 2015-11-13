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
        default:
            return state;
    }
}

