import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import Block from "./Block";
function BlockList(props) {
        return (
            <div id="BlockList">
                <Button size={'lg'} onClick={props.reload}>Load</Button>
                {props.blocks.map( block =>
                {
                    return <Block id={block.id} timestamp={block.timestamp} actionCount={block.transactions.size}/>
                }
                )}
            </div>
        );
}

BlockList.propTypes = {
    blocks: PropTypes.array,
    reload: PropTypes.func
};

BlockList.defaultProps = {
    blocks: [],
    reload: () => {}
};

export default BlockList;