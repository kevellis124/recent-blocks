import React, {Component} from 'react';
import BlockList from "../components/BlockList";
import {getTenMostRecentBlocks} from '../API'

class BlockListContainer extends Component {
    constructor() {
        super();
        this.state = {
            blocks: []
        }
    }

    componentDidMount() {
        this.reloadBlocks();
    }

    reloadBlocks = () => {
        const rawBlocks = getTenMostRecentBlocks();
        this.setState({
            blocks: this.mapRawToUsefulBlocks(rawBlocks)
        });
    };

    mapRawToUsefulBlocks = (rawBlocks) => {
        return rawBlocks;
    };


    render() {
        return (
            <BlockList blocks={this.state.blocks} reload={this.reloadBlocks}/>
        );
    }

}

export default BlockListContainer;