import * as Constants from '../constants/Constants';

export function submitName(data) {
    return {
        type: Constants.SUBMIT_NAME,
        data: data,
    };
}

export function clearName() {
    return {
        type: Constants.CLEAR_NAME,
        data: {},
    };
}
