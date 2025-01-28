export const TOKENS = [
  {
    symbol: 'BUSD',
    address: '0x1Aa1F7815103c0700b98f24138581b88d4cf9769',
    defaultPrice: 1,
    coingeckoId: 'busd'
  },
  {
    symbol: 'WONE',
    address: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    defaultPrice: 0.02,
    coingeckoId: 'one'
  },
  {
    symbol: 'LINK',
    address: '0x218532a12a389a4a92fC0C5Fb22901D1c19198aA',
    defaultPrice: 18,
    coingeckoId: 'link'
  }
]

export const TOKENS_BY_SYMBOL = TOKENS.reduce((memo, token) => {
  memo[token.symbol] = token
  return memo
}, {})

export const TOKENS_BY_ADDRESS = TOKENS.reduce((memo, token) => {
  memo[token.address] = token
  return memo
}, {})