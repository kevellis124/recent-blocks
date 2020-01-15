import React, { Component } from "react";
import PropTypes from "prop-types";

class Block extends Component {
  constructor() {
    super();
    this.state = { showDetails: false };
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    return (
      <div className={"block"} onClick={this.handleClick}>
        <ul>Block id: {this.props.id}</ul>
        <ul>Block timestamp: {this.props.timestamp}</ul>
        <ul>Block action count: {this.props.actionCount}</ul>
        {this.state.showDetails && (
          <ul>Raw block dump: {JSON.stringify(this.props.rawBlock)}</ul>
        )}
        <br/>
      </div>
    );
  }
}
Block.propTypes = {
  id: PropTypes.string,
  timestamp: PropTypes.string,
  actionCount: PropTypes.number,
  rawBlock: PropTypes.object
};

Block.defaultProps = {
  id: "default id",
  timestamp: "12:00:00",
  actionCount: 0,
  rawBlock: {}
};

export default Block;
