import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld';
import { actions } from '../actions';

const mapStateToProps = state => {
	return {visibility: state.visibility};
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHelloWorld: () => {
      dispatch(actions.toggleHelloWorld())
    }
  }
}


@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  render() {
    return (
      <HelloWorld {...this.props} />
    );
  }
}

