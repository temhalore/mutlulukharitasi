/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

//böylede çekebilirdik aynı değişken isimleri direk eşleşir çünkü
// const { width, height } = Dimensions.get("window");

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;

//{StyleSheet.flatten([styles.viewStyle,this.props.addStyle])} bu kısım butonu oluştuduğumuz
// yerde istersek gönderdiğimiz sitillerle şuanda var olan sitilleriezmemizi sağlayacak örneğin 
//butonu mavi renk istersek bacraudr u mavi gönderirsek turuncu ezilecek

class MyButton extends Component {
    render() {
        return (
            // /onpress metodunu aslında dışarıdan props ile alacağız fonksiyon göndereceğiz buraya bu buttonu kullanığımız herhangi bir yerden
            <TouchableOpacity style={StyleSheet.flatten([styles.viewStyle,this.props.addStyle])} onPress={this.props.onPress}>
                <Text style={styles.textStyle }>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    viewStyle: { justifyContent: 'center', alignContent: 'center', backgroundColor: 'orange', borderRadius: 10, width: (cihazWidth * 0.54), height: (cihazHeight * 0.07), marginTop: 10 }
    , textStyle: { textAlign:'center', color: 'white' }
});

export default MyButton;