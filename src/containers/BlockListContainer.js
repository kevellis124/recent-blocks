import React, { Component } from "react";
import BlockList from "../components/BlockList";
import { getBlockInfo, getLeadBlockId } from "../API";

class BlockListContainer extends Component {
  constructor() {
    super();
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    this.reloadBlocks();
  }

  reloadBlocks = () => {
    this.setState({
      blocks: []
    });
    getLeadBlockId().then(headBlockId => {
      this.getNBlocks(10, headBlockId);
    });
  };

  getNBlocks = (n, blockId) => {
    return getBlockInfo(blockId).then(block => {
      const nextBlockId = block["previous"];
      this.setState({ blocks: [...this.state.blocks, block] });
      if (n > 1) {
        this.getNBlocks(n - 1, nextBlockId);
      }
    });
  };

  render() {
    return (
      <BlockList blocks={this.state.blocks} reload={this.reloadBlocks.bind()} />
    );
  }
}

export default BlockListContainer;
