import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import { drizzleConnect } from 'drizzle-react';
import { BuyToken, ContractData, ContractForm, LoadingContainer } from './drizzle-react-components';


class App extends Component {
  render() {
    const { drizzleStatus, accounts } = this.props;

    if(drizzleStatus.initialized){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Yan Luo Coin</h1>
          </header>

          <div className="Instructions">
            <h1>READ THIS FIRST</h1>
            <p>
              7th Month is here. Let's burn hell money on the blockchain. Please don't take this seriously.
            </p>
            <p>
              You will need <a href="https://metamask.io/">metamask</a> to access smart contract functions.
            </p>
            <p>
              The smart contract is deployed on rinkeby testnet. <b>DO NOT USE REAL ETHERS YOU WILL LOSE THEM</b>
            </p>
            <p>
              You can get fake test ethers <a href="https://faucet.rinkeby.io/">here</a>. Please don't waste real money.
            </p>
          </div>
          <br />
          <br />
          <hr />
          <div className="SmartContract">
            <h1>SMART CONTRACT FUNCTIONS</h1>
            <p>
              <strong>Total Supply</strong>:{" "}
              <ContractData
                contract="CappedToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{" "}
              <ContractData
                contract="CappedToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
            <strong>My Balance</strong>:{" "}
            <ContractData
              contract="CappedToken"
              method="balanceOf"
              methodArgs={[accounts[0]]}
            />{" "}
            <ContractData
              contract="CappedToken"
              method="symbol"
              hideIndicator
            />
            </p>
            <p>
            <strong>Amount Burned</strong>:{" "}
            <ContractData
              contract="CappedToken"
              method="valueBurned"
              methodArgs={[accounts[0]]}
            />{" "}
            <ContractData
              contract="CappedToken"
              method="symbol"
              hideIndicator
            />
            </p>
            
            <strong>Buy Tokens</strong>:{" "}
            <BuyToken
              contract="Crowdsale"
              method="buyTokens"
              labels={"Beneficiary Address"}
            />

            <strong>Burn Tokens</strong>:{" "}
            <ContractForm
              contract="CappedToken"
              method="burn"
              labels={["Amount of YLC"]}
            />
          </div>

          <br />
          <br />
          <br />
          <hr />
          <footer className="App-footer">
            <p>
              ERC20 Token address: <a href="https://rinkeby.etherscan.io/address/0xbb827571dd48c6586481258294d74bdc1f935669">0xbb827571dd48c6586481258294d74bdc1f935669</a>
            </p>
            <p>
              Crowdsale Token address: <a href="https://rinkeby.etherscan.io/address/0xbc1541ff9d113784dc67330cecb135b56048af36">0xbc1541ff9d113784dc67330cecb135b56048af36</a>
            </p>
            <p>
              Github Source: <a href="https://github.com/jseam2/yanluocoin">https://github.com/jseam2/yanluocoin</a>
            </p>
          </footer>

        </div>
      );

    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Yan Luo Coin</h1>
          </header>

          <div className="Instructions">
            <h1>READ THIS FIRST</h1>
            <p>
              7th Month is here. Let's burn hell money on the blockchain. Please don't take this seriously.
            </p>
            <p>
              You will need <a href="https://metamask.io/">metamask</a> to access smart contract functions.
            </p>
            <p>
              The smart contract is deployed on rinkeby testnet. <b>DO NOT USE REAL ETHERS YOU WILL LOSE THEM</b>
            </p>
            <p>
              You can get fake test ethers <a href="https://faucet.rinkeby.io/">here</a>
            </p>
          </div>
          <br />
          <br />
          <hr />
          <div className="SmartContract">
            <LoadingContainer/>
          </div>

          <br />
          <br />
          <br />
          <hr />
          <footer className="App-footer">
            <p>
              ERC20 Token address: <a href="https://rinkeby.etherscan.io/address/0xbb827571dd48c6586481258294d74bdc1f935669">0xbb827571dd48c6586481258294d74bdc1f935669</a>
            </p>
            <p>
              Crowdsale Token address: <a href="https://rinkeby.etherscan.io/address/0xbc1541ff9d113784dc67330cecb135b56048af36">0xbc1541ff9d113784dc67330cecb135b56048af36</a>
            </p>
            <p>
              Github Source: <a href="https://github.com/jseam2/yanluocoin">https://github.com/jseam2/yanluocoin</a>
            </p>
          </footer>

        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    CappedToken: state.contracts.CappedToken,
    Crowdsale: state.contracts.Crowdsale
  };
};

export default drizzleConnect(App, mapStateToProps);
