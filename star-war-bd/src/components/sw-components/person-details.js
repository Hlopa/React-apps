import React from 'react';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const PersonDetails = ({ itemId, getData, getImageUrl }) => {

  return (
    <ItemDetails 
      itemId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}>

      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  )
};


const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);