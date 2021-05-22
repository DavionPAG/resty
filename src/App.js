
import React from 'react';
import axios from 'axios'


//elements
import Header from './header/header'
import Form from './form/form'
import Footer from './footer/footer.js';
import ApiResults from './results/resutls.js'



class App extends React.Component {

  constructor(props) {
    super(props) 
      this.state = {
        reqHeaders: null,
        results: null,
      }
  }

  //Update state??
  stateHndlr = () => {

  }

  apiCall = async (options) => {

    const response = await axios({
      method: options.method ? options.mehod : "get",
      url: options.url,
      data: options.body && JSON.parse(options.body)
    });

    const results = response.data;
    const reqHeaders = response.headers;
    // const count = response.data.count;
    this.setState({results})
    this.setState({reqHeaders})
    console.log(this.state.results)
    
  }

  render() {
    return (
      <>
        <Header />
        <Form apiCall={this.apiCall}/>
        <ApiResults reqHeaders={this.state.reqHeaders} results={this.state.results}/>
        <Footer />
      </>
    )
  }
}

export default App;
