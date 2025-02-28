/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ImageBackground, Dimensions, StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Draggable from 'react-native-draggable';
import Statik from '../sabitler/Statik';
import MyButton from '../commons/MyButton';

import { strings } from '../sabitler/Strings';



class Paylas extends Component {

    resmiPaylas(){
        console.log("resmi paylaş a basıldı");
    }
    uygulamayiPaylas(){
        console.log("uygulamayı paylaş a basıldı");
    }

    render() {
        console.log("rendere girdi");

        return (
            <View style={styles.contanier}>
                <Image style={styles.logoView} source={require("../img/logo.png")} />
                <View style={styles.contanier} >
                    <View style={styles.paylasView}>
                    <MyButton addStyle ={styles.buttonView} onPress={() => this.resmiPaylas()} text={strings.resmiPaylas}></MyButton>
                    <MyButton addStyle ={styles.buttonView} onPress={() => this.uygulamayiPaylas()} text={strings.uygulamaPaylas}></MyButton>
                        {/* <View style={styles.buttonView}>

                        </View>
                        <View style={styles.buttonView}>
                            <Text>cihazHeight : {Statik.CIHAZ_HEIGTH} - cihazWidth:{Statik.CIHAZ_WIDHT} -- {Statik.TASARIM_HEIGTH} </Text>
                        </View> */}
                    </View>

                    {this.props.data === undefined ? 
                    <Image style={styles.resimView} source={require("../img/logo.png")} /> 
                    : 
                    <Image style={styles.resimView} source={{ uri: this.props.data.imageUri }}/>
                    }


                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    contanier: {
        //...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoView: {
        marginTop: 50,
        marginBottom: 20,
        //  ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
        // flex: 1,
        // backgroundColor:'blue',
        //   height: 200,
        //   width: 200,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    resimView: {
        // ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
        // flex: 1,
        backgroundColor: 'blue',
        height: 200,
        width: 150,
        marginBottom: 280,
        marginTop: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,


        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    paylasView: {
        // ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
        // flex: 1,
        backgroundColor: 'white',
        height: 300,
        width: 250,
        marginBottom: 10,
        marginTop: 300,
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 2,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    //aslında 200 girecektik neden 0.59 çünkü tasarımda bunu tasarım sayfasının büyüklüğü  widih olarak 375 idi bu komponenti denerken 200 değerini beğenmiştik bu 200 ü kabul derek bu genişlik hepsinde uygulansın istiyorsak 200*100/375 = 53,33 ortlama 54 bunuda yüzdesel karşılı 0.54 olur
    //width: (cihazWidth * 0.54),
    //aslında 30 güzeldi neden 0,05çünkü gelen tasarımın cihaz boyutları yüksekliği 667 idi bunu oranlarsak ve 30 yükskliğinide beğendiğimizi düşünürsek 30*100/677 =4,4977 ortalama 0.05 dersek yeterli olur sürekli tüm cihazlar için uygular  
    // height: (cihazHeight * 0.05),


    buttonView: {
        // ...StyleSheet.absoluteFillObject, //bu sabit bir style dır full scrren yapar ve bunun üzerine nesne gelmeini sağlar.
        // flex: 1,
        backgroundColor: 'orange',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        //  borderColor:'orange',
        //  borderWidth:2,
        //  position: 'absolute',

        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },

});
export default Paylas;