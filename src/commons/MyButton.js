/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

//böylede çekebilirdik aynı değişken isimleri direk eşleşir çünkü
// const { width, height } = Dimensions.get("window");

const cihazWidth = Dimensions.get("window").width;
const cihazHeight = Dimensions.get("window").height;

class MyButton extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    viewStyle: { justifyContent: 'center', alignContent: 'center', backgroundColor: 'orange', borderRadius: 10, width: (cihazWidth * 0.54), height: (cihazHeight * 0.07), marginTop: 10 }
    , textStyle: { textAlign:'center', color: 'white' }
});

export default MyButton;