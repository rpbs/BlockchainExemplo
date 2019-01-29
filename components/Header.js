import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px', backgroundColor: '#e1e1ea' }}>
      <Menu.Menu position="left">
        <a className="item">Listagem</a>
        <a className="item">Cadastro</a>
        <a className="item">Sobre</a>
      </Menu.Menu>
    </Menu>
  )
};