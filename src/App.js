import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/containers/BurgerBuilder/BurgerBuilder.js'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder/>
        </Layout>

      </div>
    );
  }
}

export default App;
