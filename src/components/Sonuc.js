import React, { Component, } from 'react'
import { ImageBackground, Dimensions, StyleSheet ,TouchableOpacity,View,Image} from 'react-native';
import Draggable from 'react-native-draggable';

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;



class Sonuc extends Component {

    onayla() {
        console.log('onaylaya basıldı...');
        // captureScreen({
        //     format: "jpg",
        //     quality: 0.8,
        // }).then(
        //     uri => {
        //         console.log("uriiii:", uri);
        //         Actions.Sonuc({ 
        //             data: { 
        //             imageUri: uri, 
        //             kendi:this.props.data.fotolar.kendi,
        //             sevdicek:this.props.data.fotolar.sevdicek
        //                    } });
        //     }
        //     ,
        //     error => console.error("Oops, snapshot failed", error)
        // );
    }

    render() {
        return (
            <View style={styles.contanier}>
            <ImageBackground style={styles.imageStyle}
                source={{ uri: this.props.data.imageUri }}>
                <Draggable
                    imageSource={require('../img/textRoad.png')}
                    renderSize={180}
                    x={cihazHeight / 2}
                    y={cihazWidth / 2}
                ></Draggable>
            </ImageBackground>
            <TouchableOpacity style={styles.onaylaButon} onPress={() => this.onayla()}>

            <Image source={require("../img/check.png")} />
        </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({

    imageStyle: { width: cihazWidth, height: cihazHeight, alignItems: "center", justifyContent: "center" },
    onaylaButon: { marginTop: cihazHeight - (50 * 2), marginLeft: cihazWidth - (50 * 1.5), width: 50, height: 50, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center' },
    contanier: {
    ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
    flex: 1,
    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
},
});

export default Sonuc;