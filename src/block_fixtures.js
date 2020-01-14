export const leadBlockFixture = {
  server_version: "e19afc80",
  chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
  head_block_num: 12345678,
  last_irreversible_block_num: 100086670,
  last_irreversible_block_id:
    "05f7338e178edc8a761ff89410129910775f42a1ca10dc32124add28d00d18c5",
  head_block_id:
    "05f734c89ca3edc1ec529bc699e4028c6ba5dd2ed91a673fc97606e9db6e593a",
  head_block_time: "2020-01-13T21:58:16.000",
  head_block_producer: "eosasia11111",
  virtual_block_cpu_limit: 200000,
  virtual_block_net_limit: 1048576000,
  block_cpu_limit: 199900,
  block_net_limit: 1048576,
  server_version_string: "v2.0.0",
  fork_db_head_block_num: 100086984,
  fork_db_head_block_id:
    "05f734c89ca3edc1ec529bc699e4028c6ba5dd2ed91a673fc97606e9db6e593a",
  server_full_version_string: "v2.0.0-e19afc8072219282a7c3fc20e47aa80cb70299e4"
};

export const blockInfoFixture = {
  timestamp: "2020-01-14T19:28:36.500",
  producer: "eosnationftw",
  confirmed: 0,
  previous: "05f9753ac6418165df98cb382110f8517a6ecdf4cc2891640bab01f25377dfe4",
  transaction_mroot:
    "3812572300b2a1a659f51fee1d90f8f94dbbbaa8ab4065ed39959bee73434ea2",
  action_mroot:
    "6dc14e3b71f8e0a1e8888768e549498ac78ad1f19071f44d6331d401a8b14111",
  schedule_version: 1601,
  new_producers: null,
  producer_signature:
    "SIG_K1_JvBynTmyvZq5MtRY8JMLyyXphk39th96gp9RpuCuSrcGY1TJysmLF65YHBvbT9j931JVKWvMzhQ2aPVij6HveeCFGoww2r",
  transactions: [
    {
      status: "executed",
      cpu_usage_us: 1760,
      net_usage_words: 53,
      trx: {
        id: "9ccdbece9ff035ab5e0bd08a0bbc99766fc4d5b8b8e138badba12be4e8be25b3",
        signatures: [
          "SIG_K1_K6NJxrHTcJEBg9L7NNHXLUsu5sCbYRiqnEhzUngS9CQ39x92rM9HXpVxFVKDhpx3ncq7XZet8K7u4WJiXNtaMWz1v9p8eZ"
        ],
        compression: "none",
        packed_context_free_data: "",
        context_free_data: [],
        packed_trx:
          "9a161e5e2f75be94cb050000000003805c3cba7695b89a10159a06e5a9a2c3019015bc46b249a1e600000000a8ed3232199701000000000000b92a1607000000009015bc46b249a1e6017055cb2a5fd5b2ca000000572d3ccdcd019015bc46b249a1e600000000a8ed3232759015bc46b249a1e6805c3cba7695b89a002d3101000000000455534454000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d75736474222c227072696365223a22332e373331222c226368616e6e656c223a22415049227d00a6823403ea3055000000572d3ccdcd019015bc46b249a1e600000000a8ed3232769015bc46b249a1e6805c3cba7695b89a00093d000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d75736474222c227072696365223a22332e373532222c226368616e6e656c223a22415049227d00",
        transaction: {
          expiration: "2020-01-14T19:29:30",
          ref_block_num: 29999,
          ref_block_prefix: 97227966,
          max_net_usage_words: 0,
          max_cpu_usage_ms: 0,
          delay_sec: 0,
          context_free_actions: [],
          actions: [
            {
              account: "newdexpublic",
              name: "silentcancel",
              authorization: [{ actor: "wukongmarket", permission: "active" }],
              data: {
                pair_id: 407,
                order_id: 118893241,
                owner: "wukongmarket",
                direction: 1
              },
              hex_data: "9701000000000000b92a1607000000009015bc46b249a1e601"
            },
            {
              account: "tethertether",
              name: "transfer",
              authorization: [{ actor: "wukongmarket", permission: "active" }],
              data: {
                from: "wukongmarket",
                to: "newdexpublic",
                quantity: "2000.0000 USDT",
                memo:
                  '{"type":"buy-limit","symbol":"eosio.token-eos-usdt","price":"3.731","channel":"API"}'
              },
              hex_data:
                "9015bc46b249a1e6805c3cba7695b89a002d3101000000000455534454000000547b2274797065223a226275792d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d75736474222c227072696365223a22332e373331222c226368616e6e656c223a22415049227d"
            },
            {
              account: "eosio.token",
              name: "transfer",
              authorization: [{ actor: "wukongmarket", permission: "active" }],
              data: {
                from: "wukongmarket",
                to: "newdexpublic",
                quantity: "400.0000 EOS",
                memo:
                  '{"type":"sell-limit","symbol":"eosio.token-eos-usdt","price":"3.752","channel":"API"}'
              },
              hex_data:
                "9015bc46b249a1e6805c3cba7695b89a00093d000000000004454f5300000000557b2274797065223a2273656c6c2d6c696d6974222c2273796d626f6c223a22656f73696f2e746f6b656e2d656f732d75736474222c227072696365223a22332e373532222c226368616e6e656c223a22415049227d"
            }
          ]
        }
      }
    },
    {
      status: "executed",
      cpu_usage_us: 11700,
      net_usage_words: 12,
      trx: {
        id: "df4041fb3c39715b6a204b6c8be427ebfeb41ab7b4f871d59ff62beb738354a4",
        signatures: [
          "SIG_K1_KkyFj2Z8dLCYBCLv2LFSp5Lt3NyFGa3i5YxqtQTeSZ4PtvR9jztKVhzEB6ZhgetUg7m8iyB8qV6LZApdqdYGj55uKPWsRm"
        ],
        compression: "none",
        packed_context_free_data: "",
        context_free_data: [],
        packed_trx:
          "1b171e5e63742eafaed80000000001c0a88fca546773ad000000000000009001402a929316831d5c0000000000a0a693010000",
        transaction: {
          expiration: "2020-01-14T19:31:39",
          ref_block_num: 29795,
          ref_block_prefix: 3635326766,
          max_net_usage_words: 0,
          max_cpu_usage_ms: 0,
          delay_sec: 0,
          context_free_actions: [],
          actions: [
            {
              account: "pptqipaelyog",
              name: "m",
              authorization: [{ actor: "fkisa5onmcp4", permission: "mine" }],
              data: { actor: "" },
              hex_data: "00"
            }
          ]
        }
      }
    },
    {
      status: "executed",
      cpu_usage_us: 328,
      net_usage_words: 0,
      trx: "2e84ba8092f7b657b3a79e47fc4412e91612dca33a66effdc1fac0cd4566d9ed"
    }
  ],
  id: "05f9753b36fa37e3852c3ea4f959c50d8c2912b0fea9e19eaf9469bd6ac55cd8",
  block_num: 100234555,
  ref_block_prefix: 2755538053
};
