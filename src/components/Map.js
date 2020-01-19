/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, StyleSheet,Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';



class Map extends Component {

    state = {
        origin: { latitude: 37.3318456, longitude: -122.0296002 },
        destination: { latitude: 37.771707, longitude: -122.4053769 },
        GOOGLE_MAPS_APIKEY: 'AIzaSyAid4V4EWmJ4u9csAII6aHz_AfkY-rhJFg',
        waypoints: [],
    }

    componentDidMount() {
        console.log("map yüklendi");
        console.log(this.props.data);
        console.log("önceki hali");
        console.log(this.state);
        this.setState(
            {
                origin: { latitude: this.props.data.konumunuz.latitude, longitude: this.props.data.konumunuz.longitude },
                destination: { latitude: this.props.data.sevdiceginKonumu.latitude, longitude: this.props.data.sevdiceginKonumu.longitude },
                waypoints: [
                    {
                        location: { latitude: this.props.data.konumunuz.latitude, longitude: this.props.data.konumunuz.longitude }
                    },
                    {
                        location: { latitude: this.props.data.sevdiceginKonumu.latitude, longitude: this.props.data.sevdiceginKonumu.longitude }
                    }
                ]
            }
        );
        console.log("sonraki hali");
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: this.state.origin.latitude,
                        longitude: this.state.origin.longitude,
                        // latitudeDelta gibi delta değerleri zoom in zoom aut tanımı içindir
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                >
                    <MapView.Marker coordinate={this.state.origin} >
                    <Image source={this.props.data.fotolar.kendi}  style={{height: 35, width:35 }} />
                        </MapView.Marker>

                    <MapView.Marker coordinate={this.state.destination} >
                    <Image source={this.props.data.fotolar.sevdicek}  style={{height: 35, width:35 }} />
                    </MapView.Marker>

                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={this.state.GOOGLE_MAPS_APIKEY}
                       // mode="DRIVING"
                        precision="high"
                        strokeWidth={3}
                        strokeColor="hotpink"
                      //  optimizeWaypoints={true}
                      //  waypoints={this.state.waypoints}
                    />
                </MapView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map;
