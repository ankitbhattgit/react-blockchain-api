import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SingleTransaction = ({ transaction }) => {
  console.log("transactionBlock", transaction);

  return (
    <Fragment>
      <h2 className='my-2'>Transaction Detail</h2>
      <p>
        <b>Hash</b>- {transaction.hash}
      </p>
      <p>
        <b>Time</b>- {transaction.time}
      </p>
      <p>
        <b>Block Index</b>- {transaction.block_index}
      </p>
      <p>
        <b>Height</b>- {transaction.block_height}
      </p>
      <p>
        <b>Size</b>- {transaction.size}
      </p>
      <p>
        <b>Weight</b>- {transaction.weight}
      </p>
    </Fragment>
  );
};

SingleTransaction.propTypes = {
  transaction: PropTypes.object.isRequired
};

export default connect(
  null,
  {}
)(SingleTransaction);
