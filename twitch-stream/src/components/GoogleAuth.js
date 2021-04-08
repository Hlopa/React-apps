import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';
import {KEY} from '../key';

class GoogleAuth extends Component {

  componentDidMount(){
    window.gapi.load('client:auth2', ()=> {
      window.gapi.client.init({
        clientId: KEY,
        scope: 'email'
      }).then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn()
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    } else if (this.props.isSignedIn === true){
      return (
        <button className='ui red google button' onClick={this.onSignOut}>
          <i className='google icon'/>
          Sign Out
        </button>
        )
    } else {
      return (
        <button className='ui red google button' onClick={this.onSignIn}>
          <i className='google icon'/>
          Sign In
        </button>
      )
    }
  };

  render(){
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);