import axios from "axios";
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
} from "./types";

// load URL from env file
var baseUrl = process.env.REACT_APP_API_URL;

// get single block from API

export const getSingleBlock = () => async dispatch => {
  const blockHash =
    "0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103";

  dispatch({
    type: SINGLE_BLOCK_REQUEST
  });

  try {
    const res = await axios.get(`${baseUrl}/rawblock/${blockHash}?cors=true`);

    // console.log("blockchain api response", res);

    dispatch({
      type: SINGLE_BLOCK_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log("Error", err);
    alert("Something went wrong while fetching the data");
    dispatch({
      type: SINGLE_BLOCK_ERROR,
      payload: {
        msg: err
      }
    });
  }
};

// get latest block from API

export const getLatestBlock = () => async dispatch => {
  dispatch({
    type: LATEST_BLOCK_REQUEST
  });

  try {
    const res = await axios.get(`${baseUrl}/latestblock?cors=true`);

    dispatch({
      type: LATEST_BLOCK_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log("Error", err);
    alert("Something went wrong while fetching the data");
    dispatch({
      type: LATEST_BLOCK_ERROR,
      payload: {
        msg: err
      }
    });
  }
};

// get single transaction from the block

export const getSingleTransaction = hash => async dispatch => {
  dispatch({
    type: SINGLE_TRANSACTION_REQUEST
  });

  try {
    const res = await axios.get(`${baseUrl}/rawtx/${hash}?cors=true`);
    // console.log("res", res);
    dispatch({
      type: SINGLE_TRANSACTION_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log("Error", err);
    alert("Something went wrong while fetching the data");
    dispatch({
      type: SINGLE_TRANSACTION_ERROR,
      payload: {
        msg: err
      }
    });
  }
};
