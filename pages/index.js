// create a basic view with menu items
// and a button to add a new item

import React, { Component } from 'react';
import { Button, Container, Header, Icon, Input, List, Menu, Segment } from 'semantic-ui-react';
import { Link } from '../routes';

export default class Whitelist extends Component {
  state = {
    address: '',
    errorMessage: '',
    loading: false,
    addresses: []
  };

  // this function is called when the user clicks the button
  // to add a new item
  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      // get the contract instance
      const contract = await this.props.contract;

      // get the address of the current account
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      // call the addItem function on the contract
      await contract.addAddress(this.state.address, { from: account });

      // get the list of items
      const addresses = await contract.getAddresses();

      // update the state
      this.setState({ addresses });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, address: '' });
  };

  render() {
    return (
      <Container>
        <Menu>
          <Link route="/">
            <a className="item">Home</a>
          </Link>
          <Link route="/whitelist">
            <a className="item">Whitelist</a>
          </Link>
          <Link route="/whitelist/new">
            <a className="item">Add Address</a>
          </Link>
        </Menu>

        <Header as="h3">Whitelist</Header>

        <List>
          {this.state.addresses.map((address) => {
            return <List.Item key={address}>{address}</List.Item>;
          })}
        </List>

        <Segment>
          <Header as="h4">Add Address</Header>

          <form onSubmit={this.onSubmit}>
            <Input
              value={this.state.address}
              onChange={(event) => this.setState({ address: event.target.value })}
              label="Address"
              labelPosition="left"
            />
            <Button primary loading={this.state.loading}>
              Add
            </Button>
          </form>
        </Segment>

        <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
      </Container>
    );
  }
}

// Test?