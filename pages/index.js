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
  Button
} from 'semantic-ui-react';

class App extends Component{
  render(){ 
    return (
      <Layout>
        <Segment>
          <Container text>
            <Header as='h2'>Cadastro de Cliente</Header>
            <p>
            <Form>
                <Form.Field>
                  <label>Nome</label>
                  <input placeholder='Nome completo' />
                </Form.Field>
                <Form.Field>
                  <label>Idade</label>
                  <input placeholder='Idade' />
                </Form.Field>
                <Form.Field>
                <label>Documento</label>
                  <input placeholder='CPF ou RG' />
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