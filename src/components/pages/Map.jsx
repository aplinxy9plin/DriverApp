import React from 'react'
import {GoogleApiWrapper, Map} from 'google-maps-react';

export class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            userLocation: { lat: 32, lng: 32 }, 
            loading: true 
        };
    }
    componentDidMount(props) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
    
            this.setState({
              userLocation: { lat: latitude, lng: longitude },
              loading: false
            });
          },
          () => {
            this.setState({ loading: false });
          }
        );
      }
    render(){
        const { loading, userLocation } = this.state;
        const { google } = this.props;

        if (loading) {
          return null;
        }
        return(
            <Map google={google} initialCenter={userLocation} zoom={10} />
        )
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAhqcrzL8k34oT4F0Rd3XjN-F-qzVP1Qco')
})(MapContainer)