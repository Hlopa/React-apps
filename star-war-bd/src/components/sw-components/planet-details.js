import React from 'react';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = ({ itemId, getData, getImageUrl}) => {
  return (
      <ItemDetails
      itemId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}>
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation' />
      <Record field='diameter' label='diameter' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps) ;