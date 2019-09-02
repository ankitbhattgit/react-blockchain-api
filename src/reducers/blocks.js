import {
  SINGLE_BLOCK_REQUEST,
  SINGLE_BLOCK_SUCCESS,
  SINGLE_BLOCK_ERROR,
  LATEST_BLOCK_REQUEST,
  LATEST_BLOCK_SUCCESS,
  LATEST_BLOCK_ERROR,
  SINGLE_TRANSACTION_REQUEST,
  SINGLE_TRANSACTION_SUCCESS,
  SINGLE_TRANSACTION_ERROR
} from "./../actions/types";

const initialState = {
  singleBlock: null,
  latestBlock: null,
  transactionBlock: null,
  loading: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SINGLE_BLOCK_REQUEST:
    case LATEST_BLOCK_REQUEST:
    case SINGLE_TRANSACTION_REQUEST:
      return {
        ...state,
        latestBlock: null,
        transactionBlock: null,
        singleBlock: null,
        loading: true
      };

    case SINGLE_BLOCK_SUCCESS:
      return {
        ...state,
        latestBlock: null,
        transactionBlock: null,
        singleBlock: payload,
        loading: false
      };
    case SINGLE_BLOCK_ERROR:
    case LATEST_BLOCK_ERROR:
    case SINGLE_TRANSACTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case LATEST_BLOCK_SUCCESS:
      return {
        ...state,
        latestBlock: payload,
        singleBlock: null,
        transactionBlock: null,
        loading: false
      };
    case SINGLE_TRANSACTION_SUCCESS:
      return {
        ...state,
        singleBlock: null,
        transactionBlock: payload,
        loading: false
      };
    default:
      return state;
  }
}
