import axios from 'axios';

import {
  CONTACT_SEND_MESSAGE_START,
  CONTACT_SEND_MESSAGE_FINISH,
  CLEAR_FROM_CONTACT_STATE,
} from './types';

export const sendMessage = (data) => async (dispatch) => {
  dispatch({
    type: CONTACT_SEND_MESSAGE_START,
    payload: {
      sending: true,
      sent: false,
    },
  });

  try {
    const result = await axios.post('http://localhost:1337/email/send', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: CONTACT_SEND_MESSAGE_FINISH,
      payload: {
        sending: false,
        sent: true,
        item: result.status,
      },
    });
  } catch (err) {
    dispatch({
      type: CONTACT_SEND_MESSAGE_FINISH,
      payload: {
        sending: false,
        sent: true,
        error: err,
      },
    });
  }
};

export const clearFormContactState = () => (dispatch) => {
  dispatch({
    type: CLEAR_FROM_CONTACT_STATE,
    payload: {
      sending: false,
      sent: false,
      item: {},
    },
  });
};
