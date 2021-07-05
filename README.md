# bsc-private-node-example
A simple private Binance Smart Chain setup example

This example is based on local network configuration described [here](https://docs.binance.org/smart-chain/developer/deploy/local.html)

It contains example precompile-contract [Precompiles.sol](./precompiled_call_lib/contracts/Precompiles.sol)


To generate wallet key to be used in truffle-config.js, please use the [key.js](./precompiled_call_lib/key.js) file


Truffle is required to deploy the contract. You may also need to install the following:

`npm install keythereum`

Inside the precompile-contract directory:

`npm install @truffle/hdwallet-provider`

To deploy the contract to local bsc node: (needs the local binance chain to be already running and mining)

`truffle migrate --network testnet`

To test the contract

`truffle test --network testnet`


