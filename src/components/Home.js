import React, { Fragment } from "react";
import { getSingleBlock, getLatestBlock } from "./../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SingleBlock from "./SingleBlock";
import LatestBlock from "./LatestBlock";
import SingleTransaction from "./SingleTransaction";
import Spinner from "./../layout/Spinner";

const Home = ({
  getSingleBlock,
  getLatestBlock,
  blocks: { singleBlock, latestBlock, transactionBlock, loading }
}) => {
  return (
    <Fragment>
      <section className='container'>
        <p className='lead'>
          <i className='fas fa-user'>Welcome Guest</i>
        </p>
        <p className='lead'>
          Click on the button below to fetch data from BlockChainInfo API
        </p>
        <button
          className='btn btn-primary my-1'
          onClick={() => getSingleBlock()}
        >
          Single block
        </button>
        <button
          className='btn btn-primary my-1'
          onClick={() => getLatestBlock()}
        >
          Latest block
        </button>

        {loading && <Spinner />}

        {singleBlock && (
          <Fragment>
            <p className='my-2'>
              Your transactions for the block with hash value {singleBlock.hash}{" "}
              are below:-
            </p>
            <SingleBlock allTransaction={singleBlock.tx} />
          </Fragment>
        )}
        {latestBlock && (
          <Fragment>
            <LatestBlock latestBlock={latestBlock} />
          </Fragment>
        )}
        {transactionBlock && (
          <Fragment>
            <SingleTransaction transaction={transactionBlock} />
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Home.propTypes = {
  blocks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  blocks: state.blocks
});

export default connect(
  mapStateToProps,
  { getSingleBlock, getLatestBlock }
)(Home);
