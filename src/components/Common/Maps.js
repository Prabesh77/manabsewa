import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

let key = "AIzaSyCfPPgEfX2CTqH-q-g5K9T9rb4Q67YaRx0";
export class Maps extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={4} style={{ height: "300px" }}>
        <Marker onClick={this.onMarkerClick} name="Kathmandu" />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Kathmandu </h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key
})(Maps);
