import React from 'react';

import Footer from './footer/footer.js';

class Header extends React.Component {
  render() {
    return (
      <h1>RESTy</h1>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      request: {}
    }
  }

handleInput = e => {
  let input = e.target.name;
  let words = e.target.value;

  let request = { ...this.state.request, [input]: words}
  this.setState({request})
}

handleSubmit = e => {
  e.preventDefault();
  
}

  render() {
    return (
      <>
        <Header />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for='url'>
              <span> URL: </span>
              <input onChange={this.handleInput} type="text" name="url" />
            </label>
            
            <button>Submit</button>
            <br />
            
            <label> 
            <input onChange={this.handleInput} name='method' type='radio' method='get' />
            <span>Get</span>
            </label>

            <label> 
            <input onChange={this.handleInput} name='method' type='radio' method='post' />
            <span>Post</span>
            </label>

            <label> 
            <input onChange={this.handleInput} name='method' type='radio' method='put' />
            <span>Put</span>
            </label>

            <label> 
            <input onChange={this.handleInput} name='method' type='radio' method='delete' />
            <span>Delete</span>
            </label>
            
          </form>
        </div>
        <div>{this.state.request}</div>

        <Footer />
      </>
    )
  }
}

export default App;
