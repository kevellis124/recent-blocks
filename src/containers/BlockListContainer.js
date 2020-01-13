import React, {Component} from 'react';
import BlockList from "../components/BlockList";

class BlockListContainer extends Component {
    constructor() {
        super();
        this.state = {
            blocks: []
        }
    }

    render() {
        return (
            <BlockList blocks={this.state.blocks}/>
        );
    }

}

export default BlockListContainer;