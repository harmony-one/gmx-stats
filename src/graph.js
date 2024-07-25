import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { ARBITRUM, AVALANCHE, HARMONY } from './addresses'

const apolloOptions = {
  query: {
    fetchPolicy: 'no-cache'
  },
  watchQuery: {
    fetchPolicy: 'no-cache'
  }
}

const SATSUMA_KEY = process.env.SATSUMA_KEY || ""; // "default" key

function getSubgraphUrl(name) {
  return `https://api.studio.thegraph.com/query/${SATSUMA_KEY}/${name}/version/latest`
}

const harmonyStatsClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-h-stats"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const arbitrumStatsClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-arbitrum-stats"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const avalancheStatsClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-avalanche-stats"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})
  
function getStatsClient(chainId) {
  if (chainId === HARMONY) {
    return harmonyStatsClient
  } else if (chainId === ARBITRUM) {
    return arbitrumStatsClient
  } else if (chainId === AVALANCHE) {
    return avalancheStatsClient
  }
  throw new Error(`Invalid chainId ${chainId}`)
}

const harmonyPricesClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-h-prices"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const arbitrumPricesClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-arbitrum-prices"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

const avalanchePricesClient = new ApolloClient({
  link: new HttpLink({ uri: getSubgraphUrl("gmx-avalanche-prices"), fetch }),
  cache: new InMemoryCache(),
  defaultOptions: apolloOptions
})

function getPricesClient(chainId) {
  if (chainId === HARMONY) {
    return harmonyPricesClient
  } else if (chainId === ARBITRUM) {
    return arbitrumPricesClient
  } else if (chainId === AVALANCHE) {
    return avalanchePricesClient
  } else {
    throw new Error(`Invalid chainId ${chainId}`)
  }
}

module.exports = {
  getPricesClient,
  getStatsClient
}
