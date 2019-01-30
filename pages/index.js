
import _ from 'lodash'
import React, { Component } from 'react'
import Layout from '../components/Layout';


import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Checkbox,
  List,
  Menu,
  Segment,
  Card,
  Form,
  Button,
  Input
} from 'semantic-ui-react';

class App extends Component{
  state = {
    nome : "",    
    idade: 0,
    documento: 0
  };
  cadastrarCliente = async (event) => {
      event.preventDefault();
      console.log(this.state.nome);      
  };

  render(){ 
    return (
      <Layout>
        <Segment>
          <Container text>
            <Header as='h2'>Cadastro de Cliente</Header>
            <p>
              <Form onSubmit={this.cadastrarCliente}>
              <Form.Field>
                <label>Contribuição mínima</label>
                <Input nome="Nome" placeholder="Nome Completo" onChange={ ev => this.setState({ nome : ev.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Contribuição mínima</label>
                <Input nome="Idade" placeholder="Idade" />
              </Form.Field>
              <Form.Field>
                <label>Contribuição mínima</label>
                <Input nome="Documento" placeholder="CPF ou RG" />
              </Form.Field>
              <Button type='submit'>Cadastrar</Button>
            </Form>
            </p>            
          </Container>          
        </Segment>
      </Layout>
    )
  }
}

export default App;