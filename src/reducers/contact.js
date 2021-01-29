import {
  CONTACT_SEND_MESSAGE_START,
  CONTACT_SEND_MESSAGE_FINISH,
  CLEAR_FROM_CONTACT_STATE,
} from '../actions/types';

const initialState = {
  item: {},
  sending: false,
  sent: false,
};

export default (state = { ...initialState }, action = {}) => {
  switch (action.type) {
    case CONTACT_SEND_MESSAGE_START:
      return {
        ...state,
        ...action.payload,
      };
    case CONTACT_SEND_MESSAGE_FINISH:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_FROM_CONTACT_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default: return state;
  }
};
