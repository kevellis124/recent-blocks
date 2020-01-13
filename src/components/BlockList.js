import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
function BlockList(props) {
        return (
            <div id="BlockList"><Button size={'lg'} onClick={props.reload}>Load</Button></div>
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