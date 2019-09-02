import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const LatestBlock = ({ latestBlock }) => {
  return (
    <Fragment>
      <h3 className='my-2'>The latest block details are as follows below:-</h3>
      <p>
        <b>Hash</b>- {latestBlock.hash}
      </p>
      <p>
        <b>Time</b>- {latestBlock.time}
      </p>
      <p>
        <b>Block Index</b>- {latestBlock.block_index}
      </p>
      <p>
        <b>Height</b>- {latestBlock.height}
      </p>
    </Fragment>
  );
};

LatestBlock.propTypes = {
  latestBlock: PropTypes.object.isRequired
};

export default connect(
  null,
  {}
)(LatestBlock);
