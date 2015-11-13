import * as Constants from '../constants/Constants';

export function submitName(data) {
    return {
        type: Constants.SUBMIT_NAME,
        data: data,
    };
}
