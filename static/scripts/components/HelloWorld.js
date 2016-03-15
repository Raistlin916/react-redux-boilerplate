import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
      	<p>{this.props.visibility ? 'hello world' : ''}</p>
      	<button onClick={this.props.toggleHelloWorld}>toggle</button>
      </div>
    );
  }
}
