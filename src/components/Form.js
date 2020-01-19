/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MyButton from '../commons/MyButton';

import { strings } from '../sabitler/Strings';

import RNGooglePlaces from 'react-native-google-places';
import { Actions } from 'react-native-router-flux';
//böylede çekebilirdik aynı değişken isimleri direk eşleşir çünkü
// const { width, height } = Dimensions.get("window");

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;


class Form extends Component {

    state = {
        konumunuzButton: { text: strings.konumunuz, check: false, longitude: 0, latitude: 0,placeObje:{} },
        sevdiceginKonumuButton: { text: strings.sevdiceginKonumu, check: false, longitude: 0, latitude: 0,placeObje:{} },
        seninFotografin: { text: strings.seninFotografin, check: false, fotoPath: "" },
        sevdiceginFotografi: { text: strings.sevdiceginFotografi, check: false, fotoPath: "" },
    }

    openAdresSecimModal(secilenButonName) {
        console.log(secilenButonName);
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                console.log(place);
                console.log("secilenButonName===strings.konumunuz = " + strings.konumunuz);
                if (secilenButonName === strings.konumunuz) {
                    this.setState({ konumunuzButton: { text: place.name, check: true, longitude: place.location.longitude, latitude: place.location.latitude,placeObje:place } });

                }
                if (secilenButonName === strings.sevdiceginKonumu) {
                    this.setState({ sevdiceginKonumuButton: { text: place.name, check: true, longitude: place.location.longitude, latitude: place.location.latitude,placeObje:place } });
                }
                console.log(this.state.konumunuzButton, this.state.sevdiceginKonumuButton);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    openResimSecimModal(secilenButonName) {

        // More info on all the options is below in the API Reference... just some common use cases shown here
        const options = {
            title: 'Select Avatar başlık',
            //bu artıdan bir button çıkarmak istiyorsak kullanılır
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            //budeğerler resmin küçültülerek almasını sağlar
            maxHeight: 500,
            maxWidth: 500,
            quality: 0.5,

        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                //const source ={ uri: 'data:image/jpeg;base64,' + response.data };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                if (secilenButonName === strings.seninFotografin) {
                    console.log("secilenButonName===strings.seninFotografin a girdii");
                    this.setState({ seninFotografin: {text: strings.sevdiceginFotografi, check: true, fotoPath: source } });


                }
                if (secilenButonName === strings.sevdiceginFotografi) {
                    this.setState({ sevdiceginFotografi: { check: true, fotoPath: source } });
                }
                console.log(source);
                console.log(response);

                // this.setState({
                //     avatarSource: source,
                // });
            }
        });




    }

    secimButonuOlustur(buttonModel) {

        return (
            <TouchableOpacity onPress={() => this.openAdresSecimModal(buttonModel.text)}>
                <View style={styles.buton}>
                    <View style={styles.butonIcerikView}>
                        <Text style={styles.butonIcerikViewText}>{buttonModel.text}</Text>
                        {buttonModel.check ? <Image source={require("../img/check.png")} /> : <Image source={require("../img/ok.png")} />}

                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    resimSecimButonuOlustur(buttonModel) {
        return (
            <TouchableOpacity onPress={() => this.openResimSecimModal(buttonModel.text)}>
                {buttonModel.check ? 
                <Image style={styles.resimStyle} source={buttonModel.fotoPath} /> :

                    <View style={styles.resimSecimButonu}>
                         <Image style={{ alignItems: 'center', }} source={require("../img/add.png")} />

                    </View>
                }
                <Text style={styles.resimSecimButonuText}>{buttonModel.text}</Text>
            </TouchableOpacity>
        );
    }


    rotaOlustur(){

if (this.state.konumunuzButton.placeObje===undefined) {
    
}

        Actions.Map({data:{konumunuz:this.state.konumunuzButton,sevdiceginKonumu:this.state.sevdiceginKonumuButton}});
    }

    render() {
        return (
            // bu kod aşağıdaki ile aynı width ve height değişken isimlerinde aynı kullanım olduğundan eşlemeye gerek yok  
            //    <ImageBackground style={{width: width, height :  height}} source={require('../img/bg.png')}></ImageBackground>
            <ImageBackground style={{ width: cihazWidth, height: cihazHeight, alignItems: "center", justifyContent: "center" }} source={require('../img/bg.png')}>
                <Image source={require("../img/logo.png")} />
                {this.secimButonuOlustur(this.state.konumunuzButton)}
                {this.secimButonuOlustur(this.state.sevdiceginKonumuButton)}

                <View style={styles.resimSecimAnaView}>
                    {this.resimSecimButonuOlustur(this.state.seninFotografin)}
                    {this.resimSecimButonuOlustur(this.state.sevdiceginFotografi)}
                </View>
                {/* Actions.Map bu rooting yapısının bir metodududr propsarı buradandanda gonderebiliriz. buradki Map aslında root taki isimir.Key olarak alır */}
                <MyButton onPress={()=> this.rotaOlustur()} text={strings.tarifButton}></MyButton>

            </ImageBackground>

        );
    }
}


const styles = StyleSheet.create({
    buton: {
        marginTop: 10,
        borderRadius: 10,
        //aslında 200 girecektik neden 0.59 çünkü tasarımda bunu tasarım sayfasının büyüklüğü  widih olarak 375 idi bu komponenti denerken 200 değerini beğenmiştik bu 200 ü kabul derek bu genişlik hepsinde uygulansın istiyorsak 200*100/375 = 53,33 ortlama 54 bunuda yüzdesel karşılı 0.54 olur
        width: (cihazWidth * 0.54),
        //aslında 30 güzeldi neden 0,05çünkü gelen tasarımın cihaz boyutları yüksekliği 667 idi bunu oranlarsak ve 30 yükskliğinide beğendiğimizi düşünürsek 30*100/677 =4,4977 ortalama 0.05 dersek yeterli olur sürekli tüm cihazlar için uygular  
        height: (cihazHeight * 0.05),
        backgroundColor: 'white',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    butonIcerikView: {
        // bu stilin altındaki komponentleri aynı row da yan yana getiriri normalde her yeni komponent alt alta ekleni        flexDirection: 'row',
        alignItems: 'center',
        //komponentteki herşeyi boşluğa yayar
        justifyContent: 'space-between',
        //flex 1 bir önceki komponenteki tüm boşluğu kapla demektir 0.5 yarısını kapla emek olur
        flex: 1,
        flexDirection: 'row',
        //  backgroundColor:'blue',
    },
    butonIcerikViewText: {
        textAlign: 'center',
        flex: 1,
        // backgroundColor:'red',
    },

    resimSecimButonu: {
        borderRadius: cihazWidth * 0.24 / 2,
        width: cihazWidth * 0.24,
        height: cihazWidth * 0.24,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resimSecimAnaView: {
        //(cihazWidth * 0.54) bu üstteki butonun genişliği yuvarlak butonların bulundupu ana view in genişliğinide aynı yapalım ki orantılı olsun
        width: (cihazWidth * 0.54),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        //  backgroundColor:'blue',
    },
    resimSecimButonuText: {
        textAlign: 'center',
        color: 'white',
        width: cihazWidth * 0.24,
        marginTop: 10,
    },
    resimStyle: {
        borderRadius: cihazWidth * 0.24 / 2,
        width: cihazWidth * 0.24,
        height: cihazWidth * 0.24,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Form;