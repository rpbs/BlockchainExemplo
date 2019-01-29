import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { Container } from 'semantic-ui-react';

const style = {
  
}

export default (props) => {
  return (
    <Container className>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};