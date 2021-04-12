import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends Component {

  state = { language: 'english' };

  onLangChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
        <i className='flag us' onClick={() => this.onLangChange('english')} />
          <i className='flag nl' onClick={() => this.onLangChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;