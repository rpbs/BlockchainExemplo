import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes';
import Input from './Input';

export default () => {
  return (
    <Menu style={{ marginTop: '10px', backgroundColor: '#e1e1ea' }}>
      <Menu.Menu position="left">
        <Link route="/">
          <a className="item">Listagem</a>
        </Link>
        <Link route="/emprestimo">
          <a className="item">Empréstimo</a>
        </Link>
        <Link route="/sobre">
            <a className="item">Sobre</a>
        </Link>
      </Menu.Menu>
    </Menu>
  )
};