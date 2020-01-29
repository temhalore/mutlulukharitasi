/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import { captureScreen } from "react-native-view-shot";
import { Actions } from 'react-native-router-flux';

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;


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

    onayla() {
        console.log('onaylaya basıldı...');
        captureScreen({
            format: "jpg",
            quality: 0.8,
        }).then(
            uri => {
                console.log("uriiii:", uri);
                Actions.Sonuc({ 
                    data: { 
                    imageUri: uri, 
                    kendi:this.props.data.fotolar.kendi,
                    sevdicek:this.props.data.fotolar.sevdicek
                           } });
            }
            ,
            error => console.error("Oops, snapshot failed", error)
        );
    }

    render() {
        return (
            <View style={styles.mapView}>
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
                        <Image source={this.props.data.fotolar.kendi} style={styles.marker} />
                    </MapView.Marker>

                    <MapView.Marker coordinate={this.state.destination} >
                        <Image source={this.props.data.fotolar.sevdicek} style={styles.marker} />
                    </MapView.Marker>

                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={this.state.GOOGLE_MAPS_APIKEY}
                        // mode="DRIVING"
                        precision="high"
                        strokeWidth={6}
                        strokeColor="hotpink"
                    //  optimizeWaypoints={true}
                    //  waypoints={this.state.waypoints}
                    />

                </MapView>
                {/* //()=>this.onayla() bu şeki yerine direk this.onayla() yazarsak sürekli çağırıyor tıklanmadığı halde bile çaırıyort */}
                <TouchableOpacity style={styles.onaylaButon} onPress={() => this.onayla()}>

                    <Image source={require("../img/check.png")} />
                </TouchableOpacity>
            </View>


        )
    }
}


const styles = StyleSheet.create({

    mapView: {
        ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
        flex: 1,
        // height: 400,
        // width: 400,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.

    },
    marker: { marginBottom: 10, borderRadius: 50, height: 35, width: 35 },
    onaylaButon: { marginTop: cihazHeight - (50 * 2), marginLeft: cihazWidth - (50 * 1.5), width: 50, height: 50, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }
});

export default Map;
