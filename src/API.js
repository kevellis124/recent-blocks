export const getTenMostRecentBlocks = () =>{
    return fetch({url: 'https://api.eosnewyork.io/v1/chain/get_info'});
};

