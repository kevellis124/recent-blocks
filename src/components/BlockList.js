import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Block from "./Block";
function BlockList(props) {
  let blockCount = 0;
  return (
    <div id="BlockList">
      <Button size={"lg"} onClick={props.reload}>
        Load
      </Button>
      {props.blocks.map(block => {
        let actionCount = 0;
        block.transactions.map(t => {
          if (
            t.trx != null &&
            t.trx.transaction != null &&
            t.trx.transaction.actions != null
          ) {
            actionCount += t.trx.transaction.actions.length;
          }
        });
        blockCount++;
        return (
          <Block
            key={blockCount}
            id={block.id}
            timestamp={block.timestamp}
            actionCount={actionCount}
            rawBlock={block}
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
