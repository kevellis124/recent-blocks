import React, {Component} from 'react';
import PropTypes from 'prop-types';

function BlockList(props) {
        return (
            <div id="BlockList"/>
        );
}

BlockList.propTypes = {
  blocks: PropTypes.array
};

BlockList.defaultProps = {
    blocks: []
};

export default BlockList;