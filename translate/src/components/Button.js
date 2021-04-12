import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

//With Consumer - multiple context

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggent';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}


//With this.context  - single context

// class Button extends Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggent';
//     return (
//       <button className='ui primary button'>{text}</button>
//     )
//   }
// }

export default Button;