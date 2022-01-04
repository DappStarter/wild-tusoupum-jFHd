require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot elder rifle saddle puppy install hat army gate'; 
let testAccounts = [
"0x92cb951028dce36d024f4e1efa45dafd243d8633160672a54e6504467897f661",
"0x20f3e4066a31abac22a177046c459e26a73460419a54ef346882c0c62cfc4c71",
"0xe5545fe5f29d202d2d00364197407de94e1e09e33893874da98740c1f8f9e4a4",
"0x1783486ff2689ec85531315b31026449ab8c4274e343b531c9acd6a3cc948625",
"0x28db8798965e17ba866edab4d400b943a4e6eeb0eb665f0309fc962b17345e6f",
"0x0205ea1e4d3784dd8a06778ffa6e4e309bdc2f00bab0fa0c498c38bb7611c8ce",
"0x403617d30e2c06d4771fb6464ae56e1e2f56fa46a6e5fa315f9978ecf052fbe6",
"0x45c262c06e08a18b6f0077a313470867b908f299733d8e6873517c5a5aefdd87",
"0x10506df9b98acfae7f82ca685c93bd2b7b8e1e22fcd31c62cfaf17eb858033e7",
"0x6ec7d2c750ab5c77aa90e40373bc7e3cede295ccf467954a2deb5a15f0b0faa0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


