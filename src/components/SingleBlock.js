import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleTransaction } from "./../actions";

const SingleBlock = ({ allTransaction, getSingleTransaction }) => {
  const transactions = allTransaction.map(transaction => (
    <tr key={transaction.hash}>
      <td>{transaction.tx_index}</td>
      <td>{transaction.size}</td>
      <td>{transaction.weight}</td>
      <td>{transaction.time}</td>
      <td>
        <button
          className='btn btn-primary my-1'
          onClick={() => getSingleTransaction(transaction.hash)}
        >
          View Details
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Transactions</h2>
      <table className='table'>
        <tbody>
          <tr>
            <th>Index</th>
            <th>Size</th>
            <th>Weight</th>
            <th>Time</th>
          </tr>
          {transactions}
        </tbody>
      </table>
    </Fragment>
  );
};

SingleBlock.propTypes = {
  allTransaction: PropTypes.array.isRequired
};

export default connect(
  null,
  { getSingleTransaction }
)(SingleBlock);
