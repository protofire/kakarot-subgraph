# Kakarot Sepolia Subgraph

This is a demo test version of a subgraph for tracking `Transfer` events in the Kakarot contract on the Sepolia network. The subgraph indexes account data and tracks the number of transactions for each account.

## How to deploy it using Kakarot Hosted Service

You can also deploy this subgraph in the Kakarot Hosted Service

### Download the repo 

```
git clone https://github.com/protofire/kakarot-subgraph
cd kakarot-subgraph
```

## Build the subgraph

**Note: npm and yarn are required.**

```
yarn install
graph codegen 
graph build
```

## Get credentials

You'll need some credentials to get access to the Kakarot hosted service. You have to complete this form

https://forms.gle/PkTw4F8NEowhB9yC7

## Deploy the subgraph

Once you get the user and password, you can deploy the subgraph

```
graph create --node https://user:password@index.kakarot.protofire.io kakarot/UniswapV2

graph deploy kakarot/UniswapV2 --version-label kakarot/UniswapV2 --headers "{\"Authorization\": \"Basic user:password encoded\"}" --ipfs https://ipfs.kakarot.protofire.io --node https://user:password@index.kakarot.protofire.io
```

For more information about subgraphs, you can visit The Graph documention 

https://thegraph.com/docs/en/developing/creating-a-subgraph/
