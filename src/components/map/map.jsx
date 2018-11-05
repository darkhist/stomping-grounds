import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyD5va3sU8CKXSh2CJ5LiPMKTLhiGWplguI',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '500px', margin: '2em' }} />,
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
