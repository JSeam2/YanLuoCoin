const CappedToken = artifacts.require("./CappedToken.sol");
const Crowdsale = artifacts.require("./Crowdsale.sol");

module.exports = (deployer, network, accounts) => {
  let deployAddress = accounts[0];
  deployer.deploy(CappedToken, 100000000000000000000000000, {from: deployAddress}).then((inst) => {
    return deployer.deploy(Crowdsale, 10, deployAddress, inst.address);
  });
}