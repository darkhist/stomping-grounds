import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap
    defaultCenter={{ lat: 42.020141, lng: -93.650284 }}
    defaultZoom={18}
  />
));

export default Map;
