import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import './map.scss';

const Map = () => {
  const MapComponent = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={{ lat: 42.020141, lng: -93.650284 }}
      defaultZoom={17}
    />
  ));

  return (
    <div>
      <MapComponent
        loadingElement={<div className="loading" />}
        containerElement={<div className="container-elt" />}
        mapElement={<div className="map" />}
      />
    </div>
  );
};

export default Map;
