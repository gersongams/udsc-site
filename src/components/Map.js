import React from "react";

import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const Map = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }}/>,
        containerElement: <div style={{ height: `100%` }}/>,
        mapElement: <div style={{ height: `100%` }}/>
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat: -12.0166427, lng: -77.0497901 }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: -12.0166427, lng: -77.0497901 }}/>
        )}
    </GoogleMap>
));

export default Map;
