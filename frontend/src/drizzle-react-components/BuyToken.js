import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
 * Create component.
 */

class BuyToken extends Component {
  constructor(props, context) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.contracts = context.drizzle.contracts;

    // Get the contract ABI
    const abi = this.contracts[this.props.contract].abi;



    this.inputs = [];
    var initialState = {};

    // Iterate over abi for correct function.
    for (var i = 0; i < abi.length; i++) {
        if (abi[i].name === "bid") {
            this.inputs = abi[i].inputs;
            for (var i = 0; i < this.inputs.length; i++) {
                initialState[this.inputs[i].name] = '';
            }

            break;
        }
    }

    initialState['redirect'] = false;
    initialState['msgValue'] = '';
    initialState['beneficiary'] = '';

    this.state = initialState;
    console.log(this.state)

  }

  handleSubmit() {
    console.log(this.state);
    this.contracts[this.props.contract].methods["buyTokens"].cacheSend(this.state["beneficiary"],
    {
      from: this.props.account,
      value: this.state["msgValue"] * 1000000000000000000
    }) 
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  translateType(type) {
    switch(true) {
        case /^uint/.test(type):
            return 'number'
            break
        case /^string/.test(type) || /^bytes/.test(type):
            return 'text'
            break
        case /^bool/.test(type):
            return 'checkbox'
            break
        default:
            return 'text'
    }
  }

  render() {
    return (
        <div>
          <div>
            <form>
              <input key="beneficiary"
                name="beneficiary"
                value={this.props.beneficiary}
                placeholder="Beneficiary Address"
                onChange={this.handleInputChange}
              />

              <input key="msgValue"
                className="Auction-input"
                type="number"
                name="msgValue"
                value={this.state["msgValue"]}
                placeholder="ETH"
                onChange={this.handleInputChange}
              />

              <button id="Bid-button" key="submit" className="pure-button" type="button" onClick={this.handleSubmit}>
                Buy
              </button>

            </form>
          </div>
        </div>      
    );
    
  }
}

BuyToken.contextTypes = {
  drizzle: PropTypes.object
}

/*
 * Export connected component.
 */

const mapStateToProps = state => {
  return {
    contracts: state.contracts
  }
}

export default drizzleConnect(BuyToken, mapStateToProps)
