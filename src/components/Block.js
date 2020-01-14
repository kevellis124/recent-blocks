import React from 'react';
import PropTypes from "prop-types";

function Block(props) {
        return (
            <div className={'block'}>
                <ul>Block id: {props.id}</ul>
                <ul>Block timestamp: {props.timestamp}</ul>
                <ul>Block action count: {props.actionCount}</ul>
            </div>
        );
}

Block.propTypes = {
    id: PropTypes.string,
    timestamp: PropTypes.string,
    actionCount: PropTypes.number
};

Block.defaultProps = {
    id: "default id",
    timestamp: "12:00:00",
    actionCount: 0
};

export default Block;