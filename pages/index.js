
import _ from 'lodash'
import React, { Component } from 'react'
import Layout from '../components/Layout';
import Web3 from 'web3';
import Cliente from "../entities/Cliente";

import { Container, Divider, Grid, Header, Menu, Message, Segment, Table } from 'semantic-ui-react'

const web3 = Web3;
const address = "0xbd8cd2f9609765521632baad6fd44668a358411e";
const endContrato = ""

class App extends Component{

 state = {
    nome : "",    
    idade: 0,
    documento: 0
  };

  async renderizarLinhas(){
    let contrato = Cliente(address);
    let manager = contrato.methods.manager().call();
    console.log(contrato);
    return (
          <Table.Body>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
          )
  }
 
  render(){ 
    return (
      <Layout>
        <Table attached='bottom'>
          <Table.Header>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Idade</Table.HeaderCell>
            <Table.HeaderCell>Documento</Table.HeaderCell>
            {this.renderizarLinhas()}            
            </Table.Header>
        </Table>
      </Layout>
  
    )
  }
}

export default App;