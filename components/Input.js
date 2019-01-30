import React, { Component } from 'react';
import { Form }  from 'semantic-ui-react';

export default (props) => {
  return (
        <Form.Field>
          <label>{props.nome}</label>
          <input placeholder={props.placeholder} />
        </Form.Field>
  );
}