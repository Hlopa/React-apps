import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../servise/swapi-service';
import Row from '../row';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import { SwapiServiceProvider } from '../swapi-service-contects';
import ErrorBoundry from '../error-boundry';


import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  swapiService = new SwapiService();

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
        <div className='stardb-app'>
          <Header />
          {planet}
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
        </button>

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>
            {({ name }) => <span>{name}</span>}
          </PersonList>

          <PlanetList>
            {({ name }) => <span>{name}</span>}
          </PlanetList>

          <StarshipList>
            {({ name }) => <span>{name}</span>}
          </StarshipList>

        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
};

