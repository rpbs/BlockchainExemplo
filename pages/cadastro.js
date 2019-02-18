import React, { Component } from 'react';
import Layout from '../components/Layout';
import {
  Container,
  Header,
  Segment,
  Form,
  Button,
  Input
} from 'semantic-ui-react';

export default class Sobre extends Component {
  state = {
    nome : "",    
    idade: 0,
    documento: 0
  };
  cadastrarCliente = async (event) => {
      event.preventDefault();
      const { nome, idade, documento } = this.state;
      console.log(nome);
      console.log(idade);
      console.log(documento);
      
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
                <label>Nome</label>
                <Input nome="Nome" placeholder="Nome Completo" onChange={ ev => this.setState({ nome : ev.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Idade</label>
                <Input nome="Idade" placeholder="Idade" onChange={ ev => this.setState({ idade : ev.target.value })} />
              </Form.Field>
              <Form.Field>
                <label>Documento</label>
                <Input nome="Documento" placeholder="CPF ou RG" onChange={ ev => this.setState({ documento : ev.target.value })} />
              </Form.Field>
              <Button type='submit'>Cadastrar</Button>
            </Form>
            </p>            
          </Container>          
        </Segment>
      </Layout>
    )
  };
}