import React, { Component } from 'react';
// import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import SecretMessage from './SecretMessage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Products /> */}
        <JumboTronComponent>
        <SecretMessage/>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
        </JumboTronComponent>
      </div>
    );
  }
}

export default App;
