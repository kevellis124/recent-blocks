export const getBlockInfo = (blockId) =>{
    return fetch('https://api.eosnewyork.io/v1/chain/get_block',
        {
            method: 'POST',
            body: JSON.stringify({block_num_or_id: blockId}),
            headers: {'content-type' : 'application/json', 'accept': 'application/json'}
            }
            )
        .then(response => response.json());
};

export const getLeadBlockId = () =>{
    return fetch('https://api.eosnewyork.io/v1/chain/get_info', {method: 'GET'})
        .then(response => response.json())
        .then(json => json['head_block_id']);
};

export function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}