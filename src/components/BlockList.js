import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Block from "./Block";
function BlockList(props) {
  return (
    <div id="BlockList">
      <Button size={"lg"} onClick={props.reload}>
        Load
      </Button>
      {props.blocks.map(block => {
        return (
          <Block
            key={block.id}
            id={block.id}
            timestamp={block.timestamp}
            actionCount={block.transactions.length}
          />
        );
      })}
    </div>
  );
}

BlockList.propTypes = {
  blocks: PropTypes.array,
  reload: PropTypes.func
};

BlockList.defaultProps = {
  blocks: []
};

export default BlockList;
