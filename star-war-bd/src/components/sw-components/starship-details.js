import React from 'react';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const StarshipDetails = ({ itemId, getData, getImageUrl }) => {

  return (
    <ItemDetails
      itemId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}>
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='costInCredits' label='Cost' />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);