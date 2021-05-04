require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off foot blanket razor situate unusual gown light army gauge'; 
let testAccounts = [
"0xac37d310c885e52fb19c473e640d3cdef963a2293ac5c023fa9f8f374ed4605b",
"0x44d1d541f8ef051df9de69714a863478625494db53e1c45db751388f29327a3b",
"0x989e2ba14bd2febb046fe5d0ef6b48829829548e1c08b0f93f2c17b401da2ec9",
"0xd46f7b88316b0653957a16cff6114387b663bd29cd3538d16cd6f97d02efd629",
"0x8c51a239d3bd8b2b9e60bbf8bac914788424731b855b00ed8937c9461f92ebd0",
"0xfef956d5155a3ecd04269faf717c71bfb277a40c53982eda43a770a1cf33b345",
"0x209d3fc8c8222c0080e6fc540b46bb3bf557ba1d19d89df3d28ad6e1ccc89bbf",
"0x80bd1cc4ca0441bc1f62fdf5b90b7285278d9470fc1afe1ea8ee889b8710838d",
"0xdbf96c5849fd5fd85b1e5f07c5088e134bff5cfa0c519c2bef0ca72b5a351de2",
"0x7b53c3ea108372c6598ecb7788d12b008a7ddcc98f258ff984d7d8ea37a3e541"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

