import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    fetch('/api/hello')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ text: body.data });
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          Hello
        </div>
        <div>
          {this.state.text}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
