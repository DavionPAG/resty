import React from 'react';

import Header from './header/header'
import Form from './form/form'
import Footer from './footer/footer.js';



class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App;
