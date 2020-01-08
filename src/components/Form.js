/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, StyleSheet } from 'react-native';

//böylede çekebilirdik aynı değişken isimleri direk eşleşir çünkü
// const { width, height } = Dimensions.get("window");

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;




class Form extends Component {

    secimButonuOlustur(butonText) {
        return (
            <View style={styles.buton}>
                <View style={styles.butonIcerikView}>
                    <Text style={styles.butonIcerikViewText}>{butonText}</Text>
                    <Image source={require("../img/ok.png")} />
                </View>
            </View>
        );
    }

    resimSecimButonuOlustur(butonText) {
        return (
            <View>
            <View style={styles.resimSecimButonu}>
                <Image style={{alignItems: 'center',}} source={require("../img/add.png")} />

            </View>
             <Text style={styles.resimSecimButonuText}>{butonText}</Text>
             </View>    
        );
    }



    render() {
        return (
            // bu kod aşağıdaki ile aynı width ve height değişken isimlerinde aynı kullanım olduğundan eşlemeye gerek yok  
            //    <ImageBackground style={{width: width, height :  height}} source={require('../img/bg.png')}></ImageBackground>
            <ImageBackground style={{ width: cihazWidth, height: cihazHeight, alignItems: "center", justifyContent: "center" }} source={require('../img/bg.png')}>
                <Image source={require("../img/logo.png")} />
                {this.secimButonuOlustur("konumunuz")}
                {this.secimButonuOlustur("sevdiceğinizin konumu")}

                <View style={styles.resimSecimAnaView}>
                    {this.resimSecimButonuOlustur("kendi resimin ekle")}
                    {this.resimSecimButonuOlustur("sevdiceğinin resimini ekle")}
                </View>
            </ImageBackground>

            //    <View>
            //         <Text>merhaba burası form aaaa</Text>
            //    </View>

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
        width: cihazWidth * 0.24 ,
        height: cihazWidth * 0.24 ,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
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
       textAlign:'center',
       color:'white',
       width:cihazWidth * 0.24,
    },

});

export default Form;