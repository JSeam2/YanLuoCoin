 var HDWalletProvider = require("truffle-hdwallet-provider");
 var secrets = require("./secrets");
 var rinkebyProvider = new HDWalletProvider(secrets.mnemonic, secrets.infuraURL);

module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      solc: {
        optimizer: {
          enabled: true,
          runs: 200
        }    
      }
    },

    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4
    }
  }
};
