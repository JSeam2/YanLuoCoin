# Yan Luo Coin
These coins intended to be use as hell money for 7th month. Yan Luo/Yama is the ruler of hell in Chinese mythology. So apparently, Chinese hell has some form of economy with their own hell notes. During the 7th month superstitious Chinese people burn hell notes as offerings to ghosts. Spooky af. So why not implement this as a smart contract to give the currency some software architecture.The coins are ERC20 tokens deployed on Ethereum. OpenZeppelin libraries are used and modified for the project. Refer to OpenZeppelin license [here](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/LICENSE)

# Deployment Address
YanLuoCoin is deployed on rinkeby testnet at [0xbb827571dd48c6586481258294d74bdc1f935669](https://rinkeby.etherscan.io/address/0xbb827571dd48c6586481258294d74bdc1f935669)

Crowdsale address is deployed on rinkeby testnet at [0xbc1541ff9d113784dc67330cecb135b56048af36](https://rinkeby.etherscan.io/address/0xbc1541ff9d113784dc67330cecb135b56048af36)

# Usage
1. Buy tokens from the crowdsale contract. 
2. Burn the tokens to send it to hell.
3. The crowdsale contract tokens will be replenished periodically. 
4. Avoid spamming so as to not congest the network.

# Deploy
1. To deploy, deploy CappedToken.sol contract and input the capped token amount this is the total token amount + 18 zeros behind because we are using 18 decimal places. eg 100 tokens = 100 00000 00000 00000 000
2. To prepare the crowdsale, deploy the Crowdsale.sol contract. Take note of the crowdsale contract address, mint and send tokens to the address.
