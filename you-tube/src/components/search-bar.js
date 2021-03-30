import React, { Component } from 'react';

export default class SearchBar extends Component {

  state = {
    term: ''
  }

  inputHandler = (e) => {
    this.setState({ term: e.target.value })
  }

  formHandler = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' })
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.formHandler}>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              onChange={this.inputHandler}
              value={this.state.term}/>
          </div>
        </form>
      </div>
    )
  }
}