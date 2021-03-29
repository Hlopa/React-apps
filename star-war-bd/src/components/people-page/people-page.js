import React, { Component } from 'react';
import ItemList from '../item-list'
import ItemDetails from '../item-details';
import SwapiService from '../../servise/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: 5   
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
         <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
        <Row left={itemList} right={personDetails}/>
    )
  }
}